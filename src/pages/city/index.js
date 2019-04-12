import React, {Component} from 'react';
import CityHead from '../../components/cityhead'
import CurrentCity from '../../components/currentCity'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActionsFromOtherFile from '../../reduxs/actions'
import {withRouter} from 'react-router-dom'
import CityLists from '../../components/citylist'

class City extends Component {

   render() {
      return (
         <div>
            <CityHead title="城市选择"/>
            <CurrentCity cityname={this.props.userinfo.cityName}/>
            <CityLists changeFn={this.changeFn.bind(this)}/>
         </div>
      )
   }

   changeFn(cityName) {
      if (cityName == null) {
         return
      }
      const userinfo = this.props.userinfo;
      userinfo.cityName = cityName;
      this.props.userInfoActions.update(userinfo);
      this.props.history.replace("/")

   }
}

/*************************************************************/
function mapStateToProps(state) {
   console.log(state);
   return {
      userinfo: state.userinfo
   }
}

function mapispatchToProps(dispatch) {
   return {
      userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
   }
}

export default withRouter(connect(
   mapStateToProps,
   mapispatchToProps
)(City))