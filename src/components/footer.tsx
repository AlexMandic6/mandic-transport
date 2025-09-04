function Footer() {
  return (
    <footer className="bg-midnight text-gray-300 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left side */}
        <div>
          <p className="font-semibold text-white">Mandic Transport</p>
          <p>Zagreb, Croatia</p>
          <p>📞 +385 99 330 8093</p>
          <p>✉️ info@mandic-transport.com</p>
        </div>

        {/* Right side */}
        <div className="flex gap-4">
          <a href="/about" className="hover:text-white">
            About
          </a>
          <a href="/services" className="hover:text-white">
            Services
          </a>
          <a href="/contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-3 text-xs">
        © {new Date().getFullYear()} Mandic Transport. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
