import React, {Component} from 'react';
import './style.less'
import {getCommentData} from '../../../fetch/detail'
import ListComponent from '../../../components/commentList'
import LoadMore from '../../../components/loadMore'

export default class Comment extends Component {
   constructor() {
      super();
      this.state = {
         data: [],
         hasMore: false,
         isLoadingMore: false,
         page: 0
      }
   }

   componentDidMount() {
      this.loadFirstPageData()
   }

   // 获取首页数据
   loadFirstPageData() {
      const id = this.props.id;
      const result = getCommentData(0, id);
      this.resultHandle(result)
   }

   // 处理数据
   resultHandle(result) {
      result
         .then(res => {
            return res.json()
         })
         .then(data => {
            let page = this.state.page;
            this.setState({
               page: page + 1
            });
            let hasMore = data.hasMore;
            let datas = data.data;
            this.setState({
               hasMore: hasMore,
               data: [...this.state.data, ...datas]
            })
         })
         .catch(err => {
            console.log(err);
         })
   }

   // 加载更多数据
   loadMoreData() {
      // 记录状态
      this.setState({
         isLoadingMore: true
      });

      const id = this.props.id;
      console.log(id);
      const page = this.state.page;
      const result = getCommentData(page, id);
      this.resultHandle(result);

      // 记录状态
      this.setState({
         isLoadingMore: false
      });
   }

   render() {
      return (
         <div className="detail-comment-subpage">
            <h2>用户点评</h2>
            {
               this.state.data.length ? <ListComponent data={this.state.data}/> : <div>{/* 加载中... */}</div>
            }
            {
               this.state.hasMore ?
                  <LoadMore isLoadingMore={this.state.isLoadingMore} LoadMoreFn={this.loadMoreData.bind(this)}/> : ""
            }
         </div>
      )
   }
}