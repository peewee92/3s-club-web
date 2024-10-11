import i18n from '@/i18n';
import logo from '../../assets/images/logo.png'
import { useTranslation } from 'react-i18next';
import Select, { OptionsProps } from '@/components/select';
import { useState } from 'react';
import styles from './styles.module.less'
// import Svg from '@/assets/svgs/github.svg?react'

function Header() {
  const { t } = useTranslation();
  const navList = [
    {
      title: 'nav.home',
    },
    {
      title: 'nav.introduction',
    },
    {
      title: 'nav.projects',
    },
    {
      title: 'nav.resources',
    },
    {
      title: 'nav.partner',
    },
    {
      title: 'nav.events',
    }
  ]
  const lngs: OptionsProps[] = [
    {label: 'EN', value:'en'},
    {label: '中文', value:'zh'},
  ]
  const [lang, setLang] = useState<string>('zh')
  const onLangChange = (val:string)=>{
    setLang(val)
    i18n.changeLanguage(val)
  }
  return (<>
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.nav}>
        {
          navList.map(item => {
            return <div className={`${styles.navItem} text-ellipsis`} key={item.title}>
              {t(item.title)}
            </div>
          })
        }
      </div>
      <div className={styles.login}>
        <div className={styles.wallet}>{t('nav.wallet')}</div>
        <div className={styles.email}>{t('nav.login')}</div>
      </div>
      {/* <Svg className="w-900"/> */}
      <Select value={lang} options={lngs} onChange={onLangChange}></Select>
    </div>
  </>)
}

export default Header