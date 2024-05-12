import { auth } from '../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const provider = new GoogleAuthProvider()
    const handleLogin = (e) => {
        signInWithPopup(auth,provider)
    }
  return (
      <div>
          <button onClick={handleLogin}>Login With Google</button>
    </div>
  )
}

export default Login