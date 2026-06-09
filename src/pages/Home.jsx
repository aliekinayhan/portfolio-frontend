function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Ali Ekin Ayhan</h1>

      <p className="text-xl text-gray-500 mb-8">Full Stack Developer</p>

      <div className="flex gap-4">
        <a
          href="https://github.com/aliekinayhan"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/aliekinayhan"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Home;
