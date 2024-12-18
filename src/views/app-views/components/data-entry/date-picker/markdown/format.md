---
order: 1
title:
  zh-CN: 日期格式
  en-US: Date Format
---

## zh-CN

使用 `format` 属性，可以自定义日期显示格式。

## en-US

We can set the date format by `format`.

```jsx
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

ReactDOM.render(
	<div>
		<DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
		<br />
		<DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
		<br />
		<MonthPicker defaultValue={dayjs('2015/01', monthFormat)} format={monthFormat} />
		<br />
		<RangePicker defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]} format={dateFormat} />
	</div>,
	mountNode,
);
```
