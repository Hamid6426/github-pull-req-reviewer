// pages/setup-webhook.js
import { useState } from "react";
import Link from "next/link";

const validateRepositoryName = (name) => {
  // Implement validation logic for repository name
  // For example:
  return /^[a-zA-Z0-9-]+$/.test(name);
};

const setupWebhook = async ({ token, repoOwner, repoName }) => {
  const response = await fetch("/api/setup-webhook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, repoOwner, repoName }),
  });

  if (!response.ok) {
    throw new Error(`Failed to setup webhook: ${response.statusText}`);
  }

  const result = await response.json();
  return result;
};

export default function SetupWebhook() {
  const [repoOwner, setRepoOwner] = useState("");
  const [repoName, setRepoName] = useState("");
  const [error, setError] = useState(null);

  const handleWebhookSetup = async () => {
    const token = localStorage.getItem("github_token");
    if (!token) {
      alert("GitHub token is missing. Please authenticate first.");
      return;
    }

    if (
      !validateRepositoryName(repoOwner) ||
      !validateRepositoryName(repoName)
    ) {
      setError("Invalid repository name or owner");
      return;
    }

    try {
      const result = await setupWebhook({ token, repoOwner, repoName });
      alert(result.message);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-slate-900 w-80 h-fit py-4 flex flex-col justify-center items-center rounded-2xl">
    <div className="text-center pb-2 text-2xl font-bold text-blue-600">PULL REQUEST</div>  
    <div className="text-center pb-4 text-2xl font-bold text-green-600">WEBHOOK SETUP</div>  
      <div className="flex flex-col justify-center items-center w-full px-4 pb-2">
        <input
          type="text"
          placeholder="Repository Owner"
          value={repoOwner}
          onChange={(e) => setRepoOwner(e.target.value)}
          className="text-black w-full py-2 px-4 mt-2 rounded-lg text-xl"
        />
        <input
          type="text"
          placeholder="Repository Name"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
          className="text-black w-full py-2 px-4 mt-4  rounded-lg text-xl"
        />
        {error && <p className="text-center text-lg mt-4" style={{ color: "orange" }}>{error}</p>}
        <button
          onClick={handleWebhookSetup}
          className="w-full py-3 font-bold bg-green-600 mt-8 text-xl hover:bg-blue-600 rounded-full text-center"
        >
          Setup Webhook
        </button>
      </div>
    </div>
  );
}
