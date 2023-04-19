import { Download } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
    'https://raw.githubusercontent.com/pavel-surzhenko/profile/main/src/assets/CV_Pavlo_Surzhenko.pdf';

export const Resume: React.FC = () => {
    const [width, setWidth] = useState(1200);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoadSuccess, setIsLoadSuccess] = useState(false);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '25px',
                maxWidth: '100%',
                '& canvas': {
                    maxWidth: '100%',
                    height: 'auto !important',
                },
            }}
        >
            <Button
                startIcon={<Download />}
                href={resumeLink}
                variant='outlined'
            >
                Downoload
            </Button>
            <Document
                file={resumeLink}
                renderMode='canvas'
                onLoadSuccess={() => setIsLoadSuccess(true)}
                options={{
                    cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
                    cMapPacked: true,
                }}
                error={<Box>Opps, an arror occured!</Box>}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '15px',
                        mb: 3,
                    }}
                >
                    <Button
                        onClick={() => setPageNumber(1)}
                        variant={pageNumber === 1 ? 'contained' : 'outlined'}
                    >
                        EN
                    </Button>
                    <Button
                        onClick={() => setPageNumber(2)}
                        variant={pageNumber === 2 ? 'contained' : 'outlined'}
                    >
                        UA
                    </Button>
                </Box>
                <Page
                    pageNumber={pageNumber}
                    scale={width > 786 ? 1.8 : 0.6}
                ></Page>
            </Document>
            <Button
                startIcon={<Download />}
                href={resumeLink}
                variant='outlined'
            >
                Downoload
            </Button>
        </Box>
    );
};
