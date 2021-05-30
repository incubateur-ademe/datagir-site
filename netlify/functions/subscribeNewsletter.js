const axios = require('axios')

exports.handler = async function(event) {
  return axios.post(
    'https://api.sendinblue.com/v3/contacts',
    { email: event.queryStringParameters.email, listIds: [10] },
    {
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.SENDINBLUE_API_KEY,
      },
    }
  )
}
