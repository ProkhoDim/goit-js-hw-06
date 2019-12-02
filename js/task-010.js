'use strict';
import { users } from './task-object.js';

// const getSortedUniqueSkills = users => {
//   const skillsArray = users.reduce((acc, item) => [...acc, ...item.skills], []);
//   skillsArray.sort();
//   console.log(skillsArray);
//   return skillsArray.reduce((acc, item) => (!acc.includes(item) ? [...acc, item] : acc), []);
// };

const getSortedUniqueSkills = users =>
  users
    .reduce((acc, item) => [...acc, ...item.skills], [])
    .sort()
    .reduce((acc, item) => (!acc.includes(item) ? [...acc, item] : acc), []);

// const getSortedUniqueSkills = users =>
//   users
//     .map(({ skills }) => skills)
//     .flat()
//     .filter((item, index, arr) => arr.indexOf(item) === index)
//     .sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
