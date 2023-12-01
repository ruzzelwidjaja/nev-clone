import MyGridLayout from '@/components/grid-layout'
import GridWidget from '@/components/grid-widget'
import Header from '@/components/header'
import { GeistSans } from 'geist/font/sans';


export default function Home() {
  return (
    <main className="`relative ${GeistSans.className} bg-[#f7f2f2]`">
      <div className='bg-[#f7f2f2]'>
        <Header />
      </div>
      <div className="bg-[#f7f2f2]">
        <div className="relative mx-auto mt-[-10px] pb-20 max-w-[1200px]" style={{ width: '870px' }}>
          <MyGridLayout />
        </div>
      </div>
    </main>
  )
}
