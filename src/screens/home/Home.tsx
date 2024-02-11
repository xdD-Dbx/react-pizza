import { useEffect, useState } from 'react'

import { Categories } from './categories/Categories'
import { PizzaBlock } from './pizza-block/PizzaBlock'
import { Skeleton } from './pizza-block/skeleton/Skeleton'
import { Sort } from './sort/Sort'

export function HomePage() {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch('https://65c8b1e2a4fbc162e1120e49.mockapi.io/items')
			.then((res) => {
				return res.json()
			})
			.then((arr) => {
				setItems(arr)
				setIsLoading(false)
			})
	}, [])

	return (
		<>
			<div className='container'>
				<div className='content__top'>
					<Categories />
					<Sort />
				</div>
				<h2 className='content__title'>Все пиццы</h2>
				<div className='content__items'>
					{isLoading
						? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
						: items.map((item) => <PizzaBlock key={item.id} {...item} />)}
				</div>
			</div>
		</>
	)
}
