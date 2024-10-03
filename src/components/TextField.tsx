import { FC, useState } from 'react'
import cross from 'assets/cross.svg'
import 'styles/textField.scss'

type TextField = {
	title: string
	prop: string
	name: string
}

const TextField: FC<TextField> = ({ title, name, prop }) => {
	const [fieldValue, setFieldValue] = useState(prop)

	return (
		<label className='textfield_label' htmlFor={name}>
			{title}
			<div className='textfield_inner-wrapper'>
				<input
					id={name}
					name={name}
					className='textfield_input'
					value={fieldValue}
					onChange={e => setFieldValue(e.target.value)}
					required
				/>
				{fieldValue && (
					<span
						className='textfield_input__clear-button'
						onClick={() => setFieldValue('')}
					>
						<img src={cross} alt='del' />
					</span>
				)}
			</div>
		</label>
	)
}

export default TextField
