import { Link, Icon, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
}
// se eu passar so o nome do componente ele sera elementType.
// se eu passar a declaração do componente <Component></Component>

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text m="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
