/** @jsxImportSource @emotion/react */
import { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import DynamicTriggerMd from './markdown/dynamic-trigger.md';
import IconMd from './markdown/icon.md';
import LocaleMd from './markdown/locale.md';
import PlacementMd from './markdown/placement.md';
import Basic from './Basic';
import DynamicTrigger from './DynamicTrigger';
import Icon from './Icon';
import Locale from './Locale';
import Placement from './Placement';
import { css } from '@emotion/react';

export class PopconfirmComponent extends Component {
	render() {
		return (
			<div
				css={css`
					.ant-btn {
						margin-right: 8px;
						margin-bottom: 8px;
					}
				`}
			>
				<Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}>
							<Basic />
						</DemoCard>
						<DemoCard code={PlacementMd}>
							<Placement />
						</DemoCard>
						<DemoCard code={IconMd}>
							<Icon />
						</DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={LocaleMd}>
							<Locale />
						</DemoCard>
						<DemoCard code={DynamicTriggerMd}>
							<DynamicTrigger />
						</DemoCard>
					</Col>
				</Row>
				<ApiContainer code={IndexMd} />
			</div>
		);
	}
}

export default PopconfirmComponent;
