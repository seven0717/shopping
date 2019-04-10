import React, {Component} from 'react'
import './style.less'

export default class LoadMore extends Component {
   render() {
      return (
         <div className="load-more" ref="wrapper">
            {
               this.props.isLoadingMore
                  ? <span>加载中...</span>
                  : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
            }
         </div>
      )
   }
   loadMoreHandle(){
      this.props.LoadMoreFn();
   }
   // 监听滚动到底部加载
   componentDidMount() {
      // 读取当前元素wrapper
      const Fn = this.props.LoadMoreFn;
      const wrp = this.refs.wrapper;
      let timeoutid;

      function callB(){
         // getBoundingClientRect用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
         const top = wrp.getBoundingClientRect().top;
         console.log('top:',top);
         // 获取视口大小
         const windowHeight = window.screen.height;
         console.log('windowHeight:',windowHeight);
         if (top && top < windowHeight) {
            // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
            Fn()
         }
      }

      // 滚动加载
      window.addEventListener('scroll',function(){
         if (this.props.isLoadingMore) { return }
         callB()
      }.bind(this),false)
   }

}