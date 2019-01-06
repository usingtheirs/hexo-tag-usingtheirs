'use strict';

const ctx = hexo;
const tag = ctx.extend.tag;

tag.register('ut_img', require('./ut_img')(ctx));
tag.register('ut_aside', require('./ut_aside')(ctx), true);
tag.register('ut_gfycat', require('./ut_gfycat')(ctx));
const ut_figure = require('./ut_figure');
tag.register('ut_figure_open', ut_figure.open(ctx));
tag.register('ut_figure_close', ut_figure.close(ctx));
tag.register('ut_comment', require('./ut_comment')(ctx), true);
