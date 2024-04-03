import React, { useState, useEffect } from 'react'
import { createOrder, getAllOrders } from '../utils/Constants';
import { Link } from "react-router-dom";
import Create_Fund from './Create_Fund';

const Manual_Order = () => {



    const [orderCreate, setcreateOrder] = useState([])
    console.log(orderCreate, "hello data");

    const [type, setType] = useState("");
    const [agent, setAgent] = useState("");

    const handleType = (value) => {
        setType(value);
    }

    const handleAgent = (value) => {
        setAgent(value);
    }


    const CreateOrders = async (e) => {
        e.preventDefault();
        if ((type !== "", agent !== "")) {
            const formData = new FormData();
            formData.append("type", type);
            formData.append("agent", agent);
            try {
                const response = await createOrder(formData);
                console.log(response, "Login response");
                if (response?.status === 200) {
                    // setcreateOrder(response?.data);
                }
            } catch (err) {
                console.log(err)
            }
        }

    };

    useEffect(() => {
        getAllOrder();
    }, [])


    const getAllOrder = async () => {
        try {
            const response = await getAllOrders();
            console.log(response, "orderResponse");
            if (response?.status === 200) {
                setcreateOrder(response?.data);
            }
        } catch (err) {
            console.log(err)
        }

    };

 

    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-12">
                        {/* <!-- Page header --> */}
                        <div class="mb-5">
                            <h3 class="mb-0 ">Customers</h3>

                        </div>
                    </div>
                </div>
                <div>
                    {/* <!-- row --> */}
                    <div class="row">
                        <div class="col-12">
                            {/* <!-- card --> */}
                            <div class="card mb-4">
                                <div class="card-header  ">
                                    <div class="row justify-content-end">
                                        <div class=" col-lg-4 col-md-4">
                                            <input type="search" class="form-control " placeholder="Search for customer, email, phone, status or something" />
                                        </div>
                                        <div class="col-md-2 mb-3">
                                            <a type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Create Order</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive table-card">
                                        <table class="table text-nowrap mb-0 table-centered table-hover">
                                            <tbody>
                                                {orderCreate?.length !== 0 ? (
                                                    orderCreate?.map((provider) => {
                                                        return (
                                                            <tr>
                                                                <div class="row">
                                                                    <div class="col-xxl-9 col-12 mb-5">
                                                                        <div class="card h-100">
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
                                                                                    <Link to={`/create_fund/${encodeURIComponent(provider?.payment_url.slice(28))}`}  class="link-primary">Click here to payment</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-xxl-3 col-12 mb-5">
                                                                        <div class="card h-100">
                                                                            <div class="card-body d-flex justify-content-center align-items-center">
                                                                                <div class="text-center">
                                                                                    <span className={`badge ${provider?.approval_status === "APPROVED" ? 'badge-success-soft' :
                                                                                        (provider?.approval_status === "PENDING" ? 'badge-warning-soft' : 'badge-danger-soft'
                                                                                        )}`}>
                                                                                        {provider?.approval_status}
                                                                                    </span>

                                                                                    <h5>{provider?.payment_amount}</h5>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </tr>
                                                        );
                                                    })
                                                ) : (
                                                    <tr>
                                                        <td style={{ textAlign: "center" }} colSpan={6}>
                                                            No data found
                                                        </td>
                                                    </tr>
                                                )}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="card-footer d-md-flex justify-content-between align-items-center">
                                    <span>Showing 1 to 8 of 12 entries</span>
                                    <nav class="mt-2 mt-md-0">
                                        <ul class="pagination mb-0 ">
                                            <li class="page-item "><a class="page-link" href="#!">Previous</a></li>
                                            <li class="page-item active"><a class="page-link" href="#!">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#!">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#!">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#!">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Create Order</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div>
                                    <div class="mb-3">
                                        <label for="customerName" class="form-label">Type *</label>
                                        <select onChange={(e) => handleType(e.target.value)} class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="PAYIN">PAYIN</option>
                                            <option value="PAYOUT">PAYOUT</option>
                                            <option value="PAYOUT LINK">PAYOUT LINK</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="customerEmail" class="form-label">Agent *</label>
                                        <select onChange={(e) => handleAgent(e.target.value)} class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="11">Demo</option>
                                        </select>
                                    </div>
                                    <div class="text-end d-flex justify-content-between mt-2">
                                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                        <button onClick={CreateOrders} type="button" class="btn btn-primary me-1">+ Create</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manual_Order
