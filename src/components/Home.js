import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, fetchItems ,updateCartCount } from './actions/cartActions';

 class Home extends Component{
    
    componentDidMount() {
        this.props.fetchItems(); // Dispatch action to fetch items from the API
    }

    handleClick = (id)=>{
        this.props.addToCart(id); 
            this.props.updateCartCount(this.props.cartCount + 1);
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price} rs</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        items: state.items,
        cartCount: state.cartCount
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        fetchItems: () => { dispatch(fetchItems()) },
        addToCart: (id)=>{dispatch(addToCart(id))},
        updateCartCount: (count)=>{dispatch(updateCartCount(count))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)