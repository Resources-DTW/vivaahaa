import React, { Component } from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

export class Alternate extends Component {
	render() {
		return (
			<Timeline
				mode="alternate"
				items={[
					{
						children: 'Create a services site 2015-09-01',
					},
					{
						children: 'Solve initial network problems 2015-09-01',
						color: 'green',
					},
					{
						dot: (
							<ClockCircleOutlined
								style={{
									fontSize: '16px',
								}}
							/>
						),
						children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
					},
					{
						color: 'red',
						children: 'Network problems being solved 2015-09-01',
					},
					{
						children: 'Create a services site 2015-09-01',
					},
					{
						dot: (
							<ClockCircleOutlined
								style={{
									fontSize: '16px',
								}}
							/>
						),
						children: 'Technical testing 2015-09-01',
					},
				]}
			/>
		);
	}
}

export default Alternate;
