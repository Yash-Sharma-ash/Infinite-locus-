import API from "./api";

export const getDashboardAnalytics = async (params?: any) => {
  const res = await API.get("/analytics/dashboard", { params });
  return res.data;
};

export const getEventAnalytics = async (id: string) => {
  const res = await API.get(`/analytics/events/${id}`);
  return res.data;
};

export const getUserAnalytics = async (params?: any) => {
  const res = await API.get("/analytics/users", { params });
  return res.data;
};
