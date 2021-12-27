import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import { UserContext } from '../../../App';

const LogOut = () => {
    const { user, setUser } = useContext( UserContext );
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div>
            <Button
                onClick={() => {
                    if ( !user.loggedIn ) return;
                    setUser( { loggedIn: false } );
                }}
            >
                Log Out
            </Button>
        </div>
    )
}

export default LogOut
