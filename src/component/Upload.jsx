import React from 'react'
import {Container,HStack,VStack,Input, Button} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
const Upload = () => {
  return (
   <Container maxW={'container.xl'} h={'100vh'} p={'16'} justifyContent={'center'}>

<VStack color={'purple.500'} h={'full'}>
<AddIcon size={'600px'} fontSize={'50px'}/>


<form action="">
    <HStack>
        <Input required type='file' css={{
            color:"purple",backgroundColor:"white" ,cursor:"pointer"
        }}/>
        <Button colorScheme='purple' type='submit'>Upload</Button>
    </HStack>
</form>
</VStack>
   </Container>
  )
}

export default Upload