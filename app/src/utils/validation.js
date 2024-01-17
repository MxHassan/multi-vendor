const validEmailRe = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const validPasswordRe = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$');

export const ValidiatePassword = (password) => {
  return validPasswordRe.test(password);
};

export const ValidiateEmail = (email) => {
  return validEmailRe.test(email);
};
