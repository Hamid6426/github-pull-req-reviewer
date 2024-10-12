// pages/Dashboard.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import SetupWebhook from "./setup-webhook";

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
      <div className="bg-black flex flex-col justify-center items-center w-screen h-screen text-white text-2xl">
        <div className="w-full max-w-[512px] flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold pb-8">
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
