import React, {Component} from "react"
import './style.less'

export default class SearchInput extends Component {

   constructor() {
      super();
      this.state = {
         value: ''
      }
   }

   componentDidMount() {
      // 默认值
      this.setState({
         value: this.props.defaultValue || ''
      })
   }

   changeh(e) {
      // 监控变化
      this.setState({
         value: e.target.value
      })
   }

   keyuph(e) {
      // 监控 enter 事件
      if (e.keyCode !== 13) {
         return
      }
      this.props.enterHandle(e.target.value)
   }

   render() {
      return (
         <input className="search-input" type="text"
                placeholder="请输入关键字"
                defaultValue={this.state.value}
                onChange={this.changeh.bind(this)}
                onKeyUp={this.keyuph.bind(this)}
         />
      )
   }
}
