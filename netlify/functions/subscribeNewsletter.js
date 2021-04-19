var SibApiV3Sdk = require('sib-api-v3-sdk')
var defaultClient = SibApiV3Sdk.ApiClient.instance

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.SENDINBLUE_API_KEY

var apiInstance = new SibApiV3Sdk.ContactsApi()

var createContact = new SibApiV3Sdk.CreateContact() // CreateContact | Values to create a contact

exports.handler = async function(event, context, callback) {
  createContact = {
    email: event.queryStringParameters.email,
    listIds: [10],
  }

  apiInstance.createContact(createContact).then(
    function(data) {
      console.log('API called successfully. Returned data: ' + data)
    },
    function(error) {
      console.error(error)
    }
  )
}
