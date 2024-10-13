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
      <div className="bg-black relative flex flex-col justify-center items-center w-screen h-screen text-white text-2xl">
      <div className="absolute top-2 left-4 text-2xl text-white hover:text-blue-600 font-bold"><Link href='/'>Home</Link> </div>

        <div className="w-full max-w-[512px] flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold pb-8 text-center">
            GitHub Connected Successfully
          </h1>
          <div className="flex flex-col">
            <SetupWebhook />
          </div>
        </div>
      </div>
    </>
  );
}
