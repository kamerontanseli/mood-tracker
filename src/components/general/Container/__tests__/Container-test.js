import React from 'react'
import renderer from 'react-test-renderer'
import Container from '..'

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <Container>Hello world</Container>
    );
    expect(snapshot).toMatchSnapshot()
  })
})