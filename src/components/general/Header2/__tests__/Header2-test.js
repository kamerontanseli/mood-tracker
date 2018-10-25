import React from 'react'
import renderer from 'react-test-renderer'
import Header2 from '..'

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <Header2>Hello world</Header2>
    );
    expect(snapshot).toMatchSnapshot()
  })
})