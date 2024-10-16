import React from "react";
import Link from "next/link";

export default function about() {
  return (
    <div className="bg-slate-950 px-8 min-h-screen h-fit relative flex flex-col justify-start items-center w-screen text-white text-2xl">

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

        <div class="max-w-3xl mx-auto p-8 mt-28 mb-12  bg-slate-900 text-white shadow-md rounded-lg">
          <h1 class="text-3xl font-bold mb-4">
            About This Project
          </h1>
          <p class=" mb-6">
            This project aims to streamline the GitHub pull request review
            process, powered by <strong>Gemini</strong>, with easy integration
            and intuitive tools to help developers efficiently manage their code
            repositories.
          </p>

          <h2 class="text-2xl font-semibold  mb-3">
            Key Features:
          </h2>

          <ul class="list-disc list-inside mb-6">
            <li>
              <strong>GitHub Pull Request Reviewer:</strong> An automated system
              to assist in reviewing pull requests, providing valuable insights
              and suggestions for code improvement.
            </li>
            <li>
              <strong>Sign In with GitHub:</strong> Secure login using your
              GitHub account to connect with your repositories quickly and
              easily.
            </li>
            <li>
              <strong>Pull Request Webhook Setup:</strong> Set up a webhook to
              automatically receive updates and trigger pull request reviews for
              your repository.
            </li>
          </ul>

          <h2 class="text-2xl font-semibold  mb-3">
            How It Works:
          </h2>

          <ol class="list-decimal list-inside  mb-6">
            <li>
              <strong>Connect Your GitHub Account:</strong> Sign in using your
              GitHub credentials to access the project’s functionality.
            </li>
            <li>
              <strong>Setup Webhook:</strong> Configure your repository by
              providing the <strong>Repository Owner</strong> and{" "}
              <strong>Repository Name</strong>, and then set up the webhook to
              receive pull request updates.
            </li>
          </ol>

          <p class="">
            With this project, the aim is to save time, improve collaboration,
            and ensure cleaner, more efficient code reviews for your team.
          </p>
      </div>

    </div>
  );
}
