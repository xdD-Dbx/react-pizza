import { useState } from 'react'
import styles from './Categories.module.css'

const categories = [
	'Все',
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые',
]

export function Categories() {
	const [isActive, setIsActive] = useState(categories[0])

	return (
		<div className={styles.categories}>
			<ul>
				{categories.map((item) => (
					<li key={item} className={item === isActive ? styles.active : ''}
					onClick={() => setIsActive(item)}>{item}</li>
				))}
			</ul>
		</div>
	)
}
