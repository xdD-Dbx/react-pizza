import { useState } from 'react'
import styles from '../Cart.module.css'
import { MinusSvg } from '../icons/MinusSvg'
import { PlusSvg } from '../icons/PlusSvg'
import { RemoveSvg } from '../icons/RemoveSvg'

export function CartItem() {
	const [count, setCount] = useState(1)

	return (
		<div className={styles.cartItem}>
			<div className={styles.cartItemImg}>
				<img
					className={styles.image}
					src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
					alt='Pizza'
				/>
			</div>
			<div className={styles.info}>
				<h3>Сырный цыпленок</h3>
				<p>тонкое тесто, 26 см.</p>
			</div>
			<div className={styles.count}>
				<div
					onClick={() => setCount((prev) => prev - 1)}
					className={`button button--outline button--circle ${styles.countMinus}`}
				>
					<MinusSvg />
				</div>
				<b>{count}</b>
				<div
					onClick={() => setCount((prev) => prev + 1)}
					className={`button button--outline button--circle ${styles.countPlus}`}
				>
					<PlusSvg />
				</div>
			</div>
			<div className={styles.price}>
				<b>770 ₽</b>
			</div>
			<div className={styles.remove}>
				<div className='button button--outline button--circle'>
					<RemoveSvg />
				</div>
			</div>
		</div>
	)
}
