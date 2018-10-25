import React from 'react'
import renderer from 'react-test-renderer'
import AccordionHeadItem from '..'

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <AccordionHeadItem>Hello world</AccordionHeadItem>
    );
    expect(snapshot).toMatchSnapshot()
  })
})