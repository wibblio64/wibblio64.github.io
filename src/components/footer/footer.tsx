import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <a href="https://github.com/wibblio64/">GitHub</a>
        <span>|</span>
        <a href="https://wibblio.itch.io/">itch.io</a>
        <span>|</span>
        <a href="https://www.doomworld.com/profile/49986-wibblio/">Doomworld</a>
        <span>|</span>
        <a href="https://www.youtube.com/@wibblio/">YouTube</a>
      </div>
      <div className={styles.right}>
        <a href="https://deltarune.com/">
          <Image src="/images/buttons/kris_where_tf_are_we.png" alt="" width={88} height={31} />
        </a>
        <a href="https://www.apple.com/">
          <Image src="/images/buttons/macintosh.gif" alt="" width={88} height={31} />
        </a>
        <a href="https://www.homestuck.com/">
          <Image src="/images/buttons/sburb.gif" alt="" width={88} height={31} />
        </a>
        <a href="https://www.neocities.org/">
          <Image src="/images/buttons/webpassion.gif" alt="" width={88} height={31} />
        </a>
        <a href="https://www.nintendo.com/">
          <Image src="/images/buttons/wii.gif" alt="" width={88} height={31} />
        </a>
      </div>
    </footer>
  );
}
