export class NotImplementedError extends Error {
  constructor(message) {
    super(message);

    this.message = message;
    this.name = 'NotImplementedError';
  }
}

export class HttpError extends Error {
  constructor(response, status) {
    super(response.message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(response).stack;
    }
  }
}
