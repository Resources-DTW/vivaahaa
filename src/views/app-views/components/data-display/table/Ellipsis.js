/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <a>{text}</a>,
		width: 150,
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
		width: 80,
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address 1',
		ellipsis: true,
	},
	{
		title: 'Long Column Long Column Long Column',
		dataIndex: 'address',
		key: 'address 2',
		ellipsis: true,
	},
	{
		title: 'Long Column Long Column',
		dataIndex: 'address',
		key: 'address 3',
		ellipsis: true,
	},
	{
		title: 'Long Column',
		dataIndex: 'address',
		key: 'address 4',
		ellipsis: true,
	},
];

const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 2 Lake Park, London No. 2 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
];

export class Ellipsis extends Component {
	render() {
		return <Table columns={columns} dataSource={data} />;
	}
}

export default Ellipsis;
