import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from "../common/component/layout/layout";
import { Box, Text, Container, Grid, GridItem, Image, Heading } from '@chakra-ui/react';

export default function Beranda(props) {
	return ( 
    <>
			<Layout >
        <Container maxW="8xl" paddingTop={{ base: "7", md: "20", lg: "40" }} paddingLeft={{ base: "7", md: "20", lg: "20" }} paddingRight={{ base: "7", md: "20", lg: "20" }} paddingBottom={{ base: "20" }} minHeight="90vh">
				<Grid 
					templateColumns="repeat(2, 2fr)"
					templateRows="repeat(2, 2fr)" 
					gap={8}>
					
					<GridItem rowSpan={1}>
						<Box mt={{ base: "44", md: "28", lg: "0" }}>
							<Fade duration={500} distance="30px" fraction={0.4} bottom>
								<Heading 
									as="h1"
									bgGradient="linear(to-r, teal.500,green.500)"
									bgClip="text"
									fontSize="6xl"
									fontWeight="extrabold"
								>
									Hello, My name is
								</Heading>
								<Heading 
									as="h1"
									bgGradient="linear(to-r, teal.500,green.500)"
									bgClip="text"
									fontSize="6xl"
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
							<Image src="https://ik.imagekit.io/fmafj2zdejw/logo-2_1_vXQXqSgXw.png"/>
						</Fade>
					</Box>
					</GridItem>

				</Grid>	
				</Container>
			</Layout>
		</>
	);
}