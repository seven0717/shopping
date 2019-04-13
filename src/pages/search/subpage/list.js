import React, {Component} from 'react'
import {searchdata} from '../../../fetch/search'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ListComponent from "../../../components/list"
import LoadMore from '../../../components/loadMore'

const initState = {
   data: [],
   hasMore: false,
   isLoadingMore: false,
   page: 0
};

class SubPage extends Component {
   constructor() {
      super();
      this.state = initState
   }

   componentDidMount() {
      this.loadFirstPageData()
   }

   loadFirstPageData() {
      let cityName = this.props.userinfo.cityName;
      let category = this.props.category;
      let keyword = this.props.keyword || '';
      const result = searchdata(0, cityName, category, keyword);

      this.resultheadle(result)
   }

   resultheadle(result) {
      const page = this.state.page;
      this.setState({
         page: page + 1
      });
      result
         .then(res => {
            return res.json()
         })
         .then(data => {
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

   loadMoreData() {
      this.setState({
         isLoadingMore: true
      });
      let page = this.state.page;
      let cityName = this.props.userinfo.cityName;
      let category = this.props.category;
      let keyword = this.props.keyword || '';
      const result = searchdata(page, cityName, category, keyword);

      this.resultheadle(result);
      this.setState({
         isLoadingMore: false
      })
   }

   componentDidUpdate(prevProps, prevState) {
      // const keyword = this.props.keyword;
      const category = this.props.category;
      if(this.props.keyword === prevProps.keyword && category === prevProps.category){
         return;
      }

      // 重置
      this.setState(initState);
      // 调取数据
      this.loadFirstPageData()
   }

   render() {
      return (
         <div>
            {
               this.state.data.length > 0 ? <ListComponent data={this.state.data}/> : <div>数据加载中........</div>
            }
            {
               this.state.hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore}
                                              LoadMoreFn={this.loadMoreData.bind(this)}/> : ""
            }
         </div>
      )
   }
}

/****************************************/
function mapStateToProps(state) {
   return {
      userinfo: state.userinfo
   }

}

function mapDispatchToProps(dispatch) {
   return {}

}

export default withRouter(
   connect(
      mapStateToProps,
      mapDispatchToProps
   )(SubPage)
)