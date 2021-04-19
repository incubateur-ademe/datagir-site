const axios = require('axios')

exports.handler = async function(event, context) {
  let headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('api-key', process.env.SENDINBLUE_API_KEY)
  return axios.post(
    'https://api.sendinblue.com/v3/contacts',
    { email, listIds: [10] },
    { headers }
  )
}
