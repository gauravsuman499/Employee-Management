function validatePassword(password) {
  // const validatePassword = (password) => {
  const errors = [];

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter.");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter.");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one number.");
  }
  if (!/[!@#$%^&*()]/.test(password)) {
    // Example special characters
    errors.push("Password must contain at least one special character.");
  }
  if (/\s/.test(password)) {
    errors.push("Password cannot contain spaces.");
  }

  return errors; // Return an array of error messages
}

// };
export default validatePassword;
