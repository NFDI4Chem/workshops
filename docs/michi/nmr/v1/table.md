---
sidebar_position: 2
---

# Tabular Guidelines

Level 1: Required Minimum information. Can be identified by cardinality no less than 1 and by having green background. 

Level 2: Recommended. Can be identified by cardinality starting from 0 and by by having yellow background. 
<div style={{overflowX: 'auto', width: '151%'}}>
<table >
  <tr style={{ backgroundColor: '#009cbc', color: 'white', fontWeight: 'bold'}}>
    <td>No.</td>
    <td>Property</td>
    <td>NFDI4Chem ID</td>
    <td>Definition</td>
    <td>Export Format</td>
    <td>C</td>
    <td>Human-Readable Example</td>
    <td>Machine-Readable Example</td>
    <td>Comments</td>
  </tr>
  <tr style={{ backgroundColor: '#000000', color: 'white', fontWeight: 'bold'}}>
    <td>1</td>
    <td>NMR Spectroscopy Assay</td>
    <td>nfdi.nmr.assay</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/obi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FOBI_0000623&obsoletes=false" style={{ textDecoration: 'underline'}}>NMR spectroscopy assay (OBI:0000623)</a></td>
    <td></td>
    <td>1</td>
    <td>Human-Readable Example</td>
    <td>Machine-Readable Example</td>
    <td>By an assay, we mean the single NMR measurement (1H, HSQC...) and not the entire experiment where multiple assays are possibly run.</td>
  </tr>
  <tr style={{ backgroundColor: '#666666', color: 'white', fontWeight: 'bold'}}>
    <td>1.1</td>
    <td>NMR Sample</td>
    <td>nfdi.nmr.sample</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400128" style={{ textDecoration: 'underline'}}>NMR sample (NMR:1400128)</a></td>
    <td></td>
    <td>1</td>
    <td></td>
    <td></td>
    <td>By an NMR sample, we mean the last sample ready for placing in the instrument, i.e., in liquid-state NMR, it will already have the NMR solvent added along with other possible additions.</td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.1.1</td>
    <td>Characterized Compound</td>
    <td>nfdi.nmr.sample.compound</td>
    <td>A compound characterized in an NMR sample using data acquired from an NMR analysis. </td>
    <td>
      <li>mol </li>
      <li>ChEBI ID or IRI that is a leaf of the ontology term <a href="https://terminology.nfdi4chem.de/ts/ontologies/chebi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHEBI_23367&obsoletes=false" style={{ textDecoration: 'underline'}}>molecular entity (CHEBI:23367)</a></li>
      <li>PubChem ID </li>
    </td>
    <td style={{ whiteSpace: 'nowrap'}}>1-n</td>
    <td>caffeine </td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/chebi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHEBI_27732&obsoletes=false" style={{ textDecoration: 'underline'}}>CHEBI:27732</a></td>
    <td>This value is to be filled in after the assignment. mol file is mandatory, while CHEBI and PubChem entries are only recommended be provided when available.</td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.1.2</td>
    <td>NMR Solvent</td>
    <td>nfdi.nmr.sample.solvent</td>
    <td><a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:197449" style={{ textDecoration: 'underline'}}>NMR solvent (CHEBI:197449)</a></td>
    <td>
      ChEBI ID for a molecular entity that has the <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:197449" style={{ textDecoration: 'underline'}}>NMR solvent (CHEBI:197449)</a>
    </td>
    <td style={{ whiteSpace: 'nowrap'}}>1-n</td>
    <td>D₂O </td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/chebi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHEBI_41981&obsoletes=false" style={{ textDecoration: 'underline'}}>CHEBI:41981</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.1.2.1</td>
    <td>NMR Solvent Volume/Volume Ratio</td>
    <td>nfdi.nmr.sample.solvent.ratio</td>
    <td> <a href="https://www.ebi.ac.uk/ols4/ontologies/snomed/classes/http%3A%2F%2Fsnomed.info%2Fid%2F282380000?iri=http%3A%2F%2Fsnomed.info%2Fid%2F282380000" style={{ textDecoration: 'underline'}}>Volume/volume ratios (SNOMED:282380000)</a> of <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:197449" style={{ textDecoration: 'underline'}}>NMR solvents (CHEBI:197449)</a></td>
    <td>A number without unit</td>
    <td style={{ whiteSpace: 'nowrap'}}>1-n</td>
    <td>D₂O: 90</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/chebi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHEBI_41981&obsoletes=false" style={{ textDecoration: 'underline'}}>CHEBI:41981</a>: 90</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.1.3</td>
    <td>Chemical Shift Calibration Compound</td>
    <td>nfdi.nmr.sample.<br/>chemical_shift_calibration_compound</td>
    <td>A compound that produces one or more peaks used to calibrate the spectrum.</td>
    <td>An ChEBI ID for a leaf from <a href="https://terminology.nfdi4chem.de/ts/ontologies/proco/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHEBI_23367&obsoletes=false" style={{ textDecoration: 'underline'}}>molecular entity (CHEBI:23367)</a></td>
    <td>1</td>
    <td>TMS</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1000029" style={{ textDecoration: 'underline'}}>NMR:1000029</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.1.3.1</td>
    <td>Chemical Shift Calibration Compound Peak Shift</td>
    <td>nfdi.nmr.sample.<br/>chemical_shift_calibration_compound.<br/>peak_shift</td>
    <td>The chemical shift of the peak used for chemical shift calibration.</td>
    <td>A number with unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000169&obsoletes=false" style={{ textDecoration: 'underline'}}>ppm (UO:0000169)</a></td>
    <td>1</td>
    <td>7.26 ppm</td>
    <td>7.26 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000169&obsoletes=false" style={{ textDecoration: 'underline'}}>UO:0000169</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.1.4</td>
    <td>NMR Sample Tube Diameter</td>
    <td>nfdi.nmr.sample.tube_diameter</td>
    <td>The outer diameter of the <a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400132" style={{ textDecoration: 'underline'}}>NMR sample tube (NMR:1400132)</a></td>
    <td>A number with unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000016&obsoletes=false" style={{ textDecoration: 'underline'}}>millimeter (UO:0000016)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>5 mm</td>
    <td>5 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000016&obsoletes=false" style={{ textDecoration: 'underline'}}>UO:0000016</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.1.5</td>
    <td>NMR Sample Tube Type</td>
    <td>nfdi.nmr.sample.tube_type</td>
    <td>The type of the <a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400132" style={{ textDecoration: 'underline'}}>NMR sample tube (NMR:1400132)</a></td>
    <td>A leaf of <a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400132" style={{ textDecoration: 'underline'}}>NMR sample tube (NMR:1400132)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>Young, coaxial, Shigemi...</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1000269" style={{ textDecoration: 'underline'}}>NMR:1000269</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#666666', color: 'white', fontWeight: 'bold'}}>
    <td>1.2</td>
    <td>NMR Acquisition Parameters</td>
    <td>nfdi.nmr.acquisition</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1001954" style={{ textDecoration: 'underline'}}>NMR acquisition parameter (NMR:1001954)</a></td>
    <td></td>
    <td>1</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.2.1</td>
    <td>Acquisition Nucleus</td>
    <td>nfdi.nmr.acquisition.nucleus</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400083" style={{ textDecoration: 'underline'}}>Acquisition Nucleus (NMR:1400083)</a></td>
    <td><b>The nuclei of atoms</b> identified by ChEBI IDs that are leaves of the ontology term <a href="https://terminology.nfdi4chem.de/ts/ontologies/chebi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHEBI_33250&obsoletes=false" style={{ textDecoration: 'underline'}}>atom (CHEBI:33250)</a>
    </td>
    <td style={{ whiteSpace: 'nowrap'}}>1-d</td>
    <td>13C</td>
    <td>The nucleus of <a href="https://terminology.nfdi4chem.de/ts/ontologies/chebi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHEBI_36928&obsoletes=false" style={{ textDecoration: 'underline'}}>CHEBI:36928</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.2.2</td>
    <td>Nominal Proton Frequency</td>
    <td>nfdi.nmr.acquisition.<br/>proton_frequency</td>
    <td>Resonance frequency of 1H at the <a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400253&obsoletes=false" style={{ textDecoration: 'underline'}}>field strength of the NMR magnet (NMR:1400253)</a>, rounded to 10-fold numbers.</td>
    <td>A number with unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000325&obsoletes=false" style={{ textDecoration: 'underline'}}>megaHertz (UO:0000325)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>1-d</td>
    <td>400 MHz</td>
    <td>400 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000325&obsoletes=false" style={{ textDecoration: 'underline'}}>UO:0000325</a></td>
    <td>Users must provide precision of 10-folds numbers</td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.2.3</td>
    <td>NMR Method</td>
    <td>nfdi.nmr.acquisition.method</td>
    <td>An analytical method used in NMR spectroscopy defined by the class of pulse sequence and number of dimensions.</td>
    <td>Children from <a href="https://terminology.nfdi4chem.de/ts/ontologies/chmo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHMO_0000613&obsoletes=false" style={{ textDecoration: 'underline'}}>pulsed nuclear magnetic resonance spectroscopy (CHMO:0000613)</a></td>
    <td>1</td>
    <td>HSQC</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/chmo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHMO_0000604&obsoletes=false" style={{ textDecoration: 'underline'}}>CHMO:0000604</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.2.4</td>
    <td>Pulse Sequence Name</td>
    <td>nfdi.nmr.acquisition.pulse</td>
    <td>The name of the pulse sequence used to perform the acquisition.</td>
    <td>Free text</td>
    <td>1</td>
    <td>zg30</td>
    <td>zg30</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.2.5</td>
    <td>Flip Angle</td>
    <td>nfdi.nmr.acquisition.flip_angle</td>
    <td><a href="https://www.degruyter.com/document/doi/10.1515/pac-2019-0203/html" style={{ textDecoration: 'underline'}}>Rotation that the net magnetization experiences during the application of a radiofrequency pulse in nuclear magnetic resonance spectroscopy.</a></td>
    <td>A number with unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000185&obsoletes=false" style={{ textDecoration: 'underline'}}>degree (UO:0000185)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>90°</td>
    <td>90 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000185&obsoletes=false" style={{ textDecoration: 'underline'}}>UO:0000185</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.2.6</td>
    <td>Relaxation Delay</td>
    <td>nfdi.nmr.acquisition.relaxation_delay</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400090" style={{ textDecoration: 'underline'}}>relaxation delay (NMR:1400090)</a></td>
    <td>A number with unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000010&obsoletes=false" style={{ textDecoration: 'underline'}}>second based unit (UO:1000010)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>2 sec</td>
    <td>2 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000010&obsoletes=false" style={{ textDecoration: 'underline'}}>UO:0000010</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.2.7</td>
    <td>Number of Acquisition Data Points</td>
    <td>nfdi.nmr.acquisition.<br/>number_of_acquisition_data_points</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400017" style={{ textDecoration: 'underline'}}>number of acquisition data points (NMR:1400017)</a></td>
    <td>A number with unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.allotrope.org%2Fontologies%2Fresult%23AFR_0000186&obsoletes=false" style={{ textDecoration: 'underline'}}>data point (AFR:0000186)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-d</td>
    <td>32768 data points</td>
    <td>32768 <a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.allotrope.org%2Fontologies%2Fresult%23AFR_0000186&obsoletes=false" style={{ textDecoration: 'underline'}}>AFR:0000186</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.2.8</td>
    <td>Sample Temperature Information</td>
    <td>nfdi.nmr.acquisition.temperature</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400262" style={{ textDecoration: 'underline'}}>sample temperature information (NMR:1400262)</a></td>
    <td>A number with unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_00000012&obsoletes=false" style={{ textDecoration: 'underline'}}>kelvin (UO:0000012)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>298.15 Kelvin</td>
    <td>298.15 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_00000012&obsoletes=false" style={{ textDecoration: 'underline'}}>UO:0000012</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.2.9</td>
    <td>Number of Scans</td>
    <td>nfdi.nmr.acquisition.<br/>number_of_scans</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400087" style={{ textDecoration: 'underline'}}>number of scans (NMR:1400087)</a></td>
    <td>A number</td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>8</td>
    <td>8</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.2.10</td>
    <td>Pulse Power or Pulse Power Gradient</td>
    <td>nfdi.nmr.acquisition.pulse_power</td>
    <td>The power of the applied RF pulse. Or the power gradient of the applied RF pulse.</td>
    <td>A number with unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000114&obsoletes=false" style={{ textDecoration: 'underline'}}>watt based unit (UO:1000114)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-d</td>
    <td>10 Watt</td>
    <td>10 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000114&obsoletes=false" style={{ textDecoration: 'underline'}}>UO:1000114</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.2.11</td>
    <td>Spectral Width</td>
    <td>nfdi.nmr.acquisition.spectral_width</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1000175&obsoletes=false" style={{ textDecoration: 'underline'}}>Sweep Width (NMR:1000175)</a></td>
    <td>A number with unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000106" style={{ textDecoration: 'underline'}}>hertz (UO:0000106) </a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-d</td>
    <td>5000 Hz</td>
    <td>5000 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000106" style={{ textDecoration: 'underline'}}>UO:0000106</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.2.12</td>
    <td>Acquisition Time</td>
    <td>nfdi.nmr.acquisition.acquisition_time</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.allotrope.org%2Fontologies%2Fresult%23AFR_0001158&obsoletes=false" style={{ textDecoration: 'underline'}}>acquisition time (AFR:0001158)</a></td>
    <td>A number with unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000010" style={{ textDecoration: 'underline'}}>second based unit (UO:1000010)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-d</td>
    <td>20 sec</td>
    <td>20 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000010" style={{ textDecoration: 'underline'}}>UO:0000010</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.2.13</td>
    <td>Usage of Shaped Radio Frequency Pulse</td>
    <td>nfdi.nmr.acquisition.shaped_pulse</td>
    <td>Whether a <a href="https://terminology.nfdi4chem.de/ts/ontologies/chmo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHMO_0001870&obsoletes=false" style={{ textDecoration: 'underline'}}>shaped radio frequency pulse (CHMO:0001870)</a> was used.</td>
    <td>A <a href="https://terminology.nfdi4chem.de/ts/ontologies/sio/terms?iri=http%3A%2F%2Fsemanticscience.org%2Fresource%2FSIO_000268&obsoletes=false" style={{ textDecoration: 'underline'}}>truth value (SIO:000268)</a>: True or False</td>
    <td style={{ whiteSpace: 'nowrap'}}>0-d</td>
    <td>TRUE</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/sio/terms?iri=http%3A%2F%2Fsemanticscience.org%2Fresource%2FSIO_000269&obsoletes=false" style={{ textDecoration: 'underline'}}>SIO:000269</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.2.14</td>
    <td>Mixing Time</td>
    <td>nfdi.nmr.acquisition.mixing_time</td>
    <td>The duration during which coherence transfer occurs between different nuclear spins, allowing for the correlation of different frequencies.</td>
    <td>A number with unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000010" style={{ textDecoration: 'underline'}}>second based unit (UO:1000010)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>0.5 sec</td>
    <td>0.5 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000010" style={{ textDecoration: 'underline'}}>UO:0000010</a></td>
    <td style={{ backgroundColor: '#d9ead3'}}>Mandatory for NOE, TOCSY</td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.2.15</td>
    <td>Constant Time</td>
    <td>nfdi.nmr.acquisition.constant _time</td>
    <td>The fixed time period in a <a href="https://terminology.nfdi4chem.de/ts/ontologies/chmo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHMO_0001874&obsoletes=false" style={{ textDecoration: 'underline'}}>constant time method (CHMO:0001874) </a></td>
    <td>A number with unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000010" style={{ textDecoration: 'underline'}}>second based unit (UO:1000010)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>0.5 sec</td>
    <td>0.5 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000010" style={{ textDecoration: 'underline'}}>UO:0000010</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#666666', color: 'white', fontWeight: 'bold'}}>
    <td>1.3</td>
    <td>NMR Instrument</td>
    <td>nfdi.nmr.instrument</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400059" style={{ textDecoration: 'underline'}}>NMR instrument (NMR:1400059)</a></td>
    <td></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.3.1</td>
    <td>NMR Instrument Manufacturer</td>
    <td>nfdi.nmr.instrument.manufacturer</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400255" style={{ textDecoration: 'underline'}}>NMR instrument manufacturer (NMR:1400255)</a></td>
    <td>An nmrCV ID which is a leaf from <a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400255" style={{ textDecoration: 'underline'}}>NMR instrument manufacturer (NMR:1400255)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>Bruker</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400256" style={{ textDecoration: 'underline'}}>NMR:1400256</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.3.2</td>
    <td>NMR Instrument Model</td>
    <td>nfdi.nmr.instrument.model</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1000031" style={{ textDecoration: 'underline'}}>NMR instrument model (NMR:1000031)</a></td>
    <td>An nmrCV ID for a leaf from <a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400059&obsoletes=false" style={{ textDecoration: 'underline'}}>NMR instrument (NMR:1400059)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>AVANCE III HD</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1000371" style={{ textDecoration: 'underline'}}>NMR:1000371</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.3.3</td>
    <td>NMR Probe</td>
    <td>nfdi.nmr.instrument.probe</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400014" style={{ textDecoration: 'underline'}}>NMR probe (NMR:1400014)</a></td>
    <td>An nmrCV ID for a leaf from <a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400014" style={{ textDecoration: 'underline'}}>NMR probe (NMR:1400014)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>5mm inverse detection cryoprobe</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1000326" style={{ textDecoration: 'underline'}}>NMR:1000326</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#666666', color: 'white', fontWeight: 'bold'}}>
    <td>1.4</td>
    <td>NMR Data Processing</td>
    <td>nfdi.nmr.processing</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400042" style={{ textDecoration: 'underline'}}>NMR data processing (NMR:1400042)</a></td>
    <td></td>
    <td style={{ whiteSpace: 'nowrap'}}>1-n</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.4.1</td>
    <td>Chemical Shift Reference Compound</td>
    <td>nfdi.nmr.processing.<br/>chemical_shift_reference_compound</td>
    <td><a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:228364" style={{ textDecoration: 'underline'}}>NMR chemical shift reference compound (CHEBI:228364)</a></td>
    <td>An ChEBI ID for a molecular entity that has the <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:228364" style={{ textDecoration: 'underline'}}>role NMR chemical shift reference compound (CHEBI:228364)</a></td>
    <td>1</td>
    <td>TMS</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/chebi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHEBI_85361&obsoletes=false" style={{ textDecoration: 'underline'}}>CHEBI:85361</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.4.2</td>
    <td>Number of Zero Filling Points</td>
    <td>nfdi.nmr.processing.zero_filling</td>
    <td>Number of data points of the FID after zero filling.</td>
    <td>A number with unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.allotrope.org%2Fontologies%2Fresult%23AFR_0000186&obsoletes=false" style={{ textDecoration: 'underline'}}>data point (AFR:0000186)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-n</td>
    <td>256000 data points</td>
    <td>256000 <a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.allotrope.org%2Fontologies%2Fresult%23AFR_0000186&obsoletes=false" style={{ textDecoration: 'underline'}}>AFR:0000186</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.4.3</td>
    <td>Window Function for Apodization</td>
    <td>nfdi.nmr.processing.<br/>apodization_function</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400068" style={{ textDecoration: 'underline'}}>window function for apodization (NMR:1400068)</a></td>
    <td>An nmrCV ID for a leaf from <a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400068" style={{ textDecoration: 'underline'}}>window function for apodization (NMR:1400068)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-n</td>
    <td>gaussian broadening</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400070" style={{ textDecoration: 'underline'}}>NMR:1400070</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.4.3.1</td>
    <td>Window Function Parameters</td>
    <td>nfdi.nmr.processing.<br/>apodization_function.parameters</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400096" style={{ textDecoration: 'underline'}}>window function parameter (NMR:1400096)</a></td>
    <td>Depends on the function</td>
    <td style={{ whiteSpace: 'nowrap'}}>0-n</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.4.4</td>
    <td>Baseline Correction</td>
    <td>nfdi.nmr.processing.<br/>baseline_correction</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400074" style={{ textDecoration: 'underline'}}>baseline correction (NMR:1400074)</a></td>
    <td>An nmrCV ID for a leaf from <a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400074" style={{ textDecoration: 'underline'}}>baseline correction (NMR:1400074)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-n</td>
    <td>polynomial </td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1000225" style={{ textDecoration: 'underline'}}>NMR:1000225</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.4.4.1</td>
    <td>Baseline Correction Parameters</td>
    <td>nfdi.nmr.processing.<br/>baseline_correction.parameters</td>
    <td>A parameter to a baseline correction function.</td>
    <td>Depends on the function</td>
    <td style={{ whiteSpace: 'nowrap'}}>0-n</td>
    <td></td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1000225" style={{ textDecoration: 'underline'}}>NMR:1000225</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.4.5</td>
    <td>Phase Correction</td>
    <td>nfdi.nmr.processing.<br/>phase_correction</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1000071" style={{ textDecoration: 'underline'}}>phase correction (NMR:1000071)</a></td>
    <td>An nmrCV ID for a leaf from <a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1000071" style={{ textDecoration: 'underline'}}>phase correction (NMR:1000071)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-n</td>
    <td>manual</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1000096" style={{ textDecoration: 'underline'}}>NMR:1000096</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.4.5.1</td>
    <td>Zero Order Phase Correction (ph0)</td>
    <td>nfdi.nmr.processing.<br/>phase_correction.ph0</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400079" style={{ textDecoration: 'underline'}}>zero order phase correction (NMR:1400079)</a></td>
    <td>A number with unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000185&obsoletes=false" style={{ textDecoration: 'underline'}}>degree (UO:0000185)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-n</td>
    <td>-3.45684728°</td>
    <td>-3.45684728 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000185&obsoletes=false" style={{ textDecoration: 'underline'}}>UO:0000185</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.4.5.2</td>
    <td>First Order Phase Correction (ph1)</td>
    <td>nfdi.nmr.processing.<br/>phase_correction.ph1</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv/terms?iri=http%3A%2F%2FnmrML.org%2FnmrCV%23NMR%3A1400080" style={{ textDecoration: 'underline'}}>first order phase correction (NMR:1400080)</a></td>
    <td>A number with unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000185&obsoletes=false" style={{ textDecoration: 'underline'}}>degree (UO:0000185)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-n</td>
    <td>4.457289234°</td>
    <td>4.457289234 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000185&obsoletes=false" style={{ textDecoration: 'underline'}}>UO:0000185</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.4.6</td>
    <td>Usage of Absolute Correction</td>
    <td>nfdi.nmr.processing.<br/>absolute_correction</td>
    <td>Whether a method was used that removes phase information like power or magnitude mode.</td>
    <td>A <a href="https://terminology.nfdi4chem.de/ts/ontologies/sio/terms?iri=http%3A%2F%2Fsemanticscience.org%2Fresource%2FSIO_000268&obsoletes=false" style={{ textDecoration: 'underline'}}>truth value (SIO:000268)</a>: True or False</td>
    <td style={{ whiteSpace: 'nowrap'}}>0-n</td>
    <td>TRUE</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/sio/terms?iri=http%3A%2F%2Fsemanticscience.org%2Fresource%2FSIO_000269&obsoletes=false" style={{ textDecoration: 'underline'}}>SIO:000269</a></td>
    <td></td>
  </tr>

</table>
</div>


				