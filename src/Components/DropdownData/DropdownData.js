import React from "react";
import Classes from "./DropdownData.css";
import Search from "../Search/Search";
import Tag from "../Tag/Tag";

/*additional grades data and tags information*/
const dropdownData = props => {
  /*each test data is rendered*/
  let marks = props.grades.map((grade, i = 0) => {
    return (
      <p key={i + 1}>
        Test {i + 1} : &emsp; {grade}%
      </p>
    );
  });

  /*Each tag data of a student rendered*/
  let tagData = props.tags.map((tag, i = 0) => {
    return <Tag data={tag} key={props.name + i + 1} />;
  });

  return (
    <div className={Classes.GradesData}>
      {/*all test data*/}
      {marks}

      {/*all tags data*/}
      <div className={Classes.TagsData}>{tagData}</div>
      
      {/*input area to add a new tag*/}
      <Search
        placeholder={"Add a tag"}
        value={props.tagValue}
        keyPress={props.addTagInput}
      />
    </div>
  );
};

export default dropdownData;
