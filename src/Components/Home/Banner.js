import React from 'react';

const Banner = () => {
    return (
        <div>
            <section>
                <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2">
                        <div class="relative flex items-center">
                            <div class="p-8 sm:p-8">
                                <h2 class="text-4xl font-bold  text-center discover text-yellow-600">DISCOVERY</h2>
                                <h2 class="text-5xl font-bold text-center -mt-6">OUR STORE</h2>
                                <div class="flex items-center justify-center mt-8 mb-5">
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <p class="mt-4 text-black text-center"> Voluptatibus quaerat laboriosam fugit non Ut consequatur animi<br></br> est molestiae enim a voluptate totam natus modi debitis dicta <br></br>impedit voluptatum quod sapiente illo saepe explicabo quisquam<br></br> perferendis labore et illum suscipit</p>

                                <a class="group relative flex justify-center items-center overflow-hidden px-8 py-3 focus:outline-none focus:ring mt-4" href="/download">
                                    <span class=" text-md text-lg text-black border-b-2 border-indigo-500">ABOUT US</span>
                                </a>
                            </div>
                        </div>
                        <div class="relative z-10 lg:py-8 mt-20">
                            <div class="relative h-64 sm:h-80 lg:h-96 w-full">
                                <img
                                    alt="House"
                                    src="https://img.freepik.com/premium-photo/group-friends-eating-together_53876-9934.jpg?w=1380"
                                    class="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;