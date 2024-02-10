import { useState } from 'react'
import styles from './PizzaBlock.module.css'
import { PlusSvg } from './PlusSvg'

type PizzaBlockType = {
	id: number
	imageUrl: string
	title: string
	price: number
	types: Array<number>
	sizes: Array<number>
}

export function PizzaBlock({
	id,
	imageUrl,
	title,
	types,
	sizes,
	price,
}: PizzaBlockType) {
	const [pizzaCount, setPizzaCount] = useState(0)
	const [pizzaType, setPizzaType] = useState(types[0])
	const [pizzaSize, setPizzaSize] = useState(sizes[0])

	return (
		<div className={styles.pizzaBlock}>
			<img className={styles.image} src={imageUrl} alt='Pizza' />
			<h4 className={styles.title}>{title}</h4>
			<div className={styles.selector}>
				<ul>
					{types.map((type) => (
						<li
							className={type === pizzaType ? styles.active : ''}
							onClick={() => setPizzaType(type)}
						>
							{type === 0 ? 'тонкое' : 'традиционное'}
						</li>
					))}
				</ul>
				<ul>
					{sizes.map((size) => (
						<li
							className={pizzaSize === size ? styles.active : ''}
							onClick={() => setPizzaSize(size)}
						>
							{size} см.
						</li>
					))}
				</ul>
			</div>
			<div className={styles.bottom}>
				<div className={styles.price}>от {price} ₽</div>
				<div
					className='button button--outline button--add'
					onClick={() => setPizzaCount((prev: number) => prev + 1)}
				>
					<PlusSvg />
					<span>Добавить</span>
					<i>{pizzaCount}</i>
				</div>
			</div>
		</div>
	)
}
