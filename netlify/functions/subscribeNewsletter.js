const axios = require('axios')

exports.handler = async function(event, context) {
  axios
    .post('https://api.sendinblue.com/v3/contacts', { email, listIds: [10]}, {headers: {Content-Type: 'application/json'} })
    .then((response) => {
      console.log(response.data.url)
      console.log(response.data.explanation)
    })
    .catch((error) => {
      console.log(error)
    })
}

const axios = require('axios')

exports.handler = async function(event) {
  return axios
    .post(
      'https://api.sendinblue.com/v3/contacts',
      { email: event.queryStringParameters.email, listIds: [10] },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key':
            process.env.SENDINBLUE_API_KEY,
        },
      }
    )
    .then((res) => {
      if (res.data && res.data.id) {
        axios.post(
          'https://api.sendinblue.com/v3/smtp/email',
          {
            to: [
              {
                email: event.queryStringParameters.email,
              },
            ],
            templateId: 43,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'api-key':
                process.env.SENDINBLUE_API_KEY,
            },
          }
        )
      }
      return { code: 'success' }
    })
    .catch((error) => {
      return error.data
    })
}
