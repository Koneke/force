import type { ReactNode } from "react";
import styles from "./label.module.scss";

export function Label({
  color,
  children,
}: {
  color: string;
  children: ReactNode;
}) {
  return (
    <span
      className={styles.label}
      style={{ background: color }}
    >
      {children}
    </span>
  );
}

export function Trigger() {
  return <Label color="red">Trigger</Label>;
}

export function Exhaust() {
  return <Label color="green">Exhaust</Label>;
}

export function Enter() {
  return <Label color="blue">Enter</Label>;
}

export function Once() {
  return <Label color="purple">Once</Label>;
}

export function Death() {
  return <Label color="black">Death</Label>;
}

export function Quick() {
  return <Label color="orange">Quick</Label>;
}

export function End() {
  return <Label color="#0088ff">End</Label>;
}
