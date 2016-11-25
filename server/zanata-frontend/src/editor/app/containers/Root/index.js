import React, { Component } from 'react'
import Modal from '../../components/Modal'
import Icon from '../../components/Icon'
import { Button, Panel, PanelGroup,
  ListGroup, ListGroupItem, Badge, Label } from 'react-bootstrap'

class TestModal extends Component {

  constructor () {
    super()
    this.state = {
      show: false
    }
  }

  hideModal () {
    this.setState({show: false})
  }
  showModal () {
    this.setState({show: true})
  }
  /* eslint-disable react/jsx-no-bind */
  render () {
    return (
      <div>
        <Button bsStyle="default"
          onClick={() => this.showModal()}>Launch Modal</Button>
        <Modal
          show={this.state.show}
          onHide={() => this.hideModal()}>
          <Modal.Header>
            <Modal.Title><small><span className="pull-left">
            Translation Memory Details</span></small></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PanelGroup defaultActiveKey="1" accordion>
              <Panel bsStyle="info" header="Panel 1" eventKey="1">
                <ListGroup>
                  <ListGroupItem className="small" header="Source">
                    <h3>Policy</h3>
                    <ListGroupItem>
                      <span><strong>Comments&nbsp;</strong>
                        <Badge>0</Badge></span>
                    </ListGroupItem>
                  </ListGroupItem>
                  <ListGroupItem className="small" header="Target">
                    <Label bsStyle="success">Translated</Label>
                    <h3>Politica</h3>
                    <ListGroupItem>
                      <Icon name="comment" className="s2" />
                      <span><strong>Comments&nbsp;</strong>
                        <Badge>0</Badge></span>
                    </ListGroupItem>
                  </ListGroupItem>
                </ListGroup>
              </Panel>
              <Panel bsStyle="info" header="Panel 2"
                eventKey="2">Panel 2 content</Panel>
            </PanelGroup>
          </Modal.Body>
          <Modal.Footer>
            <p>Last updated...</p>
          </Modal.Footer>
        </Modal>
      </div>)
  }
  /* eslint-enable react/jsx-no-bind */
}

export default TestModal
