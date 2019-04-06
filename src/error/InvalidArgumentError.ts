/**
 * Indicates that a bad argument was passed to a function
 */
export class InvalidArgumentError {
  /** Reason why the error occurred */
  private reason: string;

  constructor(reason: string) {
    this.reason = reason;
  }
}
