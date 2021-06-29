import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from "../common/component/layout/layout";
import { Box, Button, Text, Stack, Container, Grid, GridItem, Image, Link, Heading } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons'
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
							<Fade duration={500} delay={400} distance="30px" fraction={0.4} left>
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

							<Fade duration={500} distance="30px" delay={100} fraction={0.4} left>
								<Text 
									letterSpacing={"-.0.01rem"} 
									lineHeight={"-.0.001rem"} 
									textAlign="justify" 
									fontSize={{ base: "lg", md: "md", lg: "lg" }}
								>
								born in Palu, November 14, 2001. I like all about design, editing, videography, and music. Lives in Makassar and is currently studying at Software Engineering Technology Vocational School, Universitas Gadjah Mada, Yogyakarta, Indonesia.
								</Text>
							</Fade>
							
							<br/>
							<Fade duration={500} distance="30px" delay={300} fraction={0.4} left>
								<Stack direction="row" spacing={4} align="center">
									<Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
										<Link href="mailto: artcrev7@gmail.com" isExternal>
											Email me!
										</Link>
									</Button>
									<Button colorScheme="teal" variant="ghost">
										Button
									</Button>
								</Stack>
							</Fade>
						</GridItem>
					

					<GridItem rowSpan={2} colSpan={1}>
					<Box mt={{ base: "44", md: "28", lg: "0" }}>
						<Fade duration={500} distance="30px" fraction={0.4} right>
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
				<Fade duration={600} delay={300} distance="30px" fraction={0.4} left>
						<Box 
							p={8}
							w="100%" 
							h="100%" 
							bg="transparent"
						>
							<Image 
								width="full"
								height="full"
								src={Pict2}
							/>
							<Text 
								fontSize="lg"
								letterSpacing={"-.0.01rem"} 
								lineHeight={"-.0.001rem"} 
								textAlign="center" 
								fontSize={{ base: "lg", md: "md", lg: "lg" }}
							>
								Learning about basic Front End Developing
							</Text>
						</Box>
				</Fade>

					<Fade duration={600} delay={300} distance="30px" fraction={0.4} top>
						<Box 
							p={8}
							w="100%" 
							h="100%" 
							bg="transparent"
						>
							<Image 
								width="full"
								height="full"
								src={Pict3}
							/>
							<Text 
								fontSize="lg"
								letterSpacing={"-.0.01rem"} 
								lineHeight={"-.0.001rem"} 
								textAlign="center" 
								fontSize={{ base: "lg", md: "md", lg: "lg" }}
							>
								Learning about basic Front End Developing
							</Text>
						</Box>
					</Fade>

					<Fade duration={600} delay={300} distance="30px" fraction={0.4} right>
						<Box
							rounded="md"
							p={8}
							w="100%" 
							h="100%" 
							bg="transparent"
						>
							<Image 
								width="full"
								height="full"
								src={Pict4}
							/>
							<Text 
								fontSize="lg"
								letterSpacing={"-.0.01rem"} 
								lineHeight={"-.0.001rem"} 
								textAlign="center" 
								fontSize={{ base: "lg", md: "md", lg: "lg" }}
							>
								Learning about basic Front End Developing
							</Text>
						</Box>
					</Fade>
				
				</Grid>
				</Container>
			</Layout>
		</>
	);
}