// pages/setup-webhook.js
import { useState } from "react";

export default function SetupWebhook() {
  const [repoOwner, setRepoOwner] = useState("");
  const [repoName, setRepoName] = useState("");

  const handleWebhookSetup = async () => {
    const token = localStorage.getItem("github_token");
    if (!token) {
      alert("GitHub token is missing. Please authenticate first.");
      return;
    }

    const response = await fetch("/api/setup-webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, repoOwner, repoName }),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center text-2xl">
      <h1 className="font-bold text-4xl pb-8">Setup Webhook for Pull Requests</h1>
      <div className="flex flex-col justify-center items-center w-full">
        <input
          type="text"
          placeholder="Repository Owner"
          value={repoOwner}
          onChange={(e) => setRepoOwner(e.target.value)}
          className="text-black px-4 py-2 mt-4"
        />
        <input
          type="text"
          placeholder="Repository Name"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
          className="text-black px-4 py-2 mt-4"
        />
        <button onClick={handleWebhookSetup} className="px-4 py-2 font-bold bg-green-600 mt-8 hover:bg-blue-600">Setup Webhook</button>
      </div>
    </div>
  );
}
