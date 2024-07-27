import Link from "next/link";

function NotFound({ params }) {
  console.log(params);
  return (
    <main className="text-center space-y-6 mt-4">
      <input className="text-3xl font-semibold" value="1" c></input>
      <Link
        href="/"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
