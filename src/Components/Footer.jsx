const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Civic Mate. All rights reserved.</p>
        <p className="mt-2">Follow us on 
          <span className="ml-2 text-blue-400 cursor-pointer hover:underline">Facebook</span>, 
          <span className="ml-2 text-blue-400 cursor-pointer hover:underline">Twitter</span>, 
          <span className="ml-2 text-blue-400 cursor-pointer hover:underline">Instagram</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
