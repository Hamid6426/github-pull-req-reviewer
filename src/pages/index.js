import Image from "next/image";
import localFont from "next/font/local";

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
    window.location.href = '/api/auth';
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen text-white text-2xl">
      <div className="w-full max-w-[512px] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold pb-8">GitHub OAuth App</h1>
      <button className="py-3 px-6 font-bold bg-green-600 hover:bg-blue-600" onClick={handleGitHubAuth}>Connect GitHub</button>
      </div>
    </div>
  );
}
