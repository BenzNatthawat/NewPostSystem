import React, { Component } from 'react'
import HeaderComponent from '../pages/Header_Component'
import FooterComponent from '../pages/Footer_Component'
import './Template_News.css'
import Menunews from '../../route/Menu_news'

class Template_News_all extends Component {  
  render() {
    return (
      <div className='ui container padding-news-top'>
        <HeaderComponent />
        <Menunews />
        <FooterComponent />
      </div>
    )
  }
}

export default Template_News_all;