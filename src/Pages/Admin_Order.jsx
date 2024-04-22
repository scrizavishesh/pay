import React, { useState, useEffect } from 'react';
import { createOrder, getAgents, getAgentsfor, getAllOrders } from '../utils/Constants';
import toast from 'react-hot-toast';
import ReactPaginate from 'react-js-pagination';

const Admin_Order = () => {
    const profile = JSON.parse(localStorage.getItem("data"));
    const [orderCreate, setCreateOrder] = useState([]);
    const [showAgents, setShowAgents] = useState([]);
    const [type, setType] = useState('');
    const [agent, setAgent] = useState('');
    const [copiedItemId, setCopiedItemId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState("")

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const handleType = (value) => setType(value);
    const handleAgent = (value) => setAgent(value);

    const CreateOrders = async (e) => {
        e.preventDefault();
        if (type && agent) {
            const formData = new FormData();
            formData.append('type', type);
            formData.append('agent', agent);
            try {
                const response = await createOrder(formData);
                if (response?.status === 201) {
                    window.location.reload();
                }
            } catch (err) {
                console.log(err);
            }
        }
    };


    useEffect(() => {
        fetchData();
    }, [searchTerm, currentPage]);

    const fetchData = async () => {
        try {
            const orderResponse = await getAllOrders(searchTerm, currentPage);
            console.log(orderResponse, "Orderresponse")
            if (orderResponse?.status === 200 && orderResponse?.data?.results) {
                const filteredOrders = orderResponse.data.results.filter(order => order.client_name === profile[0]?.username);
                setCreateOrder(filteredOrders);
                setTotalItems(orderResponse?.data?.count);

            }

            const agentsResponse = await getAgentsfor();
            console.log(agentsResponse, "online Agent")
            if (agentsResponse?.status === 200) setShowAgents(agentsResponse.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleInputChange = (value) => {
        setSearchTerm(value);
    };







    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    };

    const handleClick = (order_id, receipt, agent) => {
        const paymentUrl = `https://pay-full-in.vercel.app/create_fund/${order_id}/${receipt}/${agent}`;
        copyToClipboard(paymentUrl);
        setCopiedItemId(order_id);
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
                                    <div className="col-md-2 mb-3">
                                        <a className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Create Order</a>
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
                                                                            <p className='mx-2'>PAYMENT URL:</p>
                                                                            <a type='button' onClick={(e) => handleClick(provider?.order_id, provider?.receipt, provider?.agent)} className="link-primary">{copiedItemId === provider.order_id ? 'Copied!' : 'Copy Payment URL'}</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-3 col-12 mb-5">
                                                                <div className="card h-100">
                                                                    <div className="card-body d-flex justify-content-center align-items-center">
                                                                        <div className="text-center">
                                                                            <span className={`badge ${provider?.approval_status === 'APPROVED' ? 'badge-success-soft' : (provider?.approval_status === 'PENDING' ? 'badge-warning-soft' : 'badge-danger-soft')}`}>
                                                                                {provider?.approval_status}
                                                                            </span>
                                                                            <h5>{provider?.payment_amount}</h5>
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

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create Order</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div>
                                    <div className="mb-3">
                                        <label htmlFor="customerName" className="form-label">Type *</label>
                                        <select onChange={(e) => handleType(e.target.value)} className="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="PAYIN">PAYIN</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="customerEmail" className="form-label">Agent *</label>
                                        <select onChange={(e) => handleAgent(e.target.value)} className="form-select" aria-label="Default select example">
                                            <option defaultValue>Open this select menu</option>
                                            {showAgents?.length !== 0 ? (
                                                showAgents.map((provider) => (
                                                    provider.is_checked_in ? (
                                                        <option key={provider.id} value={provider.id}>{provider.username}</option>
                                                    ) :
                                                        <option disabled>No agents are checked in!</option>
                                                ))
                                            ) : (
                                                <option disabled>No data found</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className="text-end d-flex justify-content-between mt-2">
                                        <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                        <button onClick={CreateOrders} type="button" className="btn btn-primary me-1">+ Create</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin_Order;
