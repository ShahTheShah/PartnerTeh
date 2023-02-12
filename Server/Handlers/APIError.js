'use strict';

class APIError extends Error {
    constructor(status, message) {
        super();
        this.status  = status;
        this.message = message;
    };

    static badRequest  = message => new APIError(404, message);
    static internal    = message => new APIError(500, message);
    static forbidden   = message => new APIError(403, message);
};

export default APIError;
