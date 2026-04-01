export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white font-sans">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">
          Test Albert
        </h1>
        <p className="text-zinc-400 text-lg">
          Webflow Cloud is working.
        </p>
        <div className="pt-4 text-sm text-zinc-600">
          Mounted at <code className="bg-zinc-800 px-2 py-1 rounded">/test_albert</code>
        </div>
      </div>
    </div>
  );
}
