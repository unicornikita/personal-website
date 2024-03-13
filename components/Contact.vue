
<template>
    <div id="contact" class="flex flex-col items-center justify-center w-full md:w-9/12">
      <h2 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
        {{ $t('getInTouch') }}</h2>
        <p class="mb-4 text-lg font-normal text-gray-200 text-justify">{{ $t('contactSubtitle') }} <a href="mailto: nikitagaluh@kapusin.si"><b>nikitagaluh@kapusin.si</b></a>.</p>
      
        <form class="w-full mx-auto flex flex-col">
        <div class="mb-4">
          <label for="email" class="block mb-2 text-sm font-medium  text-white">{{ $t('email') }}</label>
          <input type="email" id="email"
            class="outline-none shadow-sm bg-pink-100 border border-white text-black text-sm rounded-lg  focus:border-pink-200 block w-full p-2.5  placeholder-gray-500"
            placeholder="name@email.com" required />
        </div>
        <div class="mb-4">
          <label for="message" class="block mb-2 text-sm font-medium text-white">{{ $t('message') }}</label>
          <textarea id="message" rows="4"
            class="outline-none block p-2.5 w-full text-sm text-black bg-pink-50 rounded-lg border border-gray-300 focus:border-pink-200  placeholder-gray-500 "
            placeholder="Enter your message" required></textarea>
        </div>

        <button type="submit"
          class="mb-6 mx-auto inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-pink-950 rounded-lg hover:bg-pink-500 focus:ring-4">
          {{ $t('messageButton') }}</button>
      </form>
    </div>
</template>