import { useState } from 'react'
import { ArrowSvg } from './ArrowSvg'
import styles from './Sort.module.css'

const sortList = ['популярности', 'цене', 'алфавиту']

export function Sort() {
	const [isOpened, setIsOpened] = useState(false)
	const [sortState, setSortState] = useState(sortList[0])

	const onClickSort = (item: string) => {
		setIsOpened(!isOpened)
		setSortState(item)
	}

	return (
		<div className={styles.sort}>
			<div className={styles.sort__label}>
				<ArrowSvg />
				<b>Сортировка по:</b>
				<span onClick={() => setIsOpened(!isOpened)}>{sortState}</span>
			</div>
			{isOpened ? (
				<div className={styles.sort__popup}>
					<ul>
						{sortList.map((item) => (
							<li
								className={sortState === item ? styles.active : ''}
								onClick={() => onClickSort(item)}
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			) : (
				''
			)}
		</div>
	)
}
