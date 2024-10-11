import Collections from '@/components/collections'
import './index.less'
import bg from '@/assets/images/partner-plan-bg.png'
import bar from './image/bar.png'
import github from './image/github.png'
import plan from './image/plan.png'
import internet from './image/internet.png'
import twitter from './image/twitter.png'

const PartnerPlan: React.FC<any> = () => {

  const linkList = [
    { icon: plan, href: '' },
    { icon: twitter, href: '' },
    { icon: github, href: '' },
    { icon: bar, href: '' },
    { icon: internet, href: '' },
  ]

  return <div className="bg-baseBg page-partner-plan  bg-transparent-to-r from-primary-100 to-primary-50">
    <div className='page-partner-plan-bg relative z-0'>
      <img src={bg} className='w-full h-full absolute grayscale -z-10' />
      <div className="container mx-auto py-14 sm:py-32 lg:py-40 z-10">
        <div className='lg:text-6xl md:text-5xl text-3xl text-white text-center py-16 select-none'>合伙人计划</div>
        <div className='text-white text-5xl md:text-7xl lg:text-9xl text-center pb-16 big-text grayscale-1 select-none'>COMING SOON</div>
        <div className='flex justify-center'>
          {linkList.map((item, index) => {
            return <a href={item.href} key={index}>
              <img className='w-6 sm:w-10 lg:w-12 select-none' src={item.icon} alt="" />
            </a>
          })}
        </div>
      </div>
    </div>
  </div>
}

export default PartnerPlan

