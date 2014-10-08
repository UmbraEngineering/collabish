
window.jQuery = require('jquery');

require('./foundation');
require('./foundation.tooltip');

delete window.jQuery;
window.jQuery = void(0);
