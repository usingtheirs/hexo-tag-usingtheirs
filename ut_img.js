'use strict';

const url = require('url');
const { htmlTag } = require('hexo-util');

const rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\w]*))?)/;
const rMeta = /["']?([^"']+)?["']?\s*["']?([^"']+)?["']?/;

/**
* Image tag
*
* Syntax:
*   {% ut_img [class names] /path/to/image [width] [height] [title & alt text] %}
*/
module.exports = ctx => {
  const { config } = ctx;
  const PostAsset = ctx.model('PostAsset');

  function makeUrl(path) {
    if (path[0] === '#' || path.startsWith('//')) {
      return path;
    }

    const data = url.parse(path);

    if (data && data.protocol) {
      return path;
    }

    path = config.root + path;

    return path.replace(/\/{2,}/g, '/');
  }

  return function ut_imgTag(args, content) {
    const len = args.length;

    // Find image URL
    let found = false;
    for (let i = 0; i < len; i++) {
      const asset = PostAsset.findOne({post: this._id, slug: args[i]});
      if (asset) {
        args[i] = url.resolve('/', asset.path);
        found = true;
        break;
      }
    }
    
    if (!found)
      return;
    
    const classes = [];
    let src;

    // Find image URL and class name
    while (args.length > 0) {
      const item = args.shift();
      if (rUrl.test(item) || item[0] === '/') {
        src = makeUrl(item);
        break;
      } else {
        classes.push(item);
      }
    }

    let width, height, title, alt;

    // Find image width and height
    if (args && args.length) {
      if (!/\D+/.test(args[0])) {
        width = args.shift();

        if (args.length && !/\D+/.test(args[0])) {
          height = args.shift();
        }
      }

      const match = rMeta.exec(args.join(' '));

      // Find image title and alt
      if (match != null) {
        title = match[1];
        alt = match[2];
        
        if (! alt)
          alt = title;
      }
    }
    
    const attrs = {
      src,
      class: classes.join(' '),
      width,
      height,
      title,
      alt
    };

    let img = htmlTag('img', attrs);
    return `<figure>${img}<figcaption>${alt}</figcaption></figure>`;
  };
};
