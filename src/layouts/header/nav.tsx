import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Select, { OptionsProps } from "@/components/select";
import { useEffect, useState } from "react";

import { Fragment, } from "react";
import { classNames } from "@/utils/tools";
import { ethers } from 'ethers';
import fox from "@/assets/images/fox.png";
import i18n from "@/i18n";
import logo from "../../assets/images/logo.png";
import styles from "./styles.module.less";
import { useLocation } from "react-router-dom";
import usePageNavigate from "@/hooks/useNavigate";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const { t } = useTranslation();
  const [lang, setLang] = useState<string>("zh");
  const onLangChange = (val: string) => {
    setLang(val);
    i18n.changeLanguage(val);
  };
  const lngs: OptionsProps[] = [
    { label: "EN", value: "en" },
    { label: "中文", value: "zh" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const { navigationList, navigate } = usePageNavigate()
  const { pathname } = useLocation()
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const connectWallet = async () => {
    // 检查MetaMask是否已经安装

    // if (window.ethereum) {
    //   try {
    //     // 请求用户授权连接钱包
    //     await window.ethereum.request({ method: 'eth_requestAccounts' });
    //     // 创建一个ethers.js的Provider对象
    //     // const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     // 创建一个ethers.js的Signer对象
    //     // const signer = provider.getSigner();
    //     // 使用Signer对象进行后续操作，例如发送交易等
    //     // ...
    //     // 获取钱包地址
    //     getAddress()
    //   } catch (error) {
    //     console.error(error);
    //   }
    // } else {
    //   console.error('请安装MetaMask钱包');
    // }
    
    // 检查MetaMask是否已经安装
    if (typeof window.ethereum !== 'undefined') { // 修改此行
      try {
        // 请求用户授权连接钱包
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        getAddress();
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('请安装MetaMask钱包');
    }
  };


  const getAddress = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (accounts.length > 0) {
      const address = accounts[0];
      console.log('address', address)
      setWalletAddress(address);
    }
  }

  const processString = (str: string) => {
    if (str.length <= 9) {
      return str;
    }

    let firstFive = str.substring(0, 3);
    let lastFour = str.substring(str.length - 6);
    let middle = '****';

    return firstFive + middle + lastFour;
  }

  return (
    // className={classNames(styles.header, isScrolled ? 'fixed top-0 z-50 w-full' : '')}  吸顶
    <Disclosure as="nav" className={classNames(styles.header, isScrolled ? 'fixed top-0 z-50 w-full h-full' : '')}>
      {({ open }) => (
        <>
          <div className="shadow-base mx-auto max-w-full px-2 sm:px-6 lg:px-8 h-28 flex items-center">
            <div className="relative flex h-16 items-center justify-between w-full">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="w-44" src={logo} alt="logo" />
                </div>
                <div className="hidden sm:ml-6 sm:flex items-center text-base md:text-sm lg:text-lg font-bold">
                  <div className="flex space-x-4">
                    {navigationList.map((item, index) => (
                      <span
                        key={item.name}
                        className={classNames(
                          pathname === item.path
                            ? `text-black pb-4 border-b-4 border-yellow-400 ${styles.borderImage}`
                            : "text-black",
                          "px-3 py-2 cursor-pointer"
                        )}
                        aria-current={pathname === item.path ? "page" : undefined}
                        onClick={() => navigate(item.path)}
                      >
                        {t(item.name)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Select
                  value={lang}
                  options={lngs}
                  onChange={onLangChange}
                ></Select>

                <div className="relative ml-3 sm:hidden xl:flex">
                  <div className={(styles.wallet)} onClick={connectWallet}>
                    {
                      walletAddress ? <>
                        <img src={fox} alt="metamask" style={{ width: '38px', height: '34px' }} />
                        <span>{processString(walletAddress)}</span>
                      </> :
                        t("nav.wallet")
                    }
                  </div>
                  <div className={styles.wallet}>{t("nav.login")}</div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-primary-50 rounded-lg">
              {navigationList.map((item, index) => (
                <Disclosure.Button
                  key={item.name}
                  as="span"
                  className={classNames(
                    pathname === item.path
                      ? "bg-primary-200 text-white"
                      : "text-black",
                    "block rounded-md px-3 py-2 text-base font-medium cursor-pointer"
                  )}
                  aria-current={pathname === item.path ? "page" : undefined}
                  onClick={() => navigate(item.path)}
                >
                  {t(item.name)}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}