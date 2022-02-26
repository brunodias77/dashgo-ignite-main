import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Perfil({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Bruno Dias</Text>
          <Text color="gray.300" fontSize="small">
            brunohenriqueadias@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Bruno Dias"
        src="https://avatars.githubusercontent.com/u/51303140?s=400&u=2ac3d5fb25eea0d7e3c13d807768fc64b49b35af&v=4"
      ></Avatar>
    </Flex>
  );
}
