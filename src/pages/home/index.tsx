import Collections from '@/components/collections'
import Banner from './components/banner'
import EventCard, { eventModel } from '@/components/EventCard'
import ProjectCard, { projectModel } from '@/components/ProjectCard'

function Home() {

  const eventList = new Array(4).fill(eventModel)
  const moreEventList = new Array(8).fill(eventModel)

  const projectList = new Array(4).fill(projectModel)

  return (
    <div className='bg-baseBg'>
      <div className="container mx-auto ">
        <Banner />
        <Collections title={<>Projects</>} onPageChange={() => { }}>
          {
            projectList.map((project, index) => {
              return <ProjectCard key={index} project={project} />
            })
          }
        </Collections>
        <Collections title={<>Selected EVENT</>} onPageChange={() => { }}>
          {
            eventList.map((event, index) => {
              return <EventCard key={index} event={event} id={index} />
            })
          }
        </Collections>
        
        <Collections title={<>Join Web3 Events(236)</>} onPageChange={() => { }}>
          {
            eventList.map((event, index) => {
              return <EventCard key={index} event={event} id={index} />
            })
          }
        </Collections>
      </div>
    </div>
  )
}

export default Home