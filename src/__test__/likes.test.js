/**
 * @jest-environment jsdom
 */

const homeCounter = require('./__mocks__/homeCounter');


test('n should equal 4', () => {
   const section = document.createElement('section');
   section.innerHTML = `
   <div class="card"></div>
   <div class="card"></div>
   <div class="card"></div>
   <div class="card"></div>
   `

   document.body.appendChild(section)

   const n = homeCounter();

   expect(n).toEqual(4)


})