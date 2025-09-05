import { Link } from "react-router-dom";

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  organizer: string;
}

export default function EventCard({
  id,
  title,
  description,
  date,
  location,
  image,
  organizer,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 truncate">{title}</h2>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>

        <p className="text-sm text-gray-500 mt-2">
          📅 {date} • 📍 {location}
        </p>
        <p className="text-sm text-gray-500">👤 {organizer}</p>

        <div className="mt-4">
          <Link
            to={`/events/${id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
