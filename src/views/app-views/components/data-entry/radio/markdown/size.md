---
order: 5
title:
  zh-CN: 大小
  en-US: Size
---

## zh-CN

大中小三种组合，可以和表单输入框进行对应配合。

## en-US

There are three sizes available: large, medium, and small. It can coordinate with input box.

```jsx
import { Radio } from 'antd';

ReactDOM.render(
	<div>
		<div>
			<Radio.Group defaultValue="a" size="large">
				<Radio.Button value="a">Hangzhou</Radio.Button>
				<Radio.Button value="b">Shanghai</Radio.Button>
				<Radio.Button value="c">Beijing</Radio.Button>
				<Radio.Button value="d">Chengdu</Radio.Button>
			</Radio.Group>
		</div>
		<div style={{ marginTop: 16 }}>
			<Radio.Group defaultValue="a">
				<Radio.Button value="a">Hangzhou</Radio.Button>
				<Radio.Button value="b">Shanghai</Radio.Button>
				<Radio.Button value="c">Beijing</Radio.Button>
				<Radio.Button value="d">Chengdu</Radio.Button>
			</Radio.Group>
		</div>
		<div style={{ marginTop: 16 }}>
			<Radio.Group defaultValue="a" size="small">
				<Radio.Button value="a">Hangzhou</Radio.Button>
				<Radio.Button value="b">Shanghai</Radio.Button>
				<Radio.Button value="c">Beijing</Radio.Button>
				<Radio.Button value="d">Chengdu</Radio.Button>
			</Radio.Group>
		</div>
	</div>,
	mountNode,
);
```
