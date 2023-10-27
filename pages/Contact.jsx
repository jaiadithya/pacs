"use client"
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex flex-row justify-between px-16 py-12 bg-white rounded-lg shadow-md p-4">
      {/* Left side (text) */}
      <div className="w-1/2 px-10  border-r">
        <div className="mb-10">
          <h1 className="heading_text">Contact us for any Query</h1>
          <p className="para">
            We value your feedback, questions, and suggestions. Our dedicated team is always ready to assist you. Feel free to reach out to us.
          </p>
        </div>
        <div className="flex gap-2 items-center">
        <MdLocationOn size={'24px'} color="#CC1604"/>
          <div>
            <h1 className="subheading_text">Office</h1>
            <p>GEEKAY Towers, Kankanady Bypass Rd, 
            <br className="max-md:hidden" />
            <span> Pumpwell, Mangaluru </span></p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
        <MdCall size={'24px'} color="#CC1604"/>
          <div>
            <h1 className="subheading_text">Mobile</h1>
            <p>+91 8867240600</p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
            <MdEmail size={'24px'} color="#CC1604"/>
          <div>
            <h1 className="subheading_text">Email</h1>
            <p>info@pacsglobal.in  </p>
            </div>
        </div>
      </div>

      {/* Right side (form) */}
      <div className="w-1/2 flex items-center justify-center">
        <div>
          <label for="Name" className="form_textarea">
            Name
          </label>
          <input type="text" id="first_name" className="form_input" />

          <label for="Email" className="form_textarea">
            Email
          </label>
          <input type="text" id="Email" className="form_input"  />

          <label for="Phone Number" className="form_textarea">
            Phone Number
          </label>
          <input type="text" id="Phone_Number" className="form_input" />

          <label for="Subject" className="form_textarea">
            Subject
          </label>
          <input type="text" id="Subject" className="form_input" />

          <label for="Message" className="form_textarea">
            Message
          </label>
          <textarea type="text" id="Message" className="form_input" rows="4" />

          <button className="red_btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
