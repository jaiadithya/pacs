

const Home = () => {
   
    return ( 
      
  <div class="grid grid-cols-2 gap-4">
    <div className="flex items-center">  
      <div className="w-full">
          <h4 className="head_text">
          Launch your Carrer 
          <br className="max-md:hidden" />
          <span className="red_gradient">Path with us</span>
          </h4>
          <p className="desc">
          Join us at PACS for a successful career journey with our dedicated team and resources.
      </p>
      <button type="button" className="red_btn">
          View Courses
        </button>
      </div>
      </div>
      <div>
        <img src="/assets/images/1.png" className="mt-40" width={720}/>
      </div>
      </div>
      
    )
  }
  
  export default Home