'use strict';
import { users } from './task-object.js';

// const getUsersWithGender = (users, gender) => users.map(() => users.filter(item => item.gender === gender);

const getUsersWithGender = (users, gender) =>
  users.reduce((acc, item) => (item.gender === gender ? [...acc, item.name] : acc), []);

console.log(getUsersWithGender(users, 'male'));
