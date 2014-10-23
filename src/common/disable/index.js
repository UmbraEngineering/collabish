
var $ = require('jquery');

$.fn.disable = function(flag) {
	if (flag === void(0)) {
		flag = true;
	}

	flag =!! flag;

	this.each(function() {
		this.disabled = flag;
		if (this.tagName === 'A') {
			this.style.pointerEvents = (flag ? 'none' : 'auto');
			this.style.opacity = (flag ? 0.7 : 1);
		}
	});
};
