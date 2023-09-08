import './index.css';
import Me from './assets/Me.jpg';
import Gmail from './assets/Gmail.png';
import Github from './assets/Github.png';
import Dev from './assets/Dev.png'

function App() {

  return (
    <div className='relative'>
      <div className='grid grid-rows-3 h-screen w-screen text-white'>
        <div className='grid grid-cols-2'>
          <div className='border-l-4 border-t-4 border-blue-700 ml-10 mt-10 mr-10 grid grid-rows-2'>
            <span className='font-mono text-3xl p-10'>@AyLoLo</span>
            <span className='ml-64 mt-10 text-7xl'>Welcome.</span>
          </div>
          <div className='m-10 flex flex-row justify-end'>
            <a className="h-1/3" href="https://github.com/AyLoLo" target="_blank" rel="noreferrer">
              <img className='w-20 h-20' src={Github} alt="Github Link"/>
            </a>
            <a className="h-1/3" href="https://dev.to/aylolo" target="_blank" rel="noreferrer">
              <img className="w-20 h-20" src={Dev} alt="Dev Link"/>
            </a>
            <a className="h-1/3" href="mailto:anthonydlr66@gmail.com" target='_blank' rel="noreferrer">
              <img className="w-20 h-20" src={Gmail} alt="Gmail Link"/>
            </a>
          </div>
        </div>
        <div className='grid grid-cols-4'>
          <div className='col-span-3 ml-60 border-l-4 border-yellow-400'>
            <div className='text-white ml-8 p-10'>
                My name is <span className='text-blue-400 text-2xl'>Anthony Lopez</span> and I am a <span className='text-blue-400 text-2xl'>full-stack application developer</span> based in Flushing, New York, US. 
                As a graduate from Flatiron School, I am experienced in <span className='text-blue-400 text-2xl'>Python with Flask, Javascript, React, SQL Databases and RESTful API</span> architecture based-programming. 
                I also possess strong skills in <span className='text-blue-400 text-2xl'>community building</span> and communication that help businesses and private organizations cultivate growth and empower supporting communities.
                <br></br>
                <br></br>
                <br></br>
                My passion is to utilize the fundamental knowledge of software design and development to deploy full-stack websites, <span className='text-blue-400 text-xl'> focusing on ease of use and efficiency</span>.
            </div>
          </div>
          <div>
            <img className="w-100 h-80" src={Me} alt="Anthony Lopez"/>
          </div>
        </div>
        <div className='text-white'>
          Goodbye
        </div>
      </div>
    </div>
  );
}

export default App;
