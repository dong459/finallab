import React from "react";
import "./styles/Addbar.css";

class AddBar extends React.Component {
  addItem = event => {
    if (event.key === "Enter") {
      fetch(`http://localhost:8081/item/add/${event.target.value}`).then(
        window.location.reload(false)
      );
    }
  };

  render() {
    return (
      <div className="AddBar">
        <input
          className="AddBar-Text"
          type="text"
          placeholder="Enter TODO Item"
          onKeyDown={this.addItem}
        />
      </div>
    );
  }
}

export default AddBar;
