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
    <div>
      <h1>GitHub OAuth App</h1>
      <button onClick={handleGitHubAuth}>Connect GitHub</button>
    </div>
  );
}
