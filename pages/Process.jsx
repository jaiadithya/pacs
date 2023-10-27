import React from 'react'
import { MdCall } from "react-icons/md";


const Process = () => {
  return (
    <div>
        <div>
            <h3 className="heading_text">Our Training Process</h3>
            <p className="para">We at PACS specialize in providing a comprehensive training process which involves cutting-edge techniques, industry experts, and hands-on experience to ensure you receive top-quality education and skills. We expertly plan our training process to ensure our students be technical maestros!</p>
        </div>

    
    <div className="flex ">
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mr-4">
    <MdCall size={'24px'} color="#CC1604"/>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Novice</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500">This is the stage where we nurture the students. The basics and fundamentals of the course are taught with utmost focus on individuals.</p>
    <h5 className="subheading_text"> “A blade is forged”</h5>

</div>

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
<MdCall size={'24px'} color="#CC1604"/>

    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Amatuer</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500">Gradually, the level of training enhances and intensifies.This phase ultimately trains the individuals to gain more knowledge and insights over the courses.</p>
    <h5 className="subheading_text"> “A blade is forged”</h5>
</div>

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ml-4">
<MdCall size={'24px'} color="#CC1604"/>

    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Expert</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500">The final stage of the training lets our students to go beyond the horizon. Our experts will guide the comrades towards the path of excellence and perfection.</p>
    <h5 className="subheading_text"> “A blade is forged”</h5>

</div>

    </div>
    </div>


  )
}

export default Process