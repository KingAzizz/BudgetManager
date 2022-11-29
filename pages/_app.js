import Layout from '../components/Layout'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'

import {StateContext} from '../Context/StateContext'

function MyApp({ Component, pageProps }) {
  return(
    <StateContext>
    <Layout>
    <Toaster
     position="bottom-left"
     reverseOrder={false} />
     <Component {...pageProps} />
    </Layout>
    </StateContext>

     )
}

export default MyApp
