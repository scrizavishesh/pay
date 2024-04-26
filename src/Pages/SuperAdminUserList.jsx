import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast';
// import { employGet } from '../utils/Constants';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DownloadUserList, getAgents } from '../utils/Constants';
import ReactPaginate from 'react-js-pagination';
import { CSVLink } from 'react-csv';

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



const SuperAdminUserList = () => {

    const [Employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [csvData, setCsvData] = useState([]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
        new window.bootstrap.Tooltip(tooltipTriggerEl);
    });

    useEffect(() => {
        getEmployess();
        Download_Slip(); 
    }, [currentPage]);

    // Handle input change
    const handleInputChange = (value) => {
        setSearchTerm(value);


    };

    const getEmployess = async (e) => {
        const response = await getAgents(currentPage);
        try {
            if (response?.status === 200) {
                toast.success("Gets all users successfully");
                setEmployees(response?.data?.results);
                setTotalItems(response?.data?.count);
            } else {
            }
        } catch (err) {
            toast.error(err?.message);
        }
    };

    const Download_Slip = async () => {
        try {
            const response = await DownloadUserList();
            console.log(response, "user List");
            if (response?.status === 200) {
                const rows = response?.data?.split('\n').map(row => row.split(','));
                setCsvData(rows);
            }
        } catch (err) {
            console.log(err);
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
                                <li className="breadcrumb-item active" style={{ color: "#FF914D" }} aria-current="page">User List</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="col-md-7 d-flex align-items-center justify-content-end gap-2">

                        <CSVLink className="btn btn-outline-primary gap-2 d-flex" data={csvData} filename={"user_list.csv"} >
                            {/* <Icon icon="fa-solid:file-csv" width="1.2em" height="1.2em" /> */}
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.918 0.234375H1.43359V19.7656H15.5469V4.79688L10.918 0.234375Z" fill="#FFDBD4" />
                                <path d="M10.918 0.234375L15.5469 4.79688H10.918V0.234375Z" fill="#BF6149" />
                                <path d="M13.3047 11.6719H0.453125V17.7695H13.3047V11.6719Z" fill="#BF6149" />
                                <path d="M0.453125 17.7695L1.43359 18.5977V17.7695H0.453125Z" fill="#A84835" />
                                <path d="M3.82031 15.6289C3.94141 15.6289 4.03125 15.5977 4.08984 15.5312C4.14844 15.4648 4.17969 15.3711 4.17969 15.25H4.98438L4.98828 15.2656C4.99609 15.5742 4.89062 15.8242 4.66797 16.0195C4.44922 16.2148 4.16406 16.3086 3.82031 16.3086C3.39063 16.3086 3.05859 16.1758 2.82813 15.9102C2.59766 15.6445 2.48047 15.3008 2.48047 14.875V14.8164C2.48047 14.3906 2.59766 14.0469 2.82813 13.7812C3.05859 13.5156 3.39062 13.3828 3.81641 13.3828C4.17578 13.3828 4.46094 13.4805 4.67578 13.6797C4.89062 13.8789 4.99609 14.1523 4.98828 14.4961L4.98438 14.5117H4.17969C4.17969 14.3789 4.14844 14.2695 4.08984 14.1836C4.02734 14.0977 3.9375 14.0586 3.82031 14.0586C3.64844 14.0586 3.53125 14.125 3.46484 14.2617C3.39844 14.3984 3.36328 14.582 3.36328 14.8125V14.8711C3.36328 15.1094 3.39844 15.293 3.46484 15.4258C3.52344 15.5625 3.64453 15.6289 3.82031 15.6289Z" fill="white" />
                                <path d="M7.19181 15.4609C7.19181 15.3906 7.15275 15.3281 7.07462 15.2734C6.9965 15.2188 6.85197 15.168 6.64103 15.125C6.3129 15.0625 6.0629 14.9609 5.89884 14.8281C5.73087 14.6953 5.64884 14.5078 5.64884 14.2695C5.64884 14.0195 5.75431 13.8086 5.96134 13.6367C6.16837 13.4648 6.45353 13.3789 6.809 13.3789C7.184 13.3789 7.48478 13.4609 7.70743 13.6289C7.93009 13.7969 8.03556 14.0156 8.02384 14.2813L8.01993 14.2969H7.16447C7.16447 14.1875 7.13712 14.1016 7.08244 14.043C7.02775 13.9844 6.934 13.957 6.809 13.957C6.71525 13.957 6.64103 13.9805 6.57853 14.0313C6.51603 14.082 6.48478 14.1445 6.48478 14.2227C6.48478 14.2969 6.51994 14.3594 6.59415 14.4141C6.66447 14.4648 6.8129 14.5117 7.03165 14.5547C7.37931 14.6211 7.63322 14.7227 7.79728 14.8594C7.96134 14.9961 8.04337 15.1836 8.04337 15.4336C8.04337 15.6875 7.93009 15.8984 7.70743 16.0625C7.48087 16.2266 7.184 16.3086 6.8129 16.3086C6.43009 16.3086 6.1254 16.2109 5.90275 16.0156C5.68009 15.8203 5.57462 15.6016 5.58244 15.3633L5.58634 15.3477H6.38322C6.38712 15.4805 6.42618 15.5781 6.50431 15.6367C6.58243 15.6953 6.69181 15.7266 6.83244 15.7266C6.94962 15.7266 7.03947 15.7031 7.10197 15.6562C7.16056 15.6094 7.19181 15.5469 7.19181 15.4609Z" fill="white" />
                                <path d="M9.88281 15.0898L9.93359 15.3906L9.94922 15.3945L10.0078 15.0938L10.3828 13.4336H11.3086L10.3906 16.2578H9.49609L8.57812 13.4336H9.50781L9.88281 15.0898Z" fill="white" />
                            </svg>
                            <div>
                                Download CSV File
                            </div>
                        </CSVLink>
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
                                                            <tr>
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
                                                                    <span className={employ?.is_creator ? 'badge bg-info' : employ?.is_admin ? 'badge bg-success' : 'badge bg-secondary'}>
                                                                        {employ?.is_creator ? 'SubCreator' : employ?.is_admin ? 'Creator' : 'Approval'}
                                                                    </span>
                                                                </td>

                                                                <td>
                                                                    <Link to={`/resetpassword/${employ?.id}`} className="btn btn-icon btn-sm btn-ghost rounded-circle" role="button" >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#182A75" d="M12.63 2c5.53 0 10.01 4.5 10.01 10s-4.48 10-10.01 10c-3.51 0-6.58-1.82-8.37-4.57l1.58-1.25C7.25 18.47 9.76 20 12.64 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8C8.56 4 5.2 7.06 4.71 11h2.76l-3.74 3.73L0 11h2.69c.5-5.05 4.76-9 9.94-9m2.96 8.24c.5.01.91.41.91.92v4.61c0 .5-.41.92-.92.92h-5.53c-.51 0-.92-.42-.92-.92v-4.61c0-.51.41-.91.91-.92V9.23c0-1.53 1.25-2.77 2.77-2.77c1.53 0 2.78 1.24 2.78 2.77zm-2.78-2.38c-.75 0-1.37.61-1.37 1.37v1.01h2.75V9.23c0-.76-.62-1.37-1.38-1.37" /></svg>
                                                                    </Link>
                                                                    <Link to={`/updateuser/${employ?.id}`} className="btn btn-icon btn-sm btn-ghost rounded-circle" role="button" >
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

export default SuperAdminUserList

