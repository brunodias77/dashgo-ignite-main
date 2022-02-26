import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Perfil } from "./Perfil";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";

export function Header() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Perfil showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
