import { FunctionComponent } from 'react'

interface IProps {
  isAuthenticated: boolean,
  loginWithRedirect: Function,
}

const LoginButton: FunctionComponent<IProps> = ({ isAuthenticated, loginWithRedirect}) => {
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