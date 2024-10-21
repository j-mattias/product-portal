type TInput = "text" | "number";
type TValue = string | number | string[];

interface IFormInputProps {
  labelText: string;
  type: TInput;
  id: string;
  name: string;
  placeholder?: string;
  defaultValue: TValue;
  min?: number;
  max?: number;
  step?: number;
  numInputs?: number;
}

export function FormInput({
  labelText,
  type,
  id,
  name,
  placeholder,
  defaultValue,
  min,
  max,
  step,
  numInputs = 1,
}: IFormInputProps) {
  const isArray = Array.isArray(defaultValue);
  const arr = Array.from({ length: numInputs }, (_, i) => i);

  return (
    <label className="input-label" htmlFor={id}>
      <span className="input-label__text">{labelText}</span>
      {arr.map((_, index) => (
        <input
          type={type}
          id={index === 0 ? id : ""}
          name={name}
          placeholder={placeholder}
          defaultValue={isArray ? (defaultValue as string[])[index] : defaultValue}
          min={min}
          max={max}
          step={step}
          key={index}
        />
      ))}
    </label>
  );
}
