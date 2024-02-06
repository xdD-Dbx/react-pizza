import { ArrowSvg } from './ArrowSvg'
import styles from './Sort.module.css'

export function Sort() {
	return (
		<div className={styles.sort}>
			<div className={styles.sort__label}>
				<ArrowSvg />
				<b>Сортировка по:</b>
				<span>популярности</span>
			</div>
			<div className={styles.sort__popup}>
				<ul>
					<li className={styles.active}>популярности</li>
					<li>цене</li>
					<li>алфавиту</li>
				</ul>
			</div>
		</div>
	)
}
