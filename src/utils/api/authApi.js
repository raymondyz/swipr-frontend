export function registerUser(email, password) {
  const isValid = true

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isValid) {
        resolve(true)
      }
      else {
        reject(new Error("Failed to register, please report this bug!"))
      }
    }, 1000)
  })
}

export function validateLogin(email, password) {
  const isValid = true

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isValid) {
        resolve(true)
      }
      else {
        reject(new Error("Incorrect email or password"))
      }
    }, 1000)
  })
}