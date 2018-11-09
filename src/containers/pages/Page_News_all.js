import React, { Component } from 'react'
import './Page_News.css'
import CardList from '../../components/cardList/index/CardList'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const ALL_NEWS = gql`
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

const NEWS_UPDATE_SUBSCRIPTION = gql`
  subscription{
    news(where:{mutation_in:UPDATED}) {
      node{
        id
        topic
        description
        user {
          id
        }
      }
    }
  }
`
const NEWS_CREATE_SUBSCRIPTION = gql`
  subscription{
    news(where:{mutation_in:CREATED}){
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
`

class Page_News_all extends Component {  
  render() {
    
    return (
      <Query query={ALL_NEWS}>
      {({ loading, error, data, subscribeToMore }) => {
        if (loading) return <div>กำลังโหลดข่าว</div>
        if (error) return <div>ไม่พบข่าวที่กำลังค้นหา</div>
        
        this._subscribeToNewsUpdate(subscribeToMore)
        this._subscribeToNewsCreate(subscribeToMore)
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

  _subscribeToNewsUpdate = subscribeToMore => {
    subscribeToMore({
      document: NEWS_UPDATE_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev
      }
    })
  }
  _subscribeToNewsCreate = subscribeToMore => {
    subscribeToMore({
      document: NEWS_CREATE_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev
        console.log(subscriptionData.data)
        const newLink = "subscriptionData.data.news.node"
        Object.assign({}, prev, {
          newses: {
            newses: [newLink, ...prev.newses],
            count: prev.newses.length + 1,
            __typename: prev.newses.__typename
          }
        })
      }
    })
  }

}

export default Page_News_all;