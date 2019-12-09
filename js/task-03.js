'use strict';
import { users } from './task-object.js';

// const getUsersWithGender = (users, gender) => users.map(() => users.filter(item => item.gender === gender);

const getUsersWithGender = (users, gender) => {
  const usrWithGender = [];
  users.filter(item => {
    if (item.gender === gender) {
      usrWithGender.push(item.name);
    }
  });
  return usrWithGender;
};

console.log(getUsersWithGender(users, 'male'));
