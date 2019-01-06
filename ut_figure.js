'use strict';

/**
* Figure Tag
*
* Syntax:
*   {% ut_figure_open %}
*   {% ut_figure_close [caption] %}
*/
module.exports.open = ctx => {
  return function ut_figureOpenTag(args, content) {
    return '<figure>'
  }
};

module.exports.close = ctx => {
  return function ut_figureCloseTag(args, content) {
    const caption = args.join(' ');
    return `<figcaption>${caption}</figcaption></figure>`;
  }
};
