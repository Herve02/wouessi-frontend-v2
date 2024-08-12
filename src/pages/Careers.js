import React from "react";
import HeroBanner from "../components/HeroBanner";
import Accordion from "../components/Accordion";
import Data from "../helpers/CareersAccordionInnerText.json";
import WorkWithUs from "../components/WorkWithUs";
import CareersHeroBanner from "../assets/CareersHeroImage.jpeg";

function Careers() {
  return (
    <div className="flex justify-center mt-[5vw]">
      <div className="w-[80%]">
        <HeroBanner
          Header="Why Join Wouessi?"
          BannerImage={CareersHeroBanner}
          Content="At Wouessi, we embrace concepts of diversity, active innovation, teamwork, learning, and training in our workplace. Here are some reasons why you should consider joining our team"
        />
        {/* <div className="flex justify-between items-center mb-[4vw]">
          <div className="flex justify-center items-center w-[48vw] h-[28vw]">
            <div className="w-[80%] text-left text-black">
              <h1 className="text-[4vw]/[4vw] font-bold">Why Join Wouessi?</h1>
              <div className="flex justify-between mt-[3vw]">
                <div className="border-t-[0.1vw] border-black w-[5vw] h-[5vw]"></div>
                <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                  At Wouessi, we embrace concepts of diversity, active
                  innovation, teamwork, learning, and training in our workplace.
                  Here are some reasons why you should consider joining our
                  team:
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${MeetTheTeamImages})` }}
            className="w-[30vw] h-[28vw] bg-cover bg-[center_right_-2vw]"></div>
        </div> */}
        <div className="mb-[-1vw]">
          <Accordion title="Development" InnerTextData={Data.Development} />
          <Accordion
            title="Project Management"
            InnerTextData={Data.ProductDev}
          />
          <Accordion title="Sales" InnerTextData={Data.Sales} />
          <Accordion title="Design" InnerTextData={Data.Design} />
        </div>
        <WorkWithUs
          Heading="Apply now and become part of our dynamic team!"
          CallToAction="Join Our Team"
        />
      </div>
    </div>
  );
}

export default Careers;