import API from "./api";

export const getNotifications = async (params?: any) => {
  const res = await API.get("/notifications", { params });
  return res.data;
};

export const sendNotification = async (data: any) => {
  const res = await API.post("/notifications", data);
  return res.data;
};

export const markAsRead = async (id: string) => {
  const res = await API.put(`/notifications/${id}/read`);
  return res.data;
};

export const markAllAsRead = async () => {
  const res = await API.put("/notifications/mark-all-read");
  return res.data;
};

export const getNotificationStats = async () => {
  const res = await API.get("/notifications/stats");
  return res.data;
};
