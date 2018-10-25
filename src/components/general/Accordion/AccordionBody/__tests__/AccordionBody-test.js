import React from 'react'
import renderer from 'react-test-renderer'
import AccordionBody from '..'

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <AccordionBody>Hello world</AccordionBody>
    );
    expect(snapshot).toMatchSnapshot()
  })
})