import React from 'react'
import renderer from 'react-test-renderer'
import Navigation from '..'

jest.mock('react-router-dom', () => ({
  Link: p => <a {...p} />
}))

describe('render', () => {
  it('should render', () => {
    const snapshot = renderer.create(
      <Navigation />
    );
    expect(snapshot).toMatchSnapshot()
  })
})