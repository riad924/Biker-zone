
const USERS_KEY = "bike-zone-users";

export const registerUser = async (userData) => {
  const users = JSON.parse(
    localStorage.getItem(USERS_KEY) || "[]"
  );

  const exists = users.find(
    (user) => user.email === userData.email
  );

  if (exists) {
    throw new Error("Email already exists");
  }

  const newUser = {
    id: Date.now(),
    ...userData,
  };

  users.push(newUser);

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );

  return {
    success: true,
    user: newUser,
  };
};
