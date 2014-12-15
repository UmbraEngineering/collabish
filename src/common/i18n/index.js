
var store         = require('store');
var cloak         = require('cloak');
var format        = require('stringformat');
var objectSearch  = require('object-search');

var LANG_KEY = 'lang';
var currentLanguage = null;
var defaults = {
	'en': 'en-us'
};

exports.setLanguage = function(lang) {
	exports.lang = lang;
	currentLanguage = exports.loadLanguage(lang);
	store.set(LANG_KEY, lang);
};

exports.loadLanguage = function(lang) {
	try {
		lang = require('./' + lang);
	} catch (err) {
		lang = false;
	}
	return lang;
};

exports.translate = function(label, args) {
	var text = objectSearch.get(currentLanguage, label);

	if (! text) {
		cloak.log('Could not translate label "' + label + '"');
		return label;
	}

	return format(text, args);
};

// --------------------------------------------------------
//  Determine what language to use

var lang;
var nav = window.navigator;

// First, check if a language is set in local storage (as this is where we
// store user preferences and data)
lang = store.get(LANG_KEY);
if (lang) {
	cloak.log('Selected language "' + lang + '" from local storage setting');
}

// If a language was not found, check the browser's settings
if (! lang && nav.language && exports.loadLanguage(nav.language)) {
	lang = nav.language;
	cloak.log('Selected language "' + lang + '" from browser settings');
}
if (! lang && nav.languages) {
	for (var i = 0, c = nav.languages.length; i < c; i++) {
		if (exports.loadLanguage(nav.languages[i])) {
			lang = nav.languages[i];
			cloak.log('Selected language "' + lang + '" from browser settings');
			break;
		}
		if (defaults[nav.languages[i]]) {
			lang = defaults[nav.languages[i]];
			cloak.log('Selected language "' + lang + '" from browser settings as default for "' + nav.languages[i] + '"');
			break;
		}
	}
}

// Default to english
if (! lang) {
	lang = 'en-us';
	cloak.log('Could not determine prefered language; defaulting to "en-us"');
}

// Set the language
exports.setLanguage(lang);
