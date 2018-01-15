import sources from './sources'
import cheerio from 'cheerio'
import proccessRequest from './getEvents'

/**
 * Gets events. valid locales are na and eu
 * @param {string} locale 
 */
function getEvents(locale) {
    return new Promise((resolve, reject) => {

        if(!sources[locale]) {
            return rject('Invalid Locale')
        }

        let options = {
            uri: sources[locale],
            transform: (body) => {
                return cheerio.load(body)
            }
        }

        let events = proccessRequest(options)
        return resolve(events)
    })
}

export default getEvents
