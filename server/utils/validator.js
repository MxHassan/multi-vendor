const validPasswordRe = new RegExp(
  // '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$'
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$'
);
const validEmailRe = new RegExp(
  // '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'
);
const validPassword = (password) => {
  return validPasswordRe.test(password);
};

const validEmail = (email) => {
  return validEmailRe.test(email);
};
module.exports = { validEmail, validPassword };
