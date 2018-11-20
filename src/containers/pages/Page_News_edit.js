import React, { Component } from 'react'
import './Page_News.css'
import EditNews from '../../components/cardList/edit/Edit_News'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const EDITNEWS = gql`
    query editNews($id: ID!){
      news(where:{id:$id}){
        id
        topic
        description
        user {
          id
        }
      }
    }
`

class Template_News_edit extends Component {  
  render() {
    const { id } = {...this.props.match.params}
    let login_member = localStorage.getItem('user_login')
      return (
        <Query query={EDITNEWS} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <div>กำลังโหลดข่าว</div>
            if (error) return <div>ไม่เจอข่าวที่ท่านกำลังค้นหา</div>
            const news = {...data.news}
            if( news.user !== null ){
              if( news.user.id === login_member )
                return (
                  <div className='ui container padding-news-top'>
                    <EditNews newsall={news} id={id} history={this.props.history}/>
                  </div>
                )
            }
            else {
              return <div>ท่านไม่มีสิทธิ์แก้ไขข่าวนี้</div>
            }
          }}
        </Query>
      )
  }
}

export default Template_News_edit;