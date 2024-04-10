import React, { useState } from 'react';

const PdfPreview = ({ pdfBase64 }) => {
    const [pdfUrl, setPdfUrl] = useState(null);

    // Function to convert base64 to blob
    const base64ToBlob = (base64Data, contentType) => {
        const sliceSize = 512;
        const byteCharacters = atob(base64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        return new Blob(byteArrays, { type: contentType });
    };

    // Function to preview PDF
    const previewPdf = () => {
        const blob = base64ToBlob(pdfBase64, 'application/pdf');
        const pdfUrl = URL.createObjectURL(blob);
        setPdfUrl(pdfUrl);
    };

    // Function to handle download
    const handleDownload = () => {
        const blob = base64ToBlob(pdfBase64, 'application/pdf');
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'document.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <>
            {pdfBase64 && (
                <div>
                    <button onClick={previewPdf} className="btn btn-primary mx-3">Preview PDF</button>
                    <button onClick={handleDownload} className="btn btn-primary">Download PDF</button>
                </div>
            )}
            {pdfUrl && (
                <div style={{ marginTop: '20px' }}>
                    <iframe
                        title="PDF Preview"
                        src={pdfUrl}
                        style={{ width: '100%', height: '500px' }}
                    />
                </div>
            )}
        </>
    );
};

export default PdfPreview;
