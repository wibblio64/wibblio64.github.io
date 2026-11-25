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
        <p>Some of my main personal interests are <a href="https://www.homestuck.com/">Homestuck</a>, <a href="https://www.homestarrunner.com/">Homestar Runner</a>, <a href="https://www.penny-aracde.com/">Penny Arcade</a>, <a href="https://skunkapegames.com/samandmax/season1/">Sam & Max</a>, and a whole lot of other stuff as well.</p>
        <p>Here are some of the projects I&apos;ve worked on:</p>
        <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <li><a href="https://www.doomworld.com/forum/topic/145870-gzdoom-getting-a-bottle-of-water-simulator/">Getting A Bottle Of Water Simulator</a>: A short shitpost mod for Doom II about a man and his short, uneventful quest to quench his thirst.</li>
          <li><a href="https://wibblio.itch.io/watching-paint-dry-simulator/">watching paint dry simulator</a>: A short shitpost web game made in about a day because I was bored.</li>
          <li><a href="https://wibblio.itch.io/school-bathroom-simulator/">school bathroom simulator</a>: A short, comedic, (unfunny), choose-your-own-adventure-style shitpost game made in RPG Maker.</li>
          <li><a href="https://github.com/wibblio64/cs-jukebox/">CS Jukebox</a>: A Cave Story-themed music player made on a whim, just for the fun of it.</li>
        </ul>
      </main>
      <Nepeta />
    </>
  );
}
