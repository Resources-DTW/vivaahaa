import React, { Component } from 'react';
import { Descriptions } from 'antd';

export class Vertical extends Component {
	render() {
		return (
			<Descriptions title="User Info" layout="vertical">
				<Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
				<Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
				<Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
				<Descriptions.Item label="Address" span={2}>
					No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
				</Descriptions.Item>
				<Descriptions.Item label="Remark">empty</Descriptions.Item>
			</Descriptions>
		);
	}
}

export default Vertical;
