import React, { Component } from 'react'
import './Template_News.css'
import { connect } from 'react-redux'
import { newsAction } from '../../redux/action/news'
import CardList from '../../components/cardList/index/CardList'

class Template_News_user extends Component { 
  render() {
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

function mapStateToProps(state) {
  if(state.News.data_user.length === 0)
    return {news_user:[{err:null}]}
  else
    return {
      news_user: [...state.News.data_user],
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
      getNews_only_user: () => {
        dispatch(newsAction.getNews_only_user())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Template_News_user);