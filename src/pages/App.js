import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../reduxs/actions'
import { withRouter } from 'react-router-dom'
import Local from '../utils';
import { CITYNAME } from '../utils/keys'
class App extends Component {
   constructor(){
      super();
      this.state = {
         initDone: true
      }
   }
   componentDidMount() {
      let cityName =Local.getItem(CITYNAME);
         //   初始化城市
      if (cityName == null){
         cityName = '上海';
      }

      this.props.actactions.update({
         cityName:cityName
      })
   }

   render() {
      return (
         <div>
            {
               this.state.initDone ? this.props.children : <div>正在加载页面...</div>
            }
         </div>
      )
   }
}

/*************************************************************/
function mapStateToProps(state) {
   return {}
}

function mapispatchToProps(dispatch) {
   return {
      actactions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
   }
}

export default withRouter(connect(
   mapStateToProps,
   mapispatchToProps
)(App))