import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src="/images/max.png"
        alt="Max"
        width={128}
        height={128}
        draggable={false}
      />
      <h2>Hi there!</h2>
      <p>I&apos;m <strong>wibblio</strong>, professional air-breather and creator of Jaws.</p>
      <p>
        I mostly like to do stuff with computers and programming;<br/>
        most of my projects are mods of existings video games,<br/>
        though, I do have some original projects, too.
      </p>
    </main>
  );
}
