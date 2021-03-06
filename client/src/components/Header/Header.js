import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header id="home">
        <div className="overlay">
            <div className="container">
                <div>
                    <h1><span>Amazing</span><br />Santorini 10 Days Tour</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as</p>
                    <button><Link to="/" className="text-uppercase">book now</Link></button>
                </div>
            </div>
        </div>
    </header>
    );
};

export default Header;