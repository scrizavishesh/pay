import React, { useState, useEffect } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import { DownloadOrders, getAgents } from '../utils/Constants';
import { Document, Page, pdfjs } from 'react-pdf';
import PdfViewer from './PdfViewer';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Download = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showAgents, setShowAgents] = useState([]);
    const [agent, setAgent] = useState('');
    const [pdfBase64, setPdfBase64] = useState(null);
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);


    const handleAgent = (value) => setAgent(value);

    const handleDateChange = (dates) => {
        setStartDate(formatDate(dates[0]));
        setEndDate(formatDate(dates[1]));
    };

    const formatDate = (date) => {
        if (!date) return null;

        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Month is 0-indexed
        const day = date.getDate();

        return `${year}-${month}-${day}`;
    };

    const Download_Slip = async (e) => {
        e.preventDefault();
        if (agent) {
            try {
                const response = await DownloadOrders(startDate, endDate, agent);
                console.log(response);
                if (response?.status === 200) {
                    setPdfBase64(response?.data?.pdf_base64);
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    // const onDocumentLoadSuccess = ({ numPages }) => {
    //     setNumPages(numPages);
    // };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const agentsResponse = await getAgents();
                if (agentsResponse?.status === 200) setShowAgents(agentsResponse.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div class="container-fluid">

                <div>
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header gap-4 d-md-flex border-bottom-0">
                                    <div className="mb-3">
                                        <label className="form-label">Select Date</label>
                                        <div className="input-group me-3 flatpickr rounded flatpickr-input">
                                            <Flatpickr
                                                className="form-control"
                                                placeholder="Select Date"
                                                value={[startDate, endDate]}
                                                options={{
                                                    mode: 'range',
                                                    dateFormat: 'Y-n-j', // Adjusted date format
                                                }}
                                                onChange={handleDateChange}
                                            />
                                            <span className="input-group-text text-muted" id="basic-addon2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar icon-xs">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="customerEmail" className="form-label">Select Agent *</label>
                                        <select onChange={(e) => handleAgent(e.target.value)} className="form-select" aria-label="Default select example">
                                            <option defaultValue>Open this select menu</option>
                                            {showAgents?.length !== 0 ? (
                                                showAgents.map((provider) => (
                                                    <option key={provider.id} value={provider.id}>{provider.username}</option>
                                                )
                                                )) : (
                                                <option disabled>No data found</option>
                                            )}
                                        </select>
                                    </div>
                                    <div class="flex-grow-1 mt-5">
                                        <div className='mt-2'></div>
                                        <a onClick={Download_Slip} class="btn btn-primary">+ Get Report</a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    {/* <div>
                                        <h1>PDF Viewer</h1>
                                        {pdfBase64 && (
                                            <div>
                                                <Document
                                                    file={{ data: pdfBase64 }}
                                                    onLoadSuccess={onDocumentLoadSuccess}
                                                >
                                                    <Page pageNumber={pageNumber} />
                                                </Document>
                                                <p>Page {pageNumber} of {numPages}</p>
                                            </div>
                                        )}
                                        {!pdfBase64 && <p>Loading PDF...</p>}
                                    </div> */}
                                    <div>
                                        <PdfViewer pdfBase64={pdfBase64} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Download
