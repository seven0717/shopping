import React from 'react'
import ReactSwipe from 'react-swipe'
import { Link } from "react-router-dom"
import "./style.less"

export default class Carousel extends React.Component {
   constructor() {
      super();
      this.state = {
         index: 0
      }
   }

   render(){
      const opt = {
         auto: 2500,
         // callback可以拿到每次录播index
         callback: function(index) {
            console.log(index);
            // 更新当前轮播图的index
            this.setState({
               index: index
            });
         }.bind(this)
      };

      return(
         <div id="home-category">
            <ReactSwipe swipeOptions={opt}>
               <div className="carousel-item">
                  <ul className="clear-fix">
                     <Link to="/search/jingdian"><li className="left jingdian">景点</li></Link>
                     <Link to="/search/ktv"><li className="left ktv">KTV</li></Link>
                     <Link to="/search/gouwu"><li className="left gouwu">购物</li></Link>
                     <Link to="/search/shenghuofuwu"><li className="left shenghuofuwu">生活服务</li></Link>
                     <Link to="/search/jianshenyundong"><li className="left jianshenyundong">健身运动</li></Link>
                     <Link to="/search/meifa"><li className="left meifa">美发</li></Link>
                     <Link to="/search/qinzi"><li className="left qinzi">亲子</li></Link>
                     <Link to="/search/xiaochikuaican"><li className="left xiaochikuaican">小吃快餐</li></Link>
                     <Link to="/search/zizhucan"><li className="left zizhucan">自助餐</li></Link>
                     <Link to="/search/jiuba"><li className="left jiuba">酒吧</li></Link>
                  </ul>
               </div>
               <div className="carousel-item">
                  <ul className="clear-fix">
                     <Link to="/search/meishi"><li className="left meishi">美食</li></Link>
                     <Link to="/search/dianying"><li className="left dianying">电影</li></Link>
                     <Link to="/search/jiudian"><li className="left jiudian">酒店</li></Link>
                     <Link to="/search/xuixianyule"><li className="left xuixianyule">休闲娱乐</li></Link>
                     <Link to="/search/waimai"><li className="left waimai">外卖</li></Link>
                     <Link to="/search/huoguo"><li className="left huoguo">火锅</li></Link>
                     <Link to="/search/liren"><li className="left liren">丽人</li></Link>
                     <Link to="/search/dujiachuxing"><li className="left dujiachuxing">度假出行</li></Link>
                     <Link to="/search/zuliaoanmo"><li className="left zuliaoanmo">足疗按摩</li></Link>
                     <Link to="/search/zhoubianyou"><li className="left zhoubianyou">周边游</li></Link>
                  </ul>
               </div>
               <div className="carousel-item">
                  <ul className="clear-fix">
                     <Link to="/search/ribencai"><li className="left ribencai">日本菜</li></Link>
                     <Link to="/search/spa"><li className="left SPA">SPA</li></Link>
                     <Link to="/search/jiehun"><li className="left jiehun">结婚</li></Link>
                     <Link to="/search/xuexipeixun"><li className="left xuexipeixun">学习培训</li></Link>
                     <Link to="/search/xican"><li className="left xican">西餐</li></Link>
                     <Link to="/search/huochejipiao"><li className="left huochejipiao">火车机票</li></Link>
                     <Link to="/search/shaokao"><li className="left shaokao">烧烤</li></Link>
                     <Link to="/search/jiazhuang"><li className="left jiazhuang">家装</li></Link>
                     <Link to="/search/chongwu"><li className="left chongwu">宠物</li></Link>
                     <Link to="/search/all"><li className="left quanbufenlei">全部分类</li></Link>
                  </ul>
               </div>
            </ReactSwipe>
            <div className="index-container">
               <ul>
                  <li className={this.state.index === 0 ? "selected" : ''}></li>
                  <li className={this.state.index === 1 ? "selected" : ''}></li>
                  <li className={this.state.index === 2 ? "selected" : ''}></li>
               </ul>
            </div>
         </div>
      )
   }

}
