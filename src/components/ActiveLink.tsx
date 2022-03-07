import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}
// receber apenas um componente -> usar react.element
// receber um componente que pode conter outro dentro, ou um texto ou numero -> usar react.node

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  let isActive = false;
  const { asPath } = useRouter();
  if (shouldMatchExactHref && (asPath === rest.href || rest.as)) {
    isActive = true;
  }
  if (
    !shouldMatchExactHref && (asPath.startsWith(String(rest.href))) ||
    asPath.startsWith(String(rest.as))
  ) {
    isActive = true;
  }
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.500",
      })}
    </Link>
  );
}
