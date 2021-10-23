import React, { FC, useState } from "react"

import { Row, Col, Image, Form, Button, Container } from "react-bootstrap"
import { useHistory } from "react-router"

import Footer from "../../components/Footer"
import Header from "../../components/Header"

import "./LoginScreen.css"
import "../../index.css"
import "./RegistrationScreen.css"

import { Link } from "react-router-dom"
const RegistrationScreen = () => {
    const history = useHistory()

    const [passwordVisible, setPasswordVisible] = useState(false)

    const changeEye = () => {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <>
            <div className="shadow1 ctr-ls">
                <div className="centerOne shadow2 br-1 p-2">
                    <div className="container ctr-ls1 m-10">
                        <Form className=" px-3 br-1 py-3 ">
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
                                controlId="formBasicEmail"
                                className="py-2"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="Enter fullname"
                                    className="p-3 br-1"
                                />
                            </Form.Group>
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
                                controlId="formBasicEmail"
                                className="py-2"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="Enter username"
                                    className="p-3 br-1"
                                />
                            </Form.Group>
                        </Form>
                    </div>
                    {/* <div className="ctr-ls2"> */}
                    <Button className=" ctr-ls2 my-2 p-3 bg-da-blue br-1">
                        Login
                    </Button>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default RegistrationScreen
