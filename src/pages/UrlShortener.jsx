import { useState } from "react";

function UrlShortener() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleShorten = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(
        "https://beyefendisinemaci.xyz/api/shorten",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ originalUrl: url }),
        },
      );

      if (response.status === 429) {
        throw new Error("Too many requests. Please try again in a minute.");
      }

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result.shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">URL Shortener</h1>

        <p className="text-gray-500 mb-6">
          Paste your long URL and get a short one instantly.
        </p>

        <div className="flex gap-2">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/very/long/url"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handleShorten}
            disabled={loading || !url}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50"
          >
            {loading ? "Shortening..." : "Shorten"}
          </button>
        </div>

        {error && <p className="mt-4 text-red-500">{error}</p>}

        {result && (
          <div className="mt-6 bg-gray-50 rounded-xl p-4 border border-gray-200">
            <p className="text-sm text-gray-500 mb-1">Short URL</p>

            <div className="flex items-center justify-between gap-2">
              <a
                href={result.shortUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-medium hover:underline truncate"
              >
                {result.shortUrl}
              </a>

              <button
                onClick={handleCopy}
                className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg transition-colors whitespace-nowrap"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UrlShortener;
