import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginSuccess, Loginuse } from '../utils/Constants';
import toast from 'react-hot-toast';

const Login = () => {
    const token = localStorage.getItem("token");

    const navigate = useNavigate()

    const [tokenData, settokenData] = useState("");
    const [SuccessLogin, setSuccessLogin] = useState("")
    // console.log(tokenData, "data"); 

    const [username, setUsernamer] = useState("");
    const [userNameValidError, setUserNameValidError] = useState(false);
    const [userNameIsRequiredError, setUserNameIsRequiredlError] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordValidError, setPasswordValidError] = useState(false);
    const [passwordIsRequiredError, setPasswordIsRequiredlError] = useState(false);



    const handleUserName = (value) => {
        setUsernamer(value);
        const rex = /^[a-zA-Z0-9_-]{3,16}$/;;
        if (value === "") {
            setUserNameValidError(false);
            setUserNameIsRequiredlError(true);
        } else if (rex.test(value) === false) {
            setUserNameValidError(true);
            setUserNameIsRequiredlError(false);
        } else {
            setUserNameValidError(false);
            setUserNameIsRequiredlError(false);
        }
    };


    const handlePassword = (value) => {
        setPassword(value);
        const rex = /^[6-9]\d{9}$/;
        if (value === "") {
            setPasswordValidError(false);
            setPasswordIsRequiredlError(true);
        } else if (rex.test(value) === false) {
            setPasswordValidError(true);
            setPasswordIsRequiredlError(false);
        } else {
            setPasswordValidError(false);
            setPasswordIsRequiredlError(false);
        }
    };

    useEffect(() => {
        userSuccess(tokenData);
    }, [tokenData])



    const userSuccess = async (tokenData) => {
        try {
            const response = await LoginSuccess(tokenData);
            // console.log(response, "Login Success response");
            if (response?.status === 200) {
                setSuccessLogin(response?.data?.users);
                localStorage.setItem(
                    `data`, JSON.stringify(response?.data?.users)
                );
                localStorage.setItem(
                    `role`, JSON.stringify(response?.data?.role)
                );
                navigate("/")
                window.location.reload();
            }
        } catch (err) {
            console.log(err)
        }

    };


    const loginuser = async (e) => {
        e.preventDefault();
        if (username === "" || !username) {
            setUserNameIsRequiredlError(true);
        }
        if (password === "" || !password) {
            setPasswordIsRequiredlError(true);
        }

        if ((username !== "", password !== "")) {
            const formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);
            try {
                const response = await Loginuse(formData);
                // console.log(response, "Login response");
                if (response?.status === 200) {
                    settokenData(response?.data?.token);
                    localStorage.setItem(
                        `token`, response?.data?.token
                    );
                }
            } catch (err) {
                console.log(err);
                toast.error(err?.response?.data?.non_field_errors[0])
            }
        }

    };

    return (
        <div>
            <main class="container d-flex flex-column">
                <div class="row align-items-center justify-content-center g-0 min-vh-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
                        <a href="#" class="form-check form-switch theme-switch btn btn-light btn-icon rounded-circle d-none ">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                        </a>
                        {/* <!-- Card --> */}
                        <div class="card smooth-shadow-md">
                            {/* <!-- Card body --> */}
                            <div class="card-body p-6">
                                <div class="mb-4 d-flex justify-content-center">
                                    <img src="/logo.png" alt="" width={200} />
                                    <p class="mb-6"></p>
                                </div>
                                {/* <!-- Form --> */}
                                <form>
                                    {/* <!-- Username --> */}
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Username or email</label>
                                        <input onChange={(e) => handleUserName(e.target.value)} maxLength="10" type="text" class="form-control" name="email" placeholder="Email username here" required="" />
                                        {userNameIsRequiredError && (
                                            <div className='text-start p-2' style={{ color: "red", fontSize: "x-small" }}>
                                                Username is required
                                            </div>
                                        )}
                                        {userNameValidError && (
                                            <div className='text-start p-2' style={{ color: "red", fontSize: "x-small" }}>
                                                Please enter valid Username
                                            </div>
                                        )}
                                    </div>
                                    {/* <!-- Password --> */}
                                    <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <input onChange={(e) => handlePassword(e.target.value)} type="password" id="password" class="form-control" name="password" placeholder="**************" required="" />
                                    </div>
                                    {/* <!-- Checkbox --> */}
                                    <div class="d-lg-flex justify-content-between align-items-center mb-4">
                                        <div class="form-check custom-checkbox">
                                            <input type="checkbox" class="form-check-input" id="rememberme" />
                                            <label class="form-check-label" for="rememberme">Remember
                                                me</label>
                                        </div>

                                    </div>
                                    <div>
                                        {/* <!-- Button --> */}
                                        <div class="d-grid">
                                            <button onClick={loginuser} type="submit" class="btn btn-primary">Sign
                                                in</button>
                                        </div>

                                        <div class="d-md-flex justify-content-between mt-4">
                                            
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login
