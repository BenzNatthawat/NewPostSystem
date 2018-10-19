import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form';

class Edit_News extends Component {
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { handleSubmit } = this.props

    if(this.props.mess === 'error' )
      return (
        <div>ค้นหา ไม่เจอข่าวที่ต้องการแก้ไข</div>
      )
    else
      return (
        <form onSubmit={handleSubmit} className='ui form'>
        <div className='field'>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder='Input Title'                       
          />
        </div>
        <div className='field'>
          <Field
            name="detail"
            component="textarea"
            type="text"
            placeholder="Input Detail"
          />
        </div>
        <button type="submit" className='ui button'>SAVE</button>
        </form>
        
      )
  }
}

function mapStateToProps(state, Newsall) {
  let News_edit = []
  News_edit = Newsall.newsall.find( News_one => (Number(News_one.id) === Number(Newsall.edit_id) ? News_one : 0) )
  if( typeof News_edit !== 'undefined' )
    return {
      initialValues: {
        title: News_edit.title,
        detail: News_edit.detail,
        id: News_edit.id
      }
    }
  else
    return {
      mess: 'error'
    }
}

Edit_News = reduxForm({
  form: 'Edit_News'
})(Edit_News)

export default connect(mapStateToProps)(Edit_News)