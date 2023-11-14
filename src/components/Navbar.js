import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

 const Navbar = ({ cartCount })=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">ShopEasy</Link>
                    
                    <ul className="right">
                        {/* <li><Link to="/">Shop</Link></li> */}
                        <li><Link to="/cart">My cart ({cartCount})</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

const mapStateToProps = (state) => {
    return {
        cartCount: state.cartCount, // Assuming cartCount is in the cart reducer
    };
};

export default connect(mapStateToProps)(Navbar);