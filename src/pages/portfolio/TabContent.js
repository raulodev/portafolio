import Image from "next/image";

export function All() {
  return (
    <>
      <div className="grid gap-4">
        <Web />
        <Script />
      </div>
    </>
  );
}
export function Web() {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="relative overflow-hidden transition-shadow rounded shadow-md h-52 hover:shadow-lg">
            <Image
              className="object-cover w-full h-full"
              src="/proyectos_images/portafolio.png"
              alt=""
              width={0}
              height={0}
            />
            <div className="absolute inset-0 flex items-center justify-center transition-all opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-70 ">
              <a
                className="flex"
                href="https://github.com/raulodev/portafolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                <p className="text-lg font-bold text-white">Portafolio</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function Script() {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="relative overflow-hidden transition-shadow rounded shadow-md h-52 hover:shadow-lg">
            <Image
              className="object-cover w-full h-full"
              src="/proyectos_images/translate.jpg"
              alt=""
              width={0}
              height={0}
            />
            <div className="absolute inset-0 flex items-center justify-center transition-all opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-70 ">
              <a
                className="flex"
                href="https://github.com/raulodev/translatebot-tg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                <p className="text-lg font-bold text-white">Translate</p>
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden transition-shadow rounded shadow-md h-52 hover:shadow-lg">
            <Image
              className="object-cover w-full h-full"
              src="/proyectos_images/hunti.jpg"
              alt=""
              width={0}
              height={0}
            />
            <div className="absolute inset-0 flex items-center justify-center transition-all opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-70 ">
              <a
                className="flex"
                href="https://github.com/raulodev/hunti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                <p className="text-lg font-bold text-white">Hunti</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
