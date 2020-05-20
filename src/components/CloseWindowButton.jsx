import React, { useState } from 'react';

import './CloseWindowButton.css';

export default function SuccessWindow(props) {
    const { setShow } = props;
    return (
        <div >
            <button id="CloseWindowButton" onClick={() => setShow(false)}>Close</button>
        </div>
    )
}
