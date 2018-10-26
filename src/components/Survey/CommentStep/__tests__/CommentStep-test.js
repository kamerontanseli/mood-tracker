import React from "react";
import { shallow, mount } from 'enzyme';
import renderer from "react-test-renderer";
import CommentStep from "..";

describe("render", () => {
  it("should render", () => {
    const snapshot = renderer.create(
      <CommentStep value="hello world" />
    );
    expect(snapshot).toMatchSnapshot();
  });
  it('should call onChange when textarea is changed', () => {
    const spy = jest.fn()
    const wrapper = mount(<CommentStep value="hello world" onChange={spy} />)
    wrapper.find('textarea').simulate('change')
    expect(spy).toHaveBeenCalled()
  })
  it('should call onBack when [data-test="back"] is clicked', () => {
    const spy = jest.fn()
    const wrapper = mount(<CommentStep value="hello world" onBack={spy} />)
    wrapper.find('[data-test="back"]').first().simulate('click')
    expect(spy).toHaveBeenCalled()
  })
  it('should call onNext when [data-test="next"] is clicked', () => {
    const spy = jest.fn()
    const wrapper = mount(<CommentStep value="hello world" onNext={spy} />)
    wrapper.find('[data-test="next"]').first().simulate('click')
    expect(spy).toHaveBeenCalled()
  })
});
