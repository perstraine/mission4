const removePunct = require('./removepunct.js');

const testCases = [
  "hello world",
  "hello%world",
  "!hello world",
  ";hello?world!",
  "hello;world",
  "hello world?"
];
const expected = 'hello world'


describe("Punctuation tests", () => {
  for (let i = 0; i < testCases.length; i++) {
    it(`removes puncts from ${testCases[i]}`, () => {
      //Arrange
      const input = testCases[i];

      //Act
      const actual = removePunct(input)

      //Assert
      expect(actual).toBe(expected);
    });
  }
});

// describe("Punctuation tests", () => {
//   for (let i = 0; i < testCases.length; i++) {
//     test(`removes puncts from ${testCases[i]}`, () => {
//       expect(removePunct(testCases[i])).toBe(expected);
//     });
//   }
// });
