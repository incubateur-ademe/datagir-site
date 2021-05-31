var SibApiV3Sdk = require('sib-api-v3-sdk')

var defaultClient = SibApiV3Sdk.ApiClient.instance

var apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.SENDINBLUE_API_KEY

exports.handler = function(event) {
  var api = new SibApiV3Sdk.ContactsApi()

  var createContact = new SibApiV3Sdk.CreateContact()

  createContact = {
    email: event.queryStringParameters.email,
    listIds: [10],
  }

  return api.createContact(createContact).then((data) => ({
    statusCode: 200,
    body: JSON.stringify(data),
  }))
}
