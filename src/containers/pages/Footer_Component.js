import React, { Component } from 'react'

import { Container } from 'semantic-ui-react'

class News extends Component {
  render() {
    return (
        <footer className='padding-news'>
          <div className='ui one column grid'>
            <div className='row'>
              <div className='column'>
                <Container textAlign='center'>@copy-right</Container>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}

export default News;