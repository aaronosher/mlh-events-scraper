'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sources = require('./sources');

var _sources2 = _interopRequireDefault(_sources);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _getEvents = require('./getEvents');

var _getEvents2 = _interopRequireDefault(_getEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets events. valid locales are na and eu
 * @param {string} locale 
 */
function getEvents(locale) {
    return new Promise(function (resolve, reject) {

        if (!_sources2.default[locale]) {
            return rject('Invalid Locale');
        }

        var options = {
            uri: _sources2.default[locale],
            transform: function transform(body) {
                return _cheerio2.default.load(body);
            }
        };

        var events = (0, _getEvents2.default)(options);
        return resolve(events);
    });
}

exports.default = getEvents;