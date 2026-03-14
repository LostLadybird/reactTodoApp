import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { RouterProvider } from 'react-router'
import { router } from './router'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer 
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Provider>
  )
}

export default App
