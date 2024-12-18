---
order: 3
title:
  zh-CN: 选择功能
  en-US: Selectable Calendar
---

## zh-CN

一个通用的日历面板，支持年/月切换。

## en-US

A basic calendar component with Year/Month switch.

```jsx
import React, { useState } from 'react';
import { Alert, Calendar } from 'antd';
import dayjs from 'dayjs';

const Select = () => {
	const [value, setValue] = useState(() => dayjs('2017-01-25'));
	const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));
	const onSelect = (newValue) => {
		setValue(newValue);
		setSelectedValue(newValue);
	};
	const onPanelChange = (newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
			<Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
		</>
	);
};

export default Select;
```
