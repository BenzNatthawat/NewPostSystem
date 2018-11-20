import React, { Component } from 'react'

import { Card } from 'semantic-ui-react'
import CardButton from './CardButton'
import Modal from '../../Modal/Modal'

class CardExampleFluid extends Component {

	render() {
		if(this.props.news[0].err!==null){
			const News_one = (this.props.news).map((news) => {
				let button = null
				if( news.node !== undefined )
					news = news.node
				if(news.user !== null)
					if( this.props.userId === news.user.id )
						button = <CardButton cardid={news.id}/>
				else 
					button = ''
					return (
						<Card fluid color='red' key={news.id}
							header={news.topic}
							description={news.description}
							extra={button}
						/>
					) 
				})
			return (
				<div>
				<Card.Group>
					{News_one}
				</Card.Group>
				<Modal/>
				</div>
			)
		}
		else
			return (
				<div style={{textAlign:'center'}}>ไม่มีข่าว</div>
			)
	}
}
export default CardExampleFluid