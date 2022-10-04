import React, { FunctionComponent } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

interface IProps {
  isAuthenticated: boolean,
  loginWithRedirect: Function,
  loginWithPopup: Function,
}

const LoginButton: FunctionComponent<IProps> = ({ isAuthenticated, loginWithRedirect, loginWithPopup}) => {
  // const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div>
      { !isAuthenticated ? (
        <button className='login-button' onClick={() => loginWithRedirect()}>
          Log In
        </button>
      ) : (
        null
      )}
    </div>
  )
}

export default LoginButton