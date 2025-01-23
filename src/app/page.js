// app/page.js
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="container grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <Navbar user={user} />  {/* Navbar কম্পোনেন্টে user প্রপ্স পাঠানো হচ্ছে */}
      </header>
      <div className="mt-20">
        <h1 className="text-4xl">Welcome to the Home Page</h1>
        <p>This is the homepage where you can navigate to different sections.</p>
      </div>
    </div>
  );
}
