'use strict';

var ctx = hexo;
var tag = ctx.extend.tag;

tag.register('ut_img', require('./ut_img')(ctx), true);
tag.register('ut_aside', require('./ut_aside')(ctx), true);
