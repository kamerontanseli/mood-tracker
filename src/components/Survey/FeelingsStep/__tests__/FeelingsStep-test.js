import React from "react";
import { shallow, mount } from 'enzyme';
import renderer from "react-test-renderer";
import FeelingsStep, { Feeling, ALL_FEELINGS } from "..";

describe('Feeling', () => {
  it("should render", () => {
    const snapshot = renderer.create(
      <Feeling value="hello world" />
    );
    expect(snapshot).toMatchSnapshot();
  });
  it('should call onChange when input is changed', () => {
    const spy = jest.fn()
    const wrapper = mount(<Feeling onChange={spy} />)
    wrapper.find('input').first().simulate('change')
    expect(spy).toHaveBeenCalled()
  })
})

describe("render", () => {
  it("should render", () => {
    const snapshot = renderer.create(
      <FeelingsStep />
    );
    expect(snapshot).toMatchSnapshot();
  });
  it('should call onBack when [data-test="back"] is clicked', () => {
    const spy = jest.fn()
    const wrapper = mount(<FeelingsStep onBack={spy} />)
    wrapper.find('[data-test="back"]').first().simulate('click')
    expect(spy).toHaveBeenCalled()
  })
  it('should call onNext when [data-test="next"] is clicked', () => {
    const spy = jest.fn()
    const wrapper = mount(<FeelingsStep feelings={['a', 'b']} onNext={spy} />)
    wrapper.find('[data-test="next"]').first().simulate('click')
    expect(spy).toHaveBeenCalled()
  })
  it('should render a Feeling for each feeling in ALL_FEELINGS', () => {
    const wrapper = mount(<FeelingsStep />)
    expect(wrapper.find(Feeling).length).toBe(ALL_FEELINGS.length)
  })
});
