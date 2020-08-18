const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['authConfig'] = require('../middleware/authConfig.js')
middleware['authConfig'] = middleware['authConfig'].default || middleware['authConfig']

export default middleware
