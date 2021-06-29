import React from 'react';
import { Box, Grid, Link, Text } from '@chakra-ui/react';

export default function Footer(props) {
	return ( 
		<>
			<Grid templateColumns="repeat(2, 1fr)" gap={12}>
			<Box pt="4" pb="4" bottom="0" position="relative" as="footer" textAlign="center">
				<Text 
					letterSpacing={"-.0.001rem"} 
					lineHeight={"-.0.001rem"} 
					fontSize={{ base :"md", md:"md"}} 
					fontWeight="medium"
				>
					Taufik Kemal Thaha <Link href="https://www.instagram.com/p/CO1MxEao-RV/" color="teal.500" isExternal>@UI/UX</Link>
				</Text>
			</Box>
			</Grid>
			<br/>
		</>
	);
}