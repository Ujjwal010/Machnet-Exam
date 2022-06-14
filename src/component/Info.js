import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Info.css'

function Info(props){
    
    const [data,setdata] = React.useState([ ])
    
    const navigate=useNavigate()

    React.useEffect( ()=>{
        fetch(`https://api.github.com/users/${props.info}`)
        .then((response) => response.json())
        .then((json) => setdata(json))
    },[props.info])


    return(
        <div>
        <button onClick={()=>navigate(-1)} className='btn-2'>Back</button>
        <button className='btn-3'>Hire Me</button>

        <div className="card">
        <img src={data.avatar_url} alt="" className="image" />
        <h1>{data.name}</h1>
        <h3>{data.email}</h3>
        <div className='git'>
            <div > 
                <p>{data.followers}</p>
                <p className='git-info'>Followers</p>
            </div>
            <div> 
                <p>{data.following}</p>
                <p className='git-info'>Following</p>
            </div>
            <div> 
                <p>{data.public_repos}</p>
                <p className='git-info'>Repositories</p>
            </div>
        </div>
        
        <h1>{data.bio}</h1>
      </div>    
    </div>
    )
}

export default Info