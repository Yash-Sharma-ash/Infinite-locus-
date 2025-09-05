import API from "./api";

export interface UiEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  organizer: string;
}

export const getAllEvents = async (params?: any): Promise<UiEvent[]> => {
  const res = await API.get("/events", { params });

  // response adjust karo
  const apiEvents = res.data?.data?.events || [];

  // map karke frontend format me convert karo
  return apiEvents.map((event: any) => ({
    id: event._id,
    title: event.title,
    description: event.description,
    date: event.schedule?.startDate || "TBA",
    location: event.venue?.name || "Unknown",
    image: event.image || "/event.jpg",
    organizer: event.organizer?.firstName || "Organizer",
  }));
};
