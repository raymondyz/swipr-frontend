export function fetchUserByEmail(email) {
  const user = {
    id: null,
    name: null,
    email: email,
    role: "user",
  }

  return user
}