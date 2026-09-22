const Footer = () => {
  return (
    <footer className="bg-black text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-3 lg:px-8">

        {/* Brand */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img
              src="/bike-logo.png"
              alt="Motor-Bike Logo"
              className="h-12 w-12 rounded-full"
            />

            <h2 className="text-2xl font-bold text-red-600">
              Motor-Bike
            </h2>
          </div>

          <p className="max-w-sm leading-7 text-gray-400">
            Your trusted destination for quality motorcycles,
            professional service, and an exciting riding experience.
          </p>

          {/* Social Media */}
          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="hover:text-red-500"
              aria-label="Facebook"
            >
              Facebook
            </a>

            <a
              href="#"
              className="hover:text-red-500"
              aria-label="Instagram"
            >
              Instagram
            </a>

            <a
              href="#"
              className="hover:text-red-500"
              aria-label="YouTube"
            >
              YouTube
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="/#home" className="hover:text-red-500">
                Home
              </a>
            </li>

            <li>
              <a href="/#about" className="hover:text-red-500">
                About
              </a>
            </li>

            <li>
              <a href="/#services" className="hover:text-red-500">
                Services
              </a>
            </li>

            <li>
              <a href="/#team" className="hover:text-red-500">
                Team
              </a>
            </li>

            <li>
              <a href="/#whychooseus" className="hover:text-red-500">
                Why Choose Us
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Support
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-red-500">
                FAQ
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-red-500">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-red-500">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-gray-500 md:flex-row lg:px-8">

          <p>
            © 2026 Motor-Bike. All rights reserved.
          </p>

          <p>
            Designed & Developed with ❤️
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;