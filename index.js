'use strict';

var ctx = hexo;
var tag = ctx.extend.tag;

tag.register('ut_img', require('./ut_img')(ctx));
tag.register('ut_aside', require('./ut_aside')(ctx), true);
tag.register('ut_gfycat', require('./ut_gfycat')(ctx));
tag.register('ut_figure', require('./ut_figure')(ctx), true);
