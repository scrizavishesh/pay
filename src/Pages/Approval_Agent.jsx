import React, { useState, useEffect } from 'react';
import { createOrder, getAgentOrders, getAgents, getAllOrders, Orderapproval } from '../utils/Constants';
import toast from 'react-hot-toast';

const Approval_Agent = () => {
    const token = localStorage.getItem("token");
    const profile = JSON.parse(localStorage.getItem("data"));


    const [orderCreate, setCreateOrder] = useState([]);
    const [copiedItemId, setCopiedItemId] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const orderResponse = await getAgentOrders(profile[0]?.id);
            console.log(orderResponse)
            if (orderResponse?.status === 200 && orderResponse?.data?.results)
                setCreateOrder(orderResponse.data.results);
        } catch (err) {
            console.log(err);
        }
    };


    const ApprovedOrders = async (order_id, agent) => {
        const formData = new FormData();
        formData.append('utr', '1234567890');
        formData.append("approval_status", "APPROVED");
        formData.append("remark", "Payment verified and approved.");
        try {
            const response = await Orderapproval(formData, agent, order_id);
            console.log(response, "approveds")
            if (response?.status === 200) {
                setCopiedItemId(order_id);
                fetchData();
            }
        } catch (err) {
            console.log(err);
        }
    };




    useEffect(() => {
        if (!token) {
            toast.warning(
                "your session has been expired ...kindly login again.",
                "yellow"
            );
            navigate(`/`);
        }
    }, []);

  

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    };

    const handleClick = (order_id, receipt, agent) => {
        console.log(order_id, "orderid", receipt, "recepit", agent, "agemnt")
        const paymentUrl = `http://localhost:5173/create_fund/${order_id}/${receipt}/${agent}`;
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
                                        <input type="search" className="form-control" placeholder="Search for customer, email, phone, status or something" />
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
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <div class="d-grid mb-2 mb-md-0">
                                                                                    <button
                                                                                        className={`btn ${provider?.approval_status === "APPROVED" ? 'bg-success' : 'btn-danger'}`}
                                                                                        onClick={(e) => ApprovedOrders(provider?.order_id, provider?.agent)}
                                                                                    >
                                                                                        <i className="fe fe-shopping-cart me-2"></i>
                                                                                        {provider?.approval_status === "APPROVED"  ? 'Approved' : 'Is Approved'}
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
                                <span>Showing 1 to 8 of 12 entries</span>
                                <nav className="mt-2 mt-md-0">
                                    <ul className="pagination mb-0">
                                        <li className="page-item"><a className="page-link" href="#!">Previous</a></li>
                                        <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Approval_Agent;
