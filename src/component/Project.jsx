

import React from 'react';
import { Nav, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import passwordGenerator from "../assets/PasswordGenerator/PasswordGenerator.png";
import sortingVisualizer from "../assets/SortingVisualizer/SortingVisualizer.png";
import tourPlan from "../assets/Tour/TourPlan.png";
import weatherApp from "../assets/weatherApp/weather.png";
import wanderLust from "../assets/wanderLust/WanderLust.png";
import ecommerce from "../assets/E-commerce/E-commerce.png";
import GIF from "../assets/GIF/GIF.png";
import converter from "../assets/converter/Currency.png";
import netflix from "../assets/netflix/netflix.png"
import courses from "../assets/topCourses/courses.png"
const Project = () => {
    const Projects =[
        {
            title: "E-Commerce",
            description:"Design & Development",
            url : ecommerce,
            id : 1,
            websiteUrl : "https://erpsystemapp.netlify.app/"


        },

        {
            title: "WanderLust",
            description:"Design & Development",
            url : wanderLust,
            id : 1,
            websiteUrl : "https://github.com/Arunkumaryad/WanderLust"


        },
        {
            title: "Sorting Visualizer",
            description:"Design & Development",
            url : sortingVisualizer,
            websiteUrl : "https://arunsortingvisualizer.netlify.app/"
            

        },
        {
            title: "Weather App",
            description:"Design & Development",
            url : weatherApp,
            websiteUrl : "https://weatherapparun.netlify.app/"  

        },
        {
            title: "Password Generator",
            description:"Design & Development",
            url : passwordGenerator,
            id : 1,
            websiteUrl : "https://passgeneratorapp.netlify.app/"


        },
        {
            title: "Tour Plan",
            description:"Design & Development",
            url : tourPlan,
            websiteUrl : "https://planwitharun.netlify.app/"
            

        },
    
        {
            title: "GIF Generator ",
            description:"Design & Development",
            url : GIF,
            websiteUrl : "https://arungifgenerator.netlify.app/"
        },
        {
            title: "Currency Converter",
            description:"Design & Development",
            url : converter,
            websiteUrl : "https://aruncurrencyconverter.netlify.app/"
        },
        {
            title: "Netflix Clone",
            description:"Design & Development",
            url : netflix,
            websiteUrl : "https://net23cloneapp.netlify.app/"
        },
        
        {
            title: "Filter component",
            description:"Design & Development",
            url : courses,
            websiteUrl : "https://aruntop-course.netlify.app/"
        },
       
    ]


    return (
  <section className='project' id='projects'>
    <div className="conitaner px-9">
        <div className="row">
            <div className="col text-center">
            <div className='w-full text-4xl'> Project </div>
             <p>please click on the project to check the project sites </p>
                          
            </div>
            <TabContainer id="projects-tab" defaultActiveKey="first">

            <Nav variant='pills'  className='mb-8'>              
            <Nav.Item >
                    <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
            </Nav>
        
            <TabContent>
                <TabPane eventKey="first">
                    
                    <div className="row">
                    {
                        Projects.map((p,index)=>{
                            return (
                              <ProjectCard
                              key = {index}
                              {...p}
                              />
                            )
                        })
                    }
                    </div>
                    
                </TabPane>
                <TabPane eventKey="second">

                </TabPane>
                <TabPane eventKey="third">
             </TabPane>
            </TabContent> 
            </TabContainer>
        </div>
        
    </div>
    {/* <img className='left' src="https://ik.imagekit.io/b80sh2n2k/color-sharp2.png?updatedAt=1679470985047" alt="" /> */}

  </section>
    );
}

export default Project;

