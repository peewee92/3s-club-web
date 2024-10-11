import { classNames } from "@/utils/tools";
import discord from "@/assets/images/discord@2x.png";
import github from "@/assets/images/github@2x.png";
import huiyuan from "@/assets/images/huiyuan@2x.png";
import julebu from "@/assets/images/julebu@2x.png";
import logo2 from "@/assets/images/logo2.png";
import styles from './styles.module.less';
import telegram from "@/assets/images/telegram@2x.png";
import twitter from "@/assets/images/twitter@2x.png";
import xiangmu from "@/assets/images/xiangmu@2x.png";

function Index() {
  return (
    <>
      <div className="banner">
        <div className={styles.logoWrap}>
          <img src={logo2} alt="logo" />
          <p className={classNames(styles.title, 'text-6xl')} >3S加密俱乐部</p>
          <p className={styles.subTitle}>推动Web3投资创业领域创新发展。</p>
        </div>
        <div className={styles.social}>
          <a href="" className={styles.socialItem}>
            <img src={github} alt="github" />
          </a>
          <a href="" className={styles.socialItem}>
            <img src={discord} alt="discord" />
          </a>
          <a href="" className={styles.socialItem}>
            <img src={telegram} alt="telegram" />
          </a>
          <a href="" className={styles.socialItem}>
            <img src={twitter} alt="twitter" />
          </a>
        </div>
        <div className="container flex flex-col mx-auto">
          <div className="w-full draggable">
            <div className="container flex flex-col items-center gap-16 mx-auto my-20">
              <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center gap-3 px-8 py-10">
                  <span>
                    <img src={huiyuan} alt="huiyuan" className={styles.userImg} />
                  </span>
                  <p className="text-2xl font-extrabold text-dark-grey-900">
                    会员用户
                  </p>
                  <p className="text-base leading-7 text-dark-grey-600">
                    可以浏览项目、参与讨论、分享内容，积极参与社区活动，从其他成员和专家中获取信息和建议。
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3 px-8 py-10">
                  <span>
                    <img src={xiangmu} alt="xiangmu" className={styles.userImg} />
                  </span>
                  <p className="text-2xl font-extrabold text-dark-grey-900">
                    项目负责人
                  </p>
                  <p className="text-base leading-7 text-dark-grey-600">
                    负责特定项目的管理者，包括项目推广、社区互动、风险管理以及确保项目的成功。
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3 px-8 py-10">
                  <img src={julebu} alt="julebu" className={styles.userImg} />
                  <p className="text-2xl font-extrabold text-dark-grey-900">
                    俱乐部合伙人
                  </p>
                  <p className="text-base leading-7 text-dark-grey-600">
                    可以参与整个俱乐部所有投资项目以及广告收入的盈利分红。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Index;
