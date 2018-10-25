import React from 'react'
import renderer from 'react-test-renderer'
import Progress from '..'

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <Progress />
    );
    expect(snapshot).toMatchSnapshot()
  })
})