import React, { Component } from 'react'
import annonceLogo from '../image/hiw-1_button.png' 
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {addAnnonce} from "../redux/action/actionAnnonce"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Annonce extends Component {
  state={
    title:'',
    category:'',
    description:'', 
    price:'',
    brand:'',
    imga:'',
    imgb:''
  }
  

    
    render() {
        return (
            
            <div className="stylingForm">
                <div className="container">
                    <div className="row">
                    <h1 className='h1Annonce'>PUBLIER UNE ANNONCE</h1>

                        <div className="col-xs-12 col-sm-6 leftSide">
                            <img src={annonceLogo} alt="register-photo"/>
                        </div>
                        <div className="col-xs-12 col-sm-6 rightSide">
                             <form >
                                <div className="form-group has-feedback">
                                    <label for="Titre">Titre</label>
                                    <input type="text" className="form-control"  id="Titre" placeholder="Enter your title" name="Titre" onChange={e => {
              this.setState({ title: e.target.value });
            }}
 required/>
                                    <span className="glyphicon 
                                    glyphicon-user form-control-feedback" aria-hidden="true"></span>
                                </div>
                                <div className="form-group has-feedback">
                                    <label for="catégorie">Catégorie</label>
                                    <input type="text" class="form-control" id="catégorie" placeholder="catégorie" name="catégorie" onChange={e => {
              this.setState({ category: e.target.value });
            }} />
                                    <span className="glyphicon 
                                    glyphicon-envelope form-control-feedback" aria-hidden="true"></span>
                                </div>
                                <div className="form-group has-feedback">
                                    <label for="brand">Brand</label>
                                    <input type="text" className="form-control" id="brand" placeholder="brand" name="brand" onChange={e => {
              this.setState({ brand: e.target.value });
            }} />
                                    <span className="glyphicon 
                                    glyphicon-eye-close form-control-feedback" aria-hidden="true"></span>
                                </div>
                                <FormGroup >
          <Label for="exampleText">Description</Label>
          <Input type="textarea" name="text" id="description" required   onChange={e => {
              this.setState({ description: e.target.value });
            }} />
            
        </FormGroup>
                                <div className="form-group has-feedback">
                                    <label for="prix">Prix</label>
                                    <input type="number" className="form-control" id="prix" placeholder="prix" name="prix" required   onChange={e => {
              this.setState({ price: e.target.value });
            }} />
                                                <span className="glyphicon 
                                    glyphicon-eye-close form-control-feedback" aria-hidden="true"></span>
                                </div>
                                <div className="form-group has-feedback">
                                    <label for="image1">Image 1</label>
                                    <input type="text" className="form-control" id="image1" placeholder="url : image1" name="image1" required   onChange={e => {
              this.setState({ imga: e.target.value });
            }} />
                                                            <span className="glyphicon 
                                    glyphicon-eye-close form-control-feedback" aria-hidden="true"></span>
                                    </div>
                                <div className="form-group has-feedback">
                                    <label for="image2">Image 2</label>
                                    <input type="text" className="form-control" id="image2" placeholder="url : image2" name="image2" required   onChange={e => {
              this.setState({ imgb: e.target.value });
            }} />
                                                                        <span className="glyphicon 
                                    glyphicon-eye-close form-control-feedback" aria-hidden="true"></span>
                                    </div>


<Link to="/">

 <button  className="btn btn-primary" onClick={() => {
                this.props.addAnnonce(this.state);
              }}  disabled={!this.state.category || !this.state.title || !this.state.description 
                || !this.state.price || !this.state.brand || !this.state.imga }>addAnnonce<span class="glyphicon 
                                    glyphicon-send" aria-hidden="true"></span></button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           )
    }
};

export default connect(
  null,
  { addAnnonce }
)(Annonce);
