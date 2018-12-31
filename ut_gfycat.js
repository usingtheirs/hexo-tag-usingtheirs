'use strict';

const rNameAndCaption = /["']?([^"']+)?["']?\s*["']?([^"']+)?["']?/;

/**
* Gfycat Tag
*
* Syntax:
*   {% ut_gfycat [width] [height] [video name] %}
*/
module.exports = ctx => {
  return function ut_gfycatTag(args, content) {
    const len = args.length;

    let width, height, name, caption;

    // Find image width and height
    if (args && args.length) {
      if (!/\D+/.test(args[0])) {
        width = args.shift();

        if (args.length && !/\D+/.test(args[0])) {
          height = args.shift();
        }
      }

      const match = rNameAndCaption.exec(args.join(' '));

      // Find video name
      if (match != null) {
        name = match[1];
        caption = match[2];
      }
    }
    
    return '<figure><div class="ut_gfycat" style="width:' + width + 'px; height:' + height + ';"><iframe src="https://gfycat.com/ifr/' + name + '"/></div><figcation>' + caption + '</figcaption></figure>';
};
