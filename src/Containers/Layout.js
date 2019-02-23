import React, { Component } from "react";
import axios from "axios";
import Students from "../../src/Components/Students/students";

class Layout extends Component {
  /*state of the container*/
  state = {
    students: [],
    data: false,
    name: "",
    tag: "",
    filteredStudents: [],
    error:''
  };

  /*React life cycle method to fetch data from API*/
  componentDidMount() {
    axios
      .get("https://www.hatchways.io/api/assessment/students")
      .then(response => {
        /*added tags and toggle flag to each student*/
        for (let student of response.data.students) {
          student.isToggle = false;
          student.tags = [];
        }
        /*state update with new data*/
        this.setState({
          students: response.data.students,
          data: true,
          error:''
        });
      })
      .catch(err => {
        this.setState({error:err})
      });
  }

  /*Seach By name handler logic*/
  /*input is read from the application(Name input) and is checked against first name and last name of each student. If a match is found,
  then student is being added to the new array(filteredStudents) which is then rendered on the screen*/
  searchByNameHandler(event) {
    //console.log(this.state.filteredStudents)
    this.setState({ name: event.target.value }, () => {
      let matchedStudents = [];
      for (let student of this.state.students) {
        if (
          student.firstName
            .toLowerCase()
            .startsWith(this.state.name.toLowerCase()) ||
          student.lastName
            .toLowerCase()
            .startsWith(this.state.name.toLowerCase())
        ) {
          matchedStudents.push(student);
        }
      }
      this.setState({ filteredStudents: matchedStudents });
      console.log(this.state.filteredStudents)
    });
  }

  /*Seach By Tag handler logic*/
  /*input is read from the application(Tag input) and is checked against the tags present for each student. If a match is found,
  then student is being added to the new array(filteredStudents) which is then rendered on the screen*/
  searchByTagHandler = event => {
    this.setState({ tag: event.target.value }, () => {
      let matchedStudents = [];
      for (let student of this.state.students) {
        for (let tag of student.tags) {
          if (tag.toLowerCase().startsWith(this.state.tag.toLowerCase())) {
            matchedStudents.push(student);
            break;
          }
        }
      }
      this.setState({ filteredStudents: matchedStudents });
    });
  };

    /*Add input tags to students*/
  /*input is read from the add tag input area and is added to the tags array of that student when ENTER key is pressed*/
  addTagInputHandler = (event, id) => {
    let newStudents = [...this.state.students];
    if (event.key === "Enter") {
      for (let student of newStudents) {
        if (student.id === id) {
          student.tags.push(event.target.value);
          event.target.value = "";
        }
      }
      this.setState({ students: newStudents });
    }
  };

    /*Toggle handler*/
  /*Toggles between expandable list view and compact view showing students data*/
  onToggleHandler = id => {
    let newStudents = [...this.state.students];
    for (let student of newStudents) {
      if (student.id === id) {
        student.isToggle = !student.isToggle;
      }
    }
    this.setState({ students: newStudents });
  };

  /*render method*/
  render() {
    let data=null;
    /*check to render all students or filtered students*/
    if (this.state.name.length > 0 || this.state.tag.length > 0) {
      data = this.state.filteredStudents;
    } else {
      data = this.state.students;
    }

    /*check to render student data only if data is available*/
    return this.state.data ? 
      <Students
        data={data}
        searchByName={event => this.searchByNameHandler(event)}
        searchByTag={event => this.searchByTagHandler(event)}
        nameValue={this.state.name}
        tagValue={this.state.tag}
        toggle={this.onToggleHandler}
        addTagInput={this.addTagInputHandler}
      />
     : this.state.error.length>0?
     <p>{this.state.error}</p>:
     <p>No students data to display</p>;
  }
}

export default Layout;
