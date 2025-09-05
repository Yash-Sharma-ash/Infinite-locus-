import API from "./api";

export const getAllDepartments = async (params?: any) => {
  const res = await API.get("/departments", { params });
  return res.data;
};

export const getDepartmentStats = async () => {
  const res = await API.get("/departments/stats");
  return res.data;
};

export const getDepartmentById = async (id: string) => {
  const res = await API.get(`/departments/${id}`);
  return res.data;
};

export const createDepartment = async (data: any) => {
  const res = await API.post("/departments", data);
  return res.data;
};

export const updateDepartment = async (id: string, data: any) => {
  const res = await API.put(`/departments/${id}`, data);
  return res.data;
};

export const addDepartmentMembers = async (id: string, data: any) => {
  const res = await API.post(`/departments/${id}/members`, data);
  return res.data;
};

export const getDepartmentMembers = async (id: string, params?: any) => {
  const res = await API.get(`/departments/${id}/members`, { params });
  return res.data;
};
