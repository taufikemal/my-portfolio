import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from "../common/component/layout/layout";
import { Box, Button, Center, Text, Stack, Container, Grid, GridItem, Image, Link, Heading } from '@chakra-ui/react';
import { DownloadIcon, EmailIcon } from '@chakra-ui/icons'
import Pict8 from "../assets/images/pict 8.png";


export default function Beranda(props) {
	return ( 
    <>
		<Layout >
        <Container 
					maxW="8xl" 
					pt ={{ base: "4", md: "20", lg: "20" }} 
					pl ={{ base: "4", md: "20", lg: "10" }}
					pr ={{ base: "4", md: "20", lg: "10" }}
					minHeight="90vh"
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
										<Link href="https://chakra-ui.com" isExternal>
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
								mx="12"
								my="1"
								width="600"
								height="600"
								src={Pict8}
							/>
						</Fade>
					</Box>
					</GridItem>
				</Grid>	

				<Heading 
					as="h1"
					bgGradient="linear(to-r, teal.500,green.500)"
					bgClip="text"
					fontSize="4xl"
					fontWeight="extrabold"
					justify="center"
					textAlign="center"
				>
					The tools I use
				</Heading>

				<br/>

				<Grid templateColumns="repeat(3, 2fr)" gap={6}>
				<Fade duration={600} delay={300} distance="30px" fraction={0.4} bottom>
						<Center 
							p={2}
							w="100%" 
							h="100%" 
							bg="pink.300"
							alignItems="center"
						>
							<Image 
								width="60%"
								height="60%"
								src={"https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg"}
							/>
						</Center>
				</Fade>

				<Fade duration={600} delay={300} distance="30px" fraction={0.4} bottom>
						<Center 
							p={2}
							
							w="100%" 
							h="100%" 
							bg="green.100"
							alignItems="center"
						>
							<Image
								my={16} 
								width="60%"
								src={"https://crackedrar.com/wp-content/uploads/2019/04/CorelDRAW-2018-Logo.png"}
							/>
						</Center>
				</Fade>

				<Fade duration={600} delay={300} distance="30px" fraction={0.4} bottom>
						<Center 
							p={2}
							w="100%" 
							h="100%" 
							bg="purple.600"
							alignItems="center"
						>
							<Image 
								width="60%"
								height="60%"
								src={"https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg"}
							/>
						</Center>
				</Fade>

				<Fade duration={600} delay={300} distance="30px" fraction={0.4} top>
						<Center 
							p={2}
							w="100%" 
							h="100%" 
							bg="orange.500"
							alignItems="center"
						>
							<Image 
								width="60%"
								height="60%"
								src={"https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"}
							/>
						</Center>
				</Fade>

				<Fade duration={600} delay={300} distance="30px" fraction={0.4} top>
						<Center 
							p={2}
							w="100%" 
							h="100%" 
							bg="cyan.300"
							alignItems="center"
						>
							<Image 
								width="60%"
								height="60%"
								src={"https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"}
							/>
						</Center>
				</Fade>

				<Fade duration={600} delay={300} distance="30px" fraction={0.4} top>
						<Center 
							p={2}
							w="100%" 
							h="100%" 
							bg="purple.800"
							alignItems="center"
						>
							<Image 
								width="60%"
								height="60%"
								src={"https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg"}
							/>
						</Center>
				</Fade>
				
				</Grid>
				</Container>
			</Layout>
		</>
	);
}