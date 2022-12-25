import React from 'react';

const Chat = () => {
    return (
        <div>
            <section>
                <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8" data-aos="fade-up"
                    data-aos-duration="2000">
                    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div class="relative flex items-center">
                            <div class="p-8 sm:p-16">
                                <h2 class="text-3xl text-center discover text-yellow-600">CONTRACT</h2>
                                <h2 class="text-5xl font-bold text-center -mt-6">LET'S CHAT</h2>
                                <p class="mt-16 text-black text-center"> Voluptatibus quaerat laboriosam fugit non Ut consequatur animi<br></br> est molestiae enim a voluptate totam natus modi debitis dicta <br></br>impedit voluptatum quod sapiente illo saepe explicabo quisquam<br></br> perferendis labore et illum suscipit</p>
                            </div>
                        </div>
                        <div class="relative z-10 lg:py-16">
                            <div class="relative sm:h-80 lg:h-96 w-full mt-28">
                                <div>
                                    <form class="my-8 mx-auto text-sm">
                                        <div class="flex flex-col my-4">
                                            <label for="name" class="text-gray-700">Name</label>
                                            <input type="text" name="name" id="name" class="mt-2 p-2 h-12 w-3/4 border border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your name" />
                                        </div>
                                        <div class="flex flex-col my-4">
                                            <label for="email" class="text-gray-700">Email</label>
                                            <input type="text" name="name" id="name" class="mt-2 p-2 h-12 w-3/4 border border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your Email" />
                                        </div>
                                        <div class="flex flex-col my-4">
                                            <label for="email" class="text-gray-700">Your Message</label>
                                            <textarea class="textarea textarea-bordered w-3/4 h-60 mt-3 p-2" placeholder="Message"></textarea>
                                        </div>
                                        <div class="my-4 flex items-center justify-start space-x-4">
                                            <button class="bg-orange-300 hover:bg-black rounded-full px-8 py-3 text-white hover:shadow-xl transition duration-150 uppercase">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </section >
        </div >
    );
};

export default Chat;