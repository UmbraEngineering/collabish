
var ModalView = require('views/modal/modal');

// 
// Opens a new privacy modal
// 
exports.open = ModalView.template({
	classname: 'privacy',
	template: 'views/welcome/nav/modals/privacy/privacy.hbs'
});
