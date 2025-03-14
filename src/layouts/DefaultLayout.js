import Header from '../components/global/Header'
import Footer from '../components/global/Footer'


export default function DefaultLayout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
