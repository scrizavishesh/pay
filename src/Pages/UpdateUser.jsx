import React, { useState } from 'react'; // Imported useState only as it's used in the component
import { CreateUsers, UpdatesUsers } from '../utils/Constants'; // Corrected import statement
import { FaEyeSlash, FaEye } from "react-icons/fa";
import toast from 'react-hot-toast';

const UpdateUser = () => {

    const profile = JSON.parse(localStorage.getItem("data"));

    const [upi, setUpi] = useState("");
    const [upiValidError, setUpiValidError] = useState(false);
    const [upiIsRequiredError, setUpiIsRequiredError] = useState(false); // Corrected state variable name

    const handleUPI = (value) => {
        setUpi(value); // Corrected state variable name
        const upiRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
        if (value === "") {
            setUpiValidError(false);
            setUpiIsRequiredError(true); // Corrected state variable name
        } else if (upiRegex.test(value) === false) {
            setUpiValidError(true);
            setUpiIsRequiredError(false); // Corrected state variable name
        } else {
            setUpiValidError(false);
            setUpiIsRequiredError(false); // Corrected state variable name
        }
    };

   

    const register = async () => {
      
        if (upi === "" || !upi) {
            setUpiIsRequiredError(true);
        }
        if (upi) { // Changed the condition to check all fields
            const formData = new FormData();
            formData.append("upi_id", upi);
            try {
                const response = await UpdatesUsers(formData, profile[0]?.id);
                if (response.status === 200) {
                    setUpi("");
                    toast.success("User Update Successfully");
                    
                }
            } catch (err) {
                console.log(err);
                toast.error(err?.response?.data?.username[0])
            }

        }
    };

    return (
        <>
            <div className="container-fluid"> {/* Corrected class to className */}
                <div className="row"> {/* Corrected class to className */}
                    <div className="col-lg-12 col-md-12 col-12"> {/* Corrected class to className */}
                        <div className="mb-5">
                            <h3 className="mb-0">Update User</h3> {/* Corrected class to className */}
                        </div>
                    </div>
                </div>
                <div className="row"> {/* Corrected class to className */}
                    <div className="col-lg-1 col-12"></div>
                    <div className="col-lg-10 col-12">
                        <div className="card mb-4">
                            <div className="card-body">
                                <form>
                                   
                                    <div className="mt-3">
                                        <label className="form-label">UPI Id *</label>
                                        <input type="text" onChange={(e) => handleUPI(e.target.value)} value={upi} className="form-control" placeholder="upi id" required="" />
                                        {upiIsRequiredError && (
                                            <div className='text-start mt-2' style={{ color: "red", fontSize: "x-small" }}>
                                                UPI is required
                                            </div>
                                        )}
                                        {upiValidError && (
                                            <div className='text-start mt-2' style={{ color: "red", fontSize: "x-small" }}>
                                                Please enter valid UPI
                                            </div>
                                        )}
                                    </div>
                                    <div className="d-grid mb-3 mt-3"> {/* Corrected class to className */}
                                        <a type='button' onClick={register} className="btn btn-primary">
                                            Update user
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 col-12"></div>
                </div>
            </div>
        </>
    )
}

export default UpdateUser;
