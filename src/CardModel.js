import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

class CardModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

  }

  toggle=()=> {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div>
        <figure className="snip1396 green">
          <img src={this.props.imga} />
          <div className="image">
            <img src={this.props.imga} />
          </div>
          <figcaption>
            <h3>{this.props.title}</h3>
            <p className='descrip'>{this.props.description}</p>
          </figcaption>
          <div class="price">
            <p>{this.props.price} DT</p>
          </div>
          <a href="#" class="add-to-cart" onClick={this.toggle}>
            detail<i class="ion-android-checkbox-outline"></i>
          </a>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
            <ModalBody>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={this.props.imga}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Modele: {this.props.title}</CardTitle>
                  <CardTitle>Marque: {this.props.brand}</CardTitle>
                  <CardTitle>Prix: {this.props.price}</CardTitle>
                  <CardSubtitle>Description</CardSubtitle>
                  <CardText>{this.props.description}</CardText>
                </CardBody>
              </Card>
            </ModalBody>
          </Modal>
        </figure>
      </div>
    );
  }
}

export default CardModel;
