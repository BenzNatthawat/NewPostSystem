import React, { Component } from 'react'
import './Page_News.css'
import CardList from '../../components/cardList/index/CardList'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const USERNEWS = gql`
  query NEWSESConnection($userId:ID!){
    newsesConnection(where:{user:{id:$userId}}){
      edges{
        node{
          id
          topic
          description
          user{
            id
          }
        }
      }
    }
  }
`

class Template_News_user extends Component { 
  render() {
    const userId = localStorage.getItem('user_login')
    return (
      <Query query={USERNEWS} variables={{ userId }}>
        {({ data, loading, error, subscribeToMore }) => {
          if (loading) return <div>กำลังโหลดข่าว</div>
          if (error) return <div>ไม่พบข่าวที่กำลังค้นหา</div>

          const user_news = [...data.newsesConnection.edges].reverse()
          return (
            <div className='ui container padding-news-top'>
              <CardList news={user_news} userId={userId} />               
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Template_News_user;