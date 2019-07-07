const request = require('request')

const forecast = (latitude, longitude, callback) => {

  const url = `https://api.darksky.net/forecast/a909e9632b9bce583a40c40f27499dc3/${latitude},${longitude}?lang=en&unit=auto`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(`Unable to connect to weather service`, undefined)
    } else if (body.error) {
      callback(`Unable to find location`, undefined)
    } else {
      callback(undefined,`${body.daily.data[0].summary} It's ${body.currently.temperature} degrees out. There is a chance of ${body.currently.precipProbability}% to rain`)
    }
  })
}

module.exports = forecast