import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from "../common/component/layout/layout";
import { EmailIcon, DownloadIcon } from '@chakra-ui/icons'
import Pict1 from "../assets/images/pict 1.svg";
import Pict2 from "../assets/images/pict 2.svg";
import Pict3 from "../assets/images/pict 3.svg";
import Pict4 from "../assets/images/pict 4.svg";
import Pict5 from "../assets/images/pict 5.svg";
import Org1 from "../assets/images/b-1.png";
import Org2 from "../assets/images/b-2.png";
import Org3 from "../assets/images/b-3.png";
import Org4 from "../assets/images/b-4.png";
import { Box, Button, Text, Stack, Container, HStack, Grid, GridItem, Image, Link, Heading } from '@chakra-ui/react';


function Beranda(props) {
	return ( 
    <>
		<Layout >
			<Container 
					maxW="8xl" 
					pt ={{ base: "4", md: "20", lg: "20" }} 
					pl ={{ base: "4", md: "20", lg: "10" }}
					pr ={{ base: "4", md: "20", lg: "10" }}
				>
				<Grid
					templateColumns="repeat(2, 2fr)"
					templateRows="repeat(2, 2fr)" 
					gap={0}>
					
					<GridItem 
						width="full"
						height="full"
						alignContent="center"
						mt={48} 
						rowSpan={2}
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
									Hello, Welcome to my
								</Heading>
								<Heading 
									as="h1"
									bgGradient="linear(to-r, teal.500,green.400)"
									bgClip="text"
									fontSize="5xl"
									fontWeight="extrabold"
								>
									Personal Website
								</Heading>
							</Fade>
							</Box>

							<Fade duration={500} distance="30px" delay={100} fraction={0.4} left>
								<Text 
									letterSpacing={"-.0.01rem"} 
									lineHeight={"-.0.001rem"} 
									textAlign="justify" 
									fontSize={{ base: "lg", md: "md", lg: "xl" }}
								>
									I am Taufik Kemal Thaha, you can call me "Kemal" and i'am a Graphic Designer, Content creator and UI/UX Learner. Nice to meet you
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

									<Button leftIcon={<DownloadIcon />} colorScheme="teal" variant="ghost">
										<Link href="https://drive.google.com/file/d/1sHwu9XFt7JgLYxOf_LUubp5OlHdBHz4I/view?usp=sharing" isExternal>
											My Curriculum Vitae
										</Link>
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

				<br/>

				<Fade duration={700} distance="30px" fraction={0.4} bottom>
					<Heading 
						as="h1"
						bgGradient="linear(to-r, teal.500,green.500)"
						bgClip="text"
						fontSize="4xl"
						fontWeight="extrabold"
						justify="center"
						textAlign="center"
					>
						My Organizations
					</Heading>
				</Fade>

				<br/><br/>

				<HStack 
					spacing="24"
					justify="center"
				>
					<Fade duration={700} delay={400} distance="30px" fraction={0.4} bottom>
					<Link href="https://www.instagram.com/anakteknikindo/" isExternal>
						<Image
							width="60"
							src={Org1}
						/>
					</Link>
					</Fade>

					<Fade duration={800} delay={500} distance="30px" fraction={0.4} bottom>
					<Link href="https://www.instagram.com/anakteknikindo/" isExternal>
						<Image 
							width="60"
							src={Org2}
						/>
					</Link>
					</Fade>

					<Fade duration={900} delay={600} distance="30px" fraction={0.4} bottom>
					<Link href="https://www.instagram.com/dsc.ugm/" isExternal>
						<Image 	
							width="60"
							src={Org3}
						/>
					</Link>
					</Fade>

					<Fade duration={1000} delay={700} distance="30px" fraction={0.4} bottom>
					<Link href="https://www.instagram.com/mardliyyah.muda/" isExternal>
						<Image 	
							width="60"
							src={Org4}
						/>
					</Link>
					</Fade>
				</HStack>

				<br/><br/>

				<Grid
					templateColumns="repeat(2, 2fr)"
					templateRows="repeat(2, 2fr)" 
					gap={0}>
				<GridItem rowSpan={2} colSpan={1}>
					<Box mt={{ base: "44", md: "28", lg: "0" }}>
						<Fade duration={500} distance="30px" fraction={0.4} right>
							<Image 
								mr="6"
								width="full"
								height="full"
								src={Pict5}
							/>
						</Fade>
					</Box>
					</GridItem>
					
					<GridItem 
						width="full"
						height="full"
						alignContent="center"
						mt={32} 
						rowSpan={2}
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
									Keep Learning
								</Heading>
								<Heading 
									as="h1"
									bgGradient="linear(to-r, teal.500,green.400)"
									bgClip="text"
									fontSize="5xl"
									fontWeight="extrabold"
								>
									Keep Exploring
								</Heading>
							</Fade>
							</Box>

							<Fade duration={500} distance="30px" delay={100} fraction={0.4} left>
								<Text 
									letterSpacing={"-.0.01rem"} 
									lineHeight={"-.0.001rem"} 
									textAlign="justify" 
									fontSize={{ base: "lg", md: "md", lg: "xl" }}
								>
									Exploration and learning new things with anyone, anytime, and anywhere.
								</Text>
							</Fade>
							
							<br/>
							
						</GridItem>
				</Grid>

				<br/><br/>

				<Heading 
					as="h1"
					bgGradient="linear(to-r, teal.500,green.500)"
					bgClip="text"
					fontSize="4xl"
					fontWeight="extrabold"
					justify="center"
					textAlign="center"
				>
					What i learn
				</Heading>
				<br/><br/>

				<Grid templateColumns="repeat(3, 1fr)" gap={6}>
				<Fade duration={600} delay={300} distance="30px" fraction={0.4} bottom>
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
							>
								Learning about basic Front End Developing
							</Text>
						</Box>
				</Fade>

					<Fade duration={600} delay={400} distance="30px" fraction={0.4} bottom>
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
							>
								Learning about Content Making
							</Text>
						</Box>
					</Fade>

					<Fade duration={600} delay={500} distance="30px" fraction={0.4} bottom>
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
							>
								Learning about User Interface and User Experience Design
							</Text>
						</Box>
					</Fade>
				
				</Grid>
				</Container>
			</Layout>
		</>
	);
}

export default Beranda;