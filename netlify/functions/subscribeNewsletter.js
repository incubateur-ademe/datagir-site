var SibApiV3Sdk = require('sib-api-v3-sdk')

var defaultClient = SibApiV3Sdk.ApiClient.instance

var apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.SENDINBLUE_API_KEY

exports.handler = function (event) {
  let listId = 10

  let api = new SibApiV3Sdk.ContactsApi()

  let createContact = new SibApiV3Sdk.CreateContact()
  createContact = {
    email: event.queryStringParameters.email,
    listIds: [listId],
  }

  return api.createContact(createContact).then(
    (data) => ({
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTION',
      },
      body: JSON.stringify(data),
    }),
    (data) => {
      if (data.response.text) {
        let contactEmails = new SibApiV3Sdk.AddContactToList()
        contactEmails.emails = [event.queryStringParameters.email]

        return api.addContactToList(listId, contactEmails).then(
          (data) => ({
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Content-Type',
              'Access-Control-Allow-Methods': 'GET, POST, OPTION',
            },
            body: JSON.stringify(data),
          }),
          (data) => ({
            statusCode: data.status,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Content-Type',
              'Access-Control-Allow-Methods': 'GET, POST, OPTION',
            },
            body: data.response.text,
          })
        )
      } else {
        return {
          statusCode: data.status,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, OPTION',
          },
          body: data.response.text,
        }
      }
    }
  )
}
