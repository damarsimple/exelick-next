import { DocumentNode, useMutation } from "@apollo/client";
import { get } from "lodash";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Product } from "../types/type";
import Input from "./Input";

interface InputMap<T> {
  name: keyof T;
  type?: string;
  label: string;
  required?: boolean;
}

interface FormProp<T, N> {
  attributes: InputMap<T>[];
  mutationQuery: DocumentNode;
  beforeSubmit?: () => void;
  afterSubmit?: (e: T) => void;
  defaultValueMap?: T;
  fields: keyof N;
}

export default function Form<T, N>({
  attributes,
  mutationQuery,
  defaultValueMap,
  beforeSubmit,
  afterSubmit,
  fields,
}: FormProp<T, N>) {
  const [
    mutateFunction,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation<N>(mutationQuery, {});

  const [inputMap, setInputMap] = useState<T | object>(defaultValueMap ?? {});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (beforeSubmit) {
      try {
        beforeSubmit();
      } catch (error) {
        toast.error("Error: " + error);
        return;
      }
    }

    const requireds = attributes.filter((e) => e.required).map((e) => e.name);

    for (const x of requireds) {
      //@ts-ignore
      if (!inputMap[x]) {
        toast.error("Anda belum mengisi " + x);
        return;
      }
    }

    mutateFunction({ variables: { ...defaultValueMap, ...inputMap } }).then(
      (e) => {
        afterSubmit && e.data && afterSubmit(e.data[fields] as any);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {attributes.map((e) => (
        <Input
          key={e.name as string}
          defaultValue={defaultValueMap && get(defaultValueMap, e.name)}
          defaultChecked={defaultValueMap && get(defaultValueMap, e.name)}
          label={e.label ?? e.name}
          name={e.name as string}
          type={e.type}
          onTextChange={(x) => setInputMap({ ...inputMap, [e.name]: x })}
          onCheckChange={(x) => setInputMap({ ...inputMap, [e.name]: x })}
          required={e.required}
        />
      ))}
      <button
        disabled={mutationLoading}
        onClick={handleSubmit}
        className="text-lg text-white capitalize font-semibold rounded bg-blue-600 hover:bg-blue-900 p-2 w-full my-4"
      >
        SUBMIT
      </button>
    </form>
  );
}
