---
order: 3
title:
  zh-CN: 滑动
  en-US: Slide
---

## zh-CN

可以左右、上下滑动，容纳更多标签。

## en-US

In order to fit in more tabs, they can slide left and right (or up and down).

```jsx
import { Radio, Tabs } from 'antd';
import React, { useState } from 'react';
const Slide = () => {
	const [mode, setMode] = useState('top');
	const handleModeChange = (e) => {
		setMode(e.target.value);
	};
	return (
		<div>
			<Radio.Group
				onChange={handleModeChange}
				value={mode}
				style={{
					marginBottom: 8,
				}}
			>
				<Radio.Button value="top">Horizontal</Radio.Button>
				<Radio.Button value="left">Vertical</Radio.Button>
			</Radio.Group>
			<Tabs
				defaultActiveKey="1"
				tabPosition={mode}
				style={{
					height: 220,
				}}
				items={new Array(30).fill(null).map((_, i) => {
					const id = String(i);
					return {
						label: `Tab-${id}`,
						key: id,
						disabled: i === 28,
						children: `Content of tab ${id}`,
					};
				})}
			/>
		</div>
	);
};
export default Slide;
```
