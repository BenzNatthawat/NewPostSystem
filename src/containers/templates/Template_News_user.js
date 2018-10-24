import React, { Component } from 'react'
import HeaderComponent from '../pages/Header_Component'
import FooterComponent from '../pages/Footer_Component'
import './Template_News.css'
import { connect } from 'react-redux'
import { newsAction } from '../../redux/action/news'
import CardList from '../../components/cardList/index/CardList'

class Template_News_user extends Component {  
  render() {
    const { news_user } = { ...this.props }
    if (news_user.length === 0) {
      this.props.getNews_only_user()
      return 'loading...'
    } else {
    return (
      <div className='ui container padding-news-top'>
          <HeaderComponent />
          <CardList news={news_user}/>
          <FooterComponent />
      </div>
    )
    }
  }
}

function mapStateToProps(state) {
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