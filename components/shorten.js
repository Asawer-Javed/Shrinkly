"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Shorten() {
  const [longUrl, setLongUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");

  const handleGenerate = async () => {
    if (!longUrl) {
      toast.error("Please enter a valid URL.");
      return;
    }

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: longUrl,
          shortUrl: customSlug,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setGeneratedUrl(`http://localhost:3000/${data.slug || customSlug}`);
        setLongUrl("");
        setCustomSlug("");
        toast.success("Short URL generated successfully!");
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error creating short URL:", error);
      toast.error("Server error. Please try again.");
    }
  };

  return (
    <div
      id="shorten"
      className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4"
    >
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="bg-orange-500 rounded-xl shadow-xl w-full max-w-2xl p-8 space-y-6 border border-orange-400 text-white">
        <h1 className="text-3xl font-bold text-center ">Shorten Your URL</h1>

        {/* Long URL input */}
        <div>
          <label className="text-sm">Paste Long URL</label>
          <input
            type="text"
            placeholder="https://your-long-url.com/anything"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="mt-2 w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none bg-white"
          />
        </div>

        {/* Custom Slug input */}
        <div>
          <label className="text-sm">
            Enter your preferred short URL text (optional)
          </label>
          <input
            type="text"
            placeholder="yourname"
            value={customSlug}
            onChange={(e) => setCustomSlug(e.target.value)}
            className="mt-2 w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none bg-white"
          />
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          className="w-full bg-orange-700 hover:bg-orange-800 transition py-3 rounded-md font-semibold text-white"
        >
          Generate Short Link
        </button>

        {/* Output Section */}
        {generatedUrl && (
          <div className="bg-white px-4 py-3 rounded-md text-center w-full max-w-md mx-auto">
            <span className="text-sm text-gray-600 block">Your Short URL:</span>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-1 break-words">
              <a
                href={generatedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 text-base sm:text-lg underline hover:text-orange-500 break-words text-center"
              >
                {generatedUrl}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
