---
sidebar_position: 1
---

# Workshop Overview

## Date and Location
Karlsruhe: 07.06.2022 - 08.06.2022

## Participants (Alphabetically)

[Dr. Damien Jeannerat](https://orcid.org/0000-0001-7018-4288), Dr. Gerhard Fink,
[Prof. Henry Rzepa](https://orcid.org/0000-0002-8635-8390), [Dr. Ian Bruno](https://orcid.org/0000-0003-4901-9936), [Dr. Johannes Liermann](https://orcid.org/0000-0003-2060-842X), [Mr. Mark Archibald](https://orcid.org/0000-0001-8687-7134), [Dr. Nicole Jung](https://orcid.org/0000-0001-9513-2468), Ms. Nisha Sharma, Ms. Noura Rayya, [Prof. Robert Hanson](https://orcid.org/0000-0001-5411-2356), Dr. Stefan Kuhn, [Dr. Steffen Neumann](https://orcid.org/0000-0002-7899-7192), [Mr. Venkata Chandra Sekhar Nainala](https://orcid.org/0000-0002-2564-3243)

## Repositories
### [nmrXiv](https://dev.nmrxiv.org/)
nmrXiv is an open NMR repository for raw and processed NMR data. We are planning on having a central node of nmrXiv, and then peripheral, smaller nodes of nmrXiv can be distributed geographically, where they can push the data to the central node. Those smaller nodes can have, e.g., the data from a group of researchers, and then this data gets mirrored in the central repository. The smaller nodes will be considered as the primary source of the data while the central one is the secondary source, but this shouldn’t matter as they both use the same API. We are building nmrXiv and trying to make it easy for everyone to have their own instance in a modern, cloud-based, infrastructure. The smaller node’s data might not be necessarily open, but it will be provided on a public server.
#### Project Structure
nmrXiv project is a group of studies, where each study is a group of experiments (nmrXiv datasets) related to a single sample ("pure" compound, mixture, fractionation from the chromatographic experiment, etc). nmrXiv Spectral Dataset is information related to a single experiment (e.g., 1H or 13C or any other ones), and it contains all the information related to the Sample, Assay, Molecular Structures, Substances, Spectra (RAW/ Processed files) and other metadata.

#### Sample
The sample folder uploaded to nmrXiv is ideally the instrument output folder. It corresponds to one study. If this sample has 1H and then 13C assays, each one will correspond to a dataset folder in the sample/study. We adopted this structuring as it is the way researchers preferred to share their data with us. Sample details include its components and their percentages, and this sample with its details gets passed to an assay (corresponding to a dataset). We ask the user to provide all the known details about the molecular structure, but we also accept the cases when the user doesn’t have any information about it. Additionally, we can make predictions about the structure and ask the user to confirm it. If the user knows only a part of the components of the sample, we provide the possibility to other users to contribute and say what are the missing molecules based on the spectrum. 
The sample in nmrXiv, along with its molecular details, stands as the main concept compared to other repositories adopting the concept of the molecule to which the spectrum is assigned, along with its metadata. Currently, all the preparation details are added at the level of the sample, which is the result at the end of the purification process. However, when a certain solvent is added (or any other additional materials or processes that are performed for the assay sake), this detail goes to assay level. So the differences between the derivative samples are included at the assay level, while the original sample is still considered “the sample” in nmrXiv, because we believe this is what researchers do.

#### Submission Workflow
- Files Upload: You can upload one or more folders. They can represent one project, study, or other folders’ structures. In all cases, the datasets will get detected and restructured by the repository. The samples submitted can be completely unrelated.
- Similarity Search and Spectra-Atom Assignment: Once you have the datafile, it goes into a user interface to be processed. Any additional information, such as the molecular structure, is optional, and sometimes the instrument file might already have the mol file of the structure where the structure gets viewed on the interface.
- Meta Data (Minimum Information Requirements/Validation will be implemented here): The user can provide sample details on how it was collected and prepared (solvent, tube..), along with other license details.
- Complete: The datasets get assigned IDs, and the user can modify their visibility at this step. The data can be private initially, but we expect it to be made public at some point.

#### Dataset
Dataset is the smallest unit in nmrXiv. The user can have as many datasets as they want, and they can either arrange them in projects and studies, or host them directly in nmrXiv. The dataset in nmrXiv corresponds to the instrument sample folder for a single experiment (one assay ,e.g., 1H or 13C or any other ones). This assay complies with the “ISA Assay” schema. We will have a comment system on every model of dataset for feedback and suggestions. We will also  provide private datasets, where people can have their spectra for certain purposes (like to explain them to students) and then delete it, so it doesn’t need to be public. 

#### Processing
nmrXiv can handle processed datasets, but alternatively, users can perform their processing directly on the platform.
#### Versioning
Versioning will use DOIs starting from the dataset and up the chain. The dataset metadata will be versioned too. Using [BagIt](https://tools.ietf.org/id/draft-kunze-bagit-16.html) will help versioning by hashing per dataset. This will allow revisiting old files and checking for changes and updates there. Every aspect of the repository can be versioned, and we will provide the needed IDs back and forth.
#### Schema
- Domain-specific metadata: [ISA](https://isa-specs.readthedocs.io/en/latest/isamodel.html) captures data about sample, instrument, assay and other elements in an investigation. However, we believe there are still limitations as it is fine-tuned to biological samples, and we want to make it suitable for "pure" compounds. We would like to add [FAIRspec](https://github.com/IUPAC/IUPAC-FAIRSpec) on top of ISA as it (ISA) has limitations in terms of spectra too. We don’t want to be solely ISA compatible, but we will have several layers of schema. We are interested in ISA for importing and exporting the data, especially as it comes with ontology support.
- Domain-independent metadata: We support [DataCite](https://datacite.org/) and [openAIRE](https://www.openaire.eu/) from the beginning of data submission.

#### Data formats
We intend to support as many data formats as possible. Raw data formats are minimum requirements, the user can provide any other formats they want, and we aim at converting all formats to to open ones. the metadata does not have to necessarily come from a DB, instead, it could be added by the user. nmrXiv cureently accepts anything that NMRium can process as it is the main component. It also supports JCAMP-DX, zipped Bruker folder, jeol files, and NMReData.
Mol and sdf are supported in nmrXiv, but drawing tools will be supported too.

#### Ontologies
We are interested in [nmrCV](https://terminology.nfdi4chem.de/ts/ontologies/nmrcv) and many others, as all fields in the repo will be ontology driven. To enter an ontology term, the user can start typing and we propose the completion from ontology terms we have. We can also suggest the preparation protocol to the user to complete typing.
#### Components integration
We are working on the core of nmrXiv while the other integrations can be linked with APIs, such as ELN and other workflows.

### [Chemotion](https://www.chemotion-repository.net/welcome)
#### Sections
- Publications: There are publications of samples, reactions and also scheme only reactions. “Publications” in chemotion means that there is public access to the items in this section of the repository.

![Sections](@site/static/img/image7.png)

- My DB: It leads to the user’s workspace and they can access all the data uploaded to Chemotion from others or themselves.

![My DB](@site/static/img/image6.png)

#### Sample
Samples can be categorized as parts of the reaction (starting material, reactant, solvent, product). One sample can have multiple analyses, and one analysis can have multiple datasets. We can say that the analysis is more or less a definition of the experiment, as it includes the preparation and the measurements metadata along with the line broadening and other filters.  
“Decoupled” sample option in chemotion doesn’t have a structure so it can represent a real life sample with multiple compounds. Mixtures with diastereomers can be handled with the decoupled sample too, but the molecular weight should be entered manually then. The decoupled function is already in the ELN, but it needs to be supported in the repository.

#### Submission 
Data can be submitted to the repository by:
- Uploading them directly to the repository.
- Transferring them to the repository from the ELN. The metadata comes mostly from the ELN as the two systems are interoperable.

Submission makes the data available in the repository, and after editing and reviewing by a human curator, they enter the publishing process where data get IDs assigned.

#### Curation
Automatic and Human curation is carried out before publishing the data. Human curation is needed at the moment for internal control, and also as many errors have been noticed when receiving the data, but automatic curation is sought after for the future. Curation includes multiple processes performed by multiple means, e.g., with the automatic curation, the “machine” accepts (tolerates) a certain range of deviation for “Curation and quality check” but the user can modify that.

![Curation](@site/static/img/image9.png)


#### Dataset
Dataset is a combination of data and metadata including raw file, sample and instrument metadata. The dataset in Chemotion is not similar to the Bruker dataset, as the analyses are separate in chemotion sample, and each has its own dataset, so there is a filtering step happening in chemotion based on the analysis. The relationship between the analyses is retained by providing pointers to the one sample that have all those assays.

#### Versioning
If the user has multiple entries for the same sample, e.g., to provide standard deviation details, the samples get assigned multiple versions of the same identifier.
Versioning can happen “by users” too when there are multiple versions provided by different people for the same reaction.
But this affects the persistency of the identifier, as this is a huge change. Repositories usually show only the last version ignoring the other reactions although the last one is not necessarily the most correct.

#### Citation
Reference details in Chemotion show whether the citation is the same work or something related (citing, cited by).

#### DOIs
The reaction (but not the scheme-only reaction), the sample, and the analysis have DOIs.The dataset is included in the analysis and it doesn’t have its own DOI. Each item having DOI can get its DataCite xml file downloaded with a dedicated button.

#### Reports
The user can generate reports summarizing some items in the repository which is very helpful for publishing the data. However, in the current version of the repository, linking to the article is not easy, as the report uses non-persistent identifiers (local identifiers from the ELN), which differ from the repository identifiers and the DOIs.

### [NMRShiftDB](https://nmrshiftdb.nmr.uni-koeln.de/)
NMRShiftDB adopts the concept of the molecule to which the spectrum is assigned, along with metadata, instead of the concept of the sample. Compounds and datasets have DOIs.

### Repositories Linking
#### nmrXiv-Chemotion
Samples will be sent from Chemotion along with their NMR analyses. IDs for the data facilitates that, but it is not finalized yet, neither is metadata transfer. 
Both the ELN and Chemotion repository should be linked to nmrXiv. 

The difference in conceptualization between nmrXiv and ELN, e.g., in terms of samples, should be made clear to the users.

#### Repositories where same data gets submitted
Connection between repositories is needed when the same data is submitted to multiple repositories. Using “Related identifier” is not sufficient, for the term itself is not clear as it doesn’t specify how two datasets are related (one dataset is a subset of the other? Or a result of modification? Or simply the same). This requires providing new detailed identifiers, such as “derived from” when talking about derivative samples.

## Terminology
### Terms ambiguity
Sample vs Molecule: Mainstream concept: so far is that NMR sample “has a” Molecule. This contradicts the idea of Molecules mixture within the sample, so better to be a NMR Sample “has many” Molecules.
IUPAC FAIRSpec will not refer to "molecules" or "compounds". We will instead use the term "sample", and we will refer to a "structure" in the sense of "chemical structure" with possibly several types of representations (InChI, chemical name, 2D and 3D MOL or SDF data). So there can be a 1-N relationship for sample to structure, 1-N' relationship for sample to spectrum, and N-N' relationship between structures and spectra. 

### Ontologies in NFDI4Chem
Task Area6 in NFDI4Chem helps in supporting the terminology service, and contacting the ontologies maintainers to add missing terms, or submitting pull requests there. Parts of this process can become automated to facilitate users’ suggestions of new terms.
 
At the moment, we are interested in ontologies as controlled vocabulary, but ontologies are much more versatile, so they can be used, e.g., to create  several knowledge graphs from jcamp files generated by different converters, and one can compare the graphs and find the differences.
### Ontology component in repositories and ELN
It finds terms from the [terminology service](https://terminology.nfdi4chem.de/ts/index) and suggests them to the user. When an ontology term is not available, you enter free text and forward it to ontology people (going through a controlled workflow). 

### [CHEMeDATA](https://chemedata.github.io/ontologies/)
There is a difference between the equation (theoretical, abstract) and the process (reaction in real life). All we know is that our sample comes from the reaction, and then we might do something wrong in the purification, so the analysis will be performed on that. So there is no correspondence between the molecule in the equation and the actual product initially.

## Schema
### [DataCite](https://datacite.org/)
Datacite has graphQL, which is based on PID, from which one can get knowledge graphs. Datacite is kind of a subset of schema.org. They are interested in becoming more domain friendly, as they are trying to get the metadata more complete. We will also use other metadata schemas. When the granularity can not fit DataCite, we can use the other schemas to solve it. DataCite has the dynamic data concept, as data changes over time which means that data existing at a certain point might not do at another.
#### Limitations
- It needs to be more controlled by replacing free texts with other types of entities.
A- t the moment, Datacite is very useful for croase filtering, but not for the fine one, as it is not domain-specific enough.
- It doesn’t offer “has part” or “is part of” relationships.
- You have many molecules in NMR mixtures and “many to many” relationships are needed.
Finding aid can include some subset of what DataCite provides and certainly provide PIDs to any representable object within the collection, or the collection itself. The IUPAC Finding Aid can be thought of as a domain-specific extension of the knowledge graph created by DataCite, roughly.

### [Schema.org](https://schema.org/)
[Bioschemas](https://bioschemas.org/) from Schema.org will be implemented in nmrXiv

### ISA
ISA schema provides protocols. Transformation protocol is relevant in terms of describing processes such as setting reference, baselining, solvent removal, and it can help in the standardization process, but it has problems as it comes as a free-text plus parameters. ISA is trying to be in the middle between what is optimal and what people really do, hence the protocols that are free texts with the parameters (which can come from an ontology). ISA schema can be linked to bioschema using ISA tools.

## Data formats
nmrXiv will support as much Manufacturers' and Software-specifific formats as possible. We are still looking into a standard for NMR, and whether the available formats and flavors are enough, or a new format is needed to be developed.

#### [Mnova](https://mestrelab.com/software/mnova/nmr/)
IUPAC FAIRSpec respects the value of MNova files. For example, they express the connection between structure and spectrum exactly the way the researcher intends, and they present the data in a "final" way, with expansions and peak picking and integrations the way the author has specified. So there is a value there. Still this format is problematic to handle:

- It is non-open highly proprietary format. Although it is not illegal to develop tools to read it, but it is still difficult, especially considering new emerging versions. One can in principle generate a script and the data can be extracted, but since the documents are more like a "living PDF" that has "pages" with author-arbitrary images, structures, and spectra overlaid but not semantically connected. Thus, anything that is done with them, even with tools provided by MestreLabs is likely to be a hack, involving undesirable assumptions. Our goal is to have better connectivity. 
- It does not have raw data.
- Challenging for machine readability and to maintain this readability.
- Mnova format associates the structure with the spectra only presumptively, by proximity on a page. But the user can simply take a photo and put it instead of the structure. This increases the complexity of the file where the machine-readable structure is somehow not provided. 
One could write some validation to accept only one page containing one compound and one spectrum.

#### [Mnova Publications File Format](https://data.hpc.imperial.ac.uk/resolve/?doi=4751&file=11)

The Mnova publications file format allows publishers to view and analyze the publication datasets with Mnova. The publishers must use an RSA key pair. The public key must be sent to Mestrelab, and Mestrelab will generate a corresponding certificate file (with extension mncrt). Once the publisher receives the mncrt file, they will use their private RSA key to sign their dataset, obtaining a signature. With the signature, the certification file (mncrt), and a URL to the signed dataset, an mnpub file can be composed. Mnova will read the mnpub and will verify the dataset pointed by the URL field of the mnpub, using the public key information contained in the mnpub file file.

### Converters
The converters we are using in NFDI4Chem so far:
- [Chemspectra](https://jcheminf.biomedcentral.com/articles/10.1186/s13321-020-00481-0)
- [Topspin](https://www.bruker.com/en/products-and-solutions/mr/nmr-software/topspin.html)
- [Jspecview](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2203984/)

We are in contact with Mnova to get containerized converters, so that we get NMReData from mnova. 

## [IUPAC FAIRData Metadata Object Model](https://github.com/IUPAC/IUPAC-FAIRSpec/blob/main/documents/presentations/2022.06.07-fairspec-for-nfdi.pdf)

### Digital Entities and Digital Objects
- Digital entity: Anything that can be represented by a bitstream.
- Digital object: A digital entity composed of a structured
sequence of bits that has a name and can be identified with attributes that describe its properties.
### Representations and Properties
- Representation: One of a set of digital objects that
may take any one of a number of forms that allow for various levels of data
reuse.
- Property: A key:value pair that describes a
characteristic of a digital object.
### Aggregations, Associations, and Collections
- Digital aggregation: A bundle of digital entities lacking the metadata required to provide context and to describe its contents in a machine-actionable manner.
- Association: A meaningful context-dependent connection made between two or more objects.
- Digital Collections: A bundle of digital objects with associated metadata that provide
context and characteristics of its digital objects and associations in a machine-actionable manner.

### The IUPAC FAIRData Collection
- IUPAC FAIRData Collection: A digital collection organized in
concordance with the IUPAC FAIRData Recommendations, with an associated IUPAC FAIRData Finding Aid.

## The IUPAC FAIRData Finding Aid
- UPAC FAIRData Finding Aid: A digital object that describes the collection’s representations in a machine-actionable manner, including their properties and their associations.

We are focusing on the model of how data is presented and associated, and we leave the implementation and data format as we want our system to be adaptable and our key is the finding. 

Collections can be packaged with digital finding aid: 
- It can be xml or json. 
- The finding aid can be in one place and the data is completely somewhere else. 
- The finding aid can be put in a known repository or can be globally distributed.
The finding aid will be an API endpoint. 
- It is not meant to be a landing page, as the landing page could be just another document that has javascript and css, and the javascript takes the json and interprets it. We could produce a reference implementation of a landing page while people can have the finding aid as a standalone. The landing page is just a user interface presenting all the finding aids, but it differs based on the repository using it. 
- Finding aid should make data not only findable but also harvestable, and should also present the data before publishing.
- The confidentiality of reviewers using the finding aid is taken into account. 

The [data-extractor Tool](https://github.com/IUPAC/IUPAC-FAIRSpec/tree/main/src/main/java/com/integratedgraphics/ifd) created by [Prof. Robert Hanson](https://orcid.org/0000-0001-5411-2356) was able to look into the mnova file to find structures from the binary data. This extractor is not part of the IUPAC FAIRSpec specification or data model. The extractor can find, in each mnova page, the identifying parameters and figure out what kind of NMR spectra is there. 
The finding aid can be found in the folder of data downloaded as manifest. The finding aid preserves the original mnova file, and it provides, in files, what was found (such as images) saying that this was found in page 1 or 2 (in the title).

We want the researcher to be able to connect structure to spectrum, which can be as small as linking only one structure to one spectrum. This should be available for the user, but we also, in NFDI4Chem, believe that the finding aid should be ideally provided in the ELN and the repositories. 

### The finding aid.json:
![fid.json](@site/static/img/image4.png)
Ifd finding aid is a json object with a single element that is “IFD.findingaid”, and inside it you can find: 
- type: it can be iupac finding aid "org.iupac.fairdata.contrib.fairspec.FAIRSpecFindingAid" or other extensions that are not necessarily related to spectroscopy.
- typeExtends: the “type” is an extension of another core type.
- id 
- version: it indicates the version of fairspec (or other) extension.
- created: date and time of creation.
- createdBy: url to the extractor, with its version.
- contents:
- ![fid.json content](@site/static/img/image3.png)
  - citationCount
  - resourceCount
  - collections: it is an array of items, which could be samples, spectra, structures, sample-spectra-associations (those are collections providing pointers between structures and spectra), structure-spectra associations, sample-structure associations, along with their count (e.g., 99), id (samples),  type (org.iupac.fairdata.sample.IFDSampleCollection), and typeExtend (org.iupac.fairdata.core.IFDCollection).
  We are not using the term “compound” even if the author is using it, but the concept of sample.
- citations: the extractor pulls information from the crossRef. DOI is not provided necessarily but a resolved url is., metadataSource,metadataUrl, authors,...
- ![fid.json content](@site/static/img/image1.png)
- resources
- collectionSet: it has properties including:
  - IFD.property.collectionset.len: length of collections is provided in bytes.
  - IFD.property.collectionset.ref
  - IFD.property.collectionset.source.data.license.name: e.g., cc-by-nc-4.0
  - IFD.property.collectionset.source.data.license.uri
  - IFD.property.collectionset.source.publication.uri
  - ![collectionset](@site/static/img/image5.png)
  The collectionSet also has items (array of available collections). Each item (collection) has another array of items (a sampleCollection has an array of samples). Those later items have their specific properties. So far, those properties are defined by IUPAC, but we still need ontologies to describe them. Each ontology term has a persistent url in the terminology service, which we should use as it is unique, while avoiding other options/flavors/variants to provide a certain ontology term.
  The properties are defined as a path but the path per se is not really needed as it is included already in the ontology. We should provide the properties as “key: value”, where the key is described by a ontology term, while the value is an array of acceptable ontology terms (when possible), for instance, when it comes to the dimensionality, the acceptable terms can be  [1D, 2D, 3D].
  Here you can find more details about the properties accompanying each sort of items (all of them have resourceID as well):
  - Sample:
    - label: (not an id) as the label might be not unique.
  - Structure: 
    - label
    - representations: They can be inchi, inchikey, smiles, cdx or others
  - Spectra([with exemplary values](https://github.com/IUPAC/IUPAC-FAIRSpec/blob/main/src/main/java/org/iupac/fairdata/contrib/fairspec/fairspec.properties)): 
    - "IFD.property.dataobject.fairspec.nmr.expt.dim":"1D"
    - "IFD.property.dataobject.fairspec.nmr.expt.freq.1":100.622829328806”
    - “IFD.property.dataobject.fairspec.nmr.expt.freq.2”
    - “IFD.property.dataobject.fairspec.nmr.expt.freq.3”
    - "IFD.property.dataobject.fairspec.nmr.expt.nucl.1":"13C"
    - “IFD.property.dataobject.fairspec.nmr.expt.nucl.2”
    - “IFD.property.dataobject.fairspec.nmr.expt.nucl.3”
    - "IFD.property.dataobject.fairspec.nmr.expt.pulse.prog": "zgpg30"
    - "IFD.property.dataobject.fairspec.nmr.expt.solvent": "CDCl3"
    - "IFD.property.dataobject.fairspec.nmr.expt.temperature.absolute": 298.5953
    - "IFD.property.dataobject.fairspec.nmr.expt.title": "Y12180222-0320-HWY-34.2.fid"
    - "IFD.property.dataobject.fairspec.nmr.instr.freq.nominal": 400
    - "IFD.property.dataobject.fairspec.nmr.instr.manufacturer.name": "Bruker/Mestrelab"
    - "IFD.property.dataobject.fairspec.nmr.instr.probe.type": "5 mm PABBO BB/19F-1H/D Z-GRD Z116098/0047"
    In addition to the properties, any IUPAC FAIRData Object (IFDObject type) can have parameters. Parameter are somehow similar to properties, but there is still differences:
    - Anyone can add any new parameter, while properties are controlled and more agreed on.
    - Parameters are not ontology driven.  
    - Parameters are not mandatory, It is the choice of ,e.g., the repository owner, but if they want to include them, then they should comply with FAIRspec specifications.
    - Parameters depend on the pulse sequence.  
    - We will focus on finding the properties easily with the finding aid without much digging into the data.
    The photo shows some possible spectrum properties annd parameters.
    ![fid.json content](@site/static/img/image8.png)















