import React from 'react'

const Footer = () => {
  return (
    
<footer class="bg-white rounded-lg shadow m-4 w-full page-content-no-padding">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center px-10 sm:justify-between">
            <a href="https://pacsglobal.in/" class="flex items-center mb-4 sm:mb-0">
                <img src="/assets/images/pacs.png" class="h-8 mr-3" alt="Logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-800 sm:mb-0">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="/Contact" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-autolg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center">© 2023 <a href="https://pacsglobal.in/" class="hover:underline">PACS Global™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer