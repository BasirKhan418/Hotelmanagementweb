import React from 'react'

const Faq = () => {
  return (
      <div className="container my-24 mx-auto md:px-6">
  <section className="mb-32">
    <div className="container mx-auto text-center lg:text-left xl:px-32">
      <div className="flex grid items-center lg:grid-cols-2">
        <div className="mb-6 lg:mb-0">
          <div
            className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
            <h3 className="mb-3 text-2xl font-bold">
              We know how valuable your time is
            </h3>
            <h5 className="mb-12 text-lg font-bold text-primary dark:text-primary-400 lg:mb-10 xl:mb-12">
              Let us answer your questions
            </h5>

            <p className="mb-4 font-bold">
            Why we choose you ?
            </p>
            <p className="mb-6 text-gray-500 dark:text-neutral-300">
            Our lofts are great for Vacationers, Corporates, and Families on vacation. To meet the different stay prerequisites we have different arrangements of condos, rooms, and suites at our properties. Exemplary spaces for single spending plan voyagers, Twofold inhabitance winsome spaces for couples and 1BHK/2BHK Loft and Leader suites for the extravagance chasing or family explorer.
            </p>

            <p className="mb-4 font-bold">
              Tell me about your amenities?
            </p>
            <p className="mb-6 text-gray-500 dark:text-neutral-300">
           We provide top class amenities. Flat screen Cable Dish TV, Free High-Speed Wi-Fi, books, newspapers, and magazines are available as well. An Electronic Safe, Mini- Fridge and central kitchen for ordering food made by our expert chefs
            </p>

            <p className="mb-4 font-bold">
              Tell me about your security and other features ?
            </p>
            <p className="text-gray-500 dark:text-neutral-300">
            24/7 CCTV, Security Guards, and Power backup. Guest lounge, mini-library, and table tennis as well. Make use of our Economical In-House GPS enabled Cab-Service to travel in Hyderabad and avail tailor made tariff plans and packages.
            </p>
          </div>
        </div>

        <div>
          <img src="/faq.gif"
            className="w-full rounded-lg shadow-lg dark:shadow-black/20 h-[80vh] object-cover bg-none" alt="" />
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Faq
