import React from 'react'
import classes from './Cart.module.css'

const Cart = ({img, title, list1, list2, list3}) => {
	return (
		<div className={classes.cart}>
			<img className={classes.icon} src={img} alt='icons' />
			<p className={classes.title}>{title}</p>
			<ul>
				<li className={classes.desc}>{list1}</li>
				<li className={classes.desc}>{list2}</li>
				<li className={classes.desc}>{list3}</li>
			</ul>
		</div>
	)
}

export default Cart