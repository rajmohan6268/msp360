<template>
  <div class="w-full overflow-x-hidden md:overflow-visible">
    <div class="mx-auto md:my-1">
      <div class="container hidden mx-auto md:block">
        <ul
          class="container flex items-center justify-center mr-8 space-x-4  xl:justify-end 2xl:mr-0 txt-gray"
        >
          <li class="hidden xl:flex">
            <a class="" href="tel:+18664677360">
              <span class="">1-866-4-MSP360</span>
            </a>
          </li>
          <li class="">
            <a class="" href="tel:+14153017773">
              <span class="">1-415-301-7773</span>
            </a>
          </li>
          <li class="">
            <a class="" href="/">
              <span class="">Contact Sales</span>
            </a>
          </li>
          <li class="group">
            <a class="" href="/">
              <div class="flex item-center">
                <div class="">Company</div>
                <div class="">
                  <svg
                    class="mt-2.5 ml-1.5"
                    stroke="#6c757d"
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 0.999999L5.5 5L1 1" stroke-width="1.5"></path>
                  </svg>
                </div>
              </div>
            </a>

            <div
              class="absolute z-50 invisible p-5 text-left bg-white rounded-lg shadow-md  group-hover:visible"
            >
              <ul class="space-y-2">
                <li class="">
                  <a class="" href="/">
                    <span class="">About</span>
                  </a>
                </li>
                <li class="">
                  <a class="" href="/">
                    <span class="">Legal Information</span>
                  </a>
                </li>
                <li class="">
                  <a class="" href="/">
                    <span class="">Events</span>
                  </a>
                </li>
                <li class="">
                  <a class="" href="/">
                    <span class="">Careers</span>
                  </a>
                </li>
                <li class="">
                  <a class="" href="/">
                    <span class="">Leadership Team</span>
                  </a>
                </li>
                <li class="">
                  <a class="" href="/">
                    <span class="">Contact us</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="">
            <a class="" href="/">
              <span class="">Support</span>
            </a>
          </li>
          <li class="">
            <a class="" href="/">
              <span class="">Forum</span>
            </a>
          </li>
          <li class="group">
            <div class="flex item-center">
              <div class="">Sign In</div>
              <div class="">
                <svg
                  class="mt-2.5 ml-1.5"
                  stroke="#6c757d"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 0.999999L5.5 5L1 1" stroke-width="1.5"></path>
                </svg>
              </div>
            </div>

            <div
              class="absolute z-50 invisible p-5 text-left bg-white rounded-lg shadow-md  group-hover:visible"
            >
              <ul class="space-y-2">
                <li class="">
                  <a class="" href="/">
                    <span class="">Service Provider Login</span>
                  </a>
                </li>
                <li class="">
                  <a class="" href="/">
                    <span class="">Customer Login</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="group">
            <div class="flex items-center">
              <div class="">
                <img class="" src="https://www.msp360.com/img/icons/eng.svg" />
              </div>
              <div class="">
                <svg
                  class="ml-1.5"
                  stroke="#6c757d"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 0.999999L5.5 5L1 1" stroke-width="1.5"></path>
                </svg>
              </div>
            </div>

            <div
              class="absolute z-50 invisible p-5 text-left bg-white rounded-lg shadow-md  group-hover:visible"
            >
              <ul class="space-y-2">
                <li class="">
                  <a class="" href="/">
                    <img
                      class=""
                      src="https://www.msp360.com/img/icons/fr.svg"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <!-- header start -->
      <div
        :class="scrollPosition > 50 ? '   sticky top-0 hdr' : ''"
        class="z-20 w-full px-4 bg-white border-t border-b md:px-12 xl:px-0"
      >
        <div
          class="container sticky top-0 flex items-center justify-between w-full max-w-6xl py-3 mx-auto my-2  2xl:container"
        >
          <!-- {{ scrollPosition }} -->
          <div class="">
            <img
              class="-mt-4"
              src="https://www.msp360.com/img/logos/cbl/msp360-logo.svg"
              alt="logo"
            />
          </div>
          <div class="md:hidden">
            <img
              class="w-6"
              src="https://www.msp360.com/img/elements/icons/icon-burger.png"
              alt=""
            />
          </div>
          <div class="hidden md:block">
            <ul class="flex items-center space-x-4 txt-gray-1">
              <li class="group">
                <div class="flex item-center">
                  <div class="">Products</div>
                  <div class="">
                    <svg
                      class="mt-2.5 ml-1.5"
                      stroke="#6c757d"
                      width="11"
                      height="7"
                      viewBox="0 0 11 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0.999999L5.5 5L1 1"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div
                  class="absolute z-50 invisible p-5 text-left bg-white rounded-lg shadow-md  group-hover:visible"
                >
                  <ul class="space-y-2">
                    <li class="">
                      <a class="" href="/">
                        <span class="">Backup</span>
                      </a>
                    </li>
                    <li class="">
                      <a class="" href="/">
                        <span class="">Remote Desktop</span>
                      </a>
                    </li>
                    <li class="">
                      <a class="" href="/">
                        <span class="">RMM</span>
                      </a>
                    </li>
                    <li class="">
                      <a class="" href="/"> Pricing </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="group">
                <div class="flex item-center">
                  <div class="">Solutions</div>
                  <div class="">
                    <svg
                      class="mt-2.5 ml-1.5"
                      stroke="#6c757d"
                      width="11"
                      height="7"
                      viewBox="0 0 11 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0.999999L5.5 5L1 1"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div
                  class="absolute z-50 invisible p-5 text-left bg-white rounded-lg shadow-md  group-hover:visible"
                >
                  <ul class="space-y-2">
                    <li class="">
                      <a class="" href="/">
                        <span class="">for MSPs</span>
                      </a>
                    </li>
                    <li class="">
                      <a class="" href="/">
                        <span class=""> for Internal IT Teams </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="group">
                <div class="flex item-center">
                  <div class="">Resources</div>
                  <div class="">
                    <svg
                      class="mt-2.5 ml-1.5"
                      stroke="#6c757d"
                      width="11"
                      height="7"
                      viewBox="0 0 11 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0.999999L5.5 5L1 1"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div
                  class="absolute z-50 invisible p-5 text-left bg-white rounded-lg shadow-md  group-hover:visible"
                >
                  <ul class="space-y-2">
                    <li class="">
                      <a class="" href="/">
                        <span class="txt-orange"> MSP University </span>
                      </a>
                    </li>
                    <li class="">
                      <a class="" href="/">
                        <span class=""> Blog </span>
                      </a>
                    </li>
                    <li class="">
                      <a class="" href="/">
                        <span class=""> Events </span>
                      </a>
                    </li>
                    <li class="">
                      <a class="" href="/">
                        <span class=""> Customer Stories </span>
                      </a>
                    </li>
                    <li class="">
                      <a class="" href="/">
                        <span class=""> On-Demand Content </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="group">
                <div class="flex item-center">
                  <div class="">CloudBerry Lab</div>
                  <div class="">
                    <svg
                      class="mt-2.5 ml-1.5"
                      stroke="#6c757d"
                      width="11"
                      height="7"
                      viewBox="0 0 11 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0.999999L5.5 5L1 1"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div
                  class="absolute z-50 invisible p-5 text-left bg-white rounded-lg shadow-md  group-hover:visible"
                >
                  <ul class="space-y-2 bg-white">
                    <li class="">
                      <a class="" href="/">
                        <span class="txt-orange"> Free Products </span>
                      </a>
                    </li>
                    <li class="">
                      <a class="" href="/">
                        <span class=""> CloudBerry Backup </span>
                      </a>
                    </li>
                    <li class="">
                      <a class="" href="/">
                        <span class="text"> CloudBerry Explorer </span>
                      </a>
                    </li>
                    <li class="">
                      <a class="" href="/">
                        <span class=""> CloudBerry Drive </span>
                      </a>
                    </li>
                    <li class="">
                      <a class="" href="/">
                        <span class="">Pricing</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div class="items-center hidden space-x-10 xl:flex">
            <div class="">
              <div class="border rounded-md">
                <input
                  placeholder="search"
                  class="w-32 p-2 border-r"
                  type="text"
                />
                <button class="px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id=""
                    fill="#f48414"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      d="M13.7871 12.7518L10.3359 9.28631C11.2233 8.26788 11.7095 6.98648 11.7095 5.65249C11.7095 2.53576 9.08299 0 5.85474 0C2.62649 0 0 2.53576 0 5.65249C0 8.76923 2.62649 11.305 5.85474 11.305C7.06667 11.305 8.22158 10.9521 9.20899 10.2821L12.6864 13.7739C12.8318 13.9196 13.0273 14 13.2368 14C13.4351 14 13.6232 13.927 13.766 13.7943C14.0694 13.5124 14.0791 13.045 13.7871 12.7518ZM5.85474 1.47456C8.24092 1.47456 10.1821 3.34873 10.1821 5.65249C10.1821 7.95625 8.24092 9.83043 5.85474 9.83043C3.46855 9.83043 1.52732 7.95625 1.52732 5.65249C1.52732 3.34873 3.46855 1.47456 5.85474 1.47456Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="">
              <button
                class="px-10 py-2 text-xl font-medium text-white rounded-md shadow  bg-orange"
                role="button"
              >
                Free trial
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- header end -->

      <div class="px-4 md:px-10 xl:px-0">
        <section
          class="container grid w-full max-w-6xl mx-auto mt-8 text-left  xl:grid-cols-2 shdw"
        >
          <div class="">
            <div class="mx-auto lg:max-w-xl xl:max-w-md">
              <div class="p-8">
                <h2 class="text-3xl font-bold txt-blue-d">Free Trial</h2>
                <h4 class="text-lg font-semibold txt-orange">
                  FOR MSP360™ MANAGED BACKUP
                </h4>
                <!--  -->
                <div class="mx-auto my-8 space-y-5 text-base">
                  <div
                    class="relative border border-gray-400 rounded-md  hover:border-blue-300 outline focus-within:border-blue-500"
                  >
                    <input
                      type="text"
                      name="First name"
                      placeholder=" "
                      v-model="form.firstname"
                      class="block w-full p-2 bg-transparent appearance-none  focus:outline-none"
                    />
                    <label
                      for="First name"
                      class="absolute top-0 p-2 duration-300 bg-white  txt-gray -z-1 origin-0"
                      >First name</label
                    >
                    <div
                      v-show="showErrors == true && !isvalid.isfirstnamevalid"
                      class="absolute ml-2 -mt-1 bg-white err-mg"
                    >
                      Please specify your first name
                    </div>
                  </div>

                  <div
                    class="relative border border-gray-400 rounded-md  hover:border-blue-300 outline focus-within:border-blue-500"
                  >
                    <input
                      type="text"
                      name="Last name"
                      placeholder=" "
                      v-model="form.lastname"
                      class="block w-full p-2 bg-transparent appearance-none  focus:outline-none"
                    />
                    <label
                      for="Last name"
                      class="absolute top-0 p-2 duration-300 bg-white  txt-gray -z-1 origin-0"
                      >Last name</label
                    >
                    <div
                      v-show="showErrors == true && !isvalid.islastnamevalid"
                      class="absolute ml-2 -mt-1 bg-white err-mg"
                    >
                      Please specify your last name
                    </div>
                  </div>

                  <div
                    class="relative border border-gray-400 rounded-md  hover:border-blue-300 outline focus-within:border-blue-500"
                  >
                    <input
                      type="email"
                      name="email"
                      v-model="form.email"
                      placeholder=" "
                      class="block w-full p-2 bg-transparent appearance-none  focus:outline-none"
                    />
                    <label
                      for="email"
                      class="absolute top-0 p-2 duration-300 bg-white  txt-gray -z-1 origin-0"
                      >Business Email</label
                    >
                    <div
                      v-show="showErrors == true"
                      class="absolute ml-2 -mt-1 bg-white err-mg"
                    >
                      <span
                        v-show="showErrors == true && !isvalid.isemailvalid"
                      >
                        Please specify your business email ,</span
                      >
                      <span
                        v-show="
                          showErrors == true &&
                          !validEmail &&
                          isvalid.isemailvalid
                        "
                        >enter valid email</span
                      >
                    </div>
                    <div class="absolute ml-2 -mt-1 bg-white err-mg"></div>
                  </div>

                  <div
                    class="relative flex items-center border border-gray-400 rounded-md  hover:border-blue-300 outline focus-within:border-blue-500"
                  >
                    <div class="" id="">
                      <div
                        @click="flag = !flag"
                        v-show="flag"
                        class="flex items-center"
                      >
                        <div class="mx-1">
                          <img
                            class="mr-1"
                            src="https://www.msp360.com/img/icons/eng.svg"
                          />
                        </div>
                        <div class="ml-1 font-medium">+1</div>
                      </div>

                      <div
                        @click="flag = !flag"
                        v-show="!flag"
                        class="absolute z-50 p-2 mt-6 bg-white shadow-md"
                        v-if="showflag"
                      >
                        <div
                          @click="flag = false"
                          v-show="!flag"
                          class="flex items-center"
                        >
                          <div class="mx-1">
                            <img
                              class="mr-1"
                              src="https://www.msp360.com/img/icons/fr.svg"
                            />
                          </div>
                          <div class="">+91 INDIA</div>
                        </div>
                        <div
                          @click="flag = false"
                          v-show="!flag"
                          class="flex items-center"
                        >
                          <div class="mx-1">
                            <img
                              class="mr-1"
                              src="https://www.msp360.com/img/icons/eng.svg"
                            />
                          </div>
                          <div class="">+1 United states of america</div>
                        </div>
                        <div
                          @click="flag = false"
                          v-show="!flag"
                          class="flex items-center"
                        >
                          <div class="mx-1">
                            <img
                              class="mr-1"
                              src="https://www.msp360.com/img/icons/fr.svg"
                            />
                          </div>
                          <div class="">+93</div>
                        </div>
                      </div>
                    </div>
                    <input
                      type="tel"
                      name="Phone number"
                      v-model="form.phoneNum"
                      placeholder=" "
                      class="block w-full p-2 bg-transparent appearance-none  focus:outline-none"
                    />
                    <label
                      for="Phone number"
                      class="absolute top-0 p-2 pl-16 duration-300 bg-white  txt-gray -z-1 origin-0"
                      >Phone number</label
                    >
                    <div
                      v-show="showErrors == true && !isvalid.isphoneNumValid"
                      class="absolute ml-2 -mb-10 bg-white err-mg"
                    >
                      Please specify your phone number
                    </div>
                  </div>

                  <div
                    class="relative border border-gray-400 rounded-md  hover:border-blue-300 outline focus-within:border-blue-500"
                  >
                    <input
                      type="company"
                      name="company"
                      v-model="form.company"
                      placeholder=" "
                      class="block w-full p-2 bg-transparent appearance-none  focus:outline-none"
                    />
                    <label
                      for="company"
                      class="absolute top-0 p-2 duration-300 bg-white  txt-gray -z-1 origin-0"
                      >Company name</label
                    >
                    <div
                      v-show="showErrors == true && !isvalid.iscompanyvalid"
                      class="absolute ml-2 -mt-1 bg-white err-mg"
                    >
                      Please select your Company
                    </div>
                  </div>

                  <div class="relative">
                    <select
                      class="w-full p-3 pl-1 bg-white border border-gray-400 rounded-md  focus:outline-none txt-gray focus-within:border-blue-500 hover:border-blue-300"
                      name=""
                      v-model="form.country"
                      id=""
                    >
                      <option
                        id="sel"
                        value="Country"
                        class=""
                        selected
                        disabled
                        hidden
                      >
                        Country
                      </option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Åland Islands">Åland Islands</option>
                      <option value="Albania">Albania</option>
                    </select>
                    <div
                      v-show="showErrors == true && !isvalid.iscountryvalid"
                      class="absolute ml-2 -mt-1 bg-white err-mg"
                    >
                      Please select your country
                    </div>
                  </div>

                  <div class="relative">
                    <select
                      class="w-full p-3 pl-1 bg-white border border-gray-400 rounded-md  focus:outline-none txt-gray focus-within:border-blue-500 hover:border-blue-300"
                      name=""
                      id=""
                      v-model="form.companytype"
                    >
                      <option
                        id="sel"
                        value="Company type"
                        class=""
                        selected
                        disabled
                        hidden
                      >
                        Company type
                      </option>
                      <option value="MSP">MSP</option>
                      <option value="Business">Business</option>
                      <option value="Non Profit">Non Profit</option>
                      <option value="Personal Use">Personal Use</option>
                      <option value="Other">Other</option>
                    </select>
                    <div
                      v-show="showErrors == true && !isvalid.iscompanytypevalid"
                      class="absolute ml-2 -mt-1 bg-white err-mg"
                    >
                      Please specify your company type
                    </div>
                  </div>

                  <!-- <div class="relative border outline focus-within:border-blue-500">
                <input
                  type="password"
                  name="password"
                  placeholder=" "
                  class="block w-full p-2 text-lg bg-transparent appearance-none focus:outline-none"
                />
                <label
                  for="password"
                  class="absolute top-0 p-2 text-lg duration-300 bg-white -z-1 origin-0"
                  >Password</label
                >
              </div> -->
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      class=""
                      v-model="form.accepted1"
                      checked=""
                    />
                    <div class="ml-2 text-sm txt-dark-gray">
                      I would like to receive news and updates from MSP360™
                    </div>
                  </div>

                  <div class="">
                    <div class="inline-flex items-start">
                      <input
                        type="checkbox"
                        v-model="form.accepted2"
                        class="mt-1"
                        checked=""
                      />
                      <div class="ml-2">
                        <div class="text-sm txt-dark-gray">
                          I have read and accept the terms and conditions of the
                        </div>
                        <a
                          href="/"
                          target="_blank"
                          class="text-sm a-text"
                          rel="noreferrer noopener"
                          >MSP360™ Managed Backup Service Agreement</a
                        >
                        <div class="mt-3 text-sm">
                          This site is protected by reCAPTCHA and the Google<br /><a
                            class="a-text"
                            href="https://policies.google.com/privacy"
                            >Privacy Policy</a
                          >
                          and
                          <a
                            href="https://policies.google.com/terms"
                            class="a-text"
                            >Terms of Service</a
                          >
                          apply.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-show="showErrors == true && !isvalid.accepted"
                    class="ml-2 -mt-1 bg-white err-mg"
                  >
                    You must accept the service agreement
                  </div>
                  <button
                    v-show="!message"
                    @click="save()"
                    class="
                      w-full
                      p-2.5
                      text-xl
                      font-medium
                      text-center text-white
                      bg-orange-lg
                      rounded-lg
                    "
                  >
                    {{ !isloading ? "Free Trial" : "" }}
                    <span
                      v-if="isloading"
                      class="flex items-center justify-center"
                    >
                      <svg
                        class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      saving
                    </span>
                  </button>

                  <div v-if="message" class="text-center text-green-500 txt-xl">
                    {{ message }}
                  </div>
                  <div class="text-center">
                    <div class="">Already have an account?</div>
                    <a href="/" class="a-text"> Sign in </a>
                  </div>
                </div>

                <!--  -->
              </div>
            </div>
          </div>

          <div class="p-8 bg-violet-lg">
            <!--  -->
            <div class="pt-16 pb-24 space-y-3 text-center">
              <img
                class=""
                src="https://www.msp360.com/img/pages/managed-backup/signup-bg.png"
                alt="signup page background"
              />
              <div class="text-2xl font-semibold txt-blue-d">
                #1 MSP Backup. Simple. Profitable.
              </div>
              <div class="text-sm txt-gray-1">
                Leverage AWS, Wasabi, Backblaze B2 and local storage.<br />Deliver
                data protection. Drive profit under your brand with no
                contracts.
              </div>
              <div class="flex items-center max-w-sm mx-auto justify-evenly">
                <img
                  class=""
                  src="https://www.msp360.com/img/pages/homepage/aws.svg"
                  alt="Amazon Web Services logo"
                />
                <img
                  class=""
                  src="https://www.msp360.com/img/pages/homepage/b2.svg"
                  alt="Backblaze logo"
                />
                <img
                  class=""
                  src="https://www.msp360.com/img/pages/homepage/wasabi.svg"
                  alt="Wasabi logo"
                />
                <img
                  class=""
                  src="https://www.msp360.com/img/pages/homepage/azure.svg"
                  alt="Azure logo"
                />
                <img
                  class=""
                  src="https://www.msp360.com/img/pages/homepage/google-cloud.svg"
                  alt="Google Cloud logo"
                />
              </div>
            </div>
            <!--  -->
          </div>
        </section>
      </div>

      <!-- link sec start-->
      <div
        class="container grid max-w-6xl grid-cols-2 gap-6 p-8 mx-auto mt-8 space-y-3 text-left  xl:gap-0 xl:p-0 xl:grid-cols-1 txt-gray-1"
      >
        <div class="rounded-md b-blue">
          <div class="xl:flex xl:items-center">
            <a
              href="/"
              class="mr-8 font-semibold xl:p-4 b-blue-r w-44 txt-gray-1"
            >
              Home
            </a>
            <div class="items-center mt-4 xl:mt-0 xl:space-x-4 xl:flex">
              <div class="">
                <a href="/" class=""> Resources </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" class=""> Support </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" class=""> Company </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" class=""> Sitemap </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" class=""> Products </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" class=""> Contact us </a>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-md b-blue">
          <div class="xl:flex xl:items-center">
            <a
              href="/"
              class="mr-8 font-semibold xl:p-4 b-blue-r w-44 txt-gray-1"
            >
              MSP360 Products
            </a>
            <div class="items-center mt-4 xl:mt-0 xl:space-x-4 xl:flex">
              <div class="">
                <a href="/" rel=" " class=""> MSP360 Backup </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" rel=" " class=""> MSP360 Remote Desktop </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" rel=" " class=""> MSP360 RMM </a>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-md b-blue">
          <div class="xl:flex xl:items-center">
            <a
              href="/"
              class="mr-8 font-semibold xl:p-4 b-blue-r w-44 txt-gray-1"
            >
              CloudBerry Lab
            </a>
            <div class="items-center mt-4 xl:mt-0 xl:space-x-4 xl:flex">
              <div class="">
                <a href="/" class=""> CloudBerry Backup </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" class=""> CloudBerry Explorer </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" class=""> CloudBerry Drive </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" class=""> Free Products </a>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-md b-blue">
          <div class="xl:flex xl:items-center">
            <a
              href="/"
              class="mr-8 font-semibold xl:p-4 b-blue-r w-44 txt-gray-1"
            >
              Support
            </a>
            <div class="items-center mt-4 xl:mt-0 xl:space-x-4 xl:flex">
              <div class="">
                <a href="" class=""> Help Center </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="" class=""> Web Help </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="" class=""> Forum </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="" class=""> Open a ticket </a>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-md b-blue">
          <div class="xl:flex xl:items-center">
            <a
              href="/"
              class="mr-8 font-semibold xl:p-4 b-blue-r w-44 txt-gray-1"
            >
              Media
            </a>
            <div class="items-center mt-4 xl:mt-0 xl:space-x-4 xl:flex">
              <div class="">
                <a href="/" class=""> Media Coverage </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" class=""> Press Center </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" class=""> Downloads </a>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-md b-blue">
          <div class="xl:flex xl:items-center">
            <a
              href="/"
              class="mr-8 font-semibold xl:p-4 b-blue-r w-44 txt-gray-1"
            >
              Company
            </a>
            <div class="items-center mt-4 xl:mt-0 xl:space-x-4 xl:flex">
              <div class="">
                <a href="/" class=""> About </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" class=""> Legal Information </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" class=""> Reseller Program </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" class=""> MSP Program </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" class=""> Privacy Policy </a>
                <span class="hidden ml-4 xl:inline-flex"> • </span>
              </div>
              <div class="">
                <a href="/" class=""> GDPR Compliance </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- link sec end  -->
      <!-- footer start -->
      <footer class="mb-8">
        <div class="my-4 bg-violet-lg">
          <div
            class="container items-center justify-between py-6 pl-8 mx-auto  md:max-w-6xl xl:pl-0 xl:flex"
          >
            <div class="space-y-3 text-left">
              <div class="text-2xl font-semibold f-title">PRODUCT UPDATES:</div>
              <div class="items-center md:flex">
                <input
                  type="text"
                  placeholder="Leave your email"
                  class="p-2 border rounded-md w-80"
                />
                <button
                  class="px-10 py-2 mt-4 text-white rounded-md  md:mt-0 md:ml-2 bg-orange-lg"
                  role="button"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div class="mt-8 xl:mt-0">
              <ul class="flex items-center space-x-3">
                <li>
                  <img
                    src="https://www.msp360.com/img/icons/facebook.svg?v=2"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://www.msp360.com/img/icons/twitter.svg?v=2"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://www.msp360.com/img/icons/linkedin.svg?v=2"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://www.msp360.com/img/icons/youtube.svg?v=2"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- foooter end -->
        <!--  -->
        <div class="">
          <div
            class="container grid max-w-6xl grid-cols-2 gap-6 mx-auto  md:grid-cols-4 xl:gap-0 place-items-center xl:flex xl:items-center xl:justify-between"
          >
            <div class="">
              <img
                src="https://www.msp360.com/img/logos/aws.svg"
                alt="aws logo"
                class="logo"
                width="74"
                height="104"
              />
            </div>
            <div class="">
              <img
                src="https://www.msp360.com/img/logos/google.svg"
                alt="google logo"
                class="logo"
                width="121"
                height="34"
              />
            </div>
            <div class="">
              <img
                src="https://www.msp360.com/img/logos/microsoft.svg"
                alt="microsoft logo"
                class="logo"
                width="152"
                height="29"
              />
            </div>
            <div class="">
              <img
                src="https://www.msp360.com/img/logos/vmware.svg"
                alt="vmware logo"
                class="logo"
                width="71"
                height="54"
              />
            </div>
            <div class="">
              <img
                src="https://www.msp360.com/img/logos/comptia.svg"
                alt="comptia logo"
                class="logo"
                width="133"
                height="30"
              />
            </div>
            <div class="">
              <img
                src="https://www.msp360.com/img/logos/connectwise.svg"
                alt="connectwise logo"
                class="logo"
                width="136"
                height="43"
              />
            </div>
            <div class="">
              <img
                src="https://www.msp360.com/img/logos/ascii.svg"
                alt="ascii logo"
                class="logo"
                width="141"
                height="46"
              />
            </div>
          </div>
        </div>
        <!--  -->
        <div class="mt-10 space-y-2 text-center xl:m-0">
          <div class="">Copyright © 2021 MSP360™</div>
          <div class="space-x-4">
            <a href="/" class="">Privacy Policy</a>
            <span class="">•</span>
            <a href="/" class="">Terms and Conditions</a>
          </div>
        </div>
      </footer>
    </div>
    <input type="text" v-model="message" />
  </div>
