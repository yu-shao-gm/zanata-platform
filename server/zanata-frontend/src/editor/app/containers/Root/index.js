import React, { Component } from 'react'
import Modal from '../../components/Modal'
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
            <h3>Locations</h3>
            <PanelGroup defaultActiveKey="1" accordion>
              <Panel bsStyle="info"
                header="oVirt/master/frontend/.../ui/uicompat/UIconstants"
                eventKey="1">
                <ul className="list-inline"><li><small>oVirt</small></li>
                  <li><small>master</small></li>
                  <li><small>frontend/webadmin/modules/uicompat/src
                    /main/resources/
                  org/ovirt/engibe/ui/uicompat/UIConstants</small></li></ul>
                <ListGroup>
                  <ListGroupItem className="small" header="Source">
                    <h3>Policy</h3>
                    <ListGroupItem className="comment-box"><h4>Comments
                      &nbsp;<Badge>0</Badge></h4>
                    </ListGroupItem>
                  </ListGroupItem>
                  <ListGroupItem className="small" header="Target">
                    <h3>Politica <Label bsStyle="success">Translated
                    </Label></h3>
                    <ListGroupItem className="comment-box">
                      <h4>Comments&nbsp;<Badge>0</Badge></h4>
                    </ListGroupItem>
                  </ListGroupItem>
                </ListGroup>
              </Panel>
              <Panel bsStyle="info"
                header="oVirt/master/frontend/.../ui/uicompat/UInotconstants"
                eventKey="2">
                <ul className="list-inline"><li><small>oVirt</small></li>
                  <li><small>master</small></li>
                  <li><small>frontend/webadmin/modules/uicompat/src
                    /main/resources/
                  org/ovirt/engibe/ui/uicompat/UInotconstants</small></li></ul>
                <ListGroup>
                  <ListGroupItem className="small" header="Source">
                    <h3>Policy</h3>
                    <ListGroupItem className="comment-box"><h4>Comments
                      &nbsp;<Badge>0</Badge></h4>
                    </ListGroupItem>
                  </ListGroupItem>
                  <ListGroupItem className="small" header="Target">
                    <h3>Politica <Label bsStyle="success">Translated
                    </Label></h3>
                    <ListGroupItem className="comment-box">
                      <h4>Comments&nbsp;<Badge>0</Badge></h4>
                    </ListGroupItem>
                  </ListGroupItem>
                </ListGroup>
              </Panel>
              <Panel bsStyle="info"
                header="oVirt/master/frontend/.../ui/uicompat/UIotherthings"
                eventKey="3">
                <ul className="list-inline"><li><small>oVirt</small></li>
                  <li><small>master</small></li>
                  <li><small>frontend/webadmin/modules/uicompat/src
                    /main/resources/
                  org/ovirt/engibe/ui/uicompat/UIotherthings</small></li></ul>
                <ListGroup>
                  <ListGroupItem className="small" header="Source">
                    <h3>Policy</h3>
                    <ListGroupItem className="comment-box"><h4>Comments
                      &nbsp;<Badge>0</Badge></h4>
                    </ListGroupItem>
                  </ListGroupItem>
                  <ListGroupItem className="small" header="Target">
                    <h3>Politica <Label bsStyle="success">Translated
                    </Label></h3>
                    <ListGroupItem className="comment-box">
                      <h4>Comments&nbsp;<Badge>0</Badge></h4>
                    </ListGroupItem>
                  </ListGroupItem>
                </ListGroup>
              </Panel>
            </PanelGroup>
          </Modal.Body>
          <Modal.Footer>
            <p>Last modified on 30/04/16 13:15 by <a href="">sdickers</a></p>
          </Modal.Footer>
        </Modal>
      </div>)
  }
  /* eslint-enable react/jsx-no-bind */
}

export default TestModal
