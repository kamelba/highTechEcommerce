import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

 class Login extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="Email">Adresse e-mail ou numéro de téléphone</Label>
          <Input type="email" name="email" id="Email" placeholder="Adresse e-mail ou numéro de téléphone" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="Password" placeholder="Password" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />
            Rester connecté sur cet appareil
          </Label>
        </FormGroup>
        <Button>Valider</Button>
        <FormGroup>
          <Label for="text">Vous avez oublié votre mot de passe ? </Label>
          <a href='#'>Cliquez ici</a>
        </FormGroup>
      </Form>

    );
  }
}

export default Login