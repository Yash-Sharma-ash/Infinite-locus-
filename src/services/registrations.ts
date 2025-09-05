import API from "./api";

export const registerForEvent = async (data: any) => {
  const res = await API.post("/registrations", data);
  return res.data;
};

export const getUserRegistrations = async (params?: any) => {
  const res = await API.get("/registrations", { params });
  return res.data;
};

export const getEventRegistrations = async (eventId: string, params?: any) => {
  const res = await API.get(`/registrations/event/${eventId}`, { params });
  return res.data;
};

export const approveRegistration = async (id: string, data: any) => {
  const res = await API.put(`/registrations/${id}/approve`, data);
  return res.data;
};

export const markAttendance = async (id: string, data: any) => {
  const res = await API.put(`/registrations/${id}/attendance`, data);
  return res.data;
};

export const cancelRegistration = async (id: string, data: any) => {
  const res = await API.delete(`/registrations/${id}`, { data });
  return res.data;
};

export const bulkApproveRegistrations = async (data: any) => {
  const res = await API.post("/registrations/bulk-approve", data);
  return res.data;
};
