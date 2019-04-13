import React, {Component} from 'react';
import {getListata} from '../../../fetch/homefetch'
import List from '../../../components/list'
import LoadMore from '../../../components/loadMore'

export default class Ad extends Component {
   constructor() {
      super();
      this.state = {
         data: [],
         hasMore: false,
         isLoadingMore: false,
         page:0
      }
   }

   componentDidMount() {
      // 获取首页数据
      this.LoadfirstPageata()
   }

   // 第一次加载数据
   LoadfirstPageata() {
      this.resultHandle(this.props.city,this.state.page)
   }

   // 处理数据
   resultHandle(city,page) {
      getListata(city, page)
         .then(res => {
            return res.json();
         })
         .then(data => {
            this.setState({
               data: [...this.state.data, ...data.data],
               hasMore: data.hasMore,
               page:this.state.page + 1
            })
         })
   }

   LoadMoreFn() {
      this.setState({
         isLoadingMore: true
      });
      this.resultHandle(this.props.city,this.state.page);

      this.setState({
         isLoadingMore: false
      })
   }

   render() {
      return (
         <div>
            {
               this.state.data.length > 0 ? <List data={this.state.data}/> : <div>数据加载中...</div>
            }
            {
               this.state.hasMore ?
                  <LoadMore isLoadingMore={this.state.isLoadingMore} LoadMoreFn={this.LoadMoreFn.bind(this)}/> : ''
            }
         </div>
      )
   }
}