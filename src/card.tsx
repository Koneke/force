import type { ReactNode } from "react";
import styles from "./card.module.scss";
import classNames from "classnames";

export type Color = "black" | "red" | "yellow" | "green";

function toCssClass(color: Color) {
  switch (color) {
    case "black":
      return styles.cardBlack;
    case "red":
      return styles.cardRed;
    case "yellow":
      return styles.cardYellow;
    case "green":
      return styles.cardGreen;
  }
}

export type Card = {
  name: string;
  color: Color;
  cost: number;
  image: string;
  rules: Rule[];
  constructionCost: number;
  power: number;
  toughness: number;
}

export function Card({
  color,
  cost,
  constructionCost,
  name,
  rules,
}: {
  color: Color;
  cost: number;
  constructionCost: number;
  name: string;
  rules: Rule[];
}) {
  return (
    <div className={classNames(styles.root, toCssClass(color))}>
      <img src="./warrior-princess.png" className={styles.image} />
      <div className={styles.header}>
        <div className={styles.playCost}>{cost}</div>
        <div className={styles.name}>{name}</div>
      </div>
      <Rules
        rules={rules}
        constructionCost={constructionCost}
      />
    </div>
  );
}

function Rules({
  constructionCost,
  rules
}: {
  constructionCost: number;
  rules: Rule[]
}) {
  return (
    <div className={styles.rules}>
      <div className={styles.ruleTextWrapper}>
        {rules[0] && <Rule rule={rules[0]} />}
        {rules.length > 1 && rules.slice(1).map(r => (
          <>
            <Divider />
            <Rule rule={r} />
          </>
        ))}
      </div>
      <div className={styles.constructionCost}>{constructionCost}</div>
      <div className={styles.power}>1 / 1</div>
    </div>
  );
}

export type Rule =
  | { type: "plain"; text: string }
  | { type: "flavor"; text: string }
  | { type: "labeled"; label: string; color: string; text: string };

function Rule({ rule }: { rule: Rule }) {
  switch (rule.type) {
    case "plain":
      return <div className={styles.ruleText}>{rule.text}</div>;
    case "flavor":
      return <div
        className={styles.ruleText}
        style={{
          fontStyle: "italic",
          opacity: "0.7",
          fontSize: "0.5rem",
        }}
      >
        {rule.text}
      </div>;
    case "labeled":
      return <Labeled
        label={rule.label}
        color={rule.color}
      >{rule.text}</Labeled>;
    default:
      return null;
  }
}

function Labeled({
  label,
  color,
  children,
}: {
  label: string;
  color: string;
  children: ReactNode
}) {
  return (
    <div>
      <span className={styles.label} style={{ background: color }}>
        {label}
      </span>
      <span className={styles.ruleText}>{children}</span>
    </div>
  );
}

function Divider() {
  return <div className={styles.divider} />;
}
