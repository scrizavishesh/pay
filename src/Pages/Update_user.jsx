import React, { useState, useEffect } from 'react'; // Imported useState only as it's used in the component
import { CreateUsers, getAgentsById, UpdatesUsers } from '../utils/Constants'; // Corrected import statement
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const Update_user = () => {

    const ids = useParams();
    console.log(ids, "id")
    const navigate = useNavigate();



    const [username, setUsername] = useState(""); // Corrected state variable name
    const [userNameValidError, setUserNameValidError] = useState(false);
    const [userNameIsRequiredError, setUserNameIsRequiredError] = useState(false); // Corrected state variable name

    const [email, setEmail] = useState("");
    const [emailValidError, setEmailValidError] = useState(false);
    const [emailIsRequiredError, setEmailIsRequiredError] = useState(false); // Corrected state variable name

    const [upi, setUpi] = useState("");
    const [upiValidError, setUpiValidError] = useState(false);
    const [upiIsRequiredError, setUpiIsRequiredError] = useState(false); // Corrected state variable name

    const [selectedRole, setSelectedRole] = useState('agent');
    const [selectedRoleIsRequiredError, setSelectedRoleIsRequiredError] = useState(false);


    const [userDetails, setUserDetails] = useState("")

    useEffect(() => {
        getEmployess();
    }, [])


    const getEmployess = async () => {
        const response = await getAgentsById(ids?.id);
        console.log(response, "response")
        try {
            if (response?.status === 200) {
                setUserDetails(response?.data)
                setUsername(response?.data?.username)
                setEmail(response?.data?.email)
                setUpi(response?.data?.upi_id)
                // setSelectedRole(response?.data?.selectedRole)
            } else {
            }
        } catch (err) {
            toast.error(err?.message);
        }
    };

    const handleUPI = (value) => {
        setUpi(value); // Corrected state variable name
        const upiRegex = /^[a-zA-Z0-9.-]{2, 256}@[a-zA-Z][a-zA-Z]{2, 64}$/
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

    const handleUserName = (value) => {
        setUsername(value); // Corrected state variable name
        const rex = /^[a-zA-Z0-9_-]{3,16}$/;
        if (value === "") {
            setUserNameValidError(false);
            setUserNameIsRequiredError(true); // Corrected state variable name
        } else if (rex.test(value) === false) {
            setUserNameValidError(true);
            setUserNameIsRequiredError(false); // Corrected state variable name
        } else {
            setUserNameValidError(false);
            setUserNameIsRequiredError(false); // Corrected state variable name
        }
    };

    const handleEmail = (value) => {
        setEmail(value); // Corrected state variable name
        const rex = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,12}[.]{1}[A-Za-z.]{2,6}$/;
        if (value === "") {
            setEmailValidError(false);
            setEmailIsRequiredError(true); // Corrected state variable name
        } else if (rex.test(value) === false) {
            setEmailValidError(true);
            setEmailIsRequiredError(false); // Corrected state variable name
        } else {
            setEmailValidError(false);
            setEmailIsRequiredError(false); // Corrected state variable name
        }
    };




    const handleRoleChange = (value) => {
        setSelectedRole(value);
    };

    const register = async () => {
        if (email === "" || !email) {
            setEmailIsRequiredError(true);
        }
        if (username === "" || !username) {
            setUserNameIsRequiredError(true);
        }
        if (selectedRole === "" || !selectedRole) {
            setSelectedRoleIsRequiredError(true);
        }

        if (email && username && selectedRole) { // Changed the condition to check all fields
            const formData = new FormData();
            formData.append("username", username);
            formData.append("email", email);
            formData.append("is_superadmin", false);
            if (selectedRole === 'admin') {
                formData.append('is_admin', true);
                formData.append('is_agent', false);
            } else if (selectedRole === 'agent') {
                formData.append('is_admin', false);
                formData.append('is_agent', true);
            }
            formData.append("upi_id", upi);
            try {
                const response = await UpdatesUsers(formData, ids?.id);
                console.log(response, "updateregister")
                if (response.status === 200) {
                    setEmail("");
                    setUsername("");
                    setUpi("");
                    setSelectedRole("");
                    toast.success("User Updated Successfully");
                    navigate("/userlist")
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
                            <h3 className="mb-0">Create user</h3> {/* Corrected class to className */}
                        </div>
                    </div>
                </div>
                <div className="row"> {/* Corrected class to className */}
                    <div className="col-lg-1 col-12"></div>
                    <div className="col-lg-10 col-12">
                        <div className="card mb-4">
                            <div className="card-body">
                                <form>
                                    <div className='row'>
                                        <div className="col-sm-6 mb-3 mb-lg-0">
                                            <label className="form-label">Username *</label>
                                            <input onChange={(e) => handleUserName(e.target.value)}  value={username} type="text" className="form-control" placeholder="Enter Username" required="" />
                                            {userNameIsRequiredError && (
                                                <div className='text-start mt-2' style={{ color: "red", fontSize: "x-small" }}>
                                                    UserName is required
                                                </div>
                                            )}
                                            {userNameValidError && (
                                                <div className='text-start mt-2' style={{ color: "red", fontSize: "x-small" }}>
                                                    Please enter valid username
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-lg-0">
                                            <label className="form-label">Email *</label>
                                            <input type="text" className="form-control" value={email}  onChange={(e) => handleEmail(e.target.value)} placeholder="Email" required="" />
                                            {emailIsRequiredError && (
                                                <div className='text-start mt-2' style={{ color: "red", fontSize: "x-small" }}>
                                                    Email is required
                                                </div>
                                            )}
                                            {emailValidError && (
                                                <div className='text-start mt-2' style={{ color: "red", fontSize: "x-small" }}>
                                                    Please enter valid email
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-sm-6 mb-3 mb-lg-0">
                                            <label className="form-label">UPI Id *</label>
                                            <input type="text" onChange={(e) => handleUPI(e.target.value)} value={upi} className="form-control" placeholder="upi id" required="" />
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-lg-0">
                                            <label className="form-label">Select Role *</label>
                                            <select onChange={(e) => handleRoleChange(e.target.value)} value={selectedRole}  class="form-select">
                                                <option>-----Select Role-----</option>
                                                <option value="admin">Admin</option>
                                                <option value="agent">Agent</option>
                                            </select>
                                            {selectedRoleIsRequiredError && (
                                                <div className='text-start mt-2' style={{ color: "red", fontSize: "x-small" }}>
                                                    Select Role is required
                                                </div>
                                            )}
                                        </div>
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

export default Update_user;

