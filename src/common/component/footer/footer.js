import React from 'react';
import { Box, Grid, Link, Text } from '@chakra-ui/react';

export default function Footer(props) {
	return ( 
		<>
			<br/>
			<br/>

			<Grid templateColumns="repeat(2, 1fr)" gap={12}>
				<Box pt="4" pb="4" bottom="0" position="relative" as="footer">
					<Text 
						letterSpacing={"-.0.001rem"} 
						lineHeight={"-.0.001rem"} 
						fontSize={{ base :"md", md:"md"}} 
						fontWeight="medium"
						textAlign="center"
					>
						Follow my IG <Link href="https://www.instagram.com/taufikemal_" color="teal.500" isExternal>@taufikemal_</Link>
					</Text>
				</Box>

				<Box pt="4" pb="4" bottom="0" position="relative" as="footer" textAlign="center">
					<Text 
						letterSpacing={"-.0.001rem"} 
						lineHeight={"-.0.001rem"} 
						fontSize={{ base :"md", md:"md"}} 
						fontWeight="medium"
					>
						Taufik Kemal Thaha © 2021
					</Text>
				</Box>
			</Grid>

			<br/>
			<br/>
		</>
	);
}