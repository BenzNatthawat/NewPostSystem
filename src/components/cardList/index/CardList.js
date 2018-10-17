import React from 'react'

import { Card } from 'semantic-ui-react'
import CardButton from './CardButton'

import { connect } from 'react-redux'

const CardExampleFluid = props => {
		const News_one = (props.NewsList).map((user) => { 
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

function mapStateToProps(state){
	let reverse_data = [...state.News.data].reverse()
  return {
    NewsList: reverse_data
  }
}

export default connect(mapStateToProps)(CardExampleFluid);