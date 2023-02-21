# Front-end log viewer

Your job is to implement a React web app that allows the user to view a stream of logs fetched from an API, [`fetchLogs()`](./src/API/fetchLogs.ts). The log viewer should work just like a terminal window displaying output from a command line program.

## Basic requirements

- Time range: Last 5 minutes, last hour, last 24 hours, last 7 days
- Implement tailing, showing new logs as they come in, just like a terminal
- For each log line, show the timestamp and log message

To help get you started, we have provided a very simple `<TimePicker/>` component you may use to switch between time ranges.

## Other notes

Feel free to:
- Use online resources to unblock yourself
- Install low-level utilities libraries or generic UI frameworks. Just nothing too domain-specific

## Getting started

Ensure you have the latest version of Node.js (v18) and npm (v9) installed.

Install dependencies:

```
npm install
```

Start web server:

```
npm start
```
