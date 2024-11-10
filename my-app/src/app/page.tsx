import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import image from "next/image";


export default function Home() {
  return (
    <div>

    <div className="poppins-thin"></div>
    <div className="portfolio-container" >
    <div className="right-container"></div>
        <div className="design">
        <div className="circle"></div>
        <div className="circle"></div>
   <div className="left-container">
   <div className=
    'content'>
            <p className="intro">Hi! I am <span>Kulsoom Arif</span> </p>
            <h1>Web Develepor</h1>
            <p className="details">I am a web developer with years of experience in creating and managing websites. My skills include coding in HTML, CSS, and JavaScript</p>
            <div className="btn-container">
                <button>Hire me</button>
                <button>View projects</button>
            </div>
    
  
           <div className="icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-twitter"></i>
            </div>
            </div>
            
</div>
        </div>
        
    </div>
    </div>

       
  );
}
