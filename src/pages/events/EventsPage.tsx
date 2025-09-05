import { useEffect, useState } from "react";
import EventCard from "../../components/events/EventCard";
import { getAllEvents } from "../../services/events";
import type { UiEvent } from "../../services/events";

export default function EventsPage() {
  const [events, setEvents] = useState<UiEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const list = await getAllEvents(); // 🔥 service call
        setEvents(list);
      } catch (err: any) {
        console.error(err);
        setError(err?.message || "Failed to load events");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p className="text-center">Loading events...</p>;
  if (error)   return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
      {events.length > 0 ? (
        events.map((e) => <EventCard key={e.id} {...e} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No events available
        </p>
      )}
    </div>
  );
}
