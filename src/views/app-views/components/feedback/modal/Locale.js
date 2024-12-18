import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import React, { useState } from 'react';
const LocalizedModal = () => {
	const [open, setOpen] = useState(false);
	const showModal = () => {
		setOpen(true);
	};
	const hideModal = () => {
		setOpen(false);
	};
	return (
		<>
			<Button type="primary" onClick={showModal}>
				Modal
			</Button>
			<Modal title="Modal" open={open} onOk={hideModal} onCancel={hideModal} okText="确认" cancelText="取消">
				<p>Bla bla ...</p>
				<p>Bla bla ...</p>
				<p>Bla bla ...</p>
			</Modal>
		</>
	);
};
const confirm = () => {
	Modal.confirm({
		title: 'Confirm',
		icon: <ExclamationCircleOutlined />,
		content: 'Bla bla ...',
		okText: '确认',
		cancelText: '取消',
	});
};
const Locale = () => (
	<Space>
		<LocalizedModal />
		<Button onClick={confirm}>Confirm</Button>
	</Space>
);
export default Locale;
