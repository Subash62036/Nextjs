import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
   <div className='md:grid md:grid-cols-4 '>
    <Component {...pageProps} />
  </div>
  )
}
export async function getServerSideProps() {
  console.log(process.env.Enveironment_Variable_Key_Origional);
    return{
      props:{
        hello:'world'
      }
    }
  }

export default MyApp
