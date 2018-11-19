import React, { Component } from 'react'

import { Card } from 'semantic-ui-react'
import CardButton from './CardButton'
import Modal from '../../Modal/Modal'

class CardExampleFluid extends Component {

	constructor(props) {
		super(props)

		// Set some state
		this.state = {
				show: false
		};
	}
	handler = () => {
		this.setState({
			show: true
		});
	}

	render() {
		if(this.props.news[0].err!==null){
			const News_one = (this.props.news).map((news) => {
				let button = null
				if(1)
				// if(news.user !== null)
					// if( "cjo54w9jw1czt0a42eqhrfcnh" === news.user.id )
						button = <CardButton cardid={news.id} action={this.handler}/>
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