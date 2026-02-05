import type { ReactNode } from "react";
import { BodyText, Keyword } from "../typography";

const verboseKeywords = false

export function KeywordShift({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <Keyword>Shift</Keyword>&#32;
      <BodyText>
        {verboseKeywords && (
          "(You may play this card into the cell of a creature you currently control by shuffling that creature back into your deck) "
        )}
        {children}
      </BodyText>
    </>
  )
}