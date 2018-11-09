import React, { Component } from 'react'
import './Page_News.css'
import CreateNews from '../../components/cardList/create/Create_News'

class Template_News_all extends Component {  
  render() {
    return (
      <div className='ui container padding-news-top'>
          <CreateNews history={this.props.history}/>
      </div>
    )
  }
}

export default Template_News_all;