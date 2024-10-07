import React, { Component } from 'react';
import { Timeline } from 'antd';

export class Basic extends Component {
	render() {
		return (
			<Timeline
				items={[
					{
						children: 'Create a services site 2015-09-01',
					},
					{
						children: 'Solve initial network problems 2015-09-01',
					},
					{
						children: 'Technical testing 2015-09-01',
					},
					{
						children: 'Network problems being solved 2015-09-01',
					},
				]}
			/>
		);
	}
}

export default Basic;
