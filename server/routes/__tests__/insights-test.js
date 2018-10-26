import { Insights, getInsights, postInsights } from '../insights'

describe('Insights', () => {
  it('should return an object', () => {
    expect(typeof Insights()).toBe('object')
  })
  it('should return an array of insights when all()', () => {
    const instance = Insights()
    expect(Array.isArray(instance.all())).toBe(true)
  })
  it('should add an insight when add()', () => {
    const instance = Insights()
    instance.add({ test: 123 })
    expect(instance.all().length).toBe(1)
    expect(instance.all()[0].test).toBe(123)
  })
})

describe('getInsights', () => {
  it('should call res.send with insights.all()', () => {
    const instance = {
      all: jest.fn(() => ([]))
    }
    const spy = { send: jest.fn(r => expect(r).toEqual([])) }
    getInsights(instance)(null, spy)
    expect(spy.send).toHaveBeenCalled()
    expect(instance.all).toHaveBeenCalled()
  })
})

describe('postInsights', () => {
  it('should call res.send with insights.all()', () => {
    const instance = {
      add: jest.fn(() => ([]))
    }
    const spy = { send: jest.fn() }
    postInsights(instance)({ body: { test: 123 } }, spy)
    expect(spy.send).toHaveBeenCalled()
    expect(instance.add).toHaveBeenCalled()
  })
})