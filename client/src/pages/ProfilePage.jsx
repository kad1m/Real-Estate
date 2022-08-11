import React, {useEffect} from 'react';
import {getProfile} from "../features/profile/profileSlice";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import Spinner from "../components/Spinner"
import Title from "../components/Title";

const ProfilePage = () => {
    const {user, isLoading, isError, message} = useSelector(
        (state) => state.user
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            toast.error(message, {icon: "😭"});
        }

        dispatch(getProfile());

    }, [dispatch, isError, message]);

    if (isLoading) {
        return <Spinner/>;
    }
    return (

        <div className="container">


            <Title title={user.full_name + " profiles"}/>
            <div className="main-body">

                <div className="row gutters-sm mt-3">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={user.profile_photo} alt="Admin"
                                         className="rounded-circle" width="150"/>
                                    <div className="mt-3">
                                        <h4>{user.username}</h4>
                                        <p className="text-secondary mb-1">{user.about_me}</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {user.full_name}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {user.email}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {user.phone_number}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Gender</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {user.gender}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {user.city}, {user.country}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <a className="btn btn-info " target="__blank"
                                           href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;