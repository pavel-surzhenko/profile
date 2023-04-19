import { Box } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
    'https://drive.google.com/uc?export=download&id=1apJwYKFQnC_6m__wxhyRYDjpYUUXYNVL';

export const Resume: React.FC = () => {
    return (
        <Box>
            <Document file={resumeLink}>
                <Page pageNumber={1}></Page>
            </Document>
        </Box>
    );
};
