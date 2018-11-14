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
const NEWS_DELETED_SUBSCRIPTION = gql`
  subscription{
    news(where:{mutation_in:DELETED}){
      previousValues{
        id
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

        const news = [...data.newses].reverse()
        this._subscribeToNewsUpdate(subscribeToMore)
        this._subscribeToNewsCreate(subscribeToMore)
        this._subscribeToNewsDeleted(subscribeToMore)

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
        var nextState
        console.log(subscriptionData.data.news.node)
        console.log(prev)
        prev.newses.push(subscriptionData.data.news.node)
        nextState = {
          ...prev,
          newses: prev.newses,
          length: prev.newses.length+1 

        }
        console.log(nextState.newses.length)
        return nextState
      } 
      // updateQuery: (prev, { subscriptionData }) => {
      //   if (!subscriptionData.data) return prev
      //   return prev.newses.push(subscriptionData.data.news.node)
      // }
    })
  }
  _subscribeToNewsDeleted = subscribeToMore => {
    subscribeToMore({
      document: NEWS_DELETED_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {  
          var nextState
          nextState = {
            ...prev,
            newses: prev.newses.filter(newse => newse.id !== subscriptionData.data.news.previousValues.id.replace(/StringIdGCValue|[()]/g,'') )
          }
          return nextState
      }
    })
  }

}

export default Page_News_all;