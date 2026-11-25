import Image from "next/image";
import Nepeta from "@/components/nepeta";

export default function Home() {
  return (
    <>
      <main style={{ maxWidth: 500 }}>
        <Image src="/images/max.png" alt="Max" width={128} height={128} />
        <h2 style={{ margin: "12px 0" }}>Hi there!</h2>
        <p>I&apos;m <strong>wibblio</strong>, professional air-breather and creator of Jaws.</p>
        <p>I mostly like to do stuff with computers and programming; most of my projects are mods of existings video games, though, I do have some original projects, too.</p>
      </main>
      <Nepeta />
    </>
  );
}
