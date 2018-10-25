import { pad, getMood } from "../string";

describe("pad", () => {
  it('should add "0" to a number if its below 10 and greater than 0', () => {
    for (let i = -10; i < 20; i++) {
      expect(pad(i)).toBe(i > 0 && i < 10 ? `0${i}` : `${i}`)
    }
  })  
});

describe('getMood', () => {
  it('should return the correct Mood', () => {
    const moods = [
      'Terrible',
      'Bad',
      'Negative',
      'Neutral',
      'Good',
      'Great',
      'Excellent'
    ]
    moods.forEach((mood, index) => {
      expect(getMood(index + 1)).toBe(mood)
    })
  })
})