'use strict';
import { users } from './task-object.js';

const getUsersWithAge = (users, min, max) => users.filter(({ age }) => age <= max && age >= min);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
