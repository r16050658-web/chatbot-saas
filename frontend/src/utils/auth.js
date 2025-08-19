export const isAuthenticated = () => !!localStorage.getItem("token");

export const login = (token, profile = {}) => {
  localStorage.setItem("token", token);
  localStorage.setItem("profile", JSON.stringify(profile));
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("profile");
  window.location.href = "/login";
};

export const getProfile = () => {
  try {
    return JSON.parse(localStorage.getItem("profile") || "{}");
  } catch {
    return {};
  }
};
