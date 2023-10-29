import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingOverlay from "../components/LoadingOverlay";
import { FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";


export default function Login() {
    const [values, setValues] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const validateForm = () => {
        const { email, password } = values;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(email)) {
            toast.error("Please enter a valid Email.", toastOptions);
            return false;
        } else if (password === "") {
            toast.error("Password is required.", toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            setLoading(true);
        }
    };

    return (
        <>
            {loading ? <LoadingOverlay /> : null}
            <FormContainer>
                <form action="" onSubmit={(event) => handleSubmit(event)}>
                    <div className="brand">
                        <img src="https://media.licdn.com/dms/image/C4D0BAQGXgq1jSd9uAQ/company-logo_200_200/0/1679433568480/aimed_labs_logo?e=2147483647&v=beta&t=7Pqa1aiYOVbYp9o7Vrl0b2NdBW_7HEEf6sC8q39893w" alt="logo" />
                        <div className="login-text">LOGIN</div>
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                        min="3"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => handleChange(e)}
                    />
                    <button onClick={handleSubmit} type="submit">
                        Log In
                    </button>
                    <hr style={{ margin: "0", padding: "0" }} />
                    <div className="login-options" style={{ margin: "0px", padding: "0px" }}>
                        <h5>Login with:</h5>
                        <div className="options">
                            <FaGithub size={30} color="#181717" className="options-icon" />
                            <FaLinkedinIn size={30} color="#0A66C2" className="options-icon" />
                            <FaGoogle size={30} color="#DB4437" className="options-icon" />
                        </div>
                    </div>
                    <span>
                        Don't have an account ? <span>Register</span>
                    </span>
                </form>
            </FormContainer>
            <ToastContainer />
        </>
    );
}

const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-items: center;
  background-color: #6ca5a5;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:20px;
    .login-text{
        color: #008080;
        font-weight: bold;
        margin-left: 20px;
        font-size: 1.2rem;
        margin-bottom: 5px;
    }
    img {
      height: 2.7rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #e2eded;
    border-radius: 1.5rem;
    padding: 1rem 3rem;
    max-width: 300px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #6a9d9d;
    border-radius: 0.4rem;
    color: #003f3f;
    font-weight: 500;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #008080;
      outline: none;
    }
    &::placeholder {
      color: #597f7f;
    }
  }

  button {
    background-color: #008080;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    transition: all 0.3s ease;
    line-height: 1;
    &:hover {
      background-color: #006a6a;
    }
  }
  span {
    color: black;
    text-transform: uppercase;
    span {
      color: #008080;
      font-weight: bold;
      cursor: pointer;
    }
    
  }

  .login-options{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    margin: 0px;
    padding: 0px;
    .options{
        display: flex;
        flex-direction: row;
        align-items: center;
        .options-icon{
            margin: 0px 5px;
            cursor: pointer;
        }
    }
  }

  @media (max-width: 768px) {
    form {
      max-width: 50%;
      padding: 1rem 2rem;
      max-width: 90%;
    }
    input {
      padding: 0.6rem 0.7rem;
    }
    button {
      padding: 0.6rem 0.7rem;
    }
  }
`;
