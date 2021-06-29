import React from 'react';
import Fade from 'react-reveal/Fade';
import Antek1 from "../assets/images/c-1.jpg";
import Antek2 from "../assets/images/c-2.png";
import Antek3 from "../assets/images/c-3.png";
import Dsc1 from "../assets/images/d-1.png";
import Dsc2 from "../assets/images/d-2.png";
import Dsc3 from "../assets/images/d-3.png";
import Dsc4 from "../assets/images/d-4.png";
import Marmud1 from "../assets/images/e-1.png";
import Marmud2 from "../assets/images/e-2.png";
import Marmud3 from "../assets/images/e-3.png";
import Marmud4 from "../assets/images/e-4.png";
import Layout from "../common/component/layout/layout";
import { Box, Text, Container, Grid, GridItem, Heading, Image, Link} from '@chakra-ui/react';


function Portfolio(props) {
	return ( 
		<>
			<Layout >
				<Container maxW="7xl" paddingTop={{ base: "7", md: "20", lg: "36" }} paddingLeft={{ base: "7", md: "20", lg: "20" }} paddingRight={{ base: "7", md: "20", lg: "20" }} paddingBottom={{ base: "20" }} minHeight="90vh">
				
				<Fade duration={500} distance="30px" fraction={0.4} bottom>
					<Box mt={{ base: "44", md: "28", lg: "0" }}>
						<Heading 
							as="h1" 
							letterSpacing={"-.0.001rem"} 
							lineHeight={"-.0.001rem"} 
							fontSize={{ base: "2xl", md: "5xl", lg: "6xl" }}
						>
						Anak Teknik Indonesia
						</Heading>

						<Text 
							letterSpacing={"-.0.01rem"} 
							lineHeight={"-.0.001rem"} 
							textAlign={{ base: "left" }} 
							fontSize={{ base: "xs", md: "xs", lg: "md" }} 
							maxW="xl"
						>
							Here are some of my User Interface and Instagram Feeds Designs 
							<Link href="https://www.instagram.com/anakteknikindo/" color="teal.500" isExternal> @anakteknikindo</Link> 
						</Text>
					</Box>
				</Fade>

				<Fade duration={500} distance="30px" delay={340} fraction={0.4} bottom>
					<Grid
						pt={4}
						h="full"
						maxH="600px"
						templateRows="repeat(6, 1fr)"
						templateColumns="repeat(12, 1fr)"
						gap={{base:2,md:4}}
					>

					<GridItem rowSpan={6} colSpan={8}>
						<Image
						src ={Antek1}
						loading="lazy"
						alt="picture"
						boxSize="full"
						objectFit="cover"
						borderRadius="md"
						width="full"
						height="full"
						/>
					</GridItem>

					<GridItem rowSpan={3} colSpan={4}>
						<Image
						src ={Antek2}
						alt=""
						loading="lazy"
						boxSize="full"
						objectFit="cover"
						borderRadius="md"
						width="full"
						height="full"
						/>
					</GridItem>

					<GridItem rowSpan={3} colSpan={4}>
						<Image
						loading="lazy"
						src ={Antek3}
						alt=""
						boxSize="full"
						objectFit="cover"
						borderRadius="md"
						width="full"
						height="full"
						/>
					</GridItem>
				</Grid>
				</Fade>

				<br/><br/><br/>

				<Fade duration={500} distance="30px" fraction={0.4} bottom>
					<Heading 
						as="h1" 
						letterSpacing={"-.0.001rem"} 
						lineHeight={"-.0.001rem"} 
						fontSize={{ base: "2xl", md: "5xl", lg: "6xl" }}
					>
						Developer Student Clubs UGM
					</Heading>
				</Fade>

				<Fade duration={500} distance="30px" fraction={0.4} bottom>
					<Text 
						letterSpacing={"-.0.01rem"} 
						lineHeight={"-.0.001rem"} 
						textAlign={{ base: "justify" }} 
						fontSize={{ base: "xs", md: "xs", lg: "md" }} 
						maxW="xl"
					>
						Here are some of my Instagram Feeds Designs 
						<Link href="https://www.instagram.com/dsc.ugm/" color="teal.500" isExternal> @dsc.ugm</Link> 
					</Text>
				</Fade>

				<Fade duration={500} distance="30px" delay={340} fraction={0.4} bottom>
					<Grid
					marginTop={{base:2,md:4}}
					w="100%"
					templateRows="repeat(1, 4fr)"
					templateColumns="repeat(4, 4fr)"
					gap={{base:2,md:4}}
					>

					<GridItem colSpan={1}>
						<Image
						src ={Dsc1}
						borderRadius="md"
						objectFit="cover"
						boxSize="full"
						/>
					</GridItem>

					<GridItem colSpan={1}>
						<Image
						src ={Dsc2}
						borderRadius="md"
						objectFit="cover"
						boxSize="full"
						/>
					</GridItem>

					<GridItem colSpan={1}>
						<Image
						src ={Dsc3}
						borderRadius="md"
						objectFit="cover"
						boxSize="full"
						/>
					</GridItem>

					<GridItem colSpan={1}>
						<Image
						src ={Dsc4}
						borderRadius="md"
						objectFit="cover"
						boxSize="full"
						/>
					</GridItem>
				</Grid>
				</Fade>
				
				<br/><br/><br/>

				<Fade duration={500} distance="30px" fraction={0.4} bottom>
					<Heading 
						as="h1" 
						letterSpacing={"-.0.001rem"} 
						lineHeight={"-.0.001rem"} 
						fontSize={{ base: "2xl", md: "5xl", lg: "6xl" }}
					>
						Mardliyyah UGM
					</Heading>
				</Fade>

				<Fade duration={500} distance="30px" fraction={0.4} bottom>
					<Text 
						letterSpacing={"-.0.01rem"} 
						lineHeight={"-.0.001rem"} 
						textAlign={{ base: "left" }} 
						fontSize={{ base: "xs", md: "xs", lg: "lg" }} 
						maxW="xl"
					>
						Here are some of my Booklet Designs 
						<Link href="https://www.instagram.com/mardliyyah.muda/" color="teal.500" isExternal> @mardliyyah.muda</Link> 
					</Text>
				</Fade>

				<Fade duration={500} distance="30px" delay={340} fraction={0.4} bottom>
					<Grid
					marginTop={{base:2,md:4}}
					h="full"
					templateRows="repeat(12, 1fr)"
					templateColumns="repeat(12, 1fr)"
					w="full"
					gap={{base:2,md:4}}
						>

					<GridItem rowSpan={6} colSpan={6}>
						<Image
						src ={Marmud1}
						alt=""
						loading="lazy"
						boxSize="full"
						objectFit="cover"
						borderRadius="md"
						width="full"
						height="full"
						/>
					</GridItem>

					<GridItem rowSpan={6} colSpan={6}>
						<Image
						src ={Marmud2}
						alt=""
						loading="lazy"
						boxSize="full"
						objectFit="cover"
						borderRadius="md"
						width="full"
						height="full"
						/>
					</GridItem>

					<GridItem rowSpan={6} colSpan={6}>
						<Image
						src ={Marmud3}
						alt=""
						loading="lazy"
						boxSize="full"
						objectFit="cover"
						borderRadius="md"
						width="full"
						height="full"
						/>
					</GridItem>

					<GridItem rowSpan={6} colSpan={6}>
						<Image
						src ={Marmud4}
						alt=""
						loading="lazy"
						boxSize="full"
						objectFit="cover"
						borderRadius="md"
						width="full"
						height="full"
						/>
					</GridItem>
				</Grid>
				</Fade>
				</Container>
			</Layout>
		</>
	);
}

export default Portfolio;