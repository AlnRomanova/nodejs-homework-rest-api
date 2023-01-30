const createHttpException = (status, message) => {
    const err = new Error(message)
      err.status = status
      err.message = "missing required name field"
      return err
}



module.exports = {
 createHttpException,

}