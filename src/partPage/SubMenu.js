import pic1 from "../miniport/images/pic00.jpg"
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
export default () =>{
    return(
        <>
            <ul>
                <li><Link to="/"><img src={pic1} alt="Фото не підтягнуте" width="25px"/></Link></li>
                <li>Знову не визначено</li>
            </ul>
        </>
    )
}