import React from 'react'
import renderer from 'react-test-renderer'
import Header1 from '..'

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <Header1>Hello world</Header1>
    );
    expect(snapshot).toMatchSnapshot()
  })
})