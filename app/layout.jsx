import Appbar from '@pages/Appbar';
import Footer from '@pages/Footer';
import '@styles/globals.css';


export const metadata = {
  title: "PACS Global",
  description: 'Learn the upcoming trending technologies'
}

const RootLayout = ({children}) => {
  return (
    <html Lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app w-100">
          <Appbar/>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout