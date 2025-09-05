import API from "./api";

export const getEventsReport = async (params?: any) => {
  const res = await API.get("/reports/events", { params });
  return res.data;
};

export const getRegistrationsReport = async (params?: any) => {
  const res = await API.get("/reports/registrations", { params });
  return res.data;
};

export const getAttendanceReport = async (params?: any) => {
  const res = await API.get("/reports/attendance", { params });
  return res.data;
};

export const getUsersReport = async (params?: any) => {
  const res = await API.get("/reports/users", { params });
  return res.data;
};

export const getDepartmentsReport = async (params?: any) => {
  const res = await API.get("/reports/departments", { params });
  return res.data;
};
