import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import addToCart from '../store/actionCreaters/addToCart.js'

const Product = (props) => {

    console.log('props: \n', props)
    return(
        <div>
            {props.products.map(product => <div key={product.id}> {product.name} <button onClick={()=>props.addToCart(product)}>BUTTON</button></div>)}    
        </div>
        

    )
}
const mapDispatchToProps = dispatch => (bindActionCreators({ addToCart }, dispatch))
    
const mapState = state => {
    return{
        products: state.products
    }
};

export default connect(mapState, mapDispatchToProps)(Product)
