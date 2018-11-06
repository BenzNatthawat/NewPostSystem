import React, { Component } from 'react'
import './Page_News.css'
import { connect } from 'react-redux'
import { newsAction } from '../../redux/action/news'
import CreateNews from '../../components/cardList/create/Create_News'

class Template_News_all extends Component {  
  submit = values => {
    const {history} = this.props
    this.props.addNews(values, history)
  }
  render() {
    const { news } = { ...this.props }
    if (news.length === 0) {
      this.props.getNewsAll()
      return ''
    } else {
    return (
      <div className='ui container padding-news-top'>
          <CreateNews onSubmit={this.submit} />
      </div>
    )
    }
  }
}

function mapStateToProps(state) {
  return {
    news: [...state.News.data],
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return{
    getNewsAll: () => {
      dispatch(newsAction.getNewsAll())
    },
    addNews: (data, history) => {
      dispatch(newsAction.addNews(data, history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Template_News_all);