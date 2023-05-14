import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack,HStack} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'
const Navbar = () => {
  const {isOpen,onOpen,onClose}=useDisclosure()
  return (<>
  <Button
  pos={'fixed'} top={'4'} left={'4'} colorScheme='purple' p={'0'} w={'10'} h={'10'} borderRadius={"full"}   onClick={onOpen}>
<BiMenuAltLeft size={'25'}/>
  </Button>


  <Drawer isOpen={isOpen} placement='left' onClose={onClose}> 
<DrawerOverlay/>
<DrawerContent>
  <DrawerCloseButton color={'white'} background={'purple.700'}/>
  <DrawerHeader>VIDEO - HUB</DrawerHeader>
  <DrawerBody>


 <VStack>





<Button onClick={onClose}  colorScheme={'purple'} variant={'ghost'}>
  <Link to={'/'} >HOME</Link>
</Button>

<Button  onClick={onClose}  colorScheme={'purple'} variant={'ghost'}>
  <Link to={'/videos'}>VIDEOS</Link>
</Button>


<Button  onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
  <Link to={'/videos?category=free'}>FREE VIDEOS</Link>
</Button>


<Button  onClick={onClose}  colorScheme={'purple'} variant={'ghost'}>
  <Link to={'/upload'}>UP LOAD VIDEO</Link>
</Button>

    //</VStack>

<HStack pos={'absolute'} bottom={10}>
  <Button  onClick={onClose}  colorScheme='purple'variant={'outline'} m={'20px'}>
    <Link to={'/login'}> LOG IN</Link>
  </Button>


  <Button onClick={onClose}  colorScheme='purple'variant={'outline'}>
    <Link to={'/signup'}> SIGN UP</Link>
  </Button>
</HStack>

{/* </VStack> */}


  </DrawerBody>
</DrawerContent>
  </Drawer>
  </>
  )
}

export default Navbar