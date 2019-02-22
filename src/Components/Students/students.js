import React from "react";
import Student from "../Student/Student";
import Classes from "./students.css";
import Search from "../Search/Search";

const students = props => {
    /*render each student*/
  let student = props.data.map(student => {
    return (
      <Student
        data={student}
        key={student.id}
        toggle={props.toggle}
        addTagInput={props.addTagInput}
      />
    );
  });

  return (
    /*search bars and all students data*/
    <div className={Classes.Students}>
      <Search
        placeholder={"Search by name"}
        value={props.nameValue}
        change={props.searchByName}
      />
      <Search
        placeholder={"Search by tags"}
        value={props.tagValue}
        change={props.searchByTag}
      />
      {student}
    </div>
  );
};

export default students;
