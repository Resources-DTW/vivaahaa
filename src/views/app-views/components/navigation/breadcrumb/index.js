import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import OverlayMd from './markdown/overlay.md';
import SeperatorIndepentMd from './markdown/separator-indepent.md';
import SeperatorMd from './markdown/separator.md';
import WithIconMd from './markdown/withIcon.md';
import Basic from './Basic';
import Overlay from './Overlay';
import SeperatorIndepent from './SeperatorIndepent';
import Seperator from './Seperator';
import WithIcon from './WithIcon';

export class BreadcrumbComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}>
							<Basic />
						</DemoCard>
						<DemoCard code={SeperatorMd}>
							<Seperator />
						</DemoCard>
						<DemoCard code={SeperatorIndepentMd}>
							<SeperatorIndepent />
						</DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={WithIconMd}>
							<WithIcon />
						</DemoCard>
						<DemoCard code={OverlayMd}>
							<Overlay />
						</DemoCard>
					</Col>
				</Row>
				<ApiContainer code={IndexMd} />
			</React.Fragment>
		);
	}
}

export default BreadcrumbComponent;
