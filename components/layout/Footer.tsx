const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ListingApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

