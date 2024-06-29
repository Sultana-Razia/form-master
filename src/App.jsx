
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StateFullForm from './components/StateFullForm/StateFullForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('sign up data', data);
  }

  const handleUpdateProfile = data => {
    console.log('update data', data);
  }

  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm
        formTitle={'Sign Up'}
        handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up!</h2>
        </div>
      </ReusableForm>

      <ReusableForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
