import { TimeRange } from "../types";

export type TimePickerProps = {
  value: TimeRange;
  onChange(newValue: TimeRange): void;
};

function getTimeRangeLabel(range: TimeRange): string {
  switch (range) {
    case TimeRange.Last5Minutes:
      return "Last 5 minutes";
    case TimeRange.LastHour:
      return "Last hour";
    case TimeRange.Last24Hours:
      return "Last 24 hours";
    case TimeRange.Last7Days:
      return "Last 7 days";
  }
}

export default function TimePicker({ value, onChange }: TimePickerProps) {
  function handleChange(ev: React.ChangeEvent<HTMLSelectElement>) {
    onChange(ev.target.value as TimeRange);
  }
  return (
    <select value={value} onChange={handleChange}>
      {Object.values(TimeRange).map((range) => (
        <option value={range} key={range}>
          {getTimeRangeLabel(range)}
        </option>
      ))}
    </select>
  );
}
