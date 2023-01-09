import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
	return (
		<>
			<div className={classes.footer}>
				<div className='container'>
					<div className={classes.footer_block}>
						<div>
							<p className={classes.icon}></p>
							<p className={classes.date}>© 2022 Invoice Plus</p>
						</div>
						<div>
							<p className={classes.address}>
								720023 ул. Саманчина 6, 3 этаж, каб. 321 г.
							</p>
							<p className={classes.address}>Бишкек, Кыргызская Республика</p>
						</div>
						<div className={classes.contacts_block}>
							<a className={classes.contacts} href=''>
								+996 (312) 567-315
							</a>
							<a className={classes.contacts} href=''>
								info.denver@mckinley.com
							</a>
						</div>
						<div className={classes.social_block}>
							<span className={classes.fb_icon}></span>
							<span className={classes.fb_desc}>Facebook</span>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.sub_footer}></div>
		</>
	)
}

export default Footer
