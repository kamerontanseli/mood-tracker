import React from 'react'
import renderer from 'react-test-renderer'
import Panel from '..'

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <Panel>Hello world</Panel>
    );
    expect(snapshot).toMatchSnapshot()
  })
})