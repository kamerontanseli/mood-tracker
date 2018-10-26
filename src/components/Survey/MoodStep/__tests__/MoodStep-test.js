import React from "react";
import { shallow, mount } from 'enzyme';
import renderer from "react-test-renderer";
import MoodStep from "..";

describe("render", () => {
  it("should render", () => {
    const snapshot = renderer.create(
      <MoodStep value={1} />
    );
    expect(snapshot).toMatchSnapshot();
  });
  it('should call onChange when input is changed', () => {
    const spy = jest.fn()
    const wrapper = mount(<MoodStep value={1} onChange={spy} />)
    wrapper.find('input').simulate('change')
    expect(spy).toHaveBeenCalled()
  })
  it('should call onNext when [data-test="next"] is clicked', () => {
    const spy = jest.fn()
    const wrapper = mount(<MoodStep value={1} onNext={spy} />)
    wrapper.find('[data-test="next"]').first().simulate('click')
    expect(spy).toHaveBeenCalled()
  })
});
