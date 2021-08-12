import Link from "next/link";
import AppContainer from "../components/AppContainer";
import Image from "next/image";

export default function Home() {
  return (
    <AppContainer>
      <div className="flex h-screen">
        <div className="m-auto text-center container mx-auto px-4">
          <h1 className="font-semibold text-1xl mt-10">Exelick Gayming UwU</h1>
          <p className="text-lg">
            Platform yang memudahkan fans berinteraksi dengan kreator
          </p>
          <h2 className="font-semibold text-xl">
            Kreator yang sudah bergabung
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-4 gap-2">
            {[...Array(20)].map((e, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 text-center shadow rounded p-4"
              >
                <Image
                  className="rounded-full h-24 w-24 "
                  src="https://trakteer.id/storage/images/avatar/ava-kqwK2sVxMEXfACgq0luplMIrcWAm9eGA1617518306.jpg"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
                <h1 className="text-lg font-semibold">Exelick UwU</h1>
                <p className="text-md">@TadaAce</p>
                <p className="text-md">Virtual Youtuber</p>
                <Link href="/username">
                  <a>
                    <button className="bg-gray-200 hover:bg-gray-300 rounded font-bold p-2 w-full">
                      Donasi
                    </button>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppContainer>
  );
}
