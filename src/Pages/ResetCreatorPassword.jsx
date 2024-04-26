import React, { useState, useEffect } from 'react'; // Imported useState only as it's used in the component
import { CreateUsers, getAgentsById, UpdatesUsers } from '../utils/Constants'; // Corrected import statement
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ResetCreatorPassword = () => {

    const ids = useParams();
    const navigate = useNavigate();



    const [password, setPassword] = useState("");
    const [passwordIsRequiredError, setPasswordIsRequiredlError] = useState(false);
    const [passworderror, setPasswordError] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [confirmPasswordIsRequiredError, setNewPasswordIsRequiredError] = useState(false);
    const [isShowConfermPassword, setIsShowConfermPassword] = useState(false);

    const handleNewPass = (value) => {
        setPassword(value);
        const regex =
            /^(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        if (value === "") {
            setPasswordIsRequiredlError(true);
            setPasswordError(false);
        } else if (regex.test(value) === false) {
            setPasswordError(true);
            setPasswordIsRequiredlError(false);
        } else {
            setPasswordError(false);
            setPasswordIsRequiredlError(false);
        }
    };

    const handleConfirmPass = (value) => {
        setConfirmPassword(value);
        if (value !== password) {
            setConfirmPasswordError(true);
            setNewPasswordIsRequiredError(false);
        } else if (value === "") {
            // setNewPasswordIsRequiredError(true);
            setConfirmPasswordError(false);
        } else {
            setConfirmPasswordError(false);
            setNewPasswordIsRequiredError(false);
        }
    };

    const register = async () => {
        if (password === "" || !password) {
            setPasswordIsRequiredlError(true);
        }
        if (confirmPassword === "" || !confirmPassword) {
            setNewPasswordIsRequiredError(true);
        }

        if (password && confirmPassword && confirmPasswordError !== true && confirmPasswordIsRequiredError !== true) { // Changed the condition to check all fields
            const formData = new FormData();
            formData.append("password", password);
            // formData.append("password_confirmation", confirmPassword);
            try {
                const response = await UpdatesUsers(formData, ids?.id);
                if (response.status === 200) {
                    toast.success("Sub Creator Password Reset Successfully");
                    navigate("/sub_creator_list")
                }
            } catch (err) {
                console.log(err);
            }

        }
    };

    const customStyle = {
        '--bs-breadcrumb-divider': "'>'",
    };



    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <nav className="p-2" style={customStyle} aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item" style={{ color: "#78788C" }}><Link style={{ color: "#78788C" }} href="/">Dashboard</Link>{" "}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M9.55834 3.70009C9.67553 3.58305 9.83438 3.51731 10 3.51731C10.1656 3.51731 10.3245 3.58305 10.4417 3.70009L17.6833 10.9418C17.7406 11.0032 17.8096 11.0524 17.8862 11.0866C17.9629 11.1207 18.0457 11.1391 18.1296 11.1406C18.2135 11.1421 18.2968 11.1266 18.3747 11.0952C18.4525 11.0638 18.5232 11.017 18.5825 10.9576C18.6419 10.8983 18.6887 10.8276 18.7201 10.7498C18.7515 10.6719 18.767 10.5886 18.7655 10.5047C18.764 10.4207 18.7456 10.338 18.7115 10.2613C18.6773 10.1846 18.6281 10.1156 18.5667 10.0584L11.3258 2.81676C11.1517 2.64265 10.945 2.50454 10.7175 2.41031C10.4901 2.31608 10.2462 2.26758 10 2.26758C9.75378 2.26758 9.50996 2.31608 9.28247 2.41031C9.05498 2.50454 8.84828 2.64265 8.67417 2.81676L1.43251 10.0584C1.31871 10.1764 1.25579 10.3343 1.25729 10.4981C1.25879 10.662 1.32459 10.8187 1.44053 10.9346C1.55647 11.0504 1.71325 11.116 1.87713 11.1174C2.041 11.1187 2.19885 11.0557 2.31667 10.9418L9.55834 3.70009Z" fill="black" />
                                    <path d="M10 5.02657L16.7992 11.8257C16.8242 11.8507 16.8492 11.8741 16.875 11.8974V17.0624C16.875 17.9249 16.175 18.6249 15.3125 18.6249H12.5C12.3342 18.6249 12.1753 18.5591 12.0581 18.4418C11.9408 18.3246 11.875 18.1657 11.875 17.9999V14.2499C11.875 14.0841 11.8092 13.9252 11.6919 13.808C11.5747 13.6908 11.4158 13.6249 11.25 13.6249H8.75C8.58424 13.6249 8.42527 13.6908 8.30806 13.808C8.19085 13.9252 8.125 14.0841 8.125 14.2499V17.9999C8.125 18.1657 8.05915 18.3246 7.94194 18.4418C7.82473 18.5591 7.66576 18.6249 7.5 18.6249H4.6875C4.2731 18.6249 3.87567 18.4603 3.58265 18.1673C3.28962 17.8742 3.125 17.4768 3.125 17.0624V11.8974C3.15093 11.8742 3.17621 11.8503 3.20083 11.8257L10 5.0249V5.02657Z" fill="black" />
                                </svg>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">User List</li>
                                <li className="breadcrumb-item active" style={{ color: "#FF914D" }} aria-current="page">Reset Password</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row"> {/* Corrected class to className */}
                    <div className="col-lg-12 col-md-12 col-12"> {/* Corrected class to className */}
                        <div className="mb-5">
                            <h3 className="mb-0">Reset Password</h3> {/* Corrected class to className */}
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="row"> {/* Corrected class to className */}
                    <div className="col-12">
                        <div className="mb-4">
                            <div className="card-body">
                                <br />
                                <form>
                                    <div className='row'>
                                        <div className="col-sm-6 mb-3 mb-lg-0">
                                            <label className="form-label">New Password* </label>
                                            {/* <input onChange={(e) => handleUserName(e.target.value)} value={username} type="text" className="form-control" placeholder="Enter Username" required="" /> */}
                                            <input maxLength="30" value={password} name="password" onChange={(e) => handleNewPass(e.target.value)} type="password" className="form-control" placeholder="Password" />

                                            {passworderror ? (
                                                <div className='mt-2' style={{ color: "red", fontSize: "x-small" }}>
                                                    Password at least 8 characters in length.
                                                    <br />
                                                    Lowercase letters (a-z)
                                                    <br />
                                                    Uppercase letters (A-Z)
                                                    <br />
                                                    Numbers (0-9)
                                                    <br />
                                                    Special characters ($@$!%*?&) <br />
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                            {passwordIsRequiredError ? (
                                                <div className='mt-2' style={{ color: "red", fontSize: "x-small" }} >
                                                    Password is required
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-lg-0">
                                            <label className="form-label">Confirm New Password* </label>
                                            {/* <input type="text" className="form-control" value={email} onChange={(e) => handleEmail(e.target.value)} placeholder="Email" required="" /> */}
                                            <input type="password" className="form-control" maxLength="30" value={confirmPassword} name="confirmPassword" placeholder="Conferm Password" onChange={(e) => handleConfirmPass(e.target.value)} />
                                            {confirmPasswordError ? (
                                                <div className='mt-2' style={{ color: "red", fontSize: "x-small" }} >
                                                    Password mismatch
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                            {confirmPasswordIsRequiredError ? (
                                                <div className='mt-2' style={{ color: "red", fontSize: "x-small" }} >
                                                    Confirm password is required
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mb-3 mt-3"> {/* Corrected class to className */}
                                        <a type='button' onClick={register} className="btn btn-primary">
                                            Reset Password
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

export default ResetCreatorPassword;




