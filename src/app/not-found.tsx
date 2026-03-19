import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Seite nicht gefunden</h1>
        <p className="text-lg mb-8">Die angeforderte Seite existiert nicht.</p>
        <Link href="/" className="text-primary hover:underline">
          Zur Startseite zurückkehren
        </Link>
      </div>
    </>
  );
}
