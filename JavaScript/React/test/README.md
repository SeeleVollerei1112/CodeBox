<!-- @format -->

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

以下是重新汇总的 ECharts 表单配置项信息，并将 Y 轴的最大值、最小值和间隔放入通用的表单配置中。

通用配置项
这些配置项在多种图表中都常见，可以放在一个通用表单中。

json
复制代码
{
"form": [
{
"name": "title",
"type": "text",
"label": "Chart Title",
"placeholder": "Enter chart title"
},
{
"name": "tooltip",
"type": "select",
"label": "Tooltip Trigger",
"options": ["item", "axis", "none"]
},
{
"name": "legend",
"type": "checkbox",
"label": "Show Legend"
},
{
"name": "xAxis",
"type": "select",
"label": "X Axis Type",
"options": ["category", "value", "time", "log"]
},
{
"name": "yAxisType",
"type": "select",
"label": "Y Axis Type",
"options": ["value", "category", "time", "log"]
},
{
"name": "yAxisMin",
"type": "number",
"label": "Y Axis Minimum",
"placeholder": "Enter minimum value"
},
{
"name": "yAxisMax",
"type": "number",
"label": "Y Axis Maximum",
"placeholder": "Enter maximum value"
},
{
"name": "yAxisInterval",
"type": "number",
"label": "Y Axis Interval",
"placeholder": "Enter interval value"
},
{
"name": "series",
"type": "checkbox-group",
"label": "Data Series",
"options": ["Series 1", "Series 2", "Series 3"]
}
]
}
折线图（Line Chart）特有配置项
json
复制代码
{
"form": [
{
"name": "lineStyle",
"type": "select",
"label": "Line Style",
"options": ["solid", "dashed", "dotted"]
},
{
"name": "smooth",
"type": "checkbox",
"label": "Smooth Line"
}
]
}
柱状图（Bar Chart）特有配置项
json
复制代码
{
"form": [
{
"name": "barWidth",
"type": "number",
"label": "Bar Width",
"placeholder": "Enter bar width"
},
{
"name": "barBorderRadius",
"type": "number",
"label": "Bar Border Radius",
"placeholder": "Enter border radius"
}
]
}
饼图（Pie Chart）特有配置项
json
复制代码
{
"form": [
{
"name": "radius",
"type": "text",
"label": "Radius",
"placeholder": "Enter radius (e.g., '50%')"
},
{
"name": "stillShowZeroSum",
"type": "checkbox",
"label": "Show Zero Sum"
}
]
}
散点图（Scatter Chart）特有配置项
json
复制代码
{
"form": [
{
"name": "symbol",
"type": "select",
"label": "Symbol Shape",
"options": ["circle", "rect", "roundRect", "triangle", "diamond", "pin", "arrow"]
},
{
"name": "symbolSize",
"type": "number",
"label": "Symbol Size",
"placeholder": "Enter symbol size"
}
]
}
拖拽功能的图表（Drag Interaction Chart）特有配置项
json
复制代码
{
"form": [
{
"name": "draggable",
"type": "checkbox",
"label": "Enable Dragging"
}
]
}
事件和交互配置（Event and Interaction Configurations）特有配置项
json
复制代码
{
"form": [
{
"name": "eventHandlers",
"type": "textarea",
"label": "Event Handlers",
"placeholder": "Define event handlers"
}
]
}
视觉映射配置（Visual Mapping Configuration）特有配置项
json
复制代码
{
"form": [
{
"name": "visualMapType",
"type": "select",
"label": "Visual Map Type",
"options": ["continuous", "piecewise"]
},
{
"name": "visualMapRange",
"type": "range",
"label": "Visual Map Range",
"min": 0,
"max": 100
}
]
}
通过这种方式，我们可以更好地组织和管理不同图表类型的配置项，使用户可以根据图表类型选择相应的配置项，从而简化配置过程。根据需要，可以动态加载相应的配置项表单，以提高用户体验。
