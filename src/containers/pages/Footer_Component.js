import React, { Component } from 'react'

import { Container } from 'semantic-ui-react'
import { Dimmer, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'

class News extends Component {
  render() {
    const { stateLoading } = { ...this.props }
    let showLoading

    if (stateLoading.loading) {
      showLoading = (<Dimmer active inverted><Loader inverted content='Loading' /></Dimmer>)
    } else {
      showLoading = ''
    }

    return (
      <div>
        {showLoading}
        <footer className='padding-news'>
          <div className='ui one column grid'>
            <div className='row'>
              <div className='column'>
                <Container textAlign='center'>@copy-right</Container>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stateLoading: state.Loading,
  }
}

export default connect(mapStateToProps)(News);