import { Box, Heading, Text, LinkOverlay, Link } from "@chakra-ui/react";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import "../index.css";

const Contact = () => {
	return (
		<Box id='contact-section' textAlign='center' py='2rem'>
			<Heading as='h1' fontSize='2.2rem' color='primaryDark'>
				CONTACT ME
			</Heading>
			<Heading
				as='h2'
				py='1.2rem'
				fontSize='1.8rem'
				fontWeight='400'
				color='text'>
				If you want <span className='bold'>talk</span>,you can{" "}
				<span className='bold'>find me</span> at:
			</Heading>
			<Box mt='4rem'>
				<Link
					class='link-decoration'
					href='mailto:akashorasad2000@gmail.com'
					fontWeight='bold'>
					<Heading as='h3' fontSize='1.7rem' fontWeight='500' d='inline-block'>
						akashorasad2000@gmail.com
					</Heading>
				</Link>

				<Box mt='5rem' d='flex' justifyContent='center'>
					<Box className='link-wrapper'>
						<a href='https://github.com/akash1412/'>
							<AiFillGithub className='icon' />
						</a>
					</Box>
					<Box className='link-wrapper'>
						<a href='https://twitter.com/_prasadakash'>
							<TiSocialTwitter className='icon' />
						</a>
					</Box>
					<Box className='link-wrapper'>
						<a href='https://www.linkedin.com/in/akash-prasad-a243ab190/'>
							<TiSocialLinkedin className='icon' />
						</a>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Contact;
