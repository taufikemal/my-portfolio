import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from "../common/component/layout/layout";
import { Box, Text, Container, Grid, GridItem, Image, Heading } from '@chakra-ui/react';
import Pict1 from "../assets/images/pict 1.svg";
import Pict2 from "../assets/images/pict 2.svg";
import Pict3 from "../assets/images/pict 3.svg";
import Pict4 from "../assets/images/pict 4.svg";


export default function Beranda(props) {
	return ( 
    <>
		<Layout >
        <Container 
					maxW="8xl" 
					pt ={{ base: "4", md: "20", lg: "20" }} 
					pl ={{ base: "4", md: "20", lg: "10" }}
					pr ={{ base: "4", md: "20", lg: "10" }} 
					pb={{ base: "10" }} 
					minHeight="90vh"
				>
				<Grid
					templateColumns="repeat(2, 2fr)"
					templateRows="repeat(2, 2fr)" 
					gap={8}>
					
					<GridItem 
						width="full"
						height="full"
						alignContent="center"
						mt={48} 
						rowSpan={1}
					>
						<Box mt={{ base: "44", md: "28", lg: "0" }}>
							<Fade duration={500} distance="30px" fraction={0.4} bottom>
								<Heading 
									as="h1"
									bgGradient="linear(to-r, teal.500,green.500)"
									bgClip="text"
									fontSize="4xl"
									fontWeight="extrabold"
								>
									Hello, My name is
								</Heading>
								<Heading 
									as="h1"
									bgGradient="linear(to-r, teal.500,green.400)"
									bgClip="text"
									fontSize="5xl"
									fontWeight="extrabold"
								>
									Taufik Kemal Thaha
								</Heading>
							</Fade>
							</Box>



							<Fade duration={500} distance="30px" delay={100} fraction={0.4} bottom>
								<Text 
									letterSpacing={"-.0.01rem"} 
									lineHeight={"-.0.001rem"} 
									textAlign="justify" 
									fontSize={{ base: "lg", md: "md", lg: "lg" }}
								>
								born in Palu, November 14, 2001. I like all about design, editing, videography, and music. Lives in Makassar and is currently studying at Software Engineering Technology Vocational School, Universitas Gadjah Mada, Yogyakarta, Indonesia.
								</Text>
							</Fade>
						</GridItem>
					

					<GridItem rowSpan={2} colSpan={1}>
					<Box mt={{ base: "44", md: "28", lg: "0" }}>
        		<Fade duration={500} distance="30px" fraction={0.4} bottom>
							<Image 
								ml="4"
								width="full"
								height="full"
								src={Pict1}
							/>
						</Fade>
					</Box>
					</GridItem>
				</Grid>	

				
				<Grid templateColumns="repeat(3, 1fr)" gap={6}>
					<Box 
						p={8}
						w="100%" 
						h="100%" 
						bg="blue.100"
					>
						<Image 
							width="full"
							height="full"
							src={Pict2}
						/>
					</Box>

					<Box 
						p={8}
						w="100%" 
						h="100%" 
						bg="blue.100"
					>
						<Image 
							width="full"
							height="full"
							src={Pict3}
						/>
					</Box>

					<Box
						boxShadow="lg"
						rounded="md"
						p={8}
						w="100%" 
						h="100%" 
						bg="blue.100"
					>
						<Image 
							width="full"
							height="full"
							src={Pict4}
						/>
					</Box>
				
				</Grid>
				</Container>
			</Layout>
		</>
	);
}