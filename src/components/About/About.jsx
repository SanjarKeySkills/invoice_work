import React from 'react'
import classes from './About.module.css'

const About = () => {
	return (
		<div className={classes.about}>
			<div className='container'>
				<div className={classes.blocks}>
					<div className={classes.block_title}>
						<p className={classes.image_mobile}></p>	
						<p className={classes.points_top}></p>
						<h2 className={classes.title}>
							Превосходство основанное на доверии
						</h2>
						<p className={classes.desc}>
							Аудиторские, бухгалтерские, налоговые, финансовые консультации,
							услуги по управлению рисками и налогообложению предприятий в
							различных отраслях экономики.
						</p>
						<a className={classes.btn} href=''>
							Консультация
						</a>
					</div>
					<div className={classes.block_bg}>
						<p className={classes.image}></p>

						<p className={classes.points_bot}></p>
					</div>
				</div>
			</div>
			<p className={classes.bg}></p>
		</div>
	)
}

export default About
