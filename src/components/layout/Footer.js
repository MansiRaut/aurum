import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-blue-950 text-white pt-16">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1: Logo / About + Socials */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-yellow-600">aurum</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Empowering entrepreneurs to connect, collaborate, and grow through a trusted network of leaders.
                    </p>

                    <p className="text-sm text-gray-400 mb-2">Follow us on</p>
                    <div className="flex space-x-4">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-5 h-5 text-white hover:text-yellow-400 transition" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram className="w-5 h-5 text-white hover:text-yellow-400 transition" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-5 h-5 text-white hover:text-yellow-400 transition" />
                        </a>
                    </div>
                </div>

                {/* Column 2: Navigation Links */}
                <div>
                    <h4 className="text-md font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#about" className="hover:text-yellow-400">About</a></li>
                        <li><a href="#membership" className="hover:text-yellow-400">Membership</a></li>
                        <li><a href="#events" className="hover:text-yellow-400">Events</a></li>
                        <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Newsletter */}
                <div>
                    <h4 className="text-md font-semibold mb-3">Stay Connected</h4>
                    <p className="text-sm text-gray-300 mb-3">Get updates and event invites straight to your inbox.</p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-grow px-3 py-2 rounded-l bg-white text-black text-sm"
                        />
                        <button className="bg-yellow-600 text-white px-4 py-2 rounded-r font-semibold text-sm hover:bg-yellow-500">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-white text-center py-5 text-xs text-gray-500 mt-4">
                &copy; {new Date().getFullYear()} Aurum. All rights reserved.
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-blue-950 transition">Privacy Policy</a>
            </div>
        </footer>
    );
}
