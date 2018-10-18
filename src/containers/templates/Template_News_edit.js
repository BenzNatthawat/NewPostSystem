import React, { Component } from 'react'
import HeaderComponent from '../pages/Header_Component'
import FooterComponent from '../pages/Footer_Component'
import './Template_News.css'
import { connect } from 'react-redux'
import { newsAction } from '../../redux/action/news'
import EditNews from '../../components/cardList/edit/Edit_News'

class Template_News_edit extends Component {  
  submit = values => {
    console.log(values);
    this.props.editNews(values)
  }
  render() {
    const { news } = { ...this.props }
    if (news.length === 0) {
      this.props.getNewsAll()
      return ''
    } else {
    return (
      <div className='ui container padding-news-top'>
          <HeaderComponent />
          <EditNews onSubmit={this.submit} edit_id={this.props.match.params.id} newsall={news}/>
          <FooterComponent />
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
      editNews: (data) => {
        dispatch(newsAction.editNews(data))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Template_News_edit);