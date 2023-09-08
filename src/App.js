import './index.css';
import Me from './assets/Me.jpg';
import Gmail from './assets/Gmail.png';
import Github from './assets/Github.png';
import Dev from './assets/Dev.png'

function App() {

  return (
    <div className='grid grid-rows-3 h-screen text-white'>
      <div className='grid grid-cols-2'>
        <div>
          I am here
        </div>
        <div>
          You are there
        </div>
      </div>
      <div className='text-white'>
      My name is <span className='text-blue-400 text-2xl'>Anthony Lopez</span> and I am a <span className='text-blue-400 text-2xl'>full-stack application developer</span> based in Flushing, New York, US.  
          As a graduate from Flatiron School, I am experienced in <span className='text-blue-400 text-2xl'>Python with Flask, Javascript, React, SQL Databases and RESTful API</span> architecture based-programming. 
          I also possess strong skills in <span className='text-blue-400 text-2xl'>community building</span> and communication that help businesses and private organizations cultivate growth and empower supporting communities.
            <br></br>
            <br></br>
            <br></br>
          My passion is to utilize the fundamental knowledge of software design and development to deploy full-stack websites, <br></br> <span className='text-blue-400 text-xl'> focusing on ease of use and efficiency</span>.
      </div>
      <div className='text-white'>
        Goodbye
      </div>
    </div>
  );
}

export default App;
