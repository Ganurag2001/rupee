import React, { Component } from "react";
import ImageUpload from "./ImageUpload";
import VoiceRecorder from "./VoiceRecorder";

class SocialDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="page-section">
        <h2 className="h3 m-2">Bank Details</h2>
        <input
          type="text"
          className="form-control m-2 p-4"
          onChange={handleChange("facebook")}
          value={values.facebook}
          placeholder="Enter Your Facebook Username"
        />
        <div className="form-group">
          <label className="h3 m-2" for="inputDescription">Description</label>
          <textarea
            className="form-control"
            id="inputDescription"
            placeholder="Description of the Complaint"
          ></textarea>

          <ImageUpload />
          <br />
          <VoiceRecorder />
          <br />
        </div>
        <button className="btn btn-secondary m-2" onClick={this.back}>
          Back
        </button>
        <button className="btn btn-primary m-2" onClick={this.continue}>
          Confirm
        </button>
      </div>
    );
  }
}

export default SocialDetails;
