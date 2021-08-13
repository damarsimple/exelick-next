import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User } from "../types/type";

export default function UserCard(e: User) {
  return (
    <div className="flex flex-col gap-2 text-center shadow rounded p-4">
      <Image
        className="rounded-full h-24 w-24"
        src={`https://picsum.photos/seed/${e.id}/200/300`}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <h1 className="text-md sm:text-lg font-semibold truncate">{e.name}</h1>
      <p className="text-sm sm:text-md truncate">@{e.username}</p>
      <p className="text-sm truncate">{e.tag}</p>
      <Link href={"/" + e.username}>
        <a>
          <button className="bg-gray-200 hover:bg-gray-300 rounded font-bold p-2 w-full text-dark uppercase">
            Donasi
          </button>
        </a>
      </Link>
    </div>
  );
}

export function UserCardSkeleton() {
  return (
    <div className="flex flex-col gap-2 text-center shadow rounded p-4">
      <div className="flex justify-center">
        <div className="rounded-full h-36 w-36 animate-pulse bg-gray-200" />
      </div>
      <h1 className="bg-gray-100 rounded animate-pulse"></h1>
      <p className="h-6 bg-gray-100 rounded animate-pulse"></p>
      <p className="h-6 bg-gray-100 rounded animate-pulse"></p>
      <Link href="/username">
        <a>
          <button
            className="bg-gray-100 animate-pulse w-full rounded h-8"
            disabled
          ></button>
        </a>
      </Link>
    </div>
  );
}
