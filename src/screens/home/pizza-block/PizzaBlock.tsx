import styles from './PizzaBlock.module.css'
import { PlusSvg } from './PlusSvg'

export function PizzaBlock() {
	return (
		<div className={styles.pizzaBlock}>
			<img
				className={styles.image}
				src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
				alt='Pizza'
			/>
			<h4 className={styles.title}>Чизбургер-пицца</h4>
			<div className={styles.selector}>
				<ul>
					<li className={styles.active}>тонкое</li>
					<li>традиционное</li>
				</ul>
				<ul>
					<li className={styles.active}>26 см.</li>
					<li>30 см.</li>
					<li>40 см.</li>
				</ul>
			</div>
			<div className={styles.bottom}>
				<div className={styles.price}>от 395 ₽</div>
				<div className='button button--outline button--add'>
					<PlusSvg />
					<span>Добавить</span>
					<i>2</i>
				</div>
			</div>
		</div>
	)
}