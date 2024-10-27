// eslint-disable-next-line import/no-anonymous-default-export
import {Link} from "react-router-dom";
import pic1 from "../miniport/images/pic00.jpg"

export default () =>{
    return(
        <>
            <h1>Top Page</h1>
            <article id="top" className="wrapper style1">
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-5-large col-12-medium">
                            <span className="image fit"><img src={pic1} alt="Фото відсутн'є"/></span>
                        </div>
                        <div className="col-8 col-7-large col-12-medium">
                            <header>
                                <h1>Hi. I'm <strong>Jane Doe</strong>.</h1>
                            </header>
                            <p>And this is <strong>Miniport</strong>, a free, fully responsive HTML5 site template
                                designed by <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net">HTML5
                                    UP</a> &amp; released under the <a href="http://html5up.net/license">CCA license</a>.
                            </p>
                            <Link to="/workPage" className="button large scrolly">Learn about what I do</Link>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}