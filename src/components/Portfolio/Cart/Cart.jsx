import React from 'react'
import classes from './Cart.module.css'

const Cart = ({title, list1, img}) => {
	return (
		<div className={classes.cart}>
			<img className={classes.cart_img} src={img} alt='image cart' />
			<div className={classes.title_block}>
				<p className={classes.title}>{title}</p>
				<ul>
					<li className={classes.list1}>{list1}</li>
				</ul>
			</div>
		</div>
	)
}

export default Cart