export class DatabaseError extends Error {
  constructor(message: string) {
    super(`[DBERROR]: ${message}`);

    Object.setPrototypeOf(this, new.target.prototype);
  }
}