'use strict';
import { users } from './task-object.js';

const getUsersName = users => users.map(item => item.name);

console.log(getUsersName(users));
