import React from "react";
import Feature from "./Feature";
import "./Features.css";
import precise from "../../../images/whychooseus/icon/precise.png";
import plan from "../../../images/whychooseus/icon/plan.png";
import updated from "../../../images/whychooseus/icon/updated.png";
import helpdesk from "../../../images/whychooseus/icon/helpdesk.png";

const featureData = [
  {
    id: 1,
    icon: precise,
    title: "Precise",
    description:
      "We only quote you for what you need, and may or may not include what you precisely need.",
  },
  {
    id: 2,
    icon: plan,
    title: "Plan & Schedule",
    description:
      "With every project, we have a project plan and a schedule.",
  },
  {
    id: 3,
    icon: updated,
    title: "Updated Technology",
    description:
      "You do not have to keep up with website technology enhancements. We'll take care of this for you.",
  },
  {
    id: 4,
    icon: helpdesk,
    title: "Customer Service",
    description:
      "We  have a, 24 hours help desk. ",
  },
];

function Features() {
  return (
    <div className="features-container   m-auto">
      <div className="text-center pt-5">
        <h2 style={{  marginBottom: "10px" ,color:'#f79a2a',fontFamily:'Bauhaus'}} >
          WHY CHOOSE US
        </h2>
      
      </div>
      <div className="row  m-auto">
        {featureData.map((data) => (
          <Feature data={data} key={featureData.id}></Feature>
          
        ))}
      </div>

      <div className="text-center mt-5">
        <p style={{ fontWeight: "600" }}>
          Increase your business success with technology.{" "}
          <a href="/contact" >Let’s get started</a>
        </p>
      </div>
    </div>
  );
}

export default Features;
