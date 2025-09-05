import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EventDetails() {
  const { id } = useParams(); // Get event ID from URL
  const [event, setEvent] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch event details (API call later)
  useEffect(() => {
    // Temporary dummy data
    const fetchedEvent = {
      id,
      title: "Hackathon 2025",
      description: "Build amazing products in just 6 hours!",
      date: "5th Sep 2025",
      location: "Bangalore",
      organizer: "OpenAI Club",
    };
    setEvent(fetchedEvent);
  }, [id]);

  if (!event) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{event.title}</h1>
      <p className="text-gray-700 mb-3">{event.description}</p>
      <p className="text-gray-500">
        <strong>Date:</strong> {event.date}
      </p>
      <p className="text-gray-500">
        <strong>Location:</strong> {event.location}
      </p>
      <p className="text-gray-500 mb-4">
        <strong>Organizer:</strong> {event.organizer}
      </p>

      {/* Register Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Register
      </button>

      {/* Registration Form Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4">Register for {event.title}</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full border p-2 rounded-lg"
              />
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}