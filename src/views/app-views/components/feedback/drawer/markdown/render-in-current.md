---
order: 2
title:
  zh-CN: 渲染在当前 DOM
  en-US: Render in current dom
---

## zh-CN

渲染在当前 dom 里。自定义容器，查看 getContainer。

## en-US

Render in current dom. custom container, check getContainer.

```jsx
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
const RenderInCurrent = () => {
	const [open, setOpen] = useState(false);
	const showDrawer = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};
	return (
		<div
			style={{
				height: 200,
				overflow: 'hidden',
				position: 'relative',
				border: '1px solid #ebedf0',
				borderRadius: 2,
				padding: 48,
				textAlign: 'center',
				background: '#fafafa',
			}}
		>
			Render in this
			<div
				style={{
					marginTop: 16,
				}}
			>
				<Button type="primary" onClick={showDrawer}>
					Open
				</Button>
			</div>
			<Drawer
				title="Basic Drawer"
				placement="right"
				closable={false}
				onClose={onClose}
				open={open}
				getContainer={false}
				style={{
					position: 'absolute',
				}}
			>
				<p>Some contents...</p>
			</Drawer>
		</div>
	);
};
export default RenderInCurrent;
```
