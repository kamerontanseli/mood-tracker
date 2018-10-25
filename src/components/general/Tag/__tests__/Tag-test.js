import React from 'react'
import renderer from 'react-test-renderer'
import Tag from '..'

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <Tag>Hello world</Tag>
    );
    expect(snapshot).toMatchSnapshot()
  })
})