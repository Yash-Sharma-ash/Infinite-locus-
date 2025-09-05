import API from "./api";

export const submitFeedback = async (data: any) => {
  const res = await API.post("/feedback", data);
  return res.data;
};

export const getEventFeedback = async (eventId: string, params?: any) => {
  const res = await API.get(`/feedback/event/${eventId}`, { params });
  return res.data;
};

export const getUserFeedback = async (params?: any) => {
  const res = await API.get("/feedback", { params });
  return res.data;
};

export const respondFeedback = async (id: string, data: any) => {
  const res = await API.put(`/feedback/${id}/respond`, data);
  return res.data;
};

export const getFeedbackStats = async (params?: any) => {
  const res = await API.get("/feedback/stats", { params });
  return res.data;
};
