'use strict';

import ErrorHandlingMiddleware from './ErrorHandlingMiddleware.js';
import AuthMiddleware from './AuthMiddleware.js';
import CheckRoleMiddleware from './CheckRoleMiddleware.js';


export default {
    ErrorHandlingMiddleware,
    AuthMiddleware,
    CheckRoleMiddleware
};
