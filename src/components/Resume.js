import { useState } from "react";
import { Document } from "react-pdf/dist/esm/entry.webpack";

import { Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resume from "../assets/pdf.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";

const Resume = () => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess(d) {
		console.log(d);
	}

	return (
		<Document
			file={resume}
			onLoadSuccess={onDocumentLoadSuccess}
			onLoadError={err => console.error(err)}>
			<Page pageNumber={pageNumber} />
		</Document>
	);
};

export default Resume;
