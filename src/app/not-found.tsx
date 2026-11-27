import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main>
      <h2>404!</h2>
      <p>
        Sorry, I couldn&apos;t find what you were looking for.<br/>
        Maybe, I should try looking harder, next time.
      </p>
      <p>To return home, <Link href="/">click here</Link>.</p>
    </main>
  );
}
