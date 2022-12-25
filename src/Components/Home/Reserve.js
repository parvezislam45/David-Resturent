import React from 'react';

const Reserve = () => {
    return (
        <div>

            <div class="mx-auto bg-white p-16" data-aos="fade-up"
                data-aos-duration="2000">

                <form>
                    <div class="grid gap-8 lg:grid-cols-3">
                        <div>
                            <label for="first_name" class="block mb-2 text-md text-gray-500">How Many People</label>
                            <div class="relative w-full">
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full h-12">
                                    <option value="1">1 People</option>
                                    <option value="2">2 People</option>
                                    <option value="3">3 People</option>
                                    <option value="4">4+ People</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-md text-gray-500">Date</label>
                            <div class="relative w-full">
                                <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full h-12" placeholder="Enter Date" required />
                                <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16"> <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" /> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" /> </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label for="company" class="block mb-2 text-md text-gray-500">Time</label>
                            <div class="relative w-full">
                                <input type="text" id="voice-search" class="bg-gray-50 border border-gray-400 text-black text-sm rounded-lg w-full h-12" placeholder="Input Time" required />
                                <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"> <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" /> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" /> </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label for="phone" class="block mb-2 text-md text-gray-500">Name</label>
                            <div class="relative w-full">
                                <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full h-12" placeholder="Your Full Name" required />
                                <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16"> <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /> <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" /> <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" /> </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label for="website" class="block mb-2 text-md text-gray-500">Email</label>
                            <div class="relative w-full">
                                <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full h-12" placeholder="Your Email Address" required />
                                <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Gmail" role="img" viewBox="0 0 512 512" id="IconChangeColor" height="20" width="20"><rect width="512" height="512" rx="15%" fill="#fff"></rect><path fill="#737373" d="M120 392V151.075h272V392" id="mainIconPathAttribute" stroke-width="0" stroke="#f3ecec" filter="url(#shadow)"></path><path fill-opacity=".05" d="M256 285L120 392l-4-212" id="mainIconPathAttribute" stroke="#f3ecec" fill="#737373"></path><path fill="#737373" d="M120 392H97c-12 0-22-10-22-23V143h45z" id="mainIconPathAttribute" stroke="#f3ecec"></path><path fill-opacity=".08" d="M317 392h77V159H82" id="mainIconPathAttribute" stroke="#f3ecec" fill="#737373"></path><path fill="#737373" d="M97 121h318L256 234" id="mainIconPathAttribute" stroke="#f3ecec"></path><path fill="#737373" d="M392 392h23c12 0 22-10 22-23V143h-45z" id="mainIconPathAttribute" stroke="#f3ecec"></path><path fill="#737373" stroke="#f3ecec" stroke-linecap="round" stroke-width="44" d="M97 143l159 115 159-115" id="mainIconPathAttribute"></path><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation="0" dx="1.5" dy="1.5" flood-color="black"></feDropShadow></filter></svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label for="visitors" class="block mb-2 text-md text-gray-500">Phone</label>
                            <div class="relative w-full">
                                <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full h-12" placeholder="Your Phone" required />
                                <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"> <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /> </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mx-auto mt-16'>
                        <button class="btn btn-xs sm:btn-sm md:btn-md w-64 rounded-full bg-orange-400 text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reserve;