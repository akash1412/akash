import { useState } from "react";
import { Document } from "react-pdf/dist/esm/entry.webpack";

import { Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resume from "../assets/pdf.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.min.js`;
const Resume = () => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess(d) {
		console.log(d);
	}

	return (
		<Document
			file='https://res.cloudinary.com/dhqp2dd6b/image/upload/v1618349775/o33wbjxdcparipkyalz4.pdf'
			onLoadSuccess={onDocumentLoadSuccess}>
			<Page pageNumber={pageNumber} />
		</Document>
	);
};

export default Resume;
