import API from "./api";

export const getAllUsers = async (params?: any) => {
  const res = await API.get("/users", { params });
  return res.data;
};

export const getUserStats = async () => {
  const res = await API.get("/users/stats");
  return res.data;
};

export const getUserById = async (id: string) => {
  const res = await API.get(`/users/${id}`);
  return res.data;
};

export const updateUser = async (id: string, userData: any) => {
  const res = await API.put(`/users/${id}`, userData);
  return res.data;
};

export const bulkUserAction = async (data: any) => {
  const res = await API.post("/users/bulk-action", data);
  return res.data;
};
