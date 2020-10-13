import React from 'react'
import {connect} from 'react-redux'
import product from './product'

const Cart = (props) => {
    console.log('props: \n', props)
    return(
    <div>
        {props.cart.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
    )
}

const mapState1 = state => {
    return{
        cart: state.cart,
       // product:state.product
      

    }
};
export default connect(mapState1 )(Cart)



