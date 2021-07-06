import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Container>
        <Component {...pageProps} />
        <Footer />
      </Container>
    </>
  )
}
export default MyApp
