import React from 'react'
import classes from './Cart.module.css'

const Cart = ({children}) => {
	return (
		<div className={classes.cart}>
			{children}
		</div>
	)
}

export default Cart

// const products = [
// 	{
// 		id: 1,
// 		img: img1,
// 		title: 'Бухгалтерский учет',
// 		list1: 'Оформление первичных бухгалтерских документов;',
// 		list2: 'Выписывание счетов-фактур;',
// 		list3: 'Банковские операции по платежам и т.д.',
// 	},
// 	{
// 		id: 2,
// 		img: img2,
// 		title: 'Аудиторские проверки',
// 		list1: 'Аудирование состояния бухгалтерского учета;',
// 		list2: 'Аудит по налогообложению.',
// 	},
// 	{
// 		id: 3,
// 		img: img3,
// 		title: 'Консультации по налогообложению',
// 		list1: 'Помощь в выборе режима налогообложения;',
// 		list2: 'Разбор кейсов компаний по налогообложению.',
// 	},
// 	{
// 		id: 4,
// 		img: img4,
// 		title: 'Консультации по таможенным процедурам и оформлениям',
// 		list1: 'Таможенное оформление товаров;',
// 		list2: 'Консультации.',
// 	},
// 	{
// 		id: 5,
// 		img: img5,
// 		title: 'Финансовый анализ',
// 		list1: 'Анализ состояния компании;',
// 		list2: 'Анализ продаж и себестоимости.',
// 	},
// ]