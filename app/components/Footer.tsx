
export function Footer() {
  return (
    <footer className="text-white py-6 sticky top-[100vh] bottom-0">
      <div className="max-w-6xl mx-auto px-4 text-center text-small mt-4 text-gray-400">
        &copy; {new Date().getFullYear()} Laura Zuikeviciute
      </div>
    </footer>
  );
}
