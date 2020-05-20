import React, {useState} from 'react';
import CloseWindowButton from './CloseWindowButton';

import './SuccessWindow.css';
import { useHistory } from 'react-router-dom';

export default function SuccessWindow(props) {
    const { message, success, show, setShow } = props;
    const [cancelTimeout, setCancelTimeout] = useState (false);
    let timeout;
    if (show) {
        timeout = setTimeout( () => {
            setShow(false);
        }, 5000);
    }
    if (cancelTimeout) {
        clearTimeout(timeout);
        setCancelTimeout(false);
    }
    return (
        <>
            { show && 
                <div id="SuccessWindowContainer" className={success ? "success-text bold" : "error-text bold"}>
                {message}
                <CloseWindowButton setShow={setShow} setCancelTimeout={setCancelTimeout}/>
            </div>
            }
        </>
    )
}
