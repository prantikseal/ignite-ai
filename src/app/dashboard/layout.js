
import InputSection from '../components/InputSection'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import '../globals.css'

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard for Give us a topic, and we will create the best content for your different social media platform',
}

export default function RootLayout({ children }) {
  return (
    <>
        <div className=' mt-20 '></div>
        {/* <div className='left-div'></div> */}
        <div className='flex h-screen'>
            <SideBar />
            <div className='dashboard-section-content w-full ml-4 lg:ml-12 mr-4 lg:mr-32 flex justify-center'>
              {children}
            </div>
        </div>
        {/* <div className='right-div'></div> */}
    </>
  )
}
