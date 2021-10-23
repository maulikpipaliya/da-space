import React, { FC } from "react"

import { Row, Col, Image, Form, Button, Container } from "react-bootstrap"
import { useHistory } from "react-router"

import Footer from "../../components/Footer"
import Header from "../../components/Header"

import "./LoginScreen.css"

const LoginScreen: FC = () => {
    const history = useHistory()

    return (
        <>
            <div className="ctr-ls">
                <div className="ctr-ls-form">
                    <div className="ctr-ls-form-header">
                        <Image src="./DASpaceLogo.svg" />
                    </div>
                    <div className="ctr-ls-form-body">
                        <Form>
                            <Form.Group
                                controlId="formBasicEmail"
                                className="py-2"
                            >
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter username"
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone
                                    else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                controlId="formBasicPassword"
                                className="py-2"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>

                            <Button
                                className="btn-login w-100"
                                variant="primary"
                            >
                                Login
                            </Button>

                            <Button
                                className="my-3 w-100"
                                onClick={() => history.push("/register")}
                            >
                                Register
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginScreen
