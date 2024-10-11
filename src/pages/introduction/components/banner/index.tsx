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
          <p className={classNames(styles.title, 'text-6xl')} >俱乐部介绍</p>
          <p className={styles.introduce}>3S社交俱乐部是由全球数个国家的加密领域专家以及爱好者以及各大Web3社区联合成立的去中心化自治组织，我们的使金是为全球投资者提供易值得信赖的Web3投资台，涵盖数字货币、NFT、MLM资金项目等领域，我们致力于为您提供深度项目分析、政策对接以及社交互动的机会。在3S，我们相信创新区动未来，我们的愿景是成为Web3领域的引领者，共同创造一个更加开放和创新的数字金融生态系统。加入我们，开启一段充满潜力的数字投资之旅，实现财务自由!</p>
        </div>
        
      </div>
    </>
  );
}

export default Index;
