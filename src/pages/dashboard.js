// pages/Dashboard.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import SetupWebhook from "./setup-webhook"

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
      <h1>GitHub Connected Successfully</h1>
      <div className="flex flex-col">
        <SetupWebhook />
      </div>
    </>
  );
}
