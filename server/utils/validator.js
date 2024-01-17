const validPasswordRe = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$')
const validEmailRe = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
const validPassword = (password) => {
  return validPasswordRe.test(password)
}

const validEmail = (email) => {
  return validEmailRe.test(email)
}
module.exports = { validEmail, validPassword }
