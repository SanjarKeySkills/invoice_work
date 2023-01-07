import React from 'react'
import classes from './Header.module.css'

const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.header_top}></div>
			<div className='container'>
				<div className={classes.header_bot}>
					<div className={classes.logo_block}>
						<p className={classes.logo}></p>
					</div>
					<nav className={classes.nav}>
						<a className={classes.link} href=''>
							Услуги
						</a>
						<a className={classes.link} href=''>
							О нас
						</a>
						<a className={classes.link} href=''>
							Блог
						</a>
						<a className={classes.link} href=''>
							Контакты
						</a>
					</nav>
					<a href='' className={classes.link}>
						+996 (312) 567-315
					</a>
					<a href='' className={classes.btn}>
						Связаться с нами
					</a>
				</div>
			</div>
		</div>
	)
}

export default Header
