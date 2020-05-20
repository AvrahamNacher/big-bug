import React, { useState } from 'react';

import './CloseWindowButton.css';

export default function SuccessWindow(props) {
    const { setShow, setCancelTimeout } = props;
    return (
        <div id="CloseWindowButton">
            <button className="centeredContainerButton tertiaryButton buttonEnabled" onClick={() => {setShow(false); setCancelTimeout(true);}}>OK</button>
        </div>
    )
}
