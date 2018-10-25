import React from 'react'
import renderer from 'react-test-renderer'
import AccordionToggle from '..'

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <AccordionToggle />
    );
    expect(snapshot).toMatchSnapshot()
  })
  it('should render when toggled', () => {
    const snapshot = renderer.create(
      <AccordionToggle toggled />
    );
    expect(snapshot).toMatchSnapshot()
  })
})