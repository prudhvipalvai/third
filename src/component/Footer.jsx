import { Box, Stack,Heading, HStack, Button, Input, VStack ,Text} from '@chakra-ui/react'
import React from 'react'
import {AttachmentIcon} from '@chakra-ui/icons';


  
const Footer = () => {
  return (

    <>
    
  
    <Box bgColor={'blackAlpha.800'} min={'40'} p={'16'} color={'white'}>
<Stack direction={['column','row']}>


    <VStack alignItems={'stretch'} w={'full'} px={'4'}>

   
<Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
    Subscribe to Get Update
</Heading>
<HStack borderBottom={'2px solid white'} py={'2'}>
    <Input placeholder='Enter Email Here .....' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
    <Button p={'0'} colorScheme='purple'  variant={'ghost'} borderRadius={'0 20px 20px 0'} bgColor={'white'} color={'purple'}>
   <AttachmentIcon/>
    </Button>
</HStack>
</VStack>


<VStack w={'full'}
borderLeft={['none',"1px solid white"]}
borderRight={['none',"1px solid white"]}


>
<Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
VIDEO
</Heading>
<Text> All Right Received</Text>
</VStack>

<VStack w={'full'}



>
    <Heading size={'md'} textTransform={'uppercase'}>
Social Media
    </Heading>
<Button variant={'link'} colorScheme='purple'><a href="" target='black'>
YOUTUBE
</a>
</Button>

<Button variant={'link'} colorScheme='purple'><a href="" target='black'>
INSTAGRAM
</a>
</Button>
<Button variant={'link'} target colorScheme='purple'><a href="" target='black'>
FACEBOOK
</a>
</Button>


</VStack>

</Stack>
    </Box>
























    </>
  )
}

export default Footer