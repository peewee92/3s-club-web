import Collections from '@/components/collections'
import './index.less'
import ProjectCard, { projectModel } from '@/components/ProjectCard'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import Pagination from '@/components/Pagination'

const Projects: React.FC<any> = () => {

  const tags = ['All', 'Force', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', ]

  const [active, setActive] = useState('All')

  const projectList = new Array(6).fill(projectModel)

  return <div className="page-projects bg-baseBg">

    <div className='page-projects-content container mx-auto text-center'>
      <div className='text-6xl text-black pt-20 sm:pt-28 lg:pt-40 font-bold'>项目</div>
      <div className='flex justify-center items-center'>
        <input className="w-4/5 h-9 max-w-[718px] text-sm sm:h-10 pr-10 lg:h-12 rounded-xl border bg-white mx-3 my-12 text-gray-800 outline-none border-gray-300 ring-primary-200 transition duration-100 focus:ring-1 lg:text-lg font-light box-border p-[11px]" placeholder='搜一搜' />
        <MagnifyingGlassIcon className="w-5 h-5 -ml-10 text-primary-300" />
      </div>
      <div className='font-bold text-xl'>精选</div>
      <div className='px-4 flex flex-wrap max-w-[750px] mx-auto' style={{fontFamily: 'font-family: PingFang SC-Heavy, PingFang SC'}}>
        {
          tags.map((item, index) => {
            return <div onClick={()=>setActive(item)} key={index} className={`tag-item ${item === active && 'tag-active'}`}>{item}</div>
          })
        }
      </div>
    </div>
    <Collections showTopBar={false}>
      {
        projectList.map((project, index) => {
          return <ProjectCard key={index} project={project} />
        })
      }
    </Collections>
    <Pagination />
  </div>
}

export default Projects

