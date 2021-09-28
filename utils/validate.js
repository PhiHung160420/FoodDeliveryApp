function isValidateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateEmail(value, setEmailError) {
  if (value == '') {
    setEmailError('');
  } else if (isValidateEmail(value)) {
    setEmailError('');
  } else {
    setEmailError('Invalid Email');
  }
}

function validatePassword(value, setPasswordError) {
  if (value.length < 9) {
    setPasswordError('Password must be 9 characters');
  } else {
    setPasswordError('');
  }
}

function validateUsername(value, setUsernameError) {
  if (value.length > 0) {
    setUsernameError('');
  } else {
    setUsernameError('Username not empty');
  }
}

const validate = {
  isValidateEmail,
  validateEmail,
  validatePassword,
  validateUsername,
};

export default validate;
