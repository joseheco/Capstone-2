/**
 * @jest-environment jsdom
 */

const counterComment = require('./__mocks__/counterComment.js');

test('comment should be = 6', () => {
  const div = document.createElement('p');
  div.innerHTML = `
  <p class="comments"></p>
  <p class="comments"></p>
  <p class="comments"></p>
  <p class="comments"></p>
  <p class="comments"></p>
  <p class="comments"></p>
  `;

  document.body.appendChild(div);

  const n = counterComment();

  expect(n).toEqual(6);
});
