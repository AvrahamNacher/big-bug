import React from 'react';
import CloseWindowButton from './CloseWindowButton';

import './SuccessWindow.css';

export default function SuccessWindow(props) {
    const { message, success, show, setShow } = props;
    if (show) {
        setTimeout( () => {
            setShow(false);
        }, 5000);
    }
    return (
        <>
            { show && 
                <div id="SuccessWindowContainer" className={success ? "success-text bold" : "error-text bold"}>
                {message}
                <CloseWindowButton setShow={setShow}/>
            </div>
            }
        </>
    )
}
