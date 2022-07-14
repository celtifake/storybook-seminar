import{B as t}from"./Button.383a0a78.js";import{j as e}from"./jsx-runtime.01815219.js";import"./index.5f7b568a.js";var m={title:"Example/Button",component:t,argTypes:{backgroundColor:{control:"color"}},parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    jest: 'Button.test.tsx',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3G1VM36JhA78bPKZVpWbaT/Button?node-id=0%3A1',
    },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
`,locationsMap:{primary:{startLoc:{col:48,line:24},endLoc:{col:78,line:24},startBody:{col:48,line:24},endBody:{col:78,line:24}},secondary:{startLoc:{col:48,line:24},endLoc:{col:78,line:24},startBody:{col:48,line:24},endBody:{col:78,line:24}},large:{startLoc:{col:48,line:24},endLoc:{col:78,line:24},startBody:{col:48,line:24},endBody:{col:78,line:24}},small:{startLoc:{col:48,line:24},endLoc:{col:78,line:24},startBody:{col:48,line:24},endBody:{col:78,line:24}}}},jest:"Button.test.tsx",design:{type:"figma",url:"https://www.figma.com/file/3G1VM36JhA78bPKZVpWbaT/Button?node-id=0%3A1"}}};const o=n=>e(t,{...n}),r=o.bind({});r.args={primary:!0,label:"Button"};const a=o.bind({});a.args={label:"Button"};const s=o.bind({});s.args={size:"large",label:"Button"};const l=o.bind({});l.args={size:"small",label:"Button"};const d=["Primary","Secondary","Large","Small"];export{s as Large,r as Primary,a as Secondary,l as Small,d as __namedExportsOrder,m as default};
//# sourceMappingURL=Button.stories.796cc80b.js.map
