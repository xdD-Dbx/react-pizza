import { Header } from '../../layout/header/Header'
import styles from './Cart.module.css'
import { ArrowSvg } from './icons/ArrowSvg'
import { CartSvg } from './icons/CartSvg'
import { ClearCartSvg } from './icons/ClearCartSvg'
import { MinusSvg } from './icons/MinusSvg'
import { PlusSvg } from './icons/PlusSvg'
import { RemoveSvg } from './icons/RemoveSvg'

export function CartPage() {
	return (
		<>
			<Header />
			<div className='content'>
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
										className={`button button--outline button--circle ${styles.countMinus}`}
									>
										<MinusSvg />
									</div>
									<b>2</b>
									<div
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
								<a
									href='/'
									className='button button--outline button--add go-back-btn'
								>
									<ArrowSvg />
									<span>Вернуться назад</span>
								</a>
								<div className='button pay-btn'>
									<span>Оплатить сейчас</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
