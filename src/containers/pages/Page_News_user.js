import React, { Component } from 'react'
import './Page_News.css'
import CardList from '../../components/cardList/index/CardList'

class Template_News_user extends Component { 
  render() {
    console.log(this.props)
    const { news_user } = { ...this.props }
    if (news_user.length === 0 || news_user[0].err ) {
      this.props.getNews_only_user()
      return 'loading...'
    } else {
      this.props.getNews_only_user()
    return (
      <div className='ui container padding-news-top'>
          <CardList news={news_user}/>
      </div>
    )
    }
  }
}

export default Template_News_user;