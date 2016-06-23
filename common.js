/*
    filename    common.js
    purpose     contain common function
*/

/**
 * showStatus
 *
 * show status of transaction.
 *
 * Status code consist of:
 *
 * | Code | Status |
 * | ---- | ------ |
 * | 1 | success |
 * | 2 | sent |
 * | 3 | corrupt |
 * | 4 | queueing |
 * | 5 | fail |
 * | 6 | created |
 * | 7 | forbidden |
 * | 9 | unknown error |
 *
 * @param   {integer}   code    Status code
 * @param   {string}    message Message shown to status
 *
 * @return  {object}    object  json object of status
 */

 function showStatus (code, message) {
  var status = {};
  switch (code) {
      case 1:
        status.code = code;
        status.status = 'success';
      break;

      case 2:
        status.code = code;
        status.status = 'sent';
      break;

      case 3:
        status.code = code;
        status.status = 'corrupt';
      break;

      case 4:
        status.code = code;
        status.status = 'queueing';
      break;

      case 5:
        status.code = code;
        status.status = 'fail';
      break;

      case 6:
        status.code = code;
        status.status = 'created';
      break;

      case 7:
        status.code = code;
        status.status = 'forbidden';
      break;

      default:
        status.code = 9;
        status.status = 'Unknown error';
  }
  status.message = message;

  // console.log(status);
  return status;
}

/**
 * Fungsi ini akan menguji object, apakah object tersebut kosong atau tidak.
 *
 * @param   {Object}  obj Tested Object
 * @returns {Boolean} boolean return value, true if empty, or false otherwise.
 */
function isEmptyObject(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}

/**
 * Find unique content of object
 *
 * @param   {Object} an Asserted object
 * @returns {Object} Unique result object
 */
function uniq(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}

/**
 * Change string to namespace
 * change path like this "/path/to/some/file.js" into path.to.some.file
 *
 * @param   {String} name      Separated string
 * @param   {String} separator Separator of string
 * @param   {Object} container Target object
 * @param   {Mixed}  val       Content of target object
 * @returns {Object} Nested object result
 */
function namespace (name, separator, container, val){
  var ns = name.split(separator || '.'),
      o = container || container, i, len;
  for(i = 0, len = ns.length; i < len; i++){
    var v = (i==len-1 && val) ? val : {};
        o = o[ns[i]] = o[ns[i]] || v;
  }
  return o;
}

/**
 * Function to check if input object is json or not
 * @param  {string} obj String object to check.
 * @return {Boolean}    Return True if input is json, or False otherwise.
 */
function isjson (obj) {
  try {
    JSON.parse(obj);
  } catch (e) {
    return false;
  }
  return true;
}

/**
* Show log to console depend on config level.
* @param  String   type Type of log, it can be info, error, or debug.
* @param  String   msg  Message that want to shown on console.
* @return String        String shown to console.
*/
function showLog (type, msg){
  var color = require('bash-color');
  require('date-format-lite');
  Date.masks.default = 'YYYY-MM-DD hh:mm:ss.SS Z';
  var d = new Date();

  Object.defineProperty(global, '__stack', {
    configurable: true,
    get: function(){
      var orig = Error.prepareStackTrace;
      Error.prepareStackTrace = function(_, stack){ return stack; };
      var err = new Error();
      Error.captureStackTrace(err, arguments.callee);
      var stack = err.stack;
      Error.prepareStackTrace = orig;
      return stack;
    }
  });

  var file = __stack[1].getFileName();
  var func = __stack[1].getFunctionName();
  var line = __stack[1].getLineNumber();

  switch (type) {
    case 'info':
      if ((process.env.NODE_ENV == 'production') ||
        (process.env.NODE_ENV == 'development') ||
        (process.env.NODE_ENV == 'test')) {
          console.info(color.green(d.format() + ' ' + msg));
        }
    break;
    case 'debug':
      if ((process.env.NODE_ENV == 'development') ||
        (process.env.NODE_ENV == 'test')) {
          console.log(color.blue(d.format() + ' ' + file + ' ' + func + ':' + line + ' ' + msg));
        }
    break;
    case 'error':
      if ((process.env.NODE_ENV == 'production') ||
        (process.env.NODE_ENV == 'development') ||
        (process.env.NODE_ENV == 'test')) {
          console.error(color.red(d.format() + ' ' + file + ' ' + func + ':' + line + ' ' + msg));
        }
    break;
    case 'trace':
      if ((process.env.NODE_ENV == 'development') ||
        (process.env.NODE_ENV == 'test')) {
          console.trace(color.red(d.format() + ' ' + file + ' ' + func + ':' + line + ' ' + msg));
        }
    break;
    default:
      console.log(color.blue(d.format() + ' ' + file + ' ' + func + ':' + line + ' ' + msg));
  }
}

function log_debug(message) {
  showLog('debug', message);
}
function log_error(message) {
  showLog('error', message);
}
function log_info(message) {
  showLog('info', message);
}
function log_trace(message) {
  showLog('trace', message);
}

exports = module.exports.showStatus = showStatus;

exports = module.exports.isEmptyObject = isEmptyObject;

exports = module.exports.uniq = uniq;

exports = module.exports.isJson = isjson;

exports = module.exports.showLog = showLog;

exports = module.exports.namespace = namespace;

exports = module.exports.log = {
  debug: log_debug,
  error: log_error,
  info: log_info,
  trace: log_trace
};
