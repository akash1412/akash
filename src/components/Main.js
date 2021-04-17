import { Box } from "@chakra-ui/layout";

const Main = ({ children }) => {
	return (
		<Box
			py='5rem'
			minHeight={`calc(100vh - 7rem)`}
			color='#fff'
			marginX='auto'
			w='100%'
			d='flex'
			flexDir='column'
			alignItems='center'>
			{children}
		</Box>
	);
};

export default Main;
