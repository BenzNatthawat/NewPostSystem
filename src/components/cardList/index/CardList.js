import React from 'react'

import { Card } from 'semantic-ui-react'
import CardButton from './CardButton'

const CardExampleFluid = props => {
	if(props.news[0].err!==null){
		const News_one = (props.news).map((news) => {
			let button = null
			if( parseInt(localStorage.getItem('userId_login')) === news.user )
				button = <CardButton  cardid={news.id}/>
			else 
				button = ''
				return (
					<Card fluid color='red' key={news.id}
						header={news.title}
						description={news.detail}
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
	else
		return (
			<div style={{textAlign:'center'}}>ไมมีข่าว</div>
		)
}

export default CardExampleFluid