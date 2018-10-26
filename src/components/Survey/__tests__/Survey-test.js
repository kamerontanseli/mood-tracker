import 'isomorphic-fetch'
import React from "react";
import { shallow, mount } from 'enzyme';
import MoodStep from "../MoodStep";
import FeelingsStep from "../FeelingsStep";
import CommentStep from "../CommentStep";
import DoneStep from "../DoneStep";
import Survey from "..";

describe('setData', () => {
  it('should set a key inside state.data', () => {
    const wrapper = shallow(<Survey />)
    wrapper.instance().setData('test', 123)
    wrapper.update()
    expect(wrapper.state('data').test).toBe(123)
  })
})

describe('setComment', () => {
  it('should set state.data.comment', () => {
    const wrapper = shallow(<Survey />)
    wrapper.instance().setComment({ currentTarget: { value: 'hello world' } })
    wrapper.update()
    expect(wrapper.state('data').comment).toBe('hello world')
  })
})

describe('setMood', () => {
  it('should set state.data.mood', () => {
    const wrapper = shallow(<Survey />)
    wrapper.instance().setMood({ currentTarget: { value: 3 } })
    wrapper.update()
    expect(wrapper.state('data').mood).toBe(3)
  })
})

describe('setFeelings', () => {
  it('should set add feelings to state.data.feelings if checked', () => {
    const wrapper = shallow(<Survey />)
    const event = {
      currentTarget: {
        name: 'a',
        checked: true
      }
    }
    wrapper.instance().setFeelings(event)
    wrapper.update()
    expect(wrapper.state('data').feelings).toEqual(['a'])
  })
  it('should set remove feeling from state.data.feelings if not checked', () => {
    const wrapper = shallow(<Survey />)
    wrapper.instance().setData('feelings', ['a', 'b'])
    wrapper.update()
    const event = {
      currentTarget: {
        name: 'a',
        checked: false
      }
    }
    wrapper.instance().setFeelings(event)
    wrapper.update()
    expect(wrapper.state('data').feelings).toEqual(['b'])
  })
})

describe('nextStep', () => {
  it('should increment state.step', () => {
    const wrapper = shallow(<Survey />)
    const value = wrapper.state('step')
    wrapper.instance().nextStep()
    wrapper.update()
    expect(wrapper.state('step')).toBe(value + 1)
  })
})

describe('prevStep', () => {
  it('should decrement state.step', () => {
    const wrapper = shallow(<Survey />)
    const value = wrapper.state('step')
    wrapper.instance().prevStep()
    wrapper.update()
    expect(wrapper.state('step')).toBe(value - 1)
  })
})

describe('submission', () => {
  it('should return a promise that calls nextStep() when complete', async () => {
    const api = jest.spyOn(window, 'fetch').mockImplementation(() => new Promise(r => r()))
    const wrapper = shallow(<Survey />)
    const nextStep = jest.spyOn(wrapper.instance(), 'nextStep')
    await wrapper.instance().submission()
    expect(api).toHaveBeenCalled()
    expect(nextStep).toHaveBeenCalled()
    api.mockRestore()
  })
  it('should return a promise that calls console.error when complete', async () => {
    const api = jest.spyOn(window, 'fetch').mockImplementation(() => new Promise((r, x) => x()))
    const wrapper = shallow(<Survey />)
    const error = jest.spyOn(console, 'error').mockImplementation(() => {})
    await wrapper.instance().submission()
    expect(api).toHaveBeenCalled()
    expect(error).toHaveBeenCalled()
    api.mockRestore()
    error.mockRestore()
  })
})

describe('render', () => {
  it('should render MoodStep when state.step is 0', () => {
    const wrapper = shallow(<Survey />)
    wrapper.instance().setState({ step: 0 })
    wrapper.update()
    expect(wrapper.find(MoodStep).exists()).toBe(true)
  })
  it('should render FeelingsStep when state.step is 1', () => {
    const wrapper = shallow(<Survey />)
    wrapper.instance().setState({ step: 1 })
    wrapper.update()
    expect(wrapper.find(FeelingsStep).exists()).toBe(true)
  })
  it('should render CommentStep when state.step is 2', () => {
    const wrapper = shallow(<Survey />)
    wrapper.instance().setState({ step: 2 })
    wrapper.update()
    expect(wrapper.find(CommentStep).exists()).toBe(true)
  })
  it('should render DoneStep when state.step is 3', () => {
    const wrapper = shallow(<Survey />)
    wrapper.instance().setState({ step: 3 })
    wrapper.update()
    expect(wrapper.find(DoneStep).exists()).toBe(true)
  })
})