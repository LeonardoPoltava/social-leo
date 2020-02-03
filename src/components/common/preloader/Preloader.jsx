import React from 'react';
import "./Preloader.css";

let Preloader = (props) => {
    return <>
        <div className="shadow"></div>
        <img alt="" className="loading" src="https://icon-library.net/images/ajax-loading-icon/ajax-loading-icon-11.jpg" />
    </>
}
export default Preloader;