import { auth } from '../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const provider = new GoogleAuthProvider()
    const handleLogin = (e) => {
        signInWithPopup(auth, provider)
            .then(data => {
            console.log(data)
            })
            .catch(error => console.log(error))  
    }
  return (
      <div className='h-screen flex justify-center items-center'>
          <button
              onClick={handleLogin}
              className='bg-lime-600 px-4 py-2 rounded-xl text-white border-4 hover:bg-transparent hover:text-black'
          >
              Login With Google
          </button>
    </div>
  )
}

export default Login