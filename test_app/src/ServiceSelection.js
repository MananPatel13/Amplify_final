import React, { useState } from 'react';
import './SS.css';

function ServiceSelection({ handleSelection }) {
  const [selectedServices, setSelectedServices] = useState({
    usecase: '',
    cloudProvider: '',
    llms: '',
    dataConnectors: '',
  });

  const handleServiceSelection = (service, value) => {
    setSelectedServices((prevState) => ({
      ...prevState,
      [service]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSelection(selectedServices);
  };

  return (
    <form onSubmit={handleSubmit} className="service-selection-form">
      <h2>Customise Usecase</h2>

      <div className="form-group">
        <label htmlFor="selectusecase">Select Usecase</label>
        <select
          id="selectusecase"
          value={selectedServices.usecase}
          onChange={(e) => handleServiceSelection('usecase', e.target.value)}
        >
          <option value="">Select Usecase</option>
          <option value="UsecaseOption1">Gen-QA</option>
          <option value="UsecaseOption2">Text Summarizer</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="selectcloudProvider">Cloud Provider</label>
        <select
          id="selectcloudProvider"
          value={selectedServices.cloudProvider}
          onChange={(e) => handleServiceSelection('cloudProvider', e.target.value)}
        >
          <option value="">Select Cloud Provider</option>
          <option value="cloudProviderOption1">AWS</option>
          <option value="cloudProviderOption2">GCP</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="selectllms">Best LLMs</label>
        <select
          id="selectllms"
          value={selectedServices.llms}
          onChange={(e) => handleServiceSelection('llms', e.target.value)}
        >
          <option value="">Select LLMs</option>
          <option value="llmsOption1">Option 1</option>
          <option value="llmsOption2">Option 2</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="selectdataConnectors">Data Connectors</label>
        <select
          id="selectdataConnectors"
          value={selectedServices.dataConnectors}
          onChange={(e) => handleServiceSelection('dataConnectors', e.target.value)}
        >
          <option value="">Select Data Connectors</option>
          <option value="dataConnectorsOption1">S3</option>
          <option value="dataConnectorsOption2">Gcp Bucket</option>
        </select>
      </div>

      {/* Add similar code for other service selections here */}

      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ServiceSelection;
