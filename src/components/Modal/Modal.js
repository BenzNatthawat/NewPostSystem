import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { newsAction } from '../../redux/action/news'
import * as type from '../../constants/ActionTypes';

class Modal_del extends Component {

  close = () => {
    this.props.closeModal()
  }
  handleClick(data) {
    this.props.DeleteNews(data)
  }

  render() {
    const { show, cardid } = this.props
    return (
    <div>
      <Modal size='mini' open={show} onClose={this.close}>
        <Modal.Header>แน่ใจ!!!!</Modal.Header>
          <Modal.Content>
            <p>ท่านแน่ใจหรือไม่ที่จะลบข่าวนี้ ไอดี:{cardid}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => this.close()}>ยกเลิก</Button>
            <Button positive onClick={() => {this.close();this.handleClick(cardid)} } icon='checkmark' labelPosition='right' content='ตกลง' />
          </Modal.Actions>
      </Modal>
    </div>
    )
  }
} 

function mapStateToProps(state) {
  return {
    show: state.modal.show,
    cardid: state.modal.cardid,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    DeleteNews: (data) => {
      dispatch(newsAction.DeleteNews(data))
    },
		closeModal: () => {
			dispatch({type: type.MODAL.CLOSE})
		}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal_del)