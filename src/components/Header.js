import { Flex, Button, Heading} from "@chakra-ui/react"
import { Download } from 'react-feather';

export function Header(){
  return (
    <Flex justify="space-around" h="100px" align="center" >
      <Heading  fontWeight="Bold" fontSize="40px" lineHeight="38.24px" zIndex={2}>SupaSteam</Heading>
      <Button
        leftIcon={<Download/>}
        bg="#214B6B"
        w="153px"
        h="40px"
        borderRadius="30px"
        fontSize="16px"
        lineHeight="15.3px"
        fontWeight="Bold"
      >
        Install
      </Button>

    </Flex>
  )
}
