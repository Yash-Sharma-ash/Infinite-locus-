export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Campus Events</p>
        <p>Made for Real-Time Campus Event Platform</p>
      </div>
    </footer>
  );
}
