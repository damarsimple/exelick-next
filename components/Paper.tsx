import React from "react";

export default function Paper(props: { name: string; children: JSX.Element }) {
  return (
    <div className="flex flex-col shadow rounded">
      {props.name != null && (
        <div className="bg-gray-50 p-4">
          <h2 className="text-lg font-semibold">{props.name}</h2>
        </div>
      )}
      <div className="p-4">{props.children}</div>
    </div>
  );
}
