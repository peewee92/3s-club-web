import { FC } from "react"
import './index.less'
import img1 from '@/pages/web3-events/images/1.png'
import img2 from '@/pages/web3-events/images/2.png'
import img3 from '@/pages/web3-events/images/3.png'
import img4 from '@/pages/web3-events/images/4.png'
import img5 from '@/pages/web3-events/images/5.png'
import img2049 from '@/pages/web3-events/images/2049.png'
import imgStar from '@/pages/web3-events/images/star.png'
import imgV from '@/pages/web3-events/images/v.png'
import imgView from '@/pages/web3-events/images/view.png'
import imgBg1 from '@/pages/web3-events/images/bg1.png'
import imgBg2 from '@/pages/web3-events/images/bg2.png'
import imgBg3 from '@/pages/web3-events/images/bg3.png'
import imgBg4 from '@/pages/web3-events/images/bg4.png'
import imgBg5 from '@/pages/web3-events/images/bg5.png'
import imgBg6 from '@/pages/web3-events/images/bg6.png'
import imgBg7 from '@/pages/web3-events/images/bg7.png'
import imgBg8 from '@/pages/web3-events/images/bg8.png'

export const eventModel = {
  id: 1,
  imageSrc: imgBg1,
  title: 'PitchingDayoffchain.Bali xDisruptives',
  date: "Aug/04/2023",
  location: 'Indonesia',
  views: 2315,
  userName: 'Token2049'
}

const imgs = [
  imgBg1,
  imgBg2,
  imgBg3,
  imgBg4,
  imgBg5,
  imgBg6,
  imgBg7,
  imgBg8
]

type EventType = typeof eventModel

const EventCard: FC<{ event: EventType, id: number }> = (props) => {
  const { event, id } = props
  const imgBG = imgs[id] || img1
  return (
    <div className="event-card bg-white box-border w-full rounded-lg mx-auto max-w-md p1 sm:p-1 lg:max-w-md lg:p-1">

      <div key={event.id} className="group">
        <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img
            src={imgBG}
            className="h-full object-cover object-center lg:h-full lg:w-full"
          />
          <span className="absolute right-2 top-2 bg-white rounded-full p-1">
            <img src={imgStar} className="w-5 h-5" alt="" />
          </span>
        </div>
        <div className="mt-4 overflow-x-hidden">
          <h3 className="text-base bg:text-lg text-black truncate font-bold">
            {event.title}
          </h3>
        </div>
        <div className="flex justify-between text-black mt-5">
          <div className="text-sm lg:text-base font-bold">{event.date}</div>
        </div>
        <div className="flex text-sm lg:text-base font-bold justify-between mt-2">
          <div>{event.location}</div>
          <div className="text-gray-400 flex items-center">
            <img src={imgView} className="inline-block w-3 h-2.5 mr-2" />
            {event.views}
          </div>
        </div>
        <div className="flex text-sm lg:text-base justify-between pt-4 mt-3 border-t border-gray-200 mx-2 pb-2 font-semibold">
          <div className="flex items-center">
            <img src={img2049} className="w-12 h-12" alt="" />
            <span className="flex items-center ml-2">{event.userName}<img src={imgV} className="w-4 h-4 ml-1" /></span>
          </div>
          <div className="flex flex-col justify-end">
            <div className="userBox">
              <img src={img1} />
              <img src={img2} />
              <img src={img3} />
              <img src={img4} />
              <img src={img5} />
            </div>
            <div className="justify-end flex items-center">
              <span className="text-green-500">23+</span>going
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default EventCard
