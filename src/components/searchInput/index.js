import React ,{Component}  from "react"
import './style.less'

export default class SearchInput extends Component{

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

   render(){
      return(
         <input className="search-input" type="text" placeholder="请输入关键字" defaultValue={this.state.value} />
      )
   }
}
