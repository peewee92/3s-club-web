import logo from '@/assets/images/logo2.png'
import GrayGithub from '@/assets/svgs/gray-github.svg?react';
import GraySD from '@/assets/svgs/gray-sd.svg?react';
import GrayXiong from '@/assets/svgs/gray_xiong.svg?react';
import './style.less'
import usePageNavigate from '@/hooks/useNavigate';
import { useTranslation } from 'react-i18next';

export default function footer() {
  const { navigationList } = usePageNavigate()
  const { t } = useTranslation();
  return (
    <div className="footer py-16 sm:py-10">
      <div className='flex justify-center'>
        <img className='w-[107px] h-[107px] grayscale' src={logo} alt="" />
      </div>
      <div className="footer-nav-container">
        <h2 className="text-center text-xl py-[18px] font-semibold leading-8">
          3S加密俱乐部
        </h2>
        <div className="mt-5 flex justify-center flex-wrap font-bold">
          {
            navigationList.map(item =>
              <div className="footer-nav-item" key={item.name}>
                {t(item.name)}
              </div>
            )
          }
        </div>
      </div>
      <div className="mt-8 flex justify-between mx-auto lg:w-3/5 flex-wrap text-gray-400 font-light text-xl">
        <div className="footer-nav-item ">
          Graph Foundation
        </div>
        <div className="footer-nav-item ">
          Privacy Policy
        </div>
        <div className="footer-nav-item text-gray-400">
          Forum
        </div>
        <div className="footer-nav-item text-gray-400">
          Terms of Service
        </div>
        <div className="footer-nav-item text-gray-400">
          Testnet
        </div>
      </div>
      <div className='mt-8 flex justify-center'>
        <div className='px-5'><GrayGithub /></div>
        <div className='px-5'><GraySD /></div>
        <div className='px-5'><GrayXiong /></div>
      </div>
      <div className='text-center mt-12 text-gray-400 text-sm lg:text-lg font-extralight' style={{ fontFamily: 'PingFang SC-Medium, PingFang SC' }}>copyright©3S加密俱乐部</div>
    </div>
  )
}
