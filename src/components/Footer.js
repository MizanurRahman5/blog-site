// components/Footer.js
export default function Footer() {
    return (
        <nav className="bg-gray-800 p-4 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Your Company. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
        </nav>
    );
  }
  