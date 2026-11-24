import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main>
      <Image src="/images/max.png" alt="Max" width={128} height={128} priority />
      <p>
        Hi there! This is my website. It looks pretty unfinished, at the moment.<br/>
        This is sort of just a placeholder, for now.
        <br/><br/>
        To check out my old site, <a href="https://wibblio.neocities.org/">click here</a>.
      </p>
    </main>
  );
}
