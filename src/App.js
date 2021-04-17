import "./App.css";
import { Box } from "@chakra-ui/react";

import Main from "./components/Main";
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import { AiOutlineCaretDown } from "react-icons/ai";

import Projects from "./components/Projects";

function App() {
	return (
		<Box bg='background' pos='relative'>
			<Main>
				<Landing />
				<About />
				<Projects />
				<Contact />
			</Main>
			<Box
				position='fixed'
				right='2rem'
				bottom='10%'
				fontSize='2rem'
				p='.3rem'
				borderRadius='50%'
				bgColor='primaryDark'
				d='grid'
				placeItems='center'
				cursor='pointer'
				onClick={() =>
					document
						.getElementById("contact-section")
						.scrollIntoView({ behavior: "smooth", block: "start" })
				}>
				<AiOutlineCaretDown />
			</Box>
		</Box>
	);
}

export default App;
