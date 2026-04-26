---
sidebar_position: 2
---

# Tabular Guidelines

Level 1: Required Minimum information. It can be identified by cardinality no less than 1 and by having a green background. 

Level 2: Recommended. It can be identified by cardinality starting from 0 and by having a yellow background. 

Level 3: Optional. It can be identified by cardinality starting from 0 and by having a red background. 

<div style={{overflowX: 'auto', width: '151%'}}>
<table >
  <tr style={{ backgroundColor: '#009cbc', color: 'white', fontWeight: 'bold'}}>
    <td>No.</td>
    <td>Property</td>
    <td>Definition</td>
    <td>Export Format</td>
    <td>Cardinality</td>
    <td>Human-Readable Example</td>
    <td>Machine-Readable Example</td>
    <td>Comments</td>
  </tr>
  <tr style={{ backgroundColor: '#000000', color: 'white', fontWeight: 'bold'}}>
    <td>1</td>
    <td>Ultra-Violet-Visible Absorption Spectrophotometry Assay</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/chmo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHMO_0000292&obsoletes=false" style={{ textDecoration: 'underline'}}>ultraviolet-visible spectrophotometry (CHMO:0000292)</a></td>
    <td></td>
    <td>1</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#666666', color: 'white', fontWeight: 'bold'}}>
    <td>1.1</td>
    <td>Ultra-Violet-Visible Absorption Spectrophotometry Sample</td>
    <td>A sample that has been investigated by a chemical analysis by UV-Vis absorption spectrophotometry</td>
    <td></td>
    <td>1</td>
    <td></td>
    <td></td>
    <td>By a UV-Vis sample, we mean the last sample ready for placing in the instrument, i.e., it will already have the UV-Vis solvent added along with other possible additions.</td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.1.1</td>
    <td>Analysed Compound<br/>and/or<br/>Sample ID</td>
    <td>Analysed Compound : A compound analysed as part of UV-Vis absorption Spectrophotometry sample using data acquired from an UV-Vis Absorption Sample analysis.<br/><br/>and/or<br/><br/>Sample ID: The URL identifying a sample and leading to the sample history including its preparation.</td>
    <td>
      <p>Analysed Compound:</p>
      <ul>
        <li><a href="https://terminology.nfdi4chem.de/ts/ontologies/edam/terms?iri=http%3A%2F%2Fedamontology.org%2Fformat_3815&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>Molfile (EDAM:3815)</a></li>
       <li>ChEBI URL for a leaf from <a href="https://terminology.nfdi4chem.de/ts/ontologies/nmrcv2025/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHEBI_23367&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>molecular entity (CHEBI:23367)</a></li>
       <li>PubChem URL</li>
       </ul>
       <p>Sample ID:</p>
       <ul><li><a href="https://terminology.nfdi4chem.de/ts/ontologies/edam/terms?iri=http%3A%2F%2Fedamontology.org%2Fdata_1052&obsoletes=false" style={{ textDecoration: 'underline'}}>URL (EDAM:1052)</a></li></ul>
    </td>
    <td style={{ whiteSpace: 'nowrap'}}>1-n</td>
    <td>caffeine </td>
    <td><a href="http://purl.obolibrary.org/obo/CHEBI_27732" style={{ textDecoration: 'underline'}}>CHEBI:27732</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.1.1.1</td>
    <td>Concentration</td>
    <td>The concentration of the Analysed Compound in the sample.</td>
    <td>
    <div>A number with a unit that is a leaf from:</div>
    <ul>
    <li><a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000062&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>molar based unit (UO:1000062)</a></li>
    <li><a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000180&obsoletes=false" style={{ textDecoration: 'underline'}}>mass per unit volume based unit (UO:1000180)</a></li>
    <li><a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000205&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>volume per unit volume (UO:0000205)</a></li>
    </ul>
    </td>
    <td style={{ whiteSpace: 'nowrap'}}>0-n</td>
    <td>0.5 molar</td>
    <td>0.5 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000062&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>UO:0000062</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.1.2</td>
    <td>UV-Vis Solvent</td>
    <td>A solvent used to prepare the UV-Vis Absorption sample.</td>
    <td>ChEBI URL for a molecular entity that has the <a href="https://www.ebi.ac.uk/chebi/searchId.do;jsessionid=8ECE991EB274EC926BEB3932923177D4?chebiId=CHEBI%3A46787" style={{ textDecoration: 'underline'}}>role solvent (CHEBI:46787)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>1-n</td>
    <td>Water</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000062&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>CHEBI:15377</a></td>
    <td>For solid UV-Vis, the solvent can be reported as none.</td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.1.2.1</td>
    <td>UV-Vis Solvent Volume/Volume Ratio</td>
    <td> <a href="https://www.ebi.ac.uk/ols4/ontologies/snomed/classes/http%3A%2F%2Fsnomed.info%2Fid%2F282380000?iri=http%3A%2F%2Fsnomed.info%2Fid%2F282380000" style={{ textDecoration: 'underline'}}>Volume/volume ratios (SNOMED:282380000)</a> of UV-Vis Solvent or buffer to a second solvent</td>
    <td>A number without unit</td>
    <td style={{ whiteSpace: 'nowrap'}}>1-n</td>
    <td>Water: 90</td>
    <td><a href="https://www.ebi.ac.uk/chebi/beta/CHEBI:15377" style={{ textDecoration: 'underline'}}>CHEBI:15377</a>: 90</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.1.3</td>
    <td>Buffer Solution Name</td>
    <td>The name of <a href="https://terminology.nfdi4chem.de/ts/ontologies/chmo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHMO_0001462&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>buffer solution (CHMO:0001462)</a></td>
    <td>ChEBI URL for a leaf from <a href="https://terminology.nfdi4chem.de/ts/ontologies/edam/terms?iri=http%3A%2F%2Fedamontology.org%2Fformat_3815&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>molecular entity (CHEBI:23367)</a></td>
    <td>0-1</td>
    <td>ammonium acetate</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/chebi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHEBI_62947&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>CHEBI:62947</a></td>
    <td>Mandatory if applicable</td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.1.4</td>
    <td>Buffer pH</td>
    <td>The pH of the <a href="https://terminology.nfdi4chem.de/ts/ontologies/chmo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHMO_0001462&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>buffer solution (CHMO:0001462)</a></td>
    <td>A number without unit</td>
    <td>0-1</td>
    <td>5</td>
    <td>5</td>
    <td>Mandatory if applicable</td>
  </tr>
   <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.1.5</td>
    <td>Buffer Concentration</td>
    <td>The <a href="https://terminology.nfdi4chem.de/ts/ontologies/chmo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHMO_0002820&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>concentration (CHMO:0002820) </a>of the <a href="https://terminology.nfdi4chem.de/ts/ontologies/chmo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHMO_0001462&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>buffer solution (CHMO:0001462)</a></td>
    <td>
    <div>A number with a unit that is a leaf from:</div>
    <ul>
    <li><a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000062&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>molar based unit (UO:1000062)</a></li>
    <li><a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000180&obsoletes=false" style={{ textDecoration: 'underline'}}>mass per unit volume based unit (UO:1000180)</a></li>
    <li><a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000205&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>volume per unit volume (UO:0000205)</a></li>
    </ul>
    </td>
    <td>0-1</td>
    <td>10 mM</td>
    <td>10 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000063&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>mM</a></td>
    <td>Mandatory if applicable</td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.1.6</td>
    <td>Ionic Strength</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/ncit/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FNCIT_C52478&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>Ionic Strength (NCIT:C52478)</a></td>
    <td>
    <div>A number with a unit that is a leaf from:</div>
    <ul>
    <li><a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000062&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>molar based unit (UO:1000062)</a></li>
    <li><a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000067&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>unit of molality (UO:0000067)</a></li>
    </ul>
    </td>
    <td>0-1</td>
    <td>15 mM</td>
    <td>15 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000063&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>mM</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.1.7</td>
    <td>Buffer Additive</td>
    <td>A substance added to a <a href="https://terminology.nfdi4chem.de/ts/ontologies/chmo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHMO_0001462&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>buffer solution (CHMO:0001462)</a>to provide specific properties or stability that the primary buffering agents cannot provide on their own.</td>
    <td>ChEBI URL for a leaf from <a href="https://terminology.nfdi4chem.de/ts/ontologies/edam/terms?iri=http%3A%2F%2Fedamontology.org%2Fformat_3815&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>molecular entity (CHEBI:23367)</a></td>
    <td>0-n</td>
    <td>sodium chloride</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/obi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHEBI_26710&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>CHEBI:26710</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.1.8</td>
    <td>Cell Path Length</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.allotrope.org%2Fontologies%2Fresult%23AFR_0001997&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>cell path length (AFR:0001997)</a></td>
    <td>A number with a unit that is a leaf from<a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000008&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>meter based unit (UO:1000008)</a></td>
    <td>1</td>
    <td>10 mm</td>
    <td>10<a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000016&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>UO:0000016</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.1.9</td>
    <td>Cell Material</td>
    <td>The <a href="https://terminology.nfdi4chem.de/ts/ontologies/chemrof/terms?iri=https%3A%2F%2Fw3id.org%2Fchemrof%2FMaterial&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>chemrof:Material </a>of the cell</td>
    <td>Free text</td>
    <td>0-1</td>
    <td>quartz</td>
    <td>quartz</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#f4cccc', color: 'black'}}>
    <td>1.1.10</td>
    <td>Cell Manufacturer</td>
    <td>The <a href="https://terminology.nfdi4chem.de/ts/ontologies/obi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FOBI_0000835&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>manufacturer (OBI:0000835) </a>of the cell</td>
    <td>Free text</td>
    <td>0-1</td>
    <td>Hellma Analytics</td>
    <td>Hellma Analytics</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#f4cccc', color: 'black'}}>
    <td>1.1.11</td>
    <td>Cell Catalog Number</td>
    <td>The <a href="https://terminology.nfdi4chem.de/ts/ontologies/obi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FOBI_0000835&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>Catalog Number (NCIT:C99286) </a></td>
    <td>Free text</td>
    <td>0-1</td>
    <td>100-QS-10</td>
    <td>100-QS-10</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#666666', color: 'white', fontWeight: 'bold'}}>
    <td>1.2</td>
    <td>Acquisition Parameters</td>
    <td>Parameters used in the UV-Vis Absorption Spectrophotometry</td>
    <td></td>
    <td>1</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.2.1</td>
    <td>Sample Temperature</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.allotrope.org%2Fontologies%2Fresult%23AFR_0002149&obsoletes=false" style={{ textDecoration: 'underline'}}>sample temperature (AFR:0002149)</a></td>
    <td>A number with a unit: <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000012&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>kelvin (UO:0000012)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>1</td>
    <td>298.15 Kelvin</td>
    <td>298.15 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000012&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>UO:0000012</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.2.2</td>
    <td>Start of Wavelength Range </td>
    <td>The shortest wavelength defined in the measurement scan, from which the spectrometer begins recording the absorbance of the sample</td>
    <td>
    <div>A number with a unit: </div>
    <ul>
      <li>Wavelength (λ)<a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000018&obsoletes=false" style={{ textDecoration: 'underline'}}>nanometer (UO:0000018)</a></li>
      <li>Frequency<a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000106&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>hertz based unit (UO:1000106)</a></li>
      <li>Wavenumber cm⁻¹<a href="https://terminology.nfdi4chem.de/ts/ontologies/ro/props?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0015012&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>reciprocal of (RO:0015012)</a><a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000015&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>centimeter (UO:0000015)</a></li>
      </ul>
    </td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>200 nm</td>
    <td>200 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000018&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>UO:0000018</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.2.3</td>
    <td>End of Wavelength Range</td>
    <td>The longest wavelength defined in the measurement scan, at which the spectrometer stops recording the absorbance of the sample.</td>
    <td>
    <div>A number with a unit: </div>
    <ul>
      <li>Wavelength (λ)<a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000018&obsoletes=false" style={{ textDecoration: 'underline'}}>nanometer (UO:0000018)</a></li>
      <li>Frequency<a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000106&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>hertz based unit (UO:1000106)</a></li>
      <li>Wavenumber cm⁻¹<a href="https://terminology.nfdi4chem.de/ts/ontologies/ro/props?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0015012&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>reciprocal of (RO:0015012)</a><a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000015&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>centimeter (UO:0000015)</a></li>
      </ul>
    </td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>400 nm</td>
    <td>400 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000018&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>UO:0000018</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.2.4</td>
    <td>Data Interval</td>
    <td>The instrument setting determining the wavelength increment between consecutive data points collected during a spectral scan.</td>
    <td>
    <div>A number with a unit: </div>
    <ul>
      <li>Wavelength (λ)<a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000018&obsoletes=false" style={{ textDecoration: 'underline'}}>nanometer (UO:0000018)</a></li>
      <li>Frequency<a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000106&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>hertz based unit (UO:1000106)</a></li>
      <li>Wavenumber cm⁻¹<a href="https://terminology.nfdi4chem.de/ts/ontologies/ro/props?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0015012&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>reciprocal of (RO:0015012)</a><a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000015&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>centimeter (UO:0000015)</a></li>
      </ul>
    </td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>1 nm</td>
    <td>1 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000018&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>UO:0000018</a></td>
    <td>Please note that this is the user input, not the device's maximum possible resolution. It has a synonym: resolution.</td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.2.5</td>
    <td>Bandwidth</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.allotrope.org%2Fontologies%2Fquality%23AFQ_0000198&obsoletes=false" style={{ textDecoration: 'underline'}}>detection bandwidth (AFQ:0000198)</a></td>
    <td>
    <div>A number with a unit: </div>
    <ul>
      <li>Wavelength (λ)<a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000018&obsoletes=false" style={{ textDecoration: 'underline'}}>nanometer (UO:0000018)</a></li>
      <li>Frequency<a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000106&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>hertz based unit (UO:1000106)</a></li>
      <li>Wavenumber cm⁻¹<a href="https://terminology.nfdi4chem.de/ts/ontologies/ro/props?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0015012&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>reciprocal of (RO:0015012)</a><a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000015&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>centimeter (UO:0000015)</a></li>
      </ul>
    </td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>1 nm</td>
    <td>1 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000018&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>UO:0000018</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#f4cccc', color: 'black'}}>
    <td>1.2.6</td>
    <td>Scan Rate</td>
    <td>The speed at which a UV-Vis spectrophotometer scans across a range of wavelengths when collecting spectral data.</td>
    <td>
      <div>A number with a unit:<a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000280&obsoletes=false" style={{ textDecoration: 'underline'}}>:rate unit (UO:0000280)</a></div>
      <ul>
        <li>Nanometer per second (nm/s)</li>
        <li>Frequency<a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_1000106&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>hertz based unit UO:1000106</a></li>
        <li> reciprocal centimeter per second cm^-1/s</li>
      </ul>
    </td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>240 nm/min</td>
    <td>240 nm/min</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#f4cccc', color: 'black'}}>
    <td>1.2.7</td>
    <td>UV-Vis Average Time (or Averaging Time)</td>
    <td>The duration over which the instrument collects and averages the signal for each wavelength point during a spectral scan.</td>
    <td>A number with a unit that is a leaf from: <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000003&obsoletes=false" style={{ textDecoration: 'underline'}}>time unit (UO:0000003)</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>1 second</td>
    <td>1 <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000010&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>UO:0000010</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#f4cccc', color: 'black'}}>
    <td>1.2.8</td>
    <td>Beam Mode</td>
    <td>The setup configuration of the instrument’s light path, impacting how the light interacts with the sample and reference.</td>
    <td>Free text. CV in preparation <a href="https://github.com/NFDI4Chem/workshops/issues/19" style={{ textDecoration: 'underline'}}>https://github.com/NFDI4Chem/workshops/issues/19</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>Single-Beam Mode</td>
    <td>Single-Beam Mode</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#f4cccc', color: 'black'}}>
    <td>1.2.9</td>
    <td>Number of Averages</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.allotrope.org%2Fontologies%2Fresult%23AFR_0001673&obsoletes=false" style={{ textDecoration: 'underline'}}>number of measurement averages (AFR:0001673)</a></td>
    <td>A number with a unit: average</td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>3 averages</td>
    <td>3 averages</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#666666', color: 'white', fontWeight: 'bold'}}>
    <td>1.3</td>
    <td>Instrument</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/chmo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHMO_0001803&obsoletes=false" style={{ textDecoration: 'underline'}}>ultraviolet–visible spectrometer (CHMO:0001803)</a></td>
    <td></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.3.1</td>
    <td>Instrument Manufacturer</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/ncit/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FNCIT_C156625&obsoletes=false" style={{ textDecoration: 'underline'}}>Device Manufacture (NCIT:C156625)</a></td>
    <td>Free text. CV in preparation <a href="https://github.com/NFDI4Chem/workshops/issues/19" style={{ textDecoration: 'underline'}}>https://github.com/NFDI4Chem/workshops/issues/19</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>Agilent Technologies</td>
    <td>Agilent Technologies</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.3.2</td>
    <td>Instrument Model</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/ncit/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FNCIT_C177610&obsoletes=false" style={{ textDecoration: 'underline'}}>Instrument Model (NCIT:C177610)</a></td>
    <td>Free text. CV in preparation <a href="https://github.com/NFDI4Chem/workshops/issues/19" style={{ textDecoration: 'underline'}}>https://github.com/NFDI4Chem/workshops/issues/19</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>Agilent Cary 60</td>
    <td>Agilent Cary 60</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#f4cccc', color: 'black'}}>
    <td>1.3.3</td>
    <td>Light source</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/obi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FOBI_0400065&obsoletes=false" style={{ textDecoration: 'underline'}}>light source (OBI:0400065)</a></td>
    <td>Free text. CV in preparation <a href="https://github.com/NFDI4Chem/workshops/issues/19" style={{ textDecoration: 'underline'}}>https://github.com/NFDI4Chem/workshops/issues/19</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-n</td>
    <td>Deuterium lamp</td>
    <td>Deuterium lamp</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#666666', color: 'white', fontWeight: 'bold'}}>
    <td>1.4</td>
    <td>Acquisition Software</td>
    <td>Software related to the recording of spectra.</td>
    <td></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#f4cccc', color: 'black'}}>
    <td>1.4.1</td>
    <td>Software Name</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.allotrope.org%2Fontologies%2Fresult%23AFR_0002802&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>software name (AFR:0002802)</a></td>
    <td>Free text. CV in preparation <a href="https://github.com/NFDI4Chem/workshops/issues/19" style={{ textDecoration: 'underline'}}>https://github.com/NFDI4Chem/workshops/issues/19</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>Cary WinUV</td>
    <td>Cary WinUV</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#f4cccc', color: 'black'}}>
    <td>1.4.2</td>
    <td>Software Version</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.allotrope.org%2Fontologies%2Fresult%23AFR_0001700&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>software version (AFR:0001700)</a></td>
    <td>Free text. CV in preparation <a href="https://github.com/NFDI4Chem/workshops/issues/19" style={{ textDecoration: 'underline'}}>https://github.com/NFDI4Chem/workshops/issues/19</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>5.3</td>
    <td>5.3</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#666666', color: 'white', fontWeight: 'bold'}}>
    <td>1.5</td>
    <td>Data Processing</td>
    <td></td>
    <td></td>
    <td style={{ whiteSpace: 'nowrap'}}>1</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.5.1</td>
    <td>X axis Label</td>
    <td>The label of the X axis in the UV-Vis spectrum</td>
    <td><li>Wavelength (λ) <a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FPATO_0001242&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>wavelength (quality) PATO:0001242</a></li>
      <li>Frequency <a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.allotrope.org%2Fontologies%2Fresult%23AFR_0001732&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>frequency AFR:0001732</a></li>
      <li>Wavenumber <a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.allotrope.org%2Fontologies%2Fresult%23AFR_0001592&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>wavenumber AFR:0001592</a></li></td>
    <td>1</td>
    <td>Wavelength (λ)</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FPATO_0001242&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>PATO:0001242</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.5.2</td>
    <td>X axis Unit</td>
    <td>The unit of the X axis in the UV-Vis spectrum</td>
    <td><li>Wavelength (λ): <a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000018&obsoletes=false" style={{ textDecoration: 'underline'}}>nanometer (UO:0000018)</a></li>
      <li>Frequency: <a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.allotrope.org%2Fontologies%2Fresult%23AFR_0001732&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>frequency AFR:0001732</a></li>
      <li>Wavenumber: cm⁻¹</li></td>
    <td style={{ whiteSpace: 'nowrap'}}>1</td>
    <td>nm</td>
    <td><a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000018&obsoletes=false" style={{ textDecoration: 'underline'}}>UO:0000018</a></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.5.3</td>
    <td>Y axis  Label</td>
    <td>The label of the Y axis in the UV-Vis spectrum</td>
    <td><li>Absorbance (A)<a href="https://terminology.nfdi4chem.de/ts/ontologies/afo/terms?iri=http%3A%2F%2Fpurl.allotrope.org%2Fontologies%2Fquality%23AFQ_0000061&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>AFQ:0000061</a><a href="https://terminology.nfdi4chem.de/ts/ontologies/uo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FUO_0000269&obsoletes=false&lang=en" style={{ textDecoration: 'underline'}}>Absorbance Units (AU)</a></li>
      <li>Molar absorption coefficient (ε)</li>
      <li>Log Absorbance (Log A)</li>
      <li>Intensity</li></td>
    <td style={{ whiteSpace: 'nowrap'}}>1</td>
    <td>Molar absorption coefficient (ε)</td>
    <td>Molar absorption coefficient (ε)</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#d9ead3', color: 'black'}}>
    <td>1.5.4</td>
    <td>Y axis Unit</td>
    <td>The unit of the Y axis in the UV-Vis spectrum</td>
    <td><li>Absorbance (A) / Absorbance Units (AU): null (dimensionless)</li>
      <li>Molar absorption coefficient (ε): L⋅mol−1⋅cm−1</li>
      <li>Log Absorbance (Log A): null</li>
      <li>Intensity: W/cm2</li></td>
    <td style={{ whiteSpace: 'nowrap'}}>1</td>
    <td>L⋅mol−1⋅cm−1</td>
    <td>L⋅mol−1⋅cm−1</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.5.5</td>
    <td>Baseline Correction Algorithm</td>
    <td>The name of the algorithm used for Baseline Correction.</td>
    <td>Free text. CV in preparation <a href="https://github.com/NFDI4Chem/workshops/issues/19" style={{ textDecoration: 'underline'}}>https://github.com/NFDI4Chem/workshops/issues/19</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>Linear Baseline Correction</td>
    <td>Linear Baseline Correction</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.5.5.1</td>
    <td>Baseline Correction Parameter</td>
    <td>A parameter to a baseline correction function.</td>
    <td>Free text</td>
    <td style={{ whiteSpace: 'nowrap'}}>0-n</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.5.6</td>
    <td>Smoothing Algorithm</td>
    <td>The name of the algorithm used for Smoothing</td>
    <td>Free text. CV in preparation <a href="https://github.com/NFDI4Chem/workshops/issues/19" style={{ textDecoration: 'underline'}}>https://github.com/NFDI4Chem/workshops/issues/19</a></td>
    <td style={{ whiteSpace: 'nowrap'}}>0-1</td>
    <td>Moving Average</td>
    <td>Moving Average</td>
    <td></td>
  </tr>
  <tr style={{ backgroundColor: '#fff2cc', color: 'black'}}>
    <td>1.5.6.1</td>
    <td>Smoothing parameters</td>
    <td>A parameter to a smoothing correction function.</td>
    <td>Free text</td>
    <td style={{ whiteSpace: 'nowrap'}}>0-n</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
</div>


				