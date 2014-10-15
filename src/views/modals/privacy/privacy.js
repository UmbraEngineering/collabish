
var ModalView = require('views/modal/modal');

// 
// Opens a new privacy modal
// 
exports.open = ModalView.template({
	classname: 'privacy',
	template: 'views/modals/privacy/privacy.hbs'
});
