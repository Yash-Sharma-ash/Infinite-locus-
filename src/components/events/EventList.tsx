import EventCard from "../events/EventCard";

export default function EventsList() {
  const events = [
    {
      id: "1",
      title: "Tech Fest 2025",
      description: "A celebration of innovation, coding competitions, and workshops.",
      date: "12 Sep 2025",
      location: "Amity University Jaipur",
      image: "https://source.unsplash.com/400x300/?technology,event",
      organizer: "CSE Department",
    },
    {
      id: "2",
      title: "AI Workshop",
      description: "Hands-on workshop on AI & ML applications in industry.",
      date: "20 Sep 2025",
      location: "Virtual (Zoom)",
      image: "https://source.unsplash.com/400x300/?artificial-intelligence",
      organizer: "AI Club",
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
}