import React,{Component} from 'react';

import {withRouter} from 'react-router-dom';
import { SearchBar, Button, WhiteSpace, WingBlank} from 'antd-mobile';


class Search extends Component{
	constructor() {
		super();
		this.state = {
			
		}
	}
	
	componentWillMount(){
        

    }
	omponentDidMount() {
	    this.autoFocusInst.focus();
    }
	onChange= (value) => {
	    this.setState({ value });
	};
	clear = () => {
	    this.setState({ value: '' });
	};
	handleClick = () => {
   		 this.manualFocusInst.focus();
  	}
	render(){
		return (<div>
				<div className="search">
				 <SearchBar
		        value={this.state.value}
		        placeholder="Search"
		        onSubmit={value => console.log(value, 'onSubmit')}
		        onClear={value => console.log(value, 'onClear')}
		        onFocus={() => console.log('onFocus')}
		        onBlur={() => console.log('onBlur')}
		        onCancel={() => console.log('onCancel')}
		        showCancelButton
		        onChange={this.onChange}
		      />
            </div>
		</div>)
	}
}
Search = withRouter(Search);

export {Search};