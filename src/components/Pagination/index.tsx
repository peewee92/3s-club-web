import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'

interface PaginationProps {
  total: number
  pageSize: number
  current: number
  onPageChange: (page: number) => void
}

const Pagination: FC<Partial<PaginationProps>> = (props) => {
  const {
    total = 0,
    pageSize = 10,
    current = 1,
    onPageChange,
  } = props
  return <>
    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <span className="relative inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</span>
        <span className="relative ml-3 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</span>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center ">
        <nav className="inline-flex" aria-label="Pagination">
          <span className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400    hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className='w-5 h-5 font-bold' />
          </span>
          <span aria-current="page" className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-primary-300 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</span>
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900    hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</span>
          <span className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900    hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</span>
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700    focus:outline-offset-0">...</span>
          <span className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900    hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</span>
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900    hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</span>
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900    hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</span>
          <span className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400    hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span className="sr-only">Next</span>
            <ChevronRightIcon className='w-5 h-5 font-bold' />
          </span>
        </nav>
      </div>
    </div>
  </>
}

export default Pagination