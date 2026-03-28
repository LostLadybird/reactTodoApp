import './App.css'
import { Provider } from 'react-redux'
import { store } from './model/store'
import { RouterProvider } from 'react-router'
import { router } from './router/router'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from 'entities/authorization'

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
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
      </AuthProvider>
    </Provider>
  )
}

export default App
