import pizzaLogo from '../../assets/img/pizza-logo.svg'
import { CartSvg } from './CartSvg'
import styles from './Header.module.css'

export function Header() {
	return (
		<header className={styles.header}>
			<div className={`${styles.container} container`}>
				<div className={styles.logo}>
					<img width='38' src={pizzaLogo} alt='Pizza logo' />
					<div>
						<h1>React Pizza</h1>
						<p>самая вкусная пицца во вселенной</p>
					</div>
				</div>
				<div className={styles.cart}>
					<a href='/cart.html' className='button button--cart'>
						<span>520 ₽</span>
						<div className='button__delimiter'></div>
						<CartSvg />
						<span>3</span>
					</a>
				</div>
			</div>
		</header>
	)
}
