import type { ReactNode } from "react";
import styles from "./typography.module.scss";

export function BodyText({ children }: { children: ReactNode }) {
  return <span className={styles.bodyText}>{children}</span>;
}

export function Flavor({ children }: { children: ReactNode }) {
  return <span className={styles.flavor}>{children}</span>;
}

export function Keyword({ children }: { children: ReactNode }) {
  return <span className={styles.keyword}>{children}</span>;
}
