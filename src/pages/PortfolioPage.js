// eslint-disable-next-line import/no-anonymous-default-export
import pic2 from "../miniport/images/pic01.jpg"
import pic3 from "../miniport/images/pic02.jpg"
import pic4 from "../miniport/images/pic03.jpg"
import pic5 from "../miniport/images/pic04.jpg"
import pic6 from "../miniport/images/pic05.jpg"
import pic7 from "../miniport/images/pic06.jpg"
export default () =>{
    return(
        <>
            <h1>Portfolio Page</h1>
            <article id="portfolio" className="wrapper style3">
                <div className="container">
                    <header>
                        <h2>Here’s some stuff I made recently.</h2>
                        <p>Proin odio consequat sapien vestibulum consequat lorem dolore feugiat.</p>
                    </header>
                    <div className="row">
                        <div className="col-4 col-6-medium col-12-small">
                            <article className="box style2">
                                <a href="#" className="image featured"><img src={pic2} alt="Зображення відсутн'є"/></a>
                                <h3><a href="#">Magna feugiat</a></h3>
                                <p>Ornare nulla proin odio consequat.</p>
                            </article>
                        </div>
                        <div className="col-4 col-6-medium col-12-small">
                            <article className="box style2">
                                <a href="#" className="image featured"><img src={pic3} alt=""/></a>
                                <h3><a href="#">Veroeros primis</a></h3>
                                <p>Ornare nulla proin odio consequat.</p>
                            </article>
                        </div>
                        <div className="col-4 col-6-medium col-12-small">
                            <article className="box style2">
                                <a href="#" className="image featured"><img src={pic4} alt=""/></a>
                                <h3><a href="#">Lorem ipsum</a></h3>
                                <p>Ornare nulla proin odio consequat.</p>
                            </article>
                        </div>
                        <div className="col-4 col-6-medium col-12-small">
                            <article className="box style2">
                                <a href="#" className="image featured"><img src={pic5} alt=""/></a>
                                <h3><a href="#">Tempus dolore</a></h3>
                                <p>Ornare nulla proin odio consequat.</p>
                            </article>
                        </div>
                        <div className="col-4 col-6-medium col-12-small">
                            <article className="box style2">
                                <a href="#" className="image featured"><img src={pic6} alt=""/></a>
                                <h3><a href="#">Feugiat aliquam</a></h3>
                                <p>Ornare nulla proin odio consequat.</p>
                            </article>
                        </div>
                        <div className="col-4 col-6-medium col-12-small">
                            <article className="box style2">
                                <a href="#" className="image featured"><img src={pic7} alt=""/></a>
                                <h3><a href="#">Sed amet ornare</a></h3>
                                <p>Ornare nulla proin odio consequat.</p>
                            </article>
                        </div>
                    </div>
                    <footer>
                        <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
                        <a href="/contactPage" className="button large scrolly">Get in touch with me</a>
                    </footer>
                </div>
            </article>
        </>
    )
}