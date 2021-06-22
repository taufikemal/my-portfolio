import React from 'react';
import { Box, Heading, Flex, useColorMode, IconButton, Button, useDisclosure, Spacer } from '@chakra-ui/react';
import { Image, Modal, ModalOverlay, ModalContent, ModalBody, Text, Divider } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import useSound from 'use-sound';
import { Link } from 'react-router-dom';
import SoundClick from '../../../assets/sound/pop.mp3'

function Header(props) {
	const { colorMode, toggleColorMode } = useColorMode()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [play] = useSound(SoundClick);

	const changeDarkMode = () => {
		play();
		toggleColorMode();
	}

	return ( 
		<>
			<Flex
				as="header"
				align="center"
				position="fixed"
				zIndex="9999"
				padding="1.2rem"
				width="full"
				bg={colorMode === "light" ? "gray.50" : "gray.700"}
				color={colorMode === "light" ? "black" : "white"}
				{...props}
			>
			
			<Flex align="center" mr={4} px={8}>
				<Heading 
					as="h1" 
					size="xl" 
					letterSpacing={"-.0.1rem"} 
					fontSize={{ base: "md", md: "md", sm: "md", lg: "md" }}>
					<Link to="/">
						<Image boxSize="40px" src="https://ik.imagekit.io/fmafj2zdejw/logo-2_1_vXQXqSgXw.png" alt="Taufik Kemal" />
					</Link>
				</Heading>

				<Box 
					display={{ base: "none", md: "flex" }} 
					mt={{ base: 4, md: 0 }} 
					pl="12"
				>
				
				<Button 
					variant="ghost"
					px={4}
					color={colorMode === "light" ? "black" : "white"}
					fontWeight="normal"
					borderRadius="md"
					_hover={{
						bgGradient: "linear(to-r, teal.500,green.500)", color:"white"
					}}
				>
					<Link to="/">Home</Link> 
				</Button>

				<Button 
					variant="ghost"
					px={4}
					color={colorMode === "light" ? "black" : "white"}
					fontWeight="normal"
					borderRadius="md"
					_hover={{
						bgGradient: "linear(to-r, teal.500,green.500)", color:"white"
					}}
				>
					<Link to="/portofolio">Portofolio</Link> 
				</Button>

				<Button 
					variant="ghost"
					px={4}
					color={colorMode === "light" ? "black" : "white"}
					fontWeight="normal"
					borderRadius="md"
					_hover={{
						bgGradient: "linear(to-r, teal.500,green.500)", color:"white"
					}}
				>
					<Link to="/about">About Me</Link> 
				</Button>

				</Box>
				</Flex>
				
				<Spacer />

				<Box 
					display={{ base: "none", md: "flex" }} 
					mt={{ base: 4, md: 0 }} 
					px={8}
					alignContent="center"
				>
					<IconButton 
						size="xs" 
						bg="transparent" 
						icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} 
						onClick={changeDarkMode} aria-label="button" />
				</Box>

				<Box 
					display={{ base: "block", md: "none", lg: "none" }}
					px={8}
				>
					<IconButton 
						size="xs" 
						bg="transparent" 
						icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} 
						onClick={changeDarkMode} 
						aria-label="button" />

					<Button 
						size="xs" 
						bg="transparent" 
						onClick={onOpen}
					>👋
					</Button>
				</Box>
        </Flex>

        <Modal
					isCentered
					onClose={onClose}
					isOpen={isOpen}
					size="xs"
					motionPreset="slideInBottom"
        >
				<ModalOverlay />
          <ModalContent>
						<ModalBody>
							<Flex 
								align="center" 
								width="full" 
								wrap="wrap" 
								heigth="full"
							>
								<Box 
									as="button" 
									textAlign="left" 
									w="full" 
									display="flex" 
									h="min-content" 
									paddingY="1"
								>
									<Text 
										fontSize="xs" 
										paddingX="1" 
										fontWeight="bold"
									> <Link to="/">Beranda</Link> </Text>
								</Box>

								<Divider />

								<Box 
									as="button" 
									textAlign="left" 
									w="full" 
									display="flex" 
									h="min-content" 
									paddingY="1"
								>
									<Text 
										fontSize="xs" 
										paddingX="1" 
										fontWeight="bold"
									>
										<Link to="/portofolio">Portofolio</Link>
									</Text>
								</Box>

								<Spacer />
								<Divider />
							</Flex>
						</ModalBody>
          </ModalContent>
				</Modal>
    </>
	);
}

export default Header;