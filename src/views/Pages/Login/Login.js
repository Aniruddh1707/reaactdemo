import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../../services/PostData';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import logo from './logo.png';
const Header = React.lazy(() => import('../Header/Header'));


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Login extends Component {

  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
      errors: {
        username: '',
        password: '',
      } 
    };
   
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login(e){
    e.preventDefault();
    let errors = this.state.errors;
    if(this.state.username==''){
      errors.username = 'This field is required';
    }
    if(this.state.password==''){
      errors.password = 'This field is required';
    }
    this.setState({errors});
    /*if(this.state.username && this.state.password){
      PostData('login',this.state).then((result) => {
        let responseJson = result;
        responseJson = {id:1,name:"Aniruddh"};
        if(responseJson){         
          sessionStorage.setItem('user',JSON.stringify(responseJson));
          this.setState({redirectToReferrer: true});
        }
      });
    }*/
    if(validateForm(this.state.errors)) {
      sessionStorage.setItem('user','1');
      this.setState({redirectToReferrer: true});
    }else{
      console.error('Invalid Form');
      return false;
    }
  }

  onChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case 'username': 
        errors.username = validEmailRegex.test(value)? '':'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 4
            ? 'Password must be 4 characters long!'
            : '';
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value});
    //this.setState({[e.target.name]:e.target.value});
  }

  render() {
    
    let boxClass = [];
    boxClass.push('inputStyle');
    const {errors} = this.state;
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/dashboard'}/>)
    }
    if(sessionStorage.getItem('user')){
      return (<Redirect to={'/dashboard'}/>)
    }

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <Row>
                        <Col xs="1"></Col>
                        <Col xs="8" className="text-right">
                          <img src={logo} alt="logo" className="position-relative img-fluid" />
                        </Col>
                        <Col xs="2" className="text-right"></Col>
                      </Row>
                      <p className="text-muted">&nbsp;</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" name="username" className={boxClass} placeholder="Username" onChange={this.onChange} placeholder="with a placeholder"/>
                        {errors.username.length > 0 && 
                        <span className='error'>{errors.username}</span>}
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" className={boxClass} placeholder="Password" onChange={this.onChange} placeholder="with a placeholder"/>
                        {errors.password.length > 0 && 
                        <span className='error'>{errors.password}</span>}
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="success" className="px-4" onClick={this.login}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>                
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
