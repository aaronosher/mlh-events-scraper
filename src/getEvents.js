import rp from 'request-promise'

function proccessRequest(options) {
    return rp(options)
        .then(($) => {
            return new Promise((resolve, reject) => {
                try {
                    let events = [];
                    $('.event-wrapper').each((i, elem) => {
                        let event = {};
                        event.name = $(elem).find('h3[itemprop=name]').text()
                        event.url = $(elem).find('a.event-link').attr('href')
                        event.start = $(elem).find('meta[itemprop=startDate]').attr('content')
                        event.end = $(elem).find('meta[itemprop=endDate]').attr('content')
                        event.city = $(elem).find('span[itemprop=addressLocality]').text()
                        event.region = $(elem).find('span[itemprop=addressRegion]').text()
                        event.logo = $(elem).find('div.event-logo').find('img').attr('src')
                        events.push(event)
                    })
                    return resolve(events)
                } catch (e) {
                    return reject(e)
                }
            })
        })
        .catch((err) => {
            console.error(err)
        })
}

export default proccessRequest