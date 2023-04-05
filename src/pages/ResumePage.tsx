import { Link } from '@mui/material';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

export const ResumePage: React.FC = () => {
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <div>
            <img
                src='Pavlo_Surzhenko.pdf'
                width='100px'
                height='100px'
            ></img>
        </div>
    );
};
