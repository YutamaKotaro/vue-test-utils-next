import {h} from 'vue'
import {shallowMount, mount} from "../src";

test('render with scoped-slot', async () => {
  const HelloWorld: any = {
    render() {
      return this.$slots.default()
    },
  }
  const wrapper = shallowMount(HelloWorld, {
    slots: {
      default() {
        return <div></div>
      },
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})
