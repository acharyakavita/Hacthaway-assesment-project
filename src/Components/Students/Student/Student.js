import React from "react";
import Classes from "./Student.css";
import Toggle from "../Toggle/Toggle";
import DropdownData from "../DropdownData/DropdownData";

/*renders each student data */
const student = props => {
  let average,
    total = 0;
  let additionalData = null;

  /*calculating average*/
  for (let grade of props.data.grades) {
    total += Number(grade);
  }
  average = total / props.data.grades.length;

/*If dropdown button(+) is pressed, then display the additional student data*/
  if (props.data.isToggle) {
    additionalData = (
      <DropdownData
        grades={props.data.grades}
        name={props.data.firstName}
        addTagInput={event => props.addTagInput(event, props.data.id)}
        tags={props.data.tags}
      />
    );
  }

  return (
    /*Student data listing name,picture,skills,average,company and email-id*/
    <div className={Classes.Student}>
      <div className={Classes.StudentPhoto}>
        <img src={props.data.pic} alt="cartoon" />
      </div>
      <div className={Classes.StudentData}>
        <h1>
          {props.data.firstName} {props.data.lastName}
        </h1>
        <div className={Classes.StudentDetails}>
          <p>Email: {props.data.email}</p>
          <p>Company : {props.data.company}</p>
          <p>Skill : {props.data.skill}</p>
          <p>Average : {average.toFixed(2)}%</p>
        </div>
      </div>
      {/*toggle button(+,-)*/}
      <Toggle
        grades={props.data.grades}
        toggle={() => props.toggle(props.data.id)}
        isToggle={props.data.isToggle}
      />
      {/*additional data being rendered*/}
      {additionalData}
    </div>
  );
};

export default student;
