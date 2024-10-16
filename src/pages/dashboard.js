// pages/Dashboard.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import SetupWebhook from "./setup-webhook";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (token) {
      // Store the token in local storage
      localStorage.setItem("github_token", token);

      // Optionally, store it in MongoDB by calling a backend API
      fetch("/api/store-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
    }
  }, [token]);

  return (
    <>
      <div className="bg-slate-950 min-h-screen relative flex flex-col justify-start items-center w-screen h-screen text-white text-2xl">
        <div className="flex flex-row w-full h-16 justify-center items-center bg-slate-950">
          <div className="bg-slate-900 flex flex-row h-16 gap-12 items-center justify-center w-full absolute text-lg font-bold">
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
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center py-4">
          <div className="w-80 flex flex-col justify-center items-center">
            <div className="text-3xl font-bold pb-2 text-center text-green-600">
              GITHUB
            </div>
            <div className="text-2xl font-bold pb-2 text-center text-blue-600">
              PULL REQUEST REVIEWER
            </div>
            <div className="text-lg font-bold pb-4 text-center">
              POWERED BY GEMINI
            </div>
          </div>
          <div className="flex flex-col">
            <SetupWebhook />
          </div>
        </div>
      </div>
    </>
  );
}
