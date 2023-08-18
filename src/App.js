import './index.css';
import Me from './assets/Me.jpg';

function App() {
  return (
    <div>
      <div className='text-white m-12 w-3/12 h-40 border-l-4 border-t-4 border-blue-400'>
        Space Holder?
      </div> 
      <div className="ml-60 relative">
        <h6 className='text-white text-7xl p-5'>Welcome.</h6>
        <p className="text-white w-7/12 p-5 absolute left-px  border-yellow-400 border-l-2">
          My name is <span className='text-blue-400 text-xl'>Anthony Lopez</span> and I am a <span className='text-blue-400 text-xl'>full-stack application developer</span> based in Flushing, New York, US.  
          As a graduate from Flatiron School, I am experienced in <span className='text-blue-400 text-xl'>Python with Flask, Javascript, React, SQL Databases and RESTful API</span> architecture based-programming. 
          I also possess strong skills in <span className='text-blue-400 text-xl'>community building</span> and communication that help businesses and private organizations cultivate growth and empower supporting communities.
            <br></br>
            <br></br>
            <br></br>
          My passion is to utilize the fundamental knowledge of software design and development to deploy full-stack websites, <br></br> <span className='text-blue-400 text-xl'> focusing on ease of use and efficiency</span>.
        </p>
        <img className="absolute top-px right-px max-w-md mr-40 w-full" src={Me}/> 
      </div>
    </div>
  );
}

export default App;
