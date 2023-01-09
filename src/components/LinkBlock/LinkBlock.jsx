import React from 'react'
import classes from './LinkBlock.module.css'

const LinkBlock = () => {
	return (
		<div className={classes.link_block}>
			<div className='container'>
				<div className={classes.img_bg}>
					<p className={classes.points}></p>
					<div className={classes.code_block}>
						<p className={classes.title}>
							Налоговый кодекс Кыргызской Респубики
						</p>
						<a
							className={classes.link}
							target='_blank'
							href='https://www.sti.gov.kg/%D0%B1%D0%B0%D0%B7%D0%B0-%D0%B7%D0%BD%D0%B0%D0%BD%D0%B8%D0%B9'
						>
							Открыть
						</a>
						<p className={classes.p}></p>
						<p className={classes.title}>Таможенный кодекс ЕАЭС</p>
						<a
							className={classes.link}
							target='_blank'
							href='https://eec.eaeunion.org/comission/department/dep_tamoj_zak/tk_eaes.php'
						>
							Открыть
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LinkBlock