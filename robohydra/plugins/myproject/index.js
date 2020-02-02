var heads = require('robohydra').heads
var RobohydraHeadStatic = heads.RoboHydraHeadStatic

var mockedResponse = require('./_mocked_response.json')

exports.getBodyParts = function (config) {
  return {
    scenarios: {
      '500_Internal_Server_Error': {
        heads: [
          new RobohydraHeadStatic({
            name: '500_exception',
            path: '/users',
            statusCode: 500,
            content: '(FAKE) Internal Server Error'
          })
        ]
      },
      '200_Full_response': {
        heads: [
          new RobohydraHeadStatic({
            name: '200_full_response',
            path: '/users',
            statusCode: 200,
            content: mockedResponse
          })
        ]
      }
    }
  }
}
