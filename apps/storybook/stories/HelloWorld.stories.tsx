import { ComponentMeta, ComponentStory } from '@storybook/react'
import HelloWorld from 'lib-react/components/HelloWorld'

export default {
    component: HelloWorld,
    title: 'Example/Hello World'
} as ComponentMeta<typeof HelloWorld>

export const Default: ComponentStory<typeof HelloWorld> = () => <HelloWorld />
