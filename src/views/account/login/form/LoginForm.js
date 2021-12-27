import React, { useContext } from "react";
import { Facebook, Mail, Twitter } from "react-feather";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { UserContext } from "../../../../App";
import defaultImage from "../../../../assets/images/download.png";
import styles from "../../../../assets/scss/login/login.module.css";

const LoginForm = ( { userLogin } ) => {

  const { user, setUser } = useContext( UserContext );

  const navigate = useNavigate();
  const location = useLocation();

  const redirectPage = () => {
    if ( user.loggedIn ) return
    setUser( { loggedIn: true } );

    if ( location.state?.from ) {
      navigate( '/home' );
    }
  }
  return (
    <div className="container " style={{ width: "50%", marginTop: "100px" }}>
      <h2 className="text-center mb-4">Login</h2>

      <Card className={styles.login}>
        <CardBody>
          <Form>
            <FormGroup row>
              <Col lg={6} sm={6} md={6}>
                <CardImg
                  alt="Card image cap"
                  src={defaultImage}
                  bottom
                  outline
                  inverse
                  height="200px"
                  width="200px"
                />

                <CardBody>
                  <CardText className="mt-3" tag={Link} to="/sign-up">
                    Create an account
                  </CardText>
                </CardBody>
              </Col>
              <Col lg={6} sm={6} md={6}>
                <FormGroup tag={Col} lg={12} sm={12} xs={12} md={12}>
                  <Label for="name">User Name</Label>
                  <Input id="name" name="name" type="text" />
                </FormGroup>
                <FormGroup tag={Col} lg={12} sm={12} xs={12} md={12}>
                  <Label for="password">Password</Label>
                  <Input id="password" name="password" type="password" />
                </FormGroup>
                <FormGroup tag={Col} lg={12} sm={12} xs={12} md={12}>
                  <Button className="bg-primary" onClick={() => {
                    redirectPage()
                  }}

                  >
                    Login
                  </Button>
                </FormGroup>

                <FormGroup
                  className="text-nowrap"
                  tag={Col}
                  lg={6}
                  sm={6}
                  xs={6}
                  md={6}
                >
                  <Label tag={Link} to="">
                    or login with
                    <Facebook />
                    <Twitter />
                    <Mail />
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginForm;