</template>

<script>
import axios from "axios";

const form = {
  accepted1: false,
  accepted2: false,
  firstname: "",
  lastname: "",
  email: "",
  phoneNum: "",
  countryID: "+1",
  company: "",
  country: "Country",
  companytype: "Company type",
};
export default {
  name: "signup",
  data() {
    return {
      scrollPosition: null,

      showflag: true,
      flag: "+1",
      showErrors: false,
      form: JSON.parse(JSON.stringify(form)),

      isloading: false,
      responseRecived: true,
      message: "",
    };
  },
  computed: {
    isvalid() {
      return {
        accepted: this.form.accepted1 && this.form.accepted2 ? true : false,

        isfirstnamevalid: this.form.firstname.length > 0,
        islastnamevalid: this.form.lastname.length > 0,
        isemailvalid: this.form.email.length > 0,
        isphoneNumValid: this.form.phoneNum.length > 0,
        iscountryIDvalid: this.form.countryID.length > 0,
        iscompanyvalid: this.form.company.length > 0,
        iscountryvalid:
          this.form.country.length > 0 &&
          !this.form.country.includes("Country"),
        iscompanytypevalid:
          this.form.companytype.length > 0 &&
          !this.form.companytype.includes("Company type"),
      };
    },
    validEmail() {
      const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
      return regex.test(this.form.email);
    },
  },

  watch: {
    message: function (newmsg, oldmsg) {
      console.log(newmsg, oldmsg, "newmsg,oldmsg");
      if (newmsg !== "") {
        setTimeout(() => {
          this.message = "";
        }, 5000);
      }
    },
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    save() {
      this.showErrors = true;
      console.log(
        "saved",
        Object.values(this.isvalid).includes(false),
        this.validEmail
      );
      if (
        Object.values(this.isvalid).includes(false) == false &&
        this.validEmail
      ) {
        this.isloading = true;
        axios
          .post(
            "https://enigmatic-taiga-89441.herokuapp.com/starttrail",
            this.form,
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then((response) => {
            this.isloading = false;
            this.showErrors = false;
            this.message = response.data.message;
            (this.form = JSON.parse(JSON.stringify(form))),
              console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style></style>
