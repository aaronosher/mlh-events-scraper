# MLH Events Scraper

Retrievs events from selected region and returns a natvie promise with the events in an array.

```JS
import mlh from 'mlh-events-scraper'

mlh('eu')
  .then((events) => {
    // Proccess events data
  })
  .catch((err) => {
    // Deal with errors
  })
```
