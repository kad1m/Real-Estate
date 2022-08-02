import React from 'react';
import {Helmet} from "react-helmet";

const Title = ({title, description, keywords}) => {
    return (
        <Helmet>
            <Title>
                {title}
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>

            </Title>
        </Helmet>
    );
};
Title.defaultProps={
    title: "Welcome to real estate",
    description: "We sell, the best properties in town",
    keywords: "land, real estate, best value"
}

export default Title;