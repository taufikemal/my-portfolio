import React from 'react';
import { Box, Heading, Flex, useColorMode, IconButton, Button, useDisclosure, Spacer } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalBody, Text, Divider } from "@chakra-ui/react";
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
				padding="1.0rem"
				width="full"
				bg={colorMode === "light" ? "gray.50" : "gray.700"}
				color={colorMode === "light" ? "black" : "white"}
				{...props}
			>
			
			<Flex align="center" mr={5}>
				<Heading as="h1" size="xl" letterSpacing={"-.0.1rem"} fontSize={{ base: "md", md: "md", sm: "md", lg: "md" }}>
					Portofolio
				</Heading>

				<Box 
					display={{ base: "none", md: "flex" }} 
					mt={{ base: 4, md: 0 }} 
					pl="12"
				>
				
				<Button 
					variant="ghost"
					p={4}
					color={colorMode === "light" ? "black" : "white"}
					fontWeight="normal"
					borderRadius="md"
					_hover={{
						bgGradient: "linear(to-r, teal.500,green.500)", color:"white"
					}}
				>
					<Link to="/">Beranda</Link> 
				</Button>

				<Button 
					variant="ghost"
					p={4}
					color={colorMode === "light" ? "black" : "white"}
					fontWeight="normal"
					borderRadius="md"
					_hover={{
						bgGradient: "linear(to-r, teal.500,green.500)", color:"white"
					}}
				>
					<Link to="/portofolio">Portofolio</Link> 
				</Button>

				</Box>
				</Flex>
				
				<Spacer />

				<Box 
					display={{ base: "none", md: "flex" }} 
					mt={{ base: 4, md: 0 }} 
					alignContent="center"
				>
					<IconButton 
						size="xs" 
						bg="transparent" 
						icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} 
						onClick={changeDarkMode} aria-label="button" />
				</Box>

				<Box display={{ base: "block", md: "none", lg: "none" }}>
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