import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Accordion from '..'

describe('toggle', () => {
  it('should toggle state.toggle', () => {
    const spy = jest.fn()
    const wrapper = shallow(<Accordion>{spy}</Accordion>)
    expect(spy).toHaveBeenCalled()
    wrapper.instance().toggle()
    wrapper.update()
    expect(wrapper.state('toggled')).toBe(true)
    wrapper.instance().toggle()
    wrapper.update()
    expect(wrapper.state('toggled')).toBe(false)
  })
})

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <Accordion>{() => <h1>Hello world</h1>}</Accordion>
    );
    expect(snapshot).toMatchSnapshot()
  })
})