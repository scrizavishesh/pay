import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast';
// import { employGet } from '../utils/Constants';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getAgents, getCreatorAgents } from '../utils/Constants';
import ReactPaginate from 'react-js-pagination';

const StyledContainer = styled.div`
  .btn-outline-primary {
    background-color: #f4f4f4;
    --scriza-btn-color: #212b36;
    --scriza-btn-border-color: #cccccc;
    --scriza-btn-hover-color: #008479;
  }

  .btn {
    --scriza-btn-padding-x: 0.7rem;
    --scriza-btn-padding-y: 0.565rem;
    font-family: 'Open Sans', sans-serif;
    --scriza-btn-font-size: 13px;
    --scriza-btn-font-weight: 500;
    border-radius: 0.1rem;

  }
`;



const SubCreatorList = () => {

    const [Employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        getEmployess();
    }, [currentPage]);

    // Handle input change
    const handleInputChange = (value) => {
        setSearchTerm(value);
    };


    const getEmployess = async (e) => {
        const response = await getCreatorAgents();
        console.log(response, "resuser list")
        try {
            if (response?.status === 200) {
                toast.success("Gets all Sub Creators successfully");
                setEmployees(response?.data?.results);
                setTotalItems(response?.data?.count);
            } else {
            }
        } catch (err) {
            toast.error(err?.message);
        }
    };


    const customStyle = {
        '--bs-breadcrumb-divider': "'>'",
    };

    return (
        <>
            <div class="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <nav className="p-2" style={customStyle} aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Home</Link>{" "}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M9.55834 3.70009C9.67553 3.58305 9.83438 3.51731 10 3.51731C10.1656 3.51731 10.3245 3.58305 10.4417 3.70009L17.6833 10.9418C17.7406 11.0032 17.8096 11.0524 17.8862 11.0866C17.9629 11.1207 18.0457 11.1391 18.1296 11.1406C18.2135 11.1421 18.2968 11.1266 18.3747 11.0952C18.4525 11.0638 18.5232 11.017 18.5825 10.9576C18.6419 10.8983 18.6887 10.8276 18.7201 10.7498C18.7515 10.6719 18.767 10.5886 18.7655 10.5047C18.764 10.4207 18.7456 10.338 18.7115 10.2613C18.6773 10.1846 18.6281 10.1156 18.5667 10.0584L11.3258 2.81676C11.1517 2.64265 10.945 2.50454 10.7175 2.41031C10.4901 2.31608 10.2462 2.26758 10 2.26758C9.75378 2.26758 9.50996 2.31608 9.28247 2.41031C9.05498 2.50454 8.84828 2.64265 8.67417 2.81676L1.43251 10.0584C1.31871 10.1764 1.25579 10.3343 1.25729 10.4981C1.25879 10.662 1.32459 10.8187 1.44053 10.9346C1.55647 11.0504 1.71325 11.116 1.87713 11.1174C2.041 11.1187 2.19885 11.0557 2.31667 10.9418L9.55834 3.70009Z" fill="black" />
                                    <path d="M10 5.02657L16.7992 11.8257C16.8242 11.8507 16.8492 11.8741 16.875 11.8974V17.0624C16.875 17.9249 16.175 18.6249 15.3125 18.6249H12.5C12.3342 18.6249 12.1753 18.5591 12.0581 18.4418C11.9408 18.3246 11.875 18.1657 11.875 17.9999V14.2499C11.875 14.0841 11.8092 13.9252 11.6919 13.808C11.5747 13.6908 11.4158 13.6249 11.25 13.6249H8.75C8.58424 13.6249 8.42527 13.6908 8.30806 13.808C8.19085 13.9252 8.125 14.0841 8.125 14.2499V17.9999C8.125 18.1657 8.05915 18.3246 7.94194 18.4418C7.82473 18.5591 7.66576 18.6249 7.5 18.6249H4.6875C4.2731 18.6249 3.87567 18.4603 3.58265 18.1673C3.28962 17.8742 3.125 17.4768 3.125 17.0624V11.8974C3.15093 11.8742 3.17621 11.8503 3.20083 11.8257L10 5.0249V5.02657Z" fill="black" />
                                </svg></li>
                                <li className="breadcrumb-item active" aria-current="page">User List</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="col-md-7 d-flex align-items-center justify-content-end gap-2">

                        <StyledContainer>
                            <div className="btn-group mb-4" role="group" aria-label="Basic checkbox toggle button group">
                                <label className="btn btn-outline-primary" >
                                    <Icon icon="fa-solid:file-csv" width="1.2em" height="1.2em" />
                                    Export to CSV
                                </label>

                                <label className="btn btn-outline-primary" >
                                    <Icon icon="bi:file-earmark-pdf-fill" width="1.2em" height="1.2em" />
                                    Export to PDF
                                </label>
                            </div>
                        </StyledContainer>
                    </div>
                </div>


                <div>
                    {/* <!-- row --> */}
                    <div class="row">
                        <div class="col-12">
                            {/* <!-- card --> */}
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="table-responsive table-card">
                                        <table class="table text-nowrap mb-0 table-centered table-hover">
                                            <thead class="table-light">
                                                <tr>
                                                    <th></th>
                                                    <th class="ps-1">#</th>
                                                    <th>Username</th>
                                                    <th>Email Id</th>
                                                    <th>UPI Id</th>
                                                    <th>User</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Employees?.length !== 0 ? (
                                                    Employees?.map((employ) => {
                                                            return (
                                                                <tr key={employ.id}>
                                                                    <td class=" pe-0">
                                                                        <div class="form-check">
                                                                            <input class="form-check-input" type="checkbox" value="" id="contactCheckbox2" />
                                                                            <label class="form-check-label" for="contactCheckbox2">
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td class="ps-1">
                                                                        <a href="#!">{employ?.id}</a>
                                                                    </td>
                                                                    <td>{employ?.username}</td>
                                                                    <td>{employ?.email}</td>
                                                                    <td>{employ?.upi_id}</td>
                                                                    <td>
                                                                        <span className='badge bg-info'>
                                                                            {employ?.is_creator} SubCreator
                                                                        </span>
                                                                    </td>

                                                                    <td>
                                                                        <Link to={`/reset_password_sub_creator/${employ?.id}`} class="btn btn-icon btn-sm btn-ghost rounded-circle" role="button">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#182A75" d="M12.63 2c5.53 0 10.01 4.5 10.01 10s-4.48 10-10.01 10c-3.51 0-6.58-1.82-8.37-4.57l1.58-1.25C7.25 18.47 9.76 20 12.64 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8C8.56 4 5.2 7.06 4.71 11h2.76l-3.74 3.73L0 11h2.69c.5-5.05 4.76-9 9.94-9m2.96 8.24c.5.01.91.41.91.92v4.61c0 .5-.41.92-.92.92h-5.53c-.51 0-.92-.42-.92-.92v-4.61c0-.51.41-.91.91-.92V9.23c0-1.53 1.25-2.77 2.77-2.77c1.53 0 2.78 1.24 2.78 2.77zm-2.78-2.38c-.75 0-1.37.61-1.37 1.37v1.01h2.75V9.23c0-.76-.62-1.37-1.38-1.37" /></svg>
                                                                        </Link>
                                                                        <Link to={`/update_sub_creator/${employ?.id}`} class="btn btn-icon btn-sm btn-ghost rounded-circle" role="button">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#182A75" d="m21 6.757l-2 2V4h-9v5H5v11h14v-2.757l2-2v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6.003-6h10.995C20.55 2 21 2.455 21 2.992zm.778 2.05l1.414 1.415L15.414 18l-1.416-.002l.002-1.412z" /></svg>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            );
                                                    })
                                                ) : (
                                                    <tr>
                                                        <td style={{ textAlign: "center" }} colSpan={6}>
                                                            No data found
                                                        </td>
                                                    </tr>
                                                )
                                                }
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
            </div>
        </>
    )
}

export default SubCreatorList

