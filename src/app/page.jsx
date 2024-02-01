import Image from "next/image";
import { Roboto, Montserrat } from "next/font/google";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div className="bg-yellow-300 px-4 mb-40 py-3 text-gray-800">
        <p className="text-center text-sm font-medium">
          Love Retro Games?
          <a href="#" className="inline-block underline">
            Check out this new course!
          </a>
        </p>
      </div>

      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="mt-20 flex justify-end p-6 lg:px-8 lg:mr-20 md:mr-20 sm:mr-10"
          aria-label="Global"
        >
          <div className="flex items-center gap-8">
            <a href="#" className=" font-semibold leading-6 text-gray-200">
              Product
            </a>
            <a
              href="#"
              className="font-semibold font-m leading-6 text-gray-200"
            >
              Features
            </a>
            <a href="#" className=" font-semibold leading-6 text-gray-200">
              Marketplace
            </a>
          </div>
        </nav>
      </header>

      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="relative">
                    <iframe
                      className="object-cover border-spacing-3  w-full object-center mx-auto rounded-lg shadow-2xl"
                      title="Chroma Squares³ (Use J + K Keys)"
                      frameborder="0"
                      allowfullscreen
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      xr-spatial-tracking
                      execution-while-out-of-viewport
                      execution-while-not-rendered
                      web-share
                      src="https://sketchfab.com/models/31967e23bce548a19f3b6acf0be42747/embed?autostart=1&camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <h1
                className={`mb-8 leading-relaxed text-4xl font-bold text-yellow-300 md:text-7xl ${montserrat.className} lg:text-5xl`}
              >
                Game Library Fit for Legends!
              </h1>

              <p className=" text-base leading-relaxed mb-2 text-left text-gray-200">
                🎮 Introducing the Atari 7800 - Where Retro Meets Revival! 🕹️.
              </p>
              <p className="text-gray-200 mb-2">
                🚀 Magnavox Odyssey - Where Gaming Begins! 🎮
              </p>
              <p className="text-gray-200">🌐 Connect with the Community!</p>

              <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <a
                    className="group relative inline-block focus:outline-none focus:ring"
                    href="/download"
                  >
                    <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

                    <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                      Download
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1
        className={`mb-8 leading-relaxed text-5xl font-bold text-yellow-300 md:text-6x1 text-center ${montserrat.className} text-yellow-300 `}
      >
        More Games
      </h1>
      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <iframe
                      className="object-cover object-center w-full mx-auto rounded-lg shadow-2xl"
                      title="Magic Cube II"
                      frameborder="0"
                      allowfullscreen
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      xr-spatial-tracking
                      execution-while-out-of-viewport
                      execution-while-not-rendered
                      web-share
                      src="https://curious-tough-scissor.glitch.me/"
                    >
                      {" "}
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-wrap items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <dl className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <dt className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-gray-950 rounded-full bg-yellow-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      />
                    </svg>
                  </dt>
                  <dd className="flex-grow">
                    <p className="text-base leading-relaxed text-gray-200">
                      Immerse yourself in the pixelated wonders of the past
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center mt-6 font-semibold text-yellow-300 md:mb-2 lg:mb-0 hover:text-neutral-600"
                      title="read more"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                      </svg>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5  text-gray-950 rounded-full bg-yellow-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                      />
                    </svg>
                  </dt>
                  <dd className="flex-grow">
                    <p className="text-base leading-relaxed text-gray-200">
                      {" "}
                      Relive the magic of iconic titles that defined generations{" "}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center mt-6 font-semibold text-yellow-300 md:mb-2 lg:mb-0 hover:text-neutral-600"
                      title="read more"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                      </svg>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5  text-gray-950 rounded-full bg-yellow-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </dt>
                  <dd className="flex-grow">
                    <p className="text-base leading-relaxed text-gray-200">
                      Join us in celebrating the timeless joy of retro games!{" "}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center mt-6 font-semibold text-yellow-300 md:mb-2 lg:mb-0 hover:text-neutral-600"
                      title="read more"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                      </svg>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5  text-gray-950 rounded-full bg-yellow-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(72 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(144 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(216 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(288 12 12)"
                      ></line>
                    </svg>
                  </dt>
                  <dd className="flex-grow">
                    <p className="text-base leading-relaxed text-gray-200">
                      {" "}
                      Ready to rewind to the golden era of pixels and 8-bit
                      melodies?{" "}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center mt-6 font-semibold text-yellow-300 md:mb-2 lg:mb-0 hover:text-neutral-600"
                      title="read more"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                      </svg>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <h1
        className={`mb-8 leading-relaxed text-5xl font-bold text-yellow-300 md:text-6x1 text-center ${montserrat.className} text-yellow-300 `}
      >
        Collections
      </h1>

      <section className="py-6 dark:bg-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <iframe
              title="WIP - Northern lights"
              frameborder="0"
              allowfullscreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/171f444e968c462dab88c0d0aae691e7/embed?autostart=1&camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark"
              className="object-cover w-full"
            ></iframe>
            <iframe
              title="Anomalistic Form VI - Fruit Jelly Crunchie"
              frameborder="0"
              allowfullscreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/b6d23690eea8464f8a49b14dbb1e099e/embed?autostart=1&camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark"
              className="object-cover w-full"
            ></iframe>
            <iframe
              title="Magic Cube II"
              frameborder="0"
              allowfullscreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/9000fb7d286648b1a9dd5ebeb915a952/embed?autostart=1&camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark"
              className="object-cover w-full"
            ></iframe>
            <iframe
              title="New Year"
              frameborder="0"
              allowfullscreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/7edd101c3a5b4ecb8a3c53564be8d978/embed?autostart=1&camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark"
              className="object-cover w-full"
            ></iframe>
          </div>
        </div>
      </section>
      <footer class="bg-black" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>

  <div class="px-4 py-12 mx-auto bg-black max-w-7xl sm:px-6 lg:px-16">
    <div class="flex flex-wrap items-baseline lg:justify-center">
      <span class="mt-2 text-gray-200">
        Made with 👾 2024
        <a href="https://github.com/MigVarona" class="mx-2  hover:text-yellow-300" rel="noopener noreferrer">@migvarona</a>
      </span>
    </div>
  </div>
</footer>


     
    </div>
  );
}
