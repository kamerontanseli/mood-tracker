import React from 'react'
import renderer from 'react-test-renderer'
import Button from '..'

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <Button>Hello world</Button>
    );
    expect(snapshot).toMatchSnapshot()
  })
})