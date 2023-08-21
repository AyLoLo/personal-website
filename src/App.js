import './index.css';
import Me from './assets/Me.jpg';
import Gmail from './assets/Gmail.png';
import Github from './assets/Github.png';
import Dev from './assets/Dev.png'

function App() {

  return (
    <div className='grid grid-rows-3 h-screen'>
      <div className='grid grid-cols-2'>
        <div className='text-white text-4xl font-mono m-12 w-7/12 h-3/4 border-l-4 border-t-4 border-blue-400 relative p-10'>
          @AyLolo
        </div>
        <div className='mb-16 mr-20 w-6/12  grid grid-cols-3 grid-rows-1 justify-center items-center'>
          <a className='absolute right-px m-60' href="mailto:anthonydlr66@gmail.com" target="_blank" rel="noreferrer">
            <img className="w-20" src={Gmail} alt="Gmail Link"/>
          </a>
          <a className="absolute right-px m-36" href="https://github.com/AyLoLo" target="_blank" rel="noreferrer">
            <img className="w-24" src={Github} alt="Github Link"/>
          </a>
          <a className="absolute right-px m-24" href="https://dev.to/aylolo" target="_blank" rel="noreferrer">
            <img className='w-12' src={Dev} alt="DEV Link"/>
          </a>
        </div>
      </div> 
      <div className="ml-40 relative">
        <h6 className='text-white font-medium text-7xl pl-5 pb-5'>Welcome.</h6>
        <p className="text-white w-7/12 p-4 absolute left-px  border-yellow-400 border-l-2">
          My name is <span className='text-blue-400 text-xl'>Anthony Lopez</span> and I am a <span className='text-blue-400 text-xl'>full-stack application developer</span> based in Flushing, New York, US.  
          As a graduate from Flatiron School, I am experienced in <span className='text-blue-400 text-xl'>Python with Flask, Javascript, React, SQL Databases and RESTful API</span> architecture based-programming. 
          I also possess strong skills in <span className='text-blue-400 text-xl'>community building</span> and communication that help businesses and private organizations cultivate growth and empower supporting communities.
            <br></br>
            <br></br>
            <br></br>
          My passion is to utilize the fundamental knowledge of software design and development to deploy full-stack websites, <br></br> <span className='text-blue-400 text-xl'> focusing on ease of use and efficiency</span>.
        </p>
        <img className="absolute top-px right-px max-w-md mr-40 w-full rounded-lg" alt="Anthony Lopez" src={Me}/> 
      </div>
      <div className='grid grid-cols-3 w-screen pt-20'>
        <div className='text-white text-4xl font-mono text-center pt-20 ml-60'>
          Projects
        </div>
        <div className='text-white text-xl pt-5 pl-16 border-yellow-400 border-l-4 mb-10'>
          <li>Thought Scroller</li><br></br>
          <li>PokeGallery</li><br></br>
          <li>Octopath Hub </li>
        </div>
        <div className='border-blue-400 border-r-4 border-b-4 mb-10 mr-10'>
        </div>
      </div>
    </div>
  );
}

export default App;
