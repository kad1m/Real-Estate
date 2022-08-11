import React, {useEffect, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FaSignInAlt} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import Spinner from "../components/Spinner";
import Title from "../components/Title";
import {reset, reset_password} from "../features/auth/authSlice";

const ResetPasswordPage = () => {
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess) {
            navigate("/");
            toast.success("On your email address send link to change password")
        }

        dispatch(reset());
    }, [isError, isSuccess, message, navigate, dispatch]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("An email must be provided");
        }

        const userData = {
            email
        };

        dispatch(reset_password(userData));
    };

    return (
        <>
            <Title title="Reset password"/>
            <Container>
                <Row>
                    <Col className="mg-top text-center">
                        <section>
                            <h1>
                                <FaSignInAlt/> Reset Password
                            </h1>
                            <hr className="hr-text"/>
                        </section>
                    </Col>
                </Row>

                {isLoading && <Spinner/>}
                <Row className="mt-3">
                    <Col className="justify-content-center">
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId="email">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Button
                                type="submit"
                                variant="primary"
                                className="mt-3"
                            >
                                Reset password
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default ResetPasswordPage;