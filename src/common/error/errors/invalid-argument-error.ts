import StandardError from './standard-error';

export default class InvalidArgumentError extends StandardError {
    constructor(message?: string) {
        super(message || 'Invalid arguments have been provided.');

        this.type = 'invalid_argument';
    }
}
