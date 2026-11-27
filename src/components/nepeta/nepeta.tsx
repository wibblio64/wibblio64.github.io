"use client";

import { useEffect, useState } from "react";
import useSound from "use-sound";
import styles from "./nepeta.module.css";
import Image from "next/image";

export default function Nepeta() {
  const gravity: number = 0.75;
  const moveSpeed: number = 8;
  const jumpForce: number = 8;
  const [speedX, setSpeedX] = useState(moveSpeed);
  const [speedY, setSpeedY] = useState(0);
  const [direction, setDirection] = useState(1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [playMeow] = useSound("/sounds/meow.mp3");

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeedY(prevSpeedY => prevSpeedY - gravity);

      setX(prevX => prevX + speedX);
      setY(prevY => prevY + speedY);

      if (x < 0) {
        setX(0);
        setDirection(1);
        setSpeedX(moveSpeed);
      } else if (x > window.innerWidth - 187) {
        setX(window.innerWidth - 187);
        setDirection(-1);
        setSpeedX(-moveSpeed);
      }

      if (y < 0) {
        setY(0);
        setSpeedY(jumpForce);
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [direction, speedX, speedY, x, y]);

  return (
    <Image
      src="/images/nepeta.gif"
      alt=""
      width={187}
      height={220}
      draggable={false}
      loading="eager"
      fetchPriority="high"
      className={styles.nepeta}
      style={{
        bottom: y,
        left: x,
        transform: `scaleX(${direction})`
      }}
      onClick={() => playMeow()}
    />
  );
}