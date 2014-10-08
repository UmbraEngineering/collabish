
var ModalView = require('views/modal/modal');

// 
// Opens a new terms modal
// 
exports.open = ModalView.template({
	classname: 'terms',
	template: 'views/welcome/nav/modals/terms/terms.hbs'
});
