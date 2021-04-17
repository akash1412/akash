import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
	return (
		<Box
			id='about-section'
			px='.5rem'
			py='2rem'
			d='flex'
			flexDir='column'
			alignItems='center'>
			<Box mb='3rem' textAlign='center'>
				<Heading as='h1' fontSize='2.2rem' color='primaryDark'>
					About Me
				</Heading>
				<Heading
					as='h4'
					fontSize='1.5rem'
					mt='1rem'
					color='text'
					fontStyle='italic'>
					If you're
					<Box as='span' className='bold'>
						wondering
					</Box>
					who
					<Box as='span' className='bold'>
						I am
					</Box>
					...
				</Heading>
			</Box>

			<Box fontSize='1.5rem' color='text' textAlign='center'>
				<Text my='1.5rem'>
					I'm
					<Box as='span' className='title'>
						Akash
					</Box>
					, a 21 years old self-taught Front-end developer,from Odisha India.
					<br /> I Started My Web Development Journey About an year ago. <br />
					Started of with building a static website for my college event.
					<br />
					<br />
				</Text>
				<Text my='1.4rem' lineHeight='3rem'>
					My Current{" "}
					<Box as='span' className='title'>
						{" "}
						stack
					</Box>{" "}
					of{" "}
					<Box as='span' className='title'>
						languages/technologies
					</Box>{" "}
					is:
				</Text>
				<Text fontSize='1.6rem' lineHeight='3rem' color='primaryDark'>
					HTML - CSS - SASS - JAVASCRIPT - REACTJS - NEXTJS - WEBPACK <br />
					REDUX - FIREBASE - STYLED COMPONENTS - <br /> NODEJS - EXPRESS -
					MONGODB GRAPHQL
				</Text>
			</Box>
		</Box>
	);
};

export default About;
