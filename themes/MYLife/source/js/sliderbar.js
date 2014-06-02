eval(function (p, a, c, k, e, d) {
	e = function (c) {
		return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
	};
	if (!''.replace(/^/, String)) {
		while (c--) d[e(c)] = k[c] || e(c);
		k = [
			function (e) {
				return d[e]
			}];
		e = function () {
			return '\\w+'
		};
		c = 1;
	};
	while (c--)
		if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
	return p;
}('1.0("<3 2=\\"l g\\">");1.0("		<3 2=\\"9 f e h k 4 j d\\">");1.0("			<a 2=\\"6\\">");1.0("				<i 2=\\"5 4\\"></i >");1.0("			7");1.0("		</a>");1.0("		<a 2=\\"6\\">");1.0("			<i 2=\\"5 4\\"></i >");1.0("			7");1.0("		</a>");1.0("		<a 2=\\"6\\">");1.0("			<i 2=\\"5 4\\"></i >");1.0("			7");1.0("		</a>");1.0("		<a 2=\\"6\\">");1.0("			<i 2=\\"5 4\\"></i >");1.0("			7");1.0("		</a>");1.0("	</3 >");1.0("	<3 2=\\"9 c b v u t w\\"  x=\\"y\\">");1.0("				<i 2=\\"4 o n\\"></i>");1.0("				<8 2=\\"m\\" p=\\"s:r;\\">q</8>");1.0("	</3>");1.0("	</3>");', 35, 35, 'writeln|document|class|div|icon|home|item|主页|span|ui||huge|black|menu|vertical|large|nav|inverted||sidebar|labeled|main|text|layout|list|style|导航|none|display|attached|right|launch|button|id|showSidBtn'.split('|'), 0, {}))
