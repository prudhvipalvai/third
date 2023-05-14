import { Box,Container,Heading, Img, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
//  import   'react-responsive-carousel/lib/styles/carousel.min.css'

import img2  from '../asserts/2.jpg'
import img3  from '../asserts/3.jpg'
import img4  from '../asserts/4.jpg'
import img5 from '../asserts/5.jpg'
// import { Carousel } from 'react-responsive-carousel'
// const HeadingOptions={
//     pos:"absolute",
//     left:"50%",
//     top:"50%",
//     transform:"translate(-50%,-50%)",
//     textTransform:"uppercase",
//     p:'4',
//     size:"2xl"
// }
const Home = () => {
  return (<Box>
{/* <Mycarousel/> */}
{/* <Img src={img1}/> */}
{/* <div     autoPlay
     infiniteLoop
      interval={1000}
       showStatus={false} 
       showThumbs={false}
       showArrows={false} >
        <Box w='full' h={'100vh'}>
<Img src={img1} />
<Heading bgColor={'white'} color={'black'}  {...HeadingOptions} >Watch The Future</Heading>
</Box>

</div> */}

<Container maxH={'container.xl'} minH={'100vh'} >
    <Heading textTransform={'uppercase'} py={'2'} borderBottom={'2px solid'} w={'fit-content'} m={'auto'}>services</Heading>


    <Stack h='full'  p={'4'} alignItems={'center'}   w='full'>
<Image src={img5} h={'300'} />
<Text lineHeight={"120%"} p={'4'} textAlign={'center'}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aperiam sed modi sit quasi quae sint maiores deleniti nulla, veritatis consequuntur nobis maxime autem ipsam enim earum tenetur blanditiis architecto.


</Text>
  
    </Stack>
</Container>






  </Box>
  )
}

// const Mycarousel=()=>{
//     <Carousel 
//     autoPlay
//      infiniteLoop
//       interval={1000}
//        showStatus={false} 
//        showThumbs={false}
//        showArrows={false}>
// <Box w='full' h={'100vh'}>
// <Img src={img2} />
// <Heading bgColor={'white'} color={'black'}>Watch The Future</Heading>
// </Box>

// <Box w='full' h={'100vh'}>
// <Img src={img2} />
// <Heading bgColor={'black'} color={'white'}>Watch The Future</Heading>
// </Box>
// <h1>this is home page</h1>
//     </Carousel>
// }
export default Home