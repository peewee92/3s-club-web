import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import './index.less'
import Collections from '@/components/collections'
import Pagination from '@/components/Pagination'
import EventCard, { eventModel } from '@/components/EventCard'

const Web3Events: React.FC<any> = () => {

  const eventList = new Array(8).fill(eventModel)

  return <div className='bg-baseBg'>
    <div className='page-events-content container mx-auto text-center'>
      <div className='text-6xl text-black pt-20 sm:pt-28 lg:pt-40 font-bold'>Web3 Events</div>
      <div className='flex justify-center items-center'>
        <input className="w-4/5 h-9 max-w-[718px] text-sm sm:h-10 pr-10 lg:h-12 rounded-xl border bg-white mx-3 my-12 text-gray-800 outline-none border-gray-300 ring-primary-200 transition duration-100 focus:ring-1 lg:text-lg font-light box-border p-[11px]" placeholder='Search' />
        <MagnifyingGlassIcon className="w-5 h-5 -ml-10 text-primary-300" />
      </div>
    </div>
    <Collections showTopBar={false}>
      {
        eventList.map((event, index) => {
          return <EventCard key={index} event={event} id={index}/>
        })
      }
    </Collections>
    <Pagination />
  </div>
}

export default Web3Events

