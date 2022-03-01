import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}
// receber apenas um componente -> usar react.element
// receber um componente que pode conter outro dentro, ou um texto ou numero -> usar react.node

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const isActive = true;
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.500",
      })}
    </Link>
  );
}
