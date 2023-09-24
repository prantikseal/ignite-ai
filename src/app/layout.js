import NavBar from './components/NavBar'
import './globals.css'

export const metadata = {
  title: 'Ignite AI',
  description: 'Give us a topic, and we will create the best content for your different social media platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body >
        <NavBar />
        <div className=' mt-20 '></div>
        {/* <div  className='left-div'></div> */}
        {children}
        {/* <div  className='right-div'></div> */}
      </body>
    </html>
  )
}
