const Header: React.FC = () => {
  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">ListingApp</h1>

        <input
          type="text"
          placeholder="Search properties..."
          className="w-1/3 border px-4 py-2 rounded-full shadow-sm"
        />

        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-md border">Sign In</button>
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white">
            Sign Up
          </button>
        </div>
      </div>

      <div className="flex gap-6 px-6 py-3 text-sm overflow-x-auto">
        <span className="cursor-pointer">Rooms</span>
        <span className="cursor-pointer">Mansion</span>
        <span className="cursor-pointer">Countryside</span>
        <span className="cursor-pointer">Penthouse</span>
        <span className="cursor-pointer">Cabins</span>
      </div>
    </header>
  );
};

export default Header;

