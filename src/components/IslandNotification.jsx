import React, { useState, useEffect} from 'react';
import InCSS from '../css/IslandNotification.module.css';


const BlankNotification = ({props, check}) => {
    const message=props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {if (message) {alert(message);}}, [message]);

    return (
    <div className={InCSS.notificationContainer}>
        <span>{message}</span>
    </div>);
}

export default BlankNotification