export function fetchUserByEmail(email) {
  const isValid = true

  const user = {
    id: null,
    name: null,
    email: email,
    role: "user",
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isValid) {
        resolve(user)
      }
      else {
        reject(new Error("User does not exist"))
      }
    }, 1000)
  })
}