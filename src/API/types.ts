export enum LogLevel {
  Debug = "DEBUG",
  Info = "INFO",
  Warning = "WARNING",
  Error = "ERROR",
}

export interface LogLine {
  /**
   * Timestamp of the log, in seconds since the UNIX epoch
   */
  ts: number;
  /**
   * Message being logged
   */
  msg: string;
  /**
   * Level of the log
   */
  level: LogLevel;
}
