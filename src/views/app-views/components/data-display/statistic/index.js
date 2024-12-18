import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import CardMd from './markdown/card.md';
import CountdownMd from './markdown/countdown.md';
import UnitMd from './markdown/unit.md';

import Basic from './Basic';
import Card from './Card';
import Countdown from './Countdown';
import Unit from './Unit';

export class StatisticComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}>
							<Basic />
						</DemoCard>
						<DemoCard code={CardMd}>
							<Card />
						</DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={UnitMd}>
							<Unit />
						</DemoCard>
						<DemoCard code={CountdownMd}>
							<Countdown />
						</DemoCard>
					</Col>
				</Row>
				<ApiContainer code={IndexMd} />
			</React.Fragment>
		);
	}
}

export default StatisticComponent;
