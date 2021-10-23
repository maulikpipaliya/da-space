import React, { FC, useState } from "react"

import { Row, Col, Image, Form, Button, Container } from "react-bootstrap"
import { useHistory } from "react-router"

import Footer from "../../components/Footer"
import Header from "../../components/Header"

import "./LoginScreen.css"
import "../../index.css"
import { Link } from "react-router-dom"

const LoginScreen: FC = () => {
    const history = useHistory()

    const [passwordVisible, setPasswordVisible] = useState(false)

    const changeEye = () => {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <>
            <div className="ctr-ls shadow1">
                <div className="ctr-ls-form">
                    <div className="ctr-ls-form-body">
                        <Form className="border px-5 shadow br-1 py-3 m-5 shadow2">
                            <div className="text-center">
                                <Image
                                    src="./DASpaceLogo.svg"
                                    className="imageSize"
                                />
                            </div>
                            <Form.Group
                                controlId="formBasicEmail"
                                className="py-2"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="Enter username"
                                    className="p-3 br-1"
                                />
                            </Form.Group>
                            <Form.Group
                                controlId="formBasicPassword"
                                className="py-2"
                            >
                                <Form.Control
                                    type={
                                        !passwordVisible ? "password" : "text"
                                    }
                                    placeholder="Password"
                                    className="p-3 br-1"
                                />
                                <span>
                                    <i
                                        className={
                                            "fa hidden " +
                                            (passwordVisible
                                                ? "fa-eye"
                                                : "fa-eye-slash") +
                                            " eyeclass"
                                        }
                                        aria-hidden="true"
                                        onClick={changeEye}
                                    ></i>
                                </span>
                            </Form.Group>

                            <Button className="w-100 my-2 p-3 bg-da-blue br-1">
                                Login
                            </Button>

                            <span className="my-2 p-2">
                                Don't have an account ?{" "}
                                <Link to="/registration">Register</Link>
                            </span>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginScreen
