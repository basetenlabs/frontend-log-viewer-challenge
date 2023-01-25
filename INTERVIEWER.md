## Follow-on requirements

- Some logs come from a particular replica. How would you allow the user to both:
  - View logs from one replica
  - View logs from all replicas at one and see which log came from which replica
- Code reuse
  - API used for both worklet and model logs. How to reuse data model logic with different log presentation (e.g. parse message as JSON)
  - Goal: Component, custom hook design
  - How could you write unit tests for the code fetching logic?
