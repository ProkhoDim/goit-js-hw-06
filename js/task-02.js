'use strict';
import { users } from './task-object.js';

const getUsersWithEyeColor = (users, color) => users.filter(item => item.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));
