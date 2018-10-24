import React from 'react'

import { Card } from 'semantic-ui-react'
import CardButton from './CardButton'

const CardExampleFluid = props => {
		const News_one = (props.news).map((user) => { 
			const button = <CardButton  cardid={user.id}/>
				return (
					<Card fluid color='red' key={user.id}
						header={user.title}
						description={user.detail}
						extra={button}
					/>
				) 
			})
		return (
			<Card.Group>
				{News_one}
			</Card.Group>
		)
}

export default CardExampleFluid