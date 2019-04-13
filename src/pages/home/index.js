import React,{ Component } from 'react';
import Header from '../../components/header'
import Banner from '../../components/banner'
import HomeAd from './subhome'
import HomeList from './subhome/list'
import Nav from '../../components/nav'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../../reduxs/actions'
import { withRouter } from 'react-router-dom'
class Home extends Component {
   render(){
      return (
         <div>
            <Header cityName={ this.props.userinfo.cityName } history={this.props.history}/>
            <Banner/>
            <div style={{height: '15px'}}>{/* 分割线 */}</div>
            <HomeAd/>
            <div style={{height: '15px'}}>{/* 分割线 */}</div>
            <HomeList city={ this.props.userinfo.cityName }/>
            <Nav/>
         </div>
      )
   }
}

/*************************************************************/
function mapStateToProps(state) {
   return {
      userinfo:state.userinfo
   }
}

function mapispatchToProps(dispatch) {
   return {
      actactions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
   }
}

export default withRouter(connect(
   mapStateToProps,
   mapispatchToProps
)(Home))