import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
const BasicRight = () => {
	const [open, setOpen] = useState(false);
	const showDrawer = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};
	return (
		<>
			<Button type="primary" onClick={showDrawer}>
				Open
			</Button>
			<Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</>
	);
};
export default BasicRight;
