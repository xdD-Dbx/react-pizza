import pizza from '../../assets/pizza.json'
import { Header } from '../../layout/header/Header'
import { Categories } from './categories/Categories'
import { PizzaBlock } from './pizza-block/PizzaBlock'
import { Sort } from './sort/Sort'

export function HomePage() {
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
						{pizza.map((item) => (
							<PizzaBlock key={item.id} {...item} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}
