import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light text-capitalize">
        <div className="container">
            <a className="navbar-brand" href="/home"><img src="imgs/logo.png" alt="#" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#show-menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="show-menu">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a  href="/home" className="nav-link">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a  href="/about" className="nav-link">about</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/service">Service</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/agency">travel agency</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">contact us</a>
                    </li>
                    <li className="nav-item .search-container">
                        <Link className="nav-link search" to="#"><i className="fas fa-search"></i></Link>
                        <form>
                            <input type="search" />
                        </form>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="far fa-user"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="far fa-heart"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    );
};

export default Navigation;