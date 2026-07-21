import { PROJECT_NAME } from "@abigail/shared";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-4xl font-bold">{PROJECT_NAME}</h1>
      <p className="text-lg text-gray-600">
        Monorepo sanity check — this string comes from{" "}
        <code className="rounded bg-gray-100 px-2 py-1 font-mono text-sm">@abigail/shared</code>
      </p>
    </main>
  );
}
