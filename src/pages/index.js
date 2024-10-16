import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const handleGitHubAuth = () => {
    window.location.href = "/api/auth";
  };

  return (
    <div className="w-full h-screen bg-slate-950 ">
      
      <div className="bg-slate-900 flex flex-row h-12 gap-12 items-center justify-center w-full absolute text-lg font-bold">
        <Link href="/" className="text-white hover:text-blue-600 ">
          Home
        </Link>
        <Link href="/dashboard" className="text-white hover:text-blue-600 ">
          Setup
        </Link>
        <Link href="/about" className="text-white hover:text-blue-600 ">
          About
        </Link>
      </div>

      <div className="h-full flex flex-col justify-center items-center w-screen pt-16 text-white text-2xl">
        <div className=" w-80 flex flex-col justify-center items-center">
          <div className="text-3xl font-bold pb-2 text-center text-green-600">
            GITHUB
          </div>
          <div className="text-2xl font-bold pb-2 text-center text-blue-600">
            PULL REQUEST REVIEWER
          </div>
          <div className="text-lg font-bold pb-4 text-center">
            POWERED BY GEMINI
          </div>

          <div className="bg-slate-900 rounded-2xl py-12 w-full flex flex-col justify-center items-center px-4">
            <div className="text-center pb-3 text-2xl font-bold text-blue-600">
              SIGN IN WITH YOUR
            </div>
            <div className="text-center pb-8 text-2xl font-bold text-green-600">
              GITHUB ACCOUNT
            </div>
            <button
              className="py-3 w-full font-bold bg-green-600 hover:bg-blue-600 rounded-full"
              onClick={handleGitHubAuth}
            >
              Connect Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
