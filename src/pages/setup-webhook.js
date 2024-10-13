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
  <div className="relative w-full flex flex-col justify-center items-center text-2xl">
      <h1 className="font-bold text-4xl pb-8 text-center">
        Setup Webhook for Pull Requests
      </h1>
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          onClick={handleWebhookSetup}
          className="px-4 py-2 font-bold bg-green-600 mt-8 hover:bg-blue-600"
        >
          Setup Webhook
        </button>
      </div>
    </div>
  );
}
