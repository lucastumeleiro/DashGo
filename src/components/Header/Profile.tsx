import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Tumeleiro</Text>
          <Text color="gray.300" fontSize="small">
            lucasftumeleiro@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Lucas Tumeleiro"
        src="https://github.com/lucastumeleiro.png"
      />
    </Flex>
  );
}
