import { FC, ReactElement, useState } from "react";
import ArrowRight from "@/assets/svgs/arrow-right.svg?react";
import GrayArrowLeft from "@/assets/svgs/gray-arrow-left.svg?react"
import left from './images/left.png'
import right from './images/right.png'

interface CollectionsProps {
  showTopBar?: boolean
  title?: ReactElement;
  children?: ReactElement | ReactElement[];
  onPageChange?: (page: number) => void;
  onMoreClick?: () => void;
}

const Collections: FC<CollectionsProps> = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    title = 'Collections',
    showTopBar = true,
    children,
    onPageChange,
    onMoreClick,
  } = props;

  return <>
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {showTopBar && <div className="mb-6 flex items-center justify-between gap-4">  
          <h2 className="text-xl font-bold text-gray-800 lg:text-2xl">{title}</h2>
          {onMoreClick && <span className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">More</span>}
          {onPageChange && <div className="flex items-center gap-2">
            <img src={left} className="w-11 h-11" />
            <img src={right} className="w-11 h-11" />
          </div>}
        </div>}
        <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-4 lg:grid-cols-3 xl:grid-cols-4">
          {children}
        </div>
      </div>
    </div>
  </>

}

export default Collections;