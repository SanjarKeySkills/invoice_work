import React from 'react'
import classes from './Consultation.module.css'

const Consultation = () => {
	return (
		<div className={classes.consultation}>
			<h3 className={classes.title}>Профессиональную консультацию</h3>
			<p className={classes.desc}>возможно заказать кликнув на кнопку</p>
			<a className={classes.link} href=''>Связаться с нами</a>
		</div>
	)
}

export default Consultation