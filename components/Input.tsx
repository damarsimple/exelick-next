import React from "react";

interface IProps {
  label?: string;
  name?: string;
  type?: string;
  defaultValue?: string;
  defaultChecked?: boolean;
  required?: boolean;
  onTextChange?: (e: string | number) => void;
  onCheckChange?: (e: boolean) => void;
}

export default function Input({
  label,
  name,
  type,
  onTextChange,
  onCheckChange,
  defaultValue,
  defaultChecked,
  required,
}: IProps) {
  if (type == "hidden")
    return <input type="hidden" name={name} defaultValue={defaultValue} />;

  return (
    <div className="grid grid-cols-12  gap-2 my-4">
      <label className="col-span-4 input-label text-lg mb-2 font-semibold italic">
        {label}
      </label>
      {(() => {
        switch (type) {
          case "checkbox":
            return (
              <input
                type="checkbox"
                name={name}
                defaultChecked={defaultChecked ?? false}
                required={required}
                className="col-span-8 input-field inline-flex items-baseline border-none shadow-md bg-white placeholder-blue w-full p-4 no-outline text-dusty-blue-darker"
                onChange={(x) => {
                  onCheckChange && onCheckChange(x.target.checked);
                }}
              />
            );
          case "number":
            return (
              <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                required={required}
                className="col-span-8 input-field inline-flex items-baseline border-none shadow-md bg-white placeholder-blue w-full p-4 no-outline text-dusty-blue-darker"
                onChange={(x) => {
                  onTextChange && onTextChange(parseInt(x.target.value));
                }}
              />
            );
          case "text":
          default:
            return (
              <input
                className="col-span-8 input-field inline-flex items-baseline border-none shadow-md bg-white placeholder-blue w-full p-4 no-outline text-dusty-blue-darker"
                type={type ?? "text"}
                name={name}
                defaultValue={defaultValue}
                required={required}
                onChange={(x) => {
                  onTextChange && onTextChange(x.target.value);
                }}
              />
            );
        }
      })()}
    </div>
  );
}
