import React from 'react'
import Cart from './Cart/Cart'
import classes from './Portfolio.module.css'

import img1 from '../../assets/portfolio/img1.png'
import img2 from '../../assets/portfolio/img2.png'
import img3 from '../../assets/portfolio/img3.png'

const products = [
	{
		id: 1,
		img: img1,
		title: 'ОсОО “Кул Брос"',
		list1: 'Бухгалтерское сопровождение',
	},
	{
		id: 2,
		img: img2,
		title: 'ОсОО “Кул Брос”',
		list1:
			'Разработка ТЭО на получение статуса “свободного склада” в Чуйской области',
	},
	{
		id: 3,
		img: img3,
		title: 'ОсОО “Кул Брос”',
		list1:'Разработка ТЭО на получение статуса “свободного склада” в г. Кызыл-Кыя',
	},
]

const Portfolio = () => {
	return (
		<div className='container'>
			<h2 className={classes.title}>Успешные проекты компании</h2>
			<div className={classes.cart_block}>
				{products.map(product => (
					<Cart
						key={product.id}
						img={product.img}
						title={product.title}
						list1={product.list1}
					/>
				))}
			</div>
		</div>
	)
}

export default Portfolio