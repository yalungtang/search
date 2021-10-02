import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SingleResult = (props) => {
    const {onStar, children, ...resultProps} = props;
    const { starred, type } = props;

    return (
    <div className={`Result Result--${type}`} onClick={() => onStar(resultProps)}>
        <div className={`Result__Star Result__Star--${starred ? 'active' : 'inactive'}`}><FontAwesomeIcon icon={faStar} /></div>
        {children}
    </div>
    );
};

export default SingleResult;
