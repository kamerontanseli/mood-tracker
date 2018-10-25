import React from 'react'
import renderer from 'react-test-renderer'
import AccordionHead from '..'

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <AccordionHead>Hello world</AccordionHead>
    );
    expect(snapshot).toMatchSnapshot()
  })
})