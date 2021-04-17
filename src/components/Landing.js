import { Box, Heading, Link } from "@chakra-ui/layout";
import { BsChevronDown } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Landing = () => {
	return (
		<Box
			height='60vh'
			d='flex'
			flexDir='column'
			justifyContent='space-between'
			alignItems='center'>
			<Heading
				// justifySelf='flex-start'
				textAlign='center'
				as='h1'
				fontWeight='250'
				fontSize={["4rem", "4rem", "6rem"]}
				lineHeight='6rem'>
				Hello ✌🏾, I'm{" "}
				<Box as='span' color='primaryDark'>
					Akash.
				</Box>
			</Heading>
			<Box mt='9rem' alignSelf='stretch' d='flex' justifyContent='space-around'>
				<Box
					bgColor='primaryLight'
					borderRadius='10rem'
					px='1.5rem'
					py='.5rem'
					fontSize='1.1rem'
					textAlign='center'
					fontWeight='bold'
					cursor='pointer'
					onClick={() =>
						document
							.getElementById("about-section")
							.scrollIntoView({ behavior: "smooth" })
					}>
					ABOUT ME
				</Box>

				<Link>
					<Box
						bgColor='primaryLight'
						borderRadius='10rem'
						px='1.3rem'
						py='.5rem'
						fontSize='1.1rem'
						textAlign='center'
						fontWeight='bold'
						cursor='pointer'
						fontWeight='bold'
						d='flex'
						alignItems='center'
						textDecoration='none'>
						<FaTelegramPlane />
						<Box as='span' ml='.4rem'>
							RESUME
						</Box>
					</Box>
				</Link>
			</Box>

			<Box
				fontSize='4rem'
				py='2.5rem'
				mt='auto'
				cursor='pointer'
				onClick={() => {
					document
						.getElementById("projects-section")
						.scrollIntoView({ behavior: "smooth" });
				}}>
				<BsChevronDown className='iconDown' />
			</Box>
		</Box>
	);
};

export default Landing;
