import React from 'react'
import renderer from 'react-test-renderer'
import Header3 from '..'

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <Header3>Hello world</Header3>
    );
    expect(snapshot).toMatchSnapshot()
  })
})