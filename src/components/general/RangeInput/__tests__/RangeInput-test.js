import React from 'react'
import renderer from 'react-test-renderer'
import RangeInput from '..'

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <RangeInput />
    );
    expect(snapshot).toMatchSnapshot()
  })
})