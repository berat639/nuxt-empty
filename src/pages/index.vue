<template>
  <main class="w-full">
    <!-- start header -->
    <header class="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
      <div
        class="hidden md:flex justify-between items-center py-2 border-b text-sm py-3"
        style="border-color: rgba(255,255,255,.25)"
      >
        <div class="">
          <ul class="flex text-white">
            <li>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                  <path
                    d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"
                  />
                </svg>

                <span class="ml-2">1985 Kerry Way, Whittier, CA, USA</span>
              </div>
            </li>
            <li class="ml-6">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                  <path
                    d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z"
                  />
                </svg>

                <span class="ml-2">+1 562-789-1935</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="">
          <ul class="flex justify-end text-white">
            <li>
              <a href="#" class="px-4 py-2 mr-2 bg-red-700 text-white rounded-2xl inline-block font-semibold">Keep
                This</a>
            </li>
            <li>
              <a href="#" class="px-4 py-2 bg-red-700 text-white rounded-2xl inline-block font-semibold">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-between py-6">
        <Navbar />
      </div>
    </header>
    <!-- end header -->

    <!-- start hero -->
    <div class="bg-gray-100">
      <section
        class="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
  items-center min-h-screen"
      >
        <div class="h-full absolute top-0 left-0 right-0 z-0">
          <img
            src="https://trello.com/1/cards/6419d45c1db3bb42879b9595/attachments/641b7a85a9a9c692b8b7392a/previews/641b7a85a9a9c692b8b73979/download/334727259_543079174629539_7373861307719555361_n.jpg"
            alt="" class="w-full h-full object-cover opacity-60"
          >
        </div>

        <div class="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
          <div>
            <h1 class="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              We provide security for
              digital Denmark
            </h1>
            <p class="text-blue-100 text-xl md:text-2xl leading-snug mt-4">
              As a global cybersecurity firm, we have made
              it our mission to provide
              unparalleled security solutions that
              protect against ever-evolving threats.
            </p>
            <a href="#" class="px-4 py-2 bg-red-700 text-white rounded-2xl mt-5 inline-block font-semibold">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
    <!-- end hero -->

    <!-- start testimonials -->
    <section class="relative bg-gray-100 px-4 sm:px-8 lg:px-8 xl:px-40 2xl:px-64 py-16 lg:py-32">
      <div
        class="flex lg:flex-row"
        style="
  background: url('https://simplemaps.com/static/demos/resources/svg-library/svgs/world.svg');background-repeat: no-repeat; background-size: 100% 100%;"
      >
        <div class="w-full">
          <div class="w-full lg:px-8 flex-row">
            <h2 class="text-3xl leading-tight font-bold mt-4">
              LOCATIONS
            </h2>
            <p class="mt-2 leading-relaxed">
              BAO is a premier global cybersecurity firm dedicated to providing
              unparalleled security services to clients worldwide.
            </p>
          </div>
          <div class="md:flex mt-12 md:-mx-4">
            <div class="md:w-1/2 xl:w-1/2 mr-6">
              <div class="md:flex rounded overflow-hidden shadow-lg w-full bg-gray-300">
                <div class="md:flex-shrink-0">
                  <img
                    class="rounded-lg md:w-56"
                    src="https://studyindenmark.dk/why-denmark/quality-of-life-1/about-denmark/image_large"
                    alt="Woman paying for a purchase"
                  >
                </div>
                <div class="mt-4 md:mt-0 md:ml-6">
                  <a href="#" class="block mt-1 text-lg text-gray-700 hover:underline font-bold">Denmark</a>

                  <p class="mt-2 text-gray-600">
                    Denmark – Copenhagen.
                  </p>
                  <div class="pt-4 pb-2">
                    <p class="mt-2 text-gray-600">
                      05076652367
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="md:w-1/2 xl:w-1/2 mr-6">
              <div class="md:flex rounded overflow-hidden shadow-lg w-full bg-gray-300">
                <div class="md:flex-shrink-0">
                  <img
                    class="rounded-lg md:w-56"
                    src="https://studyindenmark.dk/why-denmark/quality-of-life-1/about-denmark/image_large"
                    alt="Woman paying for a purchase"
                  >
                </div>
                <div class="mt-4 md:mt-0 md:ml-6">
                  <a href="#" class="block mt-1 text-lg text-gray-700 hover:underline font-bold">Denmark</a>

                  <p class="mt-2 text-gray-600">
                    Denmark – Copenhagen.
                  </p>
                  <div class="pt-4 pb-2">
                    <p class="mt-2 text-gray-600">
                      05076652367
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-10 ...">
            <a
              class="inline-block font-semibold px-4 py-2 text-red-500 bg-transparent md:text-red-500 border border-red-500 rounded-2xl"
            >More
              Contact

              <div class="inline-block center" style="width: 13px;">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
                  <path
                    fill="#ff0000"
                    d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                  />
                </svg>

              </div> </a>
          </div>
          <!-- <div class="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0">
        <div class="bg-gray-400 w-full h-72 rounded-lg"></div>

        <p class="italic text-sm mt-2 text-center">Aenean ante nisi, gravida non mattis semper.</p>
      </div> -->
        </div>
      </div>
    </section>
    <!-- end testimonials -->
    <!-- start about -->

    <!-- end about -->

    <!-- start blog -->
    <section class="relative bg-red-700 px-4 sm:px-8 lg:px-16 xl:px-16 2xl:px-16 py-32 sm:mb-1">
      <div class="mx-5 flex flex-col lg:flex-row sm:mb-8">
        <h2 class="text-3xl leading-tight text-white font-bold">
          Services
        </h2>
      </div>
      <div class="mx-5 flex flex-col lg:flex-row sm:mb-16">
        <p class="text-white mt-2">
          Choose BAO as your trusted
          cybersecurity provider and
          protect your digital assets with
          confidence. We provide a range
          of services, including threat
          intelligence, vulnerability
          assessments, penetration
          testing, incident response, and
          more, all designed to keep you
          protected.
        </p>
      </div>

      <div class="flex lg:flex-row">
        <div class="custom-grid">
          <div class="custom-card rounded-xl bg-white">
            <img src="https://picsum.photos/g/600/400?image=1083" alt="Sample photo" class="rounded-t-xl">
            <div class="text">
              <h3>Counseling</h3>
              <p>
                Stay one step ahead of cyber
                threats with tailored cybersecurity
                advice from BAO. Our expert team
                provides personalized solutions to
                protect your organization from
                potential risks, ensuring your
                peace of mind.
              </p>
            </div>
          </div>
          <div class="custom-card rounded-xl bg-white">
            <img src="https://picsum.photos/g/600/400?image=1083" alt="Sample photo" class="rounded-t-xl">
            <i class="fa fa-shield text-red-700" />
            <div class="text">
              <h3>Intelligence</h3>
              <p>
                Protect your business with advanced
                cyber intelligence solutions from BAO.
                Our cutting-edge services provide real-
                time threat intelligence and enable you
                to proactively identify and mitigate
                potential attacks, giving you a
                competitive edge
              </p>
            </div>
          </div>
          <div class="custom-card rounded-xl bg-white">
            <img src="https://picsum.photos/g/600/400?image=1083" alt="Sample photo" class="rounded-t-xl">
            <i class="fa fa-shield text-red-700" />
            <div class="text">
              <h3>Investigation</h3>
              <p>
                When cyber threats strike, trust BAO's
                team of professionals to investigate and
                identify the source of attacks. Our expert
                cyber investigation services help you to
                understand vulnerabilities and provide
                actionable solutions to prevent future
                attacks.
              </p>
            </div>
          </div>
          <div class="custom-card rounded-xl bg-white">
            <img src="https://picsum.photos/g/600/400?image=1083" alt="Sample photo" class="rounded-t-xl">
            <i class="fa fa-shield text-red-700" />
            <div class="text">
              <h3>OSINT</h3>
              <p>
                Stay informed and secure with BAO's
                advanced cyber Open Source Intelligence
                (OSINT) solutions. Our tailored services
                provide real-time threat intelligence
                from open sources, giving you a
                comprehensive understanding of
                potential attacks and enabling you to
                take proactive measures to protect your
                organization.
              </p>
            </div>
          </div>
          <div class="custom-card rounded-xl bg-white">
            <img src="https://picsum.photos/g/600/400?image=1083" alt="Sample photo" class="rounded-t-xl">
            <i class="fa fa-shield text-red-700" />
            <div class="text">
              <h3>Intelligence</h3>
              <p>
                Protect your business with advanced
                cyber intelligence solutions from BAO.
                Our cutting-edge services provide real-
                time threat intelligence and enable you
                to proactively identify and mitigate
                potential attacks, giving you a
                competitive edge
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end blog -->
    <!-- start cta -->

    <section class="relative my-4">
      <BoaCarousel />
    </section>

    <!-- end cta -->
    <!-- start cta -->

    <section class="relative  px-4 sm:px-8 lg:px-8 xl:px-16 2xl:px-16 py-12 bg-red-700">
      <div class="flex flex-col md:flex-row lg:-mx-8">
        <div class="w-full lg:w-1/2 lg:px-8 items-center justify-center my-auto">
          <h1 class="text-white sm:my-8 text-4xl md:text-5xl xl:text-6xl font-light leading-tight">
            Why work with BAO?
          </h1>
          <div class="border-2 border-white w-full" />
        </div>

        <div class="w-full lg:w-1/2 ">
          <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div class="flex-column justify-center  border-shadow rounded-xl  font-light p-2">
                <div class="border-card-header flex flex-row h-fit w-full text-white justify-center border-b pb-1  border-white text-xl font-light mb-2">
                  Experience
                </div>
                <div class="lg:h-fit flex flex-row justify-center">
                  <p class="p-5 text-white text-sm font-normal leading-4 font-roboto">
                    BAO has years of experience providing cybersecurity solutions to a range of industries, and we have developed
                    a deep understanding of the unique challenges and risks associated with each one.
                  </p>
                </div>
              </div>
              <div class="flex-column justify-center  border-shadow rounded-xl  font-light p-2 ">
                <div class="border-card-header flex flex-row h-fit w-full text-white justify-center border-b pb-1  border-white text-xl font-light mb-2">
                  Expertise
                </div>
                <div class="lg:h-fit f flex flex-row justify-center">
                  <p class="p-5 text-white text-sm font-normal leading-4 font-roboto">
                    Our team of cybersecurity experts is highly skilled and knowledgeable in the latest technologies, tools, and
                    techniques needed to protect against cyber threats. We stay up-to-date with the latest industry trends and best practices to
                    ensure our clients receive the best possible service
                  </p>
                </div>
              </div>
              <div class="flex-column justify-center  border-shadow rounded-xl  font-light p-2">
                <div class="border-card-header flex flex-row h-fit w-full text-white justify-center border-b pb-1  border-white text-xl font-light mb-2">
                  Customized Solutions
                </div>
                <div class="lg:h-fit f flex flex-row justify-center">
                  <p class="p-5 text-white text-sm font-normal leading-4 font-roboto">
                    We understand that every client is unique, and we provide customized cybersecurity solutions
                    tailored to the specific needs and requirements of each organization. We work closely with our clients to develop and
                    implement a cybersecurity strategy that meets their needs and budget
                  </p>
                </div>
              </div>
              <div class="flex-column justify-center border-shadow rounded-xl  font-light p-2">
                <div class="border-card-header flex flex-row h-fit w-full text-white justify-center border-b pb-1 border-white text-xl font-light">
                  24/7 Support
                </div>
                <div class="lg:h-fit f flex flex-row justify-center">
                  <p class="p-5 text-white text-sm font-normal leading-4 font-roboto">
                    x At BAO, we are committed to providing our clients with 24/7 support, ensuring that they have access to
                    immediate assistance in case of a cybersecurity incident. We understand the importance of quick response times in
                    mitigating potential damage from cyber attacks, and our team is always available to provide support and guidance when it's
                    needed most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end cta -->

    <!-- start cta -->

    <section class="relative  px-4 sm:px-8 lg:px-8 xl:px-16 2xl:px-16 py-12 bg-blck">
      <div class="flex flex-col md:flex-row lg:-mx-8">
        <div class="w-full lg:w-1/2 lg:px-8 items-center justify-center my-auto">
          <video
            id="my_video_1" class="video-js vjs-default-skin" controls preload="auto"
            data-setup="{}"
          >
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a
              web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
            </p>
          </video>
        </div>

        <div class="w-full lg:w-1/2 ">
          <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div class="flex-column justify-center border border-gray-500 rounded-xl  font-light p-2 mb-2">
                <div class="border-card-header flex flex-row h-fit w-full text-white justify-center border-b border-gray-500 text-xl font-light mb-2">
                  Technical Expertise
                </div>
                <div class="lg:h-fit flex flex-row  justify-center">
                  <p class="p-5 text-white text-sm font-normal leading-4 font-roboto">
                    A cyber consultant should have extensive technical knowledge and expertise in areas such as network security, system architecture, cloud security,
                    encryption, and threat intelligence. They should have a good understanding of the latest trends and emerging technologies in the cybersecurity landscape.
                  </p>
                </div>
              </div>
              <div class="flex-column justify-center  rounded-xl border border-gray-500 font-light p-2 mb-2">
                <div class="border-card-header flex flex-row h-fit w-full text-white justify-center border-b border-gray-500 text-xl font-light mb-2">
                  Analytical Skills:
                </div>
                <div class="lg:h-fit f flex flex-row  justify-center">
                  <p class="p-5 text-white text-sm font-normal leading-4 font-roboto">
                    A cyber consultant should possess strong analytical skills to assess an organization's security posture, identify potential vulnerabilities, and recommend
                    appropriate solutions. They should also be able to analyze threat data and develop effective response strategies
                  </p>
                </div>
              </div>
              <div class="flex-column justify-center  rounded-xl  border border-gray-500 font-light p-2">
                <div class="border-card-header flex flex-row h-fit w-full text-white justify-center border-b border-gray-500 text-xl font-light mb-2">
                  Communication Skills
                </div>
                <div class="lg:h-fit f flex flex-row justify-center">
                  <p class="p-5 text-white text-sm font-normal leading-4 font-roboto">
                    A cyber consultant should be able to communicate complex technical concepts to non-technical stakeholders in a clear and concise manner. They should
                    also be able to listen actively to clients' concerns and needs and tailor their recommendations accordingly
                  </p>
                </div>
              </div>
              <div class="flex-column justify-center rounded-xl border border-gray-500 font-light p-2">
                <div class="border-card-header flex flex-row  w-full text-white justify-center  border-b border-gray-500 text-xl font-light mb-2">
                  Business Acumen
                </div>
                <div class="lg:h-fit f flex flex-row justify-center">
                  <p class="p-5 text-white text-sm font-normal leading-4 font-roboto">
                    A cyber consultant should have a good understanding of the business environment and industry regulations in which their clients operate. They should be
                    able to align their cybersecurity recommendations with clients' business objectives and budget constraints. Additionally, they should have strong project management skills to
                    deliver their recommendations within the agreed timeline and budget
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end cta -->

    <!-- start footer -->
    <footer class="relative bg-gray-300 text-gray-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24">
      <div class="flex flex-col md:flex-row">
        <div class="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
          <h3 class="font-bold text-2xl">
            bawareof/bao
          </h3>
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
          </p>

          <form class="flex items-center mt-6">
            <div class="w-full">
              <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" for="grid-last-name">
                Subscribe for our Newsletter
              </label>
              <div class="relative">
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-600 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="email" placeholder="Enter Your Email Address"
                >

                <button
                  type="submit"
                  class="bg-red-700 hover:bg-red-400 text-white px-4 py-2 text-sm font-bold rounded absolute top-0 right-0 my-2 mr-2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
          <h5 class="uppercase tracking-wider font-semibold text-gray-500">
            BAO
          </h5>
          <ul class="mt-4">
            <li class="mt-2">
              <a href="#" title="" class="opacity-75 hover:opacity-100">Locations</a>
            </li>
            <li class="mt-2">
              <a href="#" title="" class="opacity-75 hover:opacity-100">Services</a>
            </li>
            <li class="mt-2">
              <a href="#" title="" class="opacity-75 hover:opacity-100">Sectors</a>
            </li>
            <li class="mt-2">
              <a href="#" title="" class="opacity-75 hover:opacity-100">About Us</a>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
          <h5 class="uppercase tracking-wider font-semibold text-gray-500">
            Locations
          </h5>
          <ul class="mt-4">
            <li class="mt-2">
              <a href="#" title="" class="opacity-75 hover:opacity-100">Toronto</a>
            </li>
            <li class="mt-2">
              <a href="#" title="" class="opacity-75 hover:opacity-100">Ottawa</a>
            </li>
            <li class="mt-2">
              <a href="#" title="" class="opacity-75 hover:opacity-100">Calagry</a>
            </li>
            <li class="mt-2">
              <a href="#" title="" class="opacity-75 hover:opacity-100">Edmonton</a>
            </li>
          </ul>
          <!-- <ul class="mt-4">
        <li>
          <a href="#" title="" class="block flex items-center opacity-75 hover:opacity-100">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                class="fill-current">
                <path
                  d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
              </svg>
            </span>
            <span class="ml-3">
              1985 Kerry Way, Whittier, CA, USA
            </span>
          </a>
        </li>
        <li class="mt-4">
          <a href="#" title="" class="block flex items-center opacity-75 hover:opacity-100">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                class="fill-current">
                <path
                  d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" /></svg>
            </span>
            <span class="ml-3">
              Mon - Fri: 9:00 - 19:00<br>
              Closed on Weekends
            </span>
          </a>
        </li>
        <li class="mt-4">
          <a href="#" title="" class="block flex items-center opacity-75 hover:opacity-100">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                class="fill-current">
                <path
                  d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
              </svg>
            </span>
            <span class="ml-3">
              +1 562-789-1935
            </span>
          </a>
        </li>
        <li class="mt-4">
          <a href="#" title="" class="block flex items-center opacity-75 hover:opacity-100">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                class="fill-current">
                <path
                  d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z" />
              </svg>
            </span>
            <span class="ml-3">
              eg@example.com
            </span>
          </a>
        </li>
      </ul> -->
        </div>

        <div class="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
          <ul class="mt-4">
            <li>
              <a href="#" title="" class="block flex items-center opacity-75 hover:opacity-100">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path
                      d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"
                    />
                  </svg>
                </span>
                <span class="ml-3">
                  1985 Kerry Way, Whittier, CA, USA
                </span>
              </a>
            </li>
            <li class="mt-4">
              <a href="#" title="" class="block flex items-center opacity-75 hover:opacity-100">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path
                      d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"
                    />
                    <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" /></svg>
                </span>
                <span class="ml-3">
                  Mon - Fri: 9:00 - 19:00<br>
                  Closed on Weekends
                </span>
              </a>
            </li>
            <li class="mt-4">
              <a href="#" title="" class="block flex items-center opacity-75 hover:opacity-100">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path
                      d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z"
                    />
                  </svg>
                </span>
                <span class="ml-3">
                  +1 562-789-1935
                </span>
              </a>
            </li>
            <li class="mt-4">
              <a href="#" title="" class="block flex items-center opacity-75 hover:opacity-100">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path
                      d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z"
                    />
                  </svg>
                </span>
                <span class="ml-3">
                  eg@example.com
                </span>
              </a>
            </li>
          </ul>

          <p class="text-sm text-gray-400 mt-12">
            © 2023 . <br class="hidden lg:block">All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    <!-- end footer -->
  </main>
</template>

<style>
.custom-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
}

.custom-grid > .custom-card {
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.custom-grid > .custom-card img {
  max-width: 100%;
}

.custom-grid > .custom-card .icondiv {
  font-size: 48px;
  line-height: 70px;
  height: 80px;
  width: 80px;
  border: 6px solid white;
  border-radius: 50%;
  background-color: white;
  text-align: center;
  margin-top: -36px;
}

.custom-grid .text {
  padding: 16px 20px 30px;
}
.custom-grid h3{
  font-family: "Montserrat", Sans-serif;
  font-size: 22px;
  font-weight: 500;
}
.custom-grid .btn {
  margin-top: 20px;
}
</style>
