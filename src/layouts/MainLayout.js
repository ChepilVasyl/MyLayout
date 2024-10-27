import MyMenu from "./MyMenu";
import SubMenu from "../partPage/SubMenu";
import {Outlet} from "react-router-dom";
export default () =>{
    return(
        <>
            <h1>Main Layout</h1>
            <SubMenu/>
            <MyMenu/>
            <Outlet/>
        </>
    )
}