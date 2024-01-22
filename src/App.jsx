
import './App.css'
import AboutItemHead from './Components/About_part/AboutData/AboutItemHead'

import AboutHeading_part1 from './Components/About_part/AboutHeading_part1'
import AboutLeft_Right from './Components/About_part/AboutLeft_Right'
import Banner from './Components/Banner/Banner'
import MySkill from './Components/MySkill/MySkill'
import Navbar from './Components/Navbar/Navbar'
import ProjectHeading1 from './Components/ProjectPart/ProjectHeading1'
import ProjectItemHead from './Components/ProjectPart/ProjectItemHead'
import Resume from './Components/Resume_part/Resume'

import Resume_Heading from './Components/Resume_part/Resume_Heading'

function App() {

  return (
    <>
    <nav >
      <div className='container' >
      <Navbar/>
      </div>
    </nav>

    <section className='backround'>
      <div className='container'>

        <Banner/>
        
      </div>
    </section>

    <section className='container gap'>  
    <AboutHeading_part1/>
    <AboutLeft_Right/>
    <AboutItemHead/>
    
    </section>

    <section className=' prBg'>
      <div className='padding container'>
      <ProjectHeading1/>

      <ProjectItemHead/>

      </div>
    </section>
    <section className='container'>
    <Resume_Heading/>
    <Resume/>
    </section>
    <section className='container'>
    <MySkill/>
    </section>
    </>
  )
}

export default App
