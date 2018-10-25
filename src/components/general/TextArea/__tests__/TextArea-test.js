import React from 'react'
import renderer from 'react-test-renderer'
import Textarea from '..'

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <Textarea />
    );
    expect(snapshot).toMatchSnapshot()
  })
})