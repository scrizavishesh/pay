import React, { useState, useEffect } from 'react';
import { createOrder, getAgentOrders, getAgents, getAllOrders, Orderapproval } from '../utils/Constants';
import toast from 'react-hot-toast';
import ReactPaginate from 'react-js-pagination';
import { Button, Modal } from 'react-bootstrap';


const Approval_Agent = () => {
    // const profile = JSON.parse(localStorage.getItem("data"));


    const [showModal, setShowModal] = useState(false);

    const [ApprovedStatus, setApprovedStatus] = useState(null)
    const [orderCreate, setCreateOrder] = useState([]);
    const [utr, setutr] = useState("");
    const [utrValidError, setutrValidError] = useState(false);
    const [utrIsRequiredError, setutrIsRequiredlError] = useState(false);
    const [remark, setRemark] = useState("");
    const [remarkValidError, setRemarkValidError] = useState(false);
    const [remarkIsRequiredError, setRemarkIsRequiredlError] = useState(false);
    const [order_id, setOrder_id] = useState("");
    const [agent, setAgent] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCloseModal = () => setShowModal(false);

    useEffect(() => {
        fetchData();
    }, [searchTerm, currentPage]);

    const fetchData = async () => {
        // try {
        //     const orderResponse = await getAllOrders(profile[0]?.id);
        //     console.log(orderResponse)
        //     if (orderResponse?.status === 200 && orderResponse?.data?.results)
        //         setCreateOrder(orderResponse.data.results);
        // } catch (err) {
        //     console.log(err);
        // }

        try {
            const orderResponse = await getAllOrders(searchTerm, currentPage);
            if (orderResponse?.status === 200) {
                // const filteredOrders = orderResponse.data.results.filter(order => order.agent === profile[0]?.id);
                setTotalItems(orderResponse?.data?.count);
                setCreateOrder(orderResponse?.data?.results);  
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleInputChange = (value) => {
        setSearchTerm(value);
    };

    const handleUTR = (value) => {
        setutr(value);
        const rex = /^[A-Za-z0-9]{10,20}$/;
        if (value === "") {
            setutrValidError(false);
            setutrIsRequiredlError(true);
        } else if (rex.test(value) === false) {
            setutrValidError(true);
            setutrIsRequiredlError(false);
        } else {
            setutrValidError(false);
            setutrIsRequiredlError(false);
        }
    }

    const handleRemark = (value) => {
        setRemark(value);
        const rex = /^[a-zA-Z\s]*$/;
        if (value === "") {
            setRemarkValidError(false);
            setRemarkIsRequiredlError(true);
        } else if (rex.test(value) === false) {
            setRemarkValidError(true);
            setRemarkIsRequiredlError(false);
        } else {
            setRemarkValidError(false);
            setRemarkIsRequiredlError(false);
        }
    }


    const handleApprove = (order_id, agent) => {
        setOrder_id(order_id);
        setAgent(agent);
        if (order_id, agent) {
            setShowModal(true)
        }
    }


    const ApprovedOrders = async () => {
        if (utr === "" || !utr) {
            setutrIsRequiredlError(true);
        }
        if (remark === "" || !remark) {
            setRemarkIsRequiredlError(true);
        }
        if ((utr !== "", remark !== "")) {
            const formData = new FormData();
            formData.append('utr', utr);
            formData.append("approval_status", "APPROVED");
            formData.append("remark", remark);
            try {
                const response = await Orderapproval(formData, agent, order_id);
                if (response?.status === 200) {
                    toast.success("Order Approved Successfully");
                    setApprovedStatus(response?.data?.approval_status)
                    setCopiedItemId(order_id);
                    fetchData();
                    setShowModal(false)
                }
            } catch (err) {
                console.log(err);
            }
        }
    };








    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="mb-5">
                            <h3 className="mb-0">Manual Orders</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-4">
                            <div className="card-header">
                                <div className="row justify-content-end">
                                    <div className="col-lg-4 col-md-4">
                                        <input value={searchTerm} onChange={(e) => handleInputChange(e.target.value)} type="search" className="form-control" placeholder="Search for customer, email, phone, status or something" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive table-card">
                                    <table className="table text-nowrap mb-0 table-centered table-hover">
                                        <tbody>
                                            {orderCreate?.length !== 0 ? (
                                                orderCreate?.map((provider) => (
                                                    <tr key={provider.order_id}>
                                                        <div className="row">
                                                            <div className="col-xxl-9 col-12 mb-5">
                                                                <div className="card h-100">
                                                                    <div class="card-body">
                                                                        <div class='d-flex justify-content-between flex-wrap'>
                                                                            <div class="d-flex flex-column">
                                                                                <div class="d-flex justify-content-start">
                                                                                    <p className='mx-2'>TYPE:</p>
                                                                                    <h5>{provider?.type}</h5>
                                                                                </div>
                                                                                <div class="d-flex justify-content-start">
                                                                                    <p className='mx-2'>RECEIPT:</p>
                                                                                    <h5>{provider?.receipt}</h5>
                                                                                </div>
                                                                                <div class="d-flex justify-content-start">
                                                                                    <p className='mx-2'>CLIENT NAME:</p>
                                                                                    <h5>{provider?.client_name}</h5>
                                                                                </div>
                                                                                <div class="d-flex justify-content-start">
                                                                                    <p className='mx-2'>CREATED AT:</p>
                                                                                    <h5>{provider?.created_at}</h5>
                                                                                </div>
                                                                                <div class="d-flex justify-content-start">
                                                                                    <p className='mx-2'>APPROVED AT:</p>
                                                                                    <h5>{provider?.approved_at}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <div class="d-flex flex-column">
                                                                                <div class="d-flex justify-content-start">
                                                                                    <p className='mx-2'>ORDER ID:</p>
                                                                                    <h5>{provider?.order_id}</h5>
                                                                                </div>
                                                                                <div class="d-flex justify-content-start">
                                                                                    <p className='mx-2'>CLIENT UPI:</p>
                                                                                    <h5>{provider?.upi}</h5>
                                                                                </div>
                                                                                <div class="d-flex justify-content-start">
                                                                                    <p className='mx-2'>UTR:</p>
                                                                                    <h5>{provider?.utr}</h5>
                                                                                </div>
                                                                                <div class="d-flex justify-content-start">
                                                                                    <p className='mx-2'>CUSTOMER UTR:</p>
                                                                                    <h5>{provider?.customer_utr}</h5>
                                                                                </div>
                                                                                <div class="d-flex justify-content-start">
                                                                                    <p className='mx-2'>WEBSITE:</p>
                                                                                    <h5>{provider?.website}</h5>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="d-flex justify-content-start">
                                                                            <p className='mx-2'>Payment Amount:</p>
                                                                            <h5>{provider?.payment_amount}</h5>
                                                                            {/* <a type='button' onClick={(e) => handleClick(provider?.order_id, provider?.receipt, provider?.agent)} className="link-primary">{copiedItemId === provider.order_id ? 'Copied!' : 'Copy Payment URL'}</a> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-3 col-12 mb-5">
                                                                <div className="card h-100">
                                                                    <div className="card-body d-flex justify-content-center align-items-center">
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <div class="d-grid mb-2 mb-md-0">
                                                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                                                        className={`btn ${provider?.approval_status === "APPROVED" ? 'bg-success' : 'btn-danger'}`}
                                                                                        onClick={(e) => handleApprove(provider?.order_id, provider?.agent)}
                                                                                        disabled={provider?.approval_status === "APPROVED"}
                                                                                    >
                                                                                        <i className="fe fe-shopping-cart me-2"></i>
                                                                                        {provider?.approval_status === "APPROVED" ? 'Approved' : ' Approve'}
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td style={{ textAlign: 'center' }} colSpan={6}>No data found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer d-md-flex justify-content-between align-items-center">
                                <span>Showing {(currentPage - 1) * 8 + 1} to {Math.min(currentPage * 8, totalItems)} of {totalItems} entries</span>
                                <nav className="mt-2 mt-md-0">
                                    <ReactPaginate
                                        activePage={currentPage}
                                        itemsCountPerPage={8}
                                        totalItemsCount={totalItems}
                                        pageRangeDisplayed={8}
                                        onChange={(e) => handlePageChange(e)}
                                        prevPageText="Previous"
                                        nextPageText="Next"
                                        itemClass="page-item"
                                        linkClass="page-link"
                                    />
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Approval</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div>
                            <div className="mb-3">
                                <label htmlFor="customerName" className="form-label">UTR Number *</label>
                                <input onChange={(e) => handleUTR(e.target.value)} type="text" class="form-control" placeholder="Enter UTR number" required="" />
                                {utrIsRequiredError && (
                                    <div className='text-start p-2' style={{ color: "red", fontSize: "x-small" }}>
                                        UTR Number is required
                                    </div>
                                )}
                                {utrValidError && (
                                    <div className='text-start p-2' style={{ color: "red", fontSize: "x-small" }}>
                                        Please enter valid UTR number
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="customerEmail" className="form-label">Remark *</label>
                                <input onChange={(e) => handleRemark(e.target.value)} type="text" class="form-control" placeholder="Enter Remark" required="" />
                                {remarkIsRequiredError && (
                                    <div className='text-start p-2' style={{ color: "red", fontSize: "x-small" }}>
                                        Remark Number is required
                                    </div>
                                )}
                                {remarkValidError && (
                                    <div className='text-start p-2' style={{ color: "red", fontSize: "x-small" }}>
                                        Please enter valid Remark
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className='justify-content-between'>
                    <div className="text-end d-flex justify-content-between mt-2">
                        <button type="button" onClick={ApprovedOrders} className="btn btn-primary me-1">+ APPROVED</button>
                    </div>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>






        </>
    );
};

export default Approval_Agent;
