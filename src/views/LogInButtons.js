import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button, ButtonGroup } from "reactstrap";
import { UserContext } from "../App";

const LogInButtons = () => {
    const { user, setUser } = useContext( UserContext );
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div>
            <p textAlign="center">{`Logged In: ${user.loggedIn}`}</p>
            <ButtonGroup>
                <Button
                    onClick={() => {
                        if ( user.loggedIn ) return;
                        setUser( { loggedIn: true } );

                        if ( location.state?.from ) {
                            navigate( location.state.from );
                        }
                    }}
                >
                    Log In
                </Button>
                <Button
                    onClick={() => {
                        if ( !user.loggedIn ) return;
                        setUser( { loggedIn: false } );
                    }}
                >
                    Log Out
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default LogInButtons;
