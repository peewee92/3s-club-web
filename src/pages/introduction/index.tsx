// import "./index.less";

import "./index.less";

import Banner from "./components/banner";
import Roadmap from "./components/roadmap";
import chuangxin from "@/assets/images/chuangxin.png";
import duoyuan from "@/assets/images/duoyuan.png";
import shejiao from "@/assets/images/shejiao.png";
import shendu from "@/assets/images/shendu.png";
import zhengce from "@/assets/images/zhengce.png";
import zhuanye from "@/assets/images/zhuanye.png";

const introduceList = [
  {
    title: "全球领先的Web3社交平台",
    content:
      "俱乐部致力于建立一个全球性Web3社交平台，将投资者、创业者和专家聚集在一起，这一全球性的社区为成员提供了无限的合作和交流机会，使其能够从全世界各地的智慧和经验中受益。",
    img: zhuanye,
  },
  {
    title: "专业的项目支持和管理",
    content:
      "俱乐部提供深入的项目分析和为每个项目指定专属项目负责人。这些负责人不仅推广项目，还管理项目的日常运营，提高了项目的专业性和成功机会。",
    img: duoyuan,
  },
  {
    title: "多等级的会员体验",
    content:
      "俱乐部设有多个会员等级，会员可根据其贡献度和活跃度享受到不同特权和福利。这种多层次的体验鼓励成员积极参与社区，促进了社区凝聚力。",
    img: zhuanye,
  },
  {
    title: "多元化的盈利机会",
    content:
      "俱乐部的发展规划包括多种盈利渠道，如合伙人分红、宣传服务费用、实业投资等。这为成员提供了多样化的收益机会，帮助他们实现财务自由，同时也有助于俱乐部IP影响力的可持续增长。",
    img: duoyuan,
  },
];

const introduceList2 = [
  {
    title: "社交互动",
    content:
      "在我们的平台上，您将与世界各地的投资者创业者和专家建立有意义的联系，共同探讨机会。",
    img: shejiao,
  },
  {
    title: "深度项目分析",
    content:
      "我们的团队致力于为您提供深入的项目分析和将3S社交俱乐部拥有强大的政策对接资源，确保您解，帮助您做出明智的投资决策。",
    img: shendu,
  },
  {
    title: "政策对接",
    content:
      "3S 社交俱乐部拥有强大的政策对接资源，确保您解，帮助您做出明智的投资决策。的投资在法规合规的环境中运作。",
    img: zhengce,
  },
  {
    title: "创新驱动",
    content:
      "我们相信创新是未来的动力。我们积极探索Web3技术和新兴数字资产，以确保您始终站在最前沿。",
    img: chuangxin,
  },
];
const Introduction: React.FC<any> = () => {
  return (
    <div className="page-introduction text-3xl text-center font-bold">
      {/* introduction */}
      <Banner />
      <div className="part2">
        <p className="part2-title">
          3S
          社交俱乐部提供一个全球性平台，汇聚了最新最优质的数字资产项目，为投资者提供独特的机会。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-16 w-9/12 mx-auto">
          {introduceList?.map((item) => {
            return (
              <div className="introduceItem">
                <img src={item.img} alt={item.title} />
                <div className="content">
                  <h5>{item.title}</h5>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-32">
          {introduceList2?.map((item) => {
            return (
              <div className="introduceItem2">
                <img src={item.img} alt={item.title} />
                <div className="content">
                  <h5>{item.title}</h5>
                  <p className="socalContent">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Roadmap />
      </div>
    </div>
  );
};

export default Introduction;
