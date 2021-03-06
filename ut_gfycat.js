'use strict';

/**
* Gfycat Tag
*
* Syntax:
*   {% ut_gfycat [width] [height] [video name] %}
*/
module.exports = ctx => {
  return function ut_gfycatTag(args, content) {
    const len = args.length;

    let width, height, name;

    // Find image width and height
    if (args && args.length) {
      if (!/\D+/.test(args[0])) {
        width = args.shift();

        if (args.length && !/\D+/.test(args[0])) {
          height = args.shift();
        }
      }
      
      name = args.join(' ');
    }
    
    return `<div class="ut_gfycat" style="width: ${width}px; height: ${height}px;"><iframe src="https://gfycat.com/ifr/${name}"/></div>`;
  }
};
