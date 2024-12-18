import React, { Component } from 'react';
import { Select } from 'antd';

const { Option } = Select;

function onChange(value) {
	console.log(`selected ${value}`);
}

function onBlur() {
	console.log('blur');
}

function onFocus() {
	console.log('focus');
}

function onSearch(val) {
	console.log('search:', val);
}

export class Search extends Component {
	render() {
		return (
			<Select
				showSearch
				style={{ width: 200 }}
				placeholder="Select a person"
				optionFilterProp="children"
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				onSearch={onSearch}
				filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
			>
				<Option value="jack">Jack</Option>
				<Option value="lucy">Lucy</Option>
				<Option value="tom">Tom</Option>
			</Select>
		);
	}
}

export default Search;
