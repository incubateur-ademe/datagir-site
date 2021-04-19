const axios = require('axios')

exports.handler = async function(event, context) {
  return axios
    .post(
      'https://api.sendinblue.com/v3/contacts',
      { email: event.queryStringParameters.email, listIds: [10] },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.SENDINBLUE_API_KEY,
        },
      }
    )
    .then((res) => {
      if (res.id) {
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
              'api-key': process.env.SENDINBLUE_API_KEY,
            },
          }
        )
      }
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
}
