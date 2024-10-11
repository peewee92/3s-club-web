import { type } from "os"
import { FC } from "react"
import projectImg from '@/assets/images/card-default.png'
import './index.less'
import TwitterIcon from '@/assets/svgs/gray-twitter.svg?react'
import SdIcon from '@/assets/svgs/gray-sd.svg?react'
import GithubIcon from '@/assets/svgs/gray-github.svg?react'
import XiongIcon from '@/assets/svgs/gray_xiong.svg?react' 
import InterIcon from '@/assets/svgs/gray-inte.svg?react' 
 
export const projectModel = {
  id: 1,
  imageSrc: projectImg,
  name: 'Force1.0',
  desc: 'Project desciptionProject desciptionProject desciptionProject desciptionProject desciptionProject desciptionProject desciptionProject desciption…',
  star: "1554",
  vote: '15',
}
// More products...

type ProjectType = typeof projectModel

const ProjectCard: FC<{ project: ProjectType }> = (props) => {
  const { project } = props
  return (
    <div className="project-card bg-white box-content rounded-lg mx-auto max-w-lg px-4 py-4 sm:px-6 sm:py-6 lg:max-w-xl lg:px-7">

      <div key={project.id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img
            src={project.imageSrc}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4">
          <div>
            <h3 className="text-base text-black underline underline-offset-2 font-bold">
              <span>
                {project.name}
              </span>
            </h3>
            <p className="mt-1 text-sm text-gray-400 truncate project-desc">{project.desc}</p>
          </div>
        </div>
        <div className="flex justify-between text-black mt-4">
          <div className="text-left">
            <div className="text-base font-bold">{project.star}</div>
            <div className="text-[12px]">点赞量</div>
          </div>
          <div className="text-right">
            <div className="text-base font-bold">{project.vote}</div>
            <div className="text-xs">你的投票</div>
          </div>
        </div>
        <div className="flex mt-4">
          <TwitterIcon className='icon' />
          <SdIcon className='icon' />
          <GithubIcon className='icon' />
          <XiongIcon className='icon' />
          <InterIcon className='icon' />
        </div>
        <div className="flex mt-4 justify-between">
          <div className="project-btn bg-black">查看详情</div>
          <div className="project-btn bg-primary-200">联系负责人</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
