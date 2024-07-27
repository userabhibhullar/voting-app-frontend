export const url = "http://localhost:5000/api";

export const setHeaders = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const headers = {
      headers: {
        "x-auth-token": token,
      },
    };
    return headers;
  }
  return;
};
