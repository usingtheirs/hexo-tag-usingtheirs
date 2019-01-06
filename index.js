'use strict';

var ctx = hexo;
var tag = ctx.extend.tag;

tag.register('ut_img', require('./ut_img')(ctx));
tag.register('ut_aside', require('./ut_aside')(ctx), true);
tag.register('ut_gfycat', require('./ut_gfycat')(ctx));
tag.register('ut_figure_open', require('./ut_figure_open').open(ctx), true);
tag.register('ut_figure_close', require('./ut_figure_close').close(ctx), true);
tag.register('ut_comment', require('./ut_comment')(ctx), true);
