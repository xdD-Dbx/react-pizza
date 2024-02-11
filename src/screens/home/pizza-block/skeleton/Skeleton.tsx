import ContentLoader from 'react-content-loader'
import styles from '../PizzaBlock.module.css'

export const Skeleton = () => (
	<ContentLoader
		className={styles.PizzaBlock}
		speed={2}
		width={280}
		height={500}
		viewBox='0 0 280 500'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<circle cx='135' cy='135' r='125' />
		<rect x='0' y='275' rx='10' ry='10' width='280' height='25' />
		<rect x='0' y='315' rx='10' ry='10' width='280' height='86' />
		<rect x='128' y='420' rx='28' ry='28' width='152' height='50' />
		<rect x='0' y='432' rx='10' ry='10' width='95' height='30' />
	</ContentLoader>
)
