import Image from 'next/image'
import HeaderNav from '@/components/header-nav/header-nav'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <HeaderNav></HeaderNav>
      <div className='py-16 content-aria'>
        {/* contents here */}
      </div>
      <Footer></Footer>
    </main>
  )
}
