import React from 'react'
import Cart from './Cart/Cart'
import classes from './Services.module.css'
import cartClas from './Cart/Cart.module.css'



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
					<Cart>
						<p className={cartClas.icon1}></p>
						<p className={cartClas.title}>Бухгалтерский учет</p>
						<ul>
							<li className={cartClas.desc}>
								Оформление первичных бухгалтерских документов;
							</li>
							<li className={cartClas.desc}>Выписывание счетов-фактур;</li>
							<li className={cartClas.desc}>
								Банковские операции по платежам и т.д.
							</li>
						</ul>
					</Cart>
					<Cart>
						<p className={cartClas.icon2}></p>
						<p className={cartClas.title}>Аудиторские проверки</p>
						<ul>
							<li className={cartClas.desc}>
								Аудирование состояния бухгалтерского учета;
							</li>
							<li className={cartClas.desc}>Аудит по налогообложению.</li>
						</ul>
					</Cart>
					<Cart>
						<p className={cartClas.icon3}></p>
						<p className={cartClas.title}>Консультации по налогообложению</p>
						<ul>
							<li className={cartClas.desc}>
								Помощь в выборе режима налогообложения;
							</li>
							<li className={cartClas.desc}>
								Разбор кейсов компаний по налогообложению.
							</li>
						</ul>
					</Cart>
					<Cart>
						<p className={cartClas.icon4}></p>
						<p className={cartClas.title}>
							Консультации по таможенным процедурам и оформлениям
						</p>
						<ul>
							<li className={cartClas.desc}>Таможенное оформление товаров;</li>
							<li className={cartClas.desc}>Консультации.</li>
						</ul>
					</Cart>
					<Cart>
						<p className={cartClas.icon5}></p>
						<p className={cartClas.title}>Финансовый анализ</p>
						<ul>
							<li className={cartClas.desc}>Анализ состояния компании;</li>
							<li className={cartClas.desc}>Анализ продаж и себестоимости.</li>
						</ul>
					</Cart>
				</div>
			</div>
		</div>
	)
}

export default Services
