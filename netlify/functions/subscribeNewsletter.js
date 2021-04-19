const axios = require('axios')

exports.handler = async function(event, context) {
  return axios
    .post(
      'https://api.sendinblue.com/v3/contacts',
      { email: event.queryStringParameters.email, listIds: [10] },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key':
            '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',
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
                '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',
            },
          }
        )
      }
      return res
    })
    .catch((error) => {
      return error
    })
}
