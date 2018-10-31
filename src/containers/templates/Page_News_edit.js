import React, { Component } from 'react'
import './Template_News.css'
import { connect } from 'react-redux'
import { newsAction } from '../../redux/action/news'
import EditNews from '../../components/cardList/edit/Edit_News'

class Template_News_edit extends Component {  
  submit = values => {
    this.props.editNews(values)
  }
  render() {
    const { news } = { ...this.props }
    if (news.length === 0) {
      this.props.getOneNews(this.props.match.params.id)
      return ''
    } else {

    return (
      <div className='ui container padding-news-top'>
        <EditNews onSubmit={this.submit} edit_id={this.props.match.params.id} newsall={news}/>
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
      getOneNews: (data) => {
        dispatch(newsAction.getOneNews(data))
      },
      editNews: (data) => {
        dispatch(newsAction.editNews(data))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Template_News_edit);