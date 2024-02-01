const validPasswordRe = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$'
)
const validEmailRe = new RegExp(
  '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'
)

export const ValidiateProps = (propName, propValue) => {
  switch (propName) {
    case 'password':
      return validPasswordRe.test(propValue)
    case 'email':
      return validEmailRe.test(propValue)
    case 'confirmPassword':
      return validPasswordRe.test(propValue)
    default:
      break
  }
}
export const ValidiatePassword = (password) => {
  return validPasswordRe.test(password)
}

export const ValidiateEmail = (email) => {
  return validEmailRe.test(email)
}
