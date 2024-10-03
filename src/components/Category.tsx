import { FC } from 'react'
import 'styles/category.scss'

type Category = {
	title: string
}

const Category: FC<Category> = ({ title }) => {
	return <p className='category'>{title}</p>
}

export default Category
