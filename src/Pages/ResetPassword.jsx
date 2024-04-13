import React, { useState, useEffect } from 'react'; // Imported useState only as it's used in the component
import { CreateUsers, getAgentsById, UpdatesUsers } from '../utils/Constants'; // Corrected import statement
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {

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
                console.log(response, "Reseat password")
                if (response.status === 200) {
                    toast.success("User Password Reset Successfully");
                    navigate("/userlist")
                }
            } catch (err) {
                console.log(err);
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
                                            <label className="form-label">New Password* </label>
                                            {/* <input onChange={(e) => handleUserName(e.target.value)} value={username} type="text" className="form-control" placeholder="Enter Username" required="" /> */}
                                            <input maxLength="30" value={password} name="password" onChange={(e) => handleNewPass(e.target.value)}  type="password" className="form-control" placeholder="Password" />

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
                                                <div className='mt-2'  style={{ color: "red", fontSize: "x-small" }} >
                                                    Password is required
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-lg-0">
                                            <label className="form-label">Confirm New Password* </label>
                                            {/* <input type="text" className="form-control" value={email} onChange={(e) => handleEmail(e.target.value)} placeholder="Email" required="" /> */}
                                            <input type="password" className="form-control" maxLength="30" value={confirmPassword} name="confirmPassword" placeholder="Conferm Password" onChange={(e) => handleConfirmPass(e.target.value)}  />
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
                                    <div className="d-grid mb-3 mt-3"> {/* Corrected class to className */}
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

export default ResetPassword;




