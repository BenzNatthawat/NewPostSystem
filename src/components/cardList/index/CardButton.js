import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Card.css'
import { NavLink } from 'react-router-dom'
import { newsAction } from '../../../redux/action/news'
import { Button, Modal } from 'semantic-ui-react'

class ButtonExampleEmphasisShorthand extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  handleClick(data) {
      this.props.DeleteNews(data)
  }
  handleClickModal() {
    this.setState({size: 'mini', open: true })
  }

  render() {
    const { open, size } = this.state
    return (
    <div className='footer-button'>
      <NavLink to={`news/${this.props.cardid}`}><Button color='teal' content='Edit' /></NavLink >
      <Button onClick={() => this.handleClickModal() } color='red' content='Delete' />
      <Modal size={size} open={open} onClose={this.close}>
        <Modal.Header>แน่ใจ!!!!</Modal.Header>
          <Modal.Content>
            <p>ท่านแน่ใจหรือไม่ที่จะลบข่าวนี้ ไอดี:{this.props.cardid}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>ยกเลิก</Button>
            <Button positive onClick={() => {this.close();this.handleClick(this.props.cardid)} } icon='checkmark' labelPosition='right' content='ตกลง' />
          </Modal.Actions>
      </Modal>
    </div>
    )
  }
} 

const mapDispatchToProps = (dispatch) => {
  return{
    DeleteNews: (data) => {
      dispatch(newsAction.DeleteNews(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(ButtonExampleEmphasisShorthand)