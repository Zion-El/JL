import React from 'react'
import "./headings.css";


const Heading = () => {
  const causes  = [{
      id:1,
      name:"Food Suppies to Orphanages",
      content: "We reach out to several orphanages in the country to distribute relief items, clothings and groceries. This is mostly done durimg festive seasons so that we can share",
      icon: "fas fa-hamburger"
  },
  {
    id:2,
    name:"Financial Empowerment for Widows and Aged Women",
    content: "We work directly with communities to ensure that widows and old women can have a sustainable means of livelihood through skills and capital development.",
    icon:" fas fa-female"
},
{
    id:3,
    name:"Sharing of Educational Materials and Clothings to children living in slums",
    content: "Through our initiative, we are able support children of underserved and remote communities in Nigeria to provide educational materials needed in learning.",
    icon: "fas fa-award"
}]
const cause = causes.map((c)=>{
    return (
        <div key={c.id} className='col-md-4 col-lg-4 col-sm-12'>
        <div className="card cause-wrap border-0">
        <h5 className="card-title">{c.name}</h5>
            <div className='text-center icon' style={{padding: "30px 0px"}}>
            <i className={c.icon}></i>
            </div>
                <p className="card-text">{c.content}</p>
            </div>
        </div>

    )
})
  return (
    <div className=''>
      
        <div className='major-cause'>
            <div className='m-text'>
                <h2 className='text-center'>Our Major Causes</h2>
                
            </div>
            <div className='row'>
            {cause}
            </div>
        </div>
    </div>
  )
}

export default Heading