import { Route, Routes } from 'react-router-dom'
import { Header } from './layout/header/Header'
import { CartPage } from './screens/cart/Cart'
import { HomePage } from './screens/home/Home'

export function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/cart' element={<CartPage />} />
				</Routes>
			</div>
		</div>
	)
}
