import React from 'react'
import Form from './Components/Form/Form'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Form/>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  )
}

export default App
