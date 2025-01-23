// components/Navbar.js
import { RegisterLink, LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import Link from 'next/link';

export default function Navbar({ user }) {
    return (
        <nav className="bg-gray-800 p-4 text-white fixed top-0 left-0 right-0 z-10">
            <ul className="max-w-6xl mx-auto flex justify-between items-center">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li className="flex space-x-4">
                    {user ? (
                        <>
                            <Link className="bg-green-500 px-4 py-2 rounded hover:bg-green-600" href="/profile">Profile</Link>
                            <LogoutLink className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Log Out</LogoutLink>
                        </>
                    ) : (
                        <>
                            <LoginLink className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Sign In</LoginLink>
                            <RegisterLink className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">Sign Up</RegisterLink>
                        </>
                    )}
                </li>
            </ul>
        </nav>
    );
}
