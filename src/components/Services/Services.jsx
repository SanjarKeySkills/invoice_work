import React from 'react'
import Cart from './Cart/Cart'
import classes from './Services.module.css'

import img1 from '../../assets/services/img1.svg'
import img2 from '../../assets/services/img2.svg'
import img3 from '../../assets/services/img3.svg'
import img4 from '../../assets/services/img4.svg'
import img5 from '../../assets/services/img5.svg'

const products = [
	{
		id: 1,
		img: img1,
		title: 'Бухгалтерский учет',
		list1: 'Оформление первичных бухгалтерских документов;',
		list2: 'Выписывание счетов-фактур;',
		list3: 'Банковские операции по платежам и т.д.',
	},
	{
		id: 2,
		img: img2,
		title: 'Аудиторские проверки',
		list1: 'Аудирование состояния бухгалтерского учета;',
		list2: 'Аудит по налогообложению.',
	},
	{
		id: 3,
		img: img3,
		title: 'Консультации по налогообложению',
		list1: 'Помощь в выборе режима налогообложения;',
		list2: 'Разбор кейсов компаний по налогообложению.',
	},
	{
		id: 4,
		img: img4,
		title: 'Консультации по таможенным процедурам и оформлениям',
		list1: 'Таможенное оформление товаров;',
		list2: 'Консультации.',
	},
	{
		id: 5,
		img: img5,
		title: 'Финансовый анализ',
		list1: 'Анализ состояния компании;',
		list2: 'Анализ продаж и себестоимости.',
	},
]

const Services = () => {
	return (
		<div className={classes.services}>
			<div className='container'>
				<h2 className={classes.title}>Услуги компании</h2>
				<p className={classes.desc}>
					Команда опытных консультантов помогут вам во всех аспектах вашего
					бизнеса по следующим направлениям:
				</p>
				<div className={classes.cart_block}>
					{products.map(product => (
						<Cart
							key={product.id}
							img={product.img}
							title={product.title}
							list1={product.list1}
							list2={product.list2}
							list3={product.list3}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Services
