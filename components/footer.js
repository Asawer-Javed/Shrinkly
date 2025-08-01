import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-orange-500 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Name and copyright */}
        <div className="text-center md:text-left">
          <p className="font-semibold">
            © 2025 Created by Asawer Javed.
            <br /> All rights reserved.
          </p>
        </div>

        {/* Right: Social/contact icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://www.linkedin.com/in/asawer-javed-21a9362b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Asawer-Javed"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-200"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
