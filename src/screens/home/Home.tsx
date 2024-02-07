import { useState } from 'react'
import { Header } from '../../layout/header/Header'
import { Categories } from './categories/Categories'
import { PizzaBlock } from './pizza-block/PizzaBlock'
import { Sort } from './sort/Sort'

export function HomePage() {
	const [pizzaCount, setPizzaCount] = useState(0)

	return (
		<>
			<Header />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories />
						<Sort />
					</div>
					<h2 className='content__title'>Все пиццы</h2>
					<div className='content__items'>
						<PizzaBlock pizzaCount={pizzaCount} setPizzaCount={setPizzaCount} />
					</div>
				</div>
			</div>
		</>
	)
}
