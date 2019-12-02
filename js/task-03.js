'use strict';
import { users } from './task-object.js';

// const getUsersWithGender = (users, gender) => users.map(() => users.filter(item => item.gender === gender);

const getUsersWithGender = (users, gender) =>
  users.filter(item => {
    if (item.gender === gender) {
      return users.push(item.name);
    }
  });

console.log(getUsersWithGender(users, 'male'));
