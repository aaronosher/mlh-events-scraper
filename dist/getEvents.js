'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function proccessRequest(options) {
    return (0, _requestPromise2.default)(options).then(function ($) {
        return new Promise(function (resolve, reject) {
            try {
                var events = [];
                $('.event-wrapper').each(function (i, elem) {
                    var event = {};
                    event.name = $(elem).find('h3[itemprop=name]').text();
                    event.url = $(elem).find('a.event-link').attr('href');
                    event.start = $(elem).find('meta[itemprop=startDate]').attr('content');
                    event.end = $(elem).find('meta[itemprop=endDate]').attr('content');
                    event.city = $(elem).find('span[itemprop=addressLocality]').text();
                    event.region = $(elem).find('span[itemprop=addressRegion]').text();
                    event.logo = $(elem).find('div.event-logo').find('img').attr('src');
                    events.push(event);
                });
                return resolve(events);
            } catch (e) {
                return reject(e);
            }
        });
    }).catch(function (err) {
        console.error(err);
    });
}

exports.default = proccessRequest;