'use strict';

/**
* Figure Tag
*
* Syntax:
*   {% ut_figure [caption] %}
*/
module.exports = ctx => {
  return function ut_figureTag(args, content) {
    const len = args.length;

    const caption = args.join(' '));
    content = ctx.render.renderSync({text: content, engine: 'markdown'});

    return `<figure>${content}<figcaption>${caption}</figcaption></figure>`;
  }
};
