const { globalErrorHandler } = require('./global-error-handler.middleware');
const { validateBody, updateValidateBody} = require('./validate-body.middleware');



module.exports = {
  globalErrorHandler,
  validateBody,
  updateValidateBody,
}