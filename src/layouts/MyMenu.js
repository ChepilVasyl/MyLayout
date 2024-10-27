import {Link, Outlet} from "react-router-dom";

export default () =>{
    return(
        <>
            <nav>
                <ul class="container">
                    <li><Link to="topPage">Top</Link></li>
                    <li><Link to="workPage">Work</Link></li>
                    <li><Link to="portfolioPage">Portfolio</Link></li>
                    <li><Link to="contactPage">Contact</Link></li><br/>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}