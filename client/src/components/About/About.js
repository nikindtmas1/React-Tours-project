
const About = () => {
    return (
        <div className="about-us" id="about">
        <div className="small-container">
            <h2 className="text-center">Winter <span>Holiday</span></h2>
            <p className="text-center">as opposed to using 'Content here, content here', making it look lik</p>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 text-center">
                            <div className="item">
                                <img src="imgs/img2.jpg" />
                                <h5 className="text-uppercase">Restaurants</h5>
                            </div>
                            <div className="item">
                                <img src="imgs/img1.jpg" />
                                <h5 className="text-uppercase">where to stay</h5>
                            </div>
                            <div className="item">
                                <img src="imgs/img4.jpg" />
                                <div>
                                    <h5 className="text-uppercase">Sightseeing</h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="imgs/img3.jpg" />
                                <h5 className="text-uppercase">shops and boutiques</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 text-right">
                            <h4 className="text-uppercase">Engoy <span>holiday</span></h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like</p>
                            <button className="text-center"><a href="#" className="text-capitalize">book now</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="first"></div>
            <div className="second"></div>
        </div>
    </div>
    );
};

export default About;