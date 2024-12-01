const About = () => {
  return (
    <>

      <div
        id="about"
        className="about scroll-smooth h-auto md:h-[40vw] flex flex-col-reverse md:flex-row items-center justify-between"
      >
        {/* Left Section */}
        <div className="px-6 sm:px-10 md:px-16 flex flex-col justify-center w-full md:w-[56%] h-auto md:h-full">
          <h3
            className="text-base md:text-lg mb-2 text-center md:text-left"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Read Our Story
          </h3>
          <h2 className="text-xl text-[#b18446] sm:text-2xl lg:text-3xl font-bold mb-4 text-center md:text-left">
            We've Been Making The Delicious Foods Since 1999
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed text-center md:text-left">
            Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae
            malesuada. Proin scelerisque risus et ipsum semper molestie sed in nisi.
            Ut rhoncus congue lectus, rhoncus venenatis leo malesuada id.
            <br />
            <br />
            Sed elementum vel felis sed scelerisque. In arcu diam, sollicitudin eu
            nibh ac, posuere tristique magna. You can use this template for your cafe
            or restaurant website. Please tell your friends about templatemo. Thank
            you.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[44%] flex items-center justify-center h-60 md:h-full">
          <img
            src="/img/about-image.jpg"
            alt="About"
            className="object-cover w-full h-full rounded"
          />
        </div>
      </div>

    </>
  )
}

export default About
