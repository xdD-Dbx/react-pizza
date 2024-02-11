import { Link } from 'react-router-dom'

import styles from './Cart.module.css'
import { CartItem } from './cartItem/CartItem'
import { ArrowSvg } from './icons/ArrowSvg'
import { CartSvg } from './icons/CartSvg'
import { ClearCartSvg } from './icons/ClearCartSvg'

export function CartPage() {
	return (
		<>
			<div className='container container--cart'>
				<div className={styles.cart}>
					<div className={styles.cartTop}>
						<h2 className={styles.contentTitle}>
							<CartSvg />
							Корзина
						</h2>
						<div className={styles.cartClear}>
							<ClearCartSvg />
							<span>Очистить корзину</span>
						</div>
					</div>
					<div className={styles.contentItems}>
						<CartItem />
					</div>
					<div className={styles.cartBottom}>
						<div className={styles.details}>
							<span>
								Всего пицц: <b>3 шт.</b>
							</span>
							<span>
								Сумма заказа: <b>900 ₽</b>
							</span>
						</div>
						<div className={styles.buttons}>
							<Link
								to='/'
								className='button button--outline button--add go-back-btn'
							>
								<ArrowSvg />
								<span>Вернуться назад</span>
							</Link>
							<div className='button pay-btn'>
								<span>Оплатить сейчас</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
