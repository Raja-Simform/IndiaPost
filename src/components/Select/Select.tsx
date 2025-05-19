import type { SelectProps } from "./SelectType";



export default function Select({
  name,
  value,
  options,
  onChange,
  className = "",
}: SelectProps) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`border-2 p-2 ${className}`}
    >
      {options.map(({ label, value: optionValue }) => (
        <option key={optionValue} value={optionValue}>
          {label}
        </option>
      ))}
    </select>
  );
}
