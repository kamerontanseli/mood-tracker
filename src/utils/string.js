export const pad = n => `${n < 10 && n > 0 ? "0" : ""}${n}`;

export const getMood = level => {
  switch (level) {
    case 1:
      return 'Terrible'
    case 2:
      return 'Bad'
    case 3:
      return 'Negative'
    case 4:
      return 'Neutral'
    case 5:
      return 'Good'
    case 6:
      return 'Great'
    default:
      return 'Excellent'
  }
}