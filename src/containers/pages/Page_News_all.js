import React, { Component } from 'react'
import './Page_News.css'
import CardList from '../../components/cardList/index/CardList'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const allNews = gql`
{
  newses{
    id
    topic
    description
    user {
      id
    }
  }
}
`

class Template_News_all extends Component {  
  render() {
    return (
      <Query query={allNews}>
      {({ loading, error, data }) => {
        if (loading) return <div>กำลังโหลดข่าว</div>
        if (error) return <div>ไม่พบข่าวที่กำลังค้นหา</div>
        const news = [...data.newses].reverse()
        return (
          <div className='ui container padding-news-top'>
              <CardList news={news}/>
          </div>
        )
      }}
      </Query>
    )
  }
}

export default Template_News_all;