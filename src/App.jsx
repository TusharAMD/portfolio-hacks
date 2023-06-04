import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {ReactSocialMediaIcons} from 'react-social-media-icons';

function App() {
  const [linkresult, setLinkresult] = useState("")
  const [show, setShow] = useState(false)
  const [link, setLink] = useState("")
  const [userName, setUserName] = useState("")
  const [tagline, setTagline] = useState("")
  const [summary, setSummary] = useState("")
  const [email, setEmail] = useState("")
  const [skills, setSkills] = useState("")
  const [skillsarr, setSkillsarr] = useState([])
  const [education, setEducation] = useState("")
  const [geoLocationName, setGeoLocationName] = useState("")
  const [profilePic, setProfilePic] = useState("")
  const [experience, setExperience] = useState([])
  const [projects, setProjects] = useState([])
  const [certifications, setCertifications] = useState([])

  function onSubmitHandler(){
    axios.post(`http://127.0.0.1:5000/`, { link })
      .then(res => {
        setShow(true)
        console.log(res);
        console.log(res.data);
        setLinkresult(res.data)
        setUserName(res.data.name)
        setTagline(res.data.tagline)
        setSummary(res.data.summary)
        setGeoLocationName(res.data.geoLocationName)
        setProfilePic(res.data.profilePic)
        setExperience(res.data.experience)
        setProjects(res.data.projects)
        setCertifications(res.data.certifications)
        setEducation(res.data.education)
      })
  }
  return (
    <>
      <div>
        <div><h1>Resume Builder</h1></div>
        <input
          onChange={(e)=>setLink(e.target.value)}
          type="text"
          placeholder="Enter the linkedin profile ..."
          style={{ outline: "none", marginBottom: "10px", width: "70vw", textAlign: "center", backgroundColor: "rgba(255,255,255,0.5)", border: "none", fontSize: "20px" }}
        />
        <span onClick={()=>onSubmitHandler()} style={{verticalAlign:"top", backgroundColor:"rgba(105,255,188,1)", padding:"3px", margin:"auto 5px", cursor:"pointer", color:"white"}} className="material-symbols-outlined">
          arrow_forward_ios
        </span>
      </div>
      {show && <div className='parent'>
        <div className="content-addition">
          {/*JSON.stringify(linkresult)*/}
          <div className='contentform'><p>Name</p><p><input onChange={(e)=>setUserName(e.target.value)} value={userName} /></p></div> <hr></hr>

          <div className='contentform'><p>Tagline</p><p><input onChange={(e)=>setTagline(e.target.value)} value={tagline} /></p></div> <hr></hr>

          <div className='contentform'><p>Summary</p><p><textarea onChange={(e)=>setSummary(e.target.value)} rows="10" cols="30" value={summary} /></p></div> <hr></hr>

          <div className='contentform'><p>Email ID</p><p><input onChange={(e)=>setEmail(e.target.value)} rows="10" cols="30" value={email} /></p></div> <hr></hr>

          <div className='contentform'><p>Skills</p><p><textarea onChange={(e)=>{
            let tempstring = ""
            tempstring = e.target.value
            let x = tempstring.split(",")
            setSkillsarr(x)
            setSkills(e.target.value)
            
            }} rows="10" cols="30"  /></p></div> <hr></hr>

        </div>
        <div className="resume-container">
          <div className='left-hand-side'>
            <div style={{fontSize:"1.5em", color:"white"}} className='name'>{userName}</div>
            <div style={{fontSize:"0.7em", color:"rgb(200,200,200)"}} className='name'>{tagline}</div>
            <br/>
            <div style={{fontSize:"1.5em", color:"white"}} className='name'>About Me</div>
            <div style={{fontSize:"0.7em", color:"rgb(200,200,200)"}} className='name'>{summary}</div>
            <br/>
            <div style={{fontSize:"1.5em", color:"white"}} className='name'>Contact</div>
            <ReactSocialMediaIcons backgroundColor="rgba(0,0,0,0.0)" borderWidth="0" icon="mail"/> <div style={{fontSize:"0.7em", color:"rgb(200,200,200)"}} className='name'>{email}</div>
            <ReactSocialMediaIcons backgroundColor="rgba(0,0,0,0.0)" borderWidth="0" icon="linkedin"/> <div style={{fontSize:"0.7em", color:"rgb(200,200,200)"}} className='name'>www.linkedin.com/in/{link}</div>
            <br/>
            <div style={{fontSize:"1.5em", color:"white"}} className='name'>Skills</div>
            <div style={{fontSize:"0.7em", color:"rgb(200,200,200)"}} className='name'>
              {skillsarr.map((item, index) => (
                <p className='tag'>
                  {item}
                </p>
              ))}
              </div>
            <br/>
          </div>

          <div className='right-hand-side'>
            <div style={{fontSize:"1.5em", color:"1F3041"}} className='name'>Education</div>
            <div style={{fontSize:"0.7em", color:"rgb(200,200,200)"}} className='name'>{education.schoolName}</div>
            <br/>
            
          </div>
          
        </div>
      </div>}
    </>
  )
}

export default App
