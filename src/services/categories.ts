import API from "./api";

export const getAllCategories = async (params?: any) => {
  const res = await API.get("/categories", { params });
  return res.data;
};

export const getCategoryStats = async () => {
  const res = await API.get("/categories/stats");
  return res.data;
};

export const getCategoryById = async (id: string) => {
  const res = await API.get(`/categories/${id}`);
  return res.data;
};

export const createCategory = async (data: any) => {
  const res = await API.post("/categories", data);
  return res.data;
};

export const updateCategory = async (id: string, data: any) => {
  const res = await API.put(`/categories/${id}`, data);
  return res.data;
};
