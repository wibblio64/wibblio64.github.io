"use client";

import styles from "./nepeta.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Nepeta() {
  const [speedX, setSpeedX] = useState(5);
  const [speedY, setSpeedY] = useState(0);
  const [direction, setDirection] = useState(1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const gravity = 0.75;
  const moveSpeed = 5;
  const jumpForce = 8;
  const meowRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    meowRef.current = new Audio("/sounds/meow.mp3");

    const interval = setInterval(() => {
      setSpeedX(speedX);
      setSpeedY(speedY - gravity);

      setX(x + speedX);
      setY(y + speedY);

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

  function meow(): void {
    if (meowRef.current) {
      meowRef.current.currentTime = 0;
      meowRef.current.play();
    }
  }

  return (
    <Image
      src="/images/nepeta.gif"
      alt=""
      width={187}
      height={220}
      draggable="false"
      className={styles.nepeta}
      style={{
        bottom: y,
        left: x,
        transform: `scaleX(${direction})`
      }}
      onClick={meow}
    />
  );
}