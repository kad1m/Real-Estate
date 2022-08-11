import React, {useEffect, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FaSignInAlt} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import Spinner from "../components/Spinner";
import Title from "../components/Title";
import {confirm_reset_password, reset} from "../features/auth/authSlice";

const ConfirmResetPassword = () => {

    const {uid, token} = useParams()

    const [new_password, setNewPassword] = useState("");
    const [re_new_password, setReNewPassword] = useState("");

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
            navigate("/login");
            toast.success("Your password has been changed successfully")
        }

        dispatch(reset());
    }, [isError, isSuccess, message, navigate, dispatch]);

    const submitHandler = (e) => {
        e.preventDefault();

        if (!new_password) {
            toast.error("A password must be provided");
        }
        if (!re_new_password) {
            toast.error("A confirm password must be provided");
        }

        const userData = {
            new_password,
            re_new_password,
            uid,
            token,
        };

        dispatch(confirm_reset_password(userData));
    };

    return (
        <>
            <Title title="Change password"/>
            <Container>
                <Row>
                    <Col className="mg-top text-center">
                        <section>
                            <h1>
                                <FaSignInAlt/> Change password
                            </h1>
                            <hr className="hr-text"/>
                        </section>
                    </Col>
                </Row>

                {isLoading && <Spinner/>}
                <Row className="mt-3">
                    <Col className="justify-content-center">
                        <Form onSubmit={submitHandler}>


                            <Form.Group controlId="password">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter New Password"
                                    value={new_password}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                />

                            </Form.Group>
                            <Form.Group controlId="re_password">
                                <Form.Label>Confirm New Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={re_new_password}
                                    onChange={(e) =>
                                        setReNewPassword(e.target.value)
                                    }
                                />
                            </Form.Group>

                            <Button
                                type="submit"
                                variant="primary"
                                className="mt-3"
                            >
                                Change password
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default ConfirmResetPassword;