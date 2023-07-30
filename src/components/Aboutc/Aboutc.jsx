import React, {Component} from 'react'
import "./aboutc.css";
import Slider from "react-slick";
import Team from '../Team/Team';
import about from "../../asset/img4.jpg";
import img1 from "../../asset/v1.jpg";
import img2 from "../../asset/v2.jpg";
import img3 from "../../asset/v3.jpg";
import img4 from "../../asset/v4.jpg";

import accountability from "../../asset/values/accountability.png";
import care from "../../asset/values/care.png";
import empowerment from "../../asset/values/empowerment.png";
import commitment from "../../asset/values/commitment.png";
import equity from "../../asset/values/equity.png";
import reliability from "../../asset/values/reliability.png";
import transparency from "../../asset/values/transparency.png";
import love from "../../asset/values/love.png";

export default class Aboutc extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
      var settings = {
         
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        dots: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const teams = [{
        id:1,
        name: "Mr Ayodeji Oluwafemi",
        img: img4,
        content: "A senior Pastor, Mission and evangelism coordinator."
    },
    {
        id:2,
        name: "Mr Oyewole Oyelayo ",
        img: img3,
        content: "He is the vice president and co- founder of Naomi Hope Foundation."
    },
    {
        id:3,
        name: "Mrs Oluwaseun Adeyeye ",
        img: img1,
        content: "She is the head of administrative unit of Naomi Hope foundation."
    },
    {
        id:4,
        name: "Mrs Olawumi Oyelayo",
        img: img2,
        content: "She is the founder and president of Naomi Hope Foundation."
    }];

    const values = [{
        id:1,
        name: "Compassion",
        icon:care
    },
    {
        id:2,
        name: "Integrity",
        icon:equity
    },
    {
        id:3,
        name: "Reliability",
        icon:reliability
    },
    {
        id:4,
        name: "Commitment ",
        icon:commitment
    },
    {
        id:5,
        name: "Acountability",
        icon:accountability
    },
    {
        id:6,
        name: "Transparency",
        icon:transparency
    },
    {
        id:7,
        name: "Empowerment",
        icon:empowerment
    },{
        id:8,
        name: "Love",
        icon:love
    }];
    const value = values.map((v)=>{
        return(
        <div key={v.id} className='col-lg-3 col-md-3'>
       <div className='icon'><img  src={v.icon}/></div>
        <div className='line'>
            <h2>{v.name}</h2>
        </div>
    </div>
    )})
    const team  = teams.map((t)=>{
        return(
            <div key={t.id}>
                <Team image={t.img} name={t.name} content={t.content}/>
            </div>
               
        )
    })
  return (
    <div className='a-bwrap'>
     <div className='a-a-wrap'>
     <div className='row'>
        <div className='col-lg-6 col-md-6 a-left'>
            <img src={about} alt='about-img'/>
        </div>
        <div className='col-lg-6 col-md-6 a-right'>
            <div className='card-a'>
                <h1>We are a team of non-profit driven volunteers</h1>
                <p>Naomi Hope Foundation is a non-governmental organization established in the year 2018 and officially registered with the Corporate Affairs Commission in 2022 to provide humanitarian services to the orphans, widows and less privileged children in the society. Since its inception in 2018, NHP has left no efforts in its quest to serve these categories of people and providing sustainable livelihoods.
                Our aim is to care and meet their immediate needs such as foods, clothing, educational and medical support. We do not just have feelings for them, but we desire and work towards alleviating hunger and poverty to enable them have a better and satisfying life.
                We hope to achieve our aims through partnership with sponsors, contributors and donations. A generous donation no matter how small it is can give someone a reason to breathe and survive in life.
                </p>
            </div>
        </div>
     </div>
     </div>
     <div className='row mission-about'>
       <h3 style={{padding:"30px 0px"}}>Our Mission & Vision</h3>
        <div className='col-md-6 col-lg-6'>
          <div className='card border-0 m-s'>
            <h4>Our Mission</h4>
            <p>To alleviate poverty and empower the less privilege in the community with a focus on women and children and to make efforts in promoting healthy environment and better future.</p>
          </div>
        </div>

        <div className='col-md-6 col-lg-6'>
        <div className='card border-0 m-s'>
        <h4>Our Vision</h4>
            <p>We seek a world of hope, abundance, better life, and sustainable development, where poverty has been overcome and all people live comfortably.
            </p>
        </div>
        </div>
     </div>
     <div className='core'>
        <div className='bg-c'>
            <h3>Our Core Values</h3>
        </div>
        <div className='core-d'>
            <div className='core-info'>
                <div className='row'>
                    {value}
                </div>
                
            </div>
        </div>
        <div className='t-team'>
            <h1>
                Our Team
            </h1>
            <Slider ref={c => (this.slider = c)} {...settings}>
                {team}
            </Slider>
        </div>
     </div>
    </div>
  )
}
}

