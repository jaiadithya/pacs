import React from 'react';

const Appbar = () => {

    // const router = useRouter()
  const entries = [
    { text: 'Courses', link: '#' },
    { text: 'Services', link: '#' },
    { text: 'About', link: '#' },
    { text: 'Achievements', link: '#' },
    { text: 'Contact', link: '/Contact' }, 
  ];
  
  return (
    <nav className="flex py-4 px-4 justify-between border-b items-center fixed top-0 bg-white w-full px-40">
      <img src="assets/images/pacs.png" className="w-28" alt="Logo" />
      <div className="flex items-center "> 
      <ul className="flex space-x-10">
      {entries.map((entry, index) => (
        <li key={index} className="my-class">
          <a href={entry.link} className="text-black text-lg hover:border-b-2 pb-2 border-b-red-600 duration-75">
            {entry.text}
          </a>
        </li>
      ))}
    </ul>
    <button className="red_bt mx-12">Register Now</button>
      </div>
    </nav>
  );
};

export default Appbar;
