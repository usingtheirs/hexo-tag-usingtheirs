/**
 * alert tag
 *
 * Syntax:
 *   {% ut_aside title%}
 *   Alet content
 *   {% endut_aside %}
 */

module.exports = function(ctx) {
	return function ut_aside_tag(args, content) {
		content = ctx.render.renderSync({text: content, engine: 'markdown'});
    return '<aside class="ut_aside"><h3>args[0]</h3><div class="collapsed">' + content +'</div></aside>';
	};
};
