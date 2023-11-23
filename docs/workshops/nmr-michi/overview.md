---
sidebar_position: 1
---

# Workshop Overview

## Date and Location
Jena: 19.07.2023

## Participants (Alphabetically)
[Prof. Christoph Steinbeck](https://orcid.org/0000-0001-6966-0814), Dr. Eva Ziegler, [Dr. Johannes Liermann](https://orcid.org/0000-0003-2060-842X), [prof Luc Patiny](https://orcid.org/0000-0002-4943-2643), [Dr. Nils Schlörer](https://orcid.org/0000-0002-0990-9582) ,   Ms. Nisha Sharma, Ms. Noura Rayya, Dr. Pavel Kessler, [Dr. Stefan Kuhn](https://orcid.org/0000-0002-5990-4157), [Dr. Steffen Neumann](https://orcid.org/0000-0002-7899-7192), [Dr. Tillmann Fischer](https://orcid.org/0000-0003-4480-8661), [Mr. Venkata Chandra Sekhar Nainala](https://orcid.org/0000-0002-2564-3243)


## Recommendations Standard for Reporting Liquid-State NMR Experiments of Small Molecules
This recommendations standard is a proposal from [NFDI4Chem](https://www.nfdi4chem.de/) of what metadata to report for liquid-state NMR experiments of small molecules. We aim to make it suitable for NMR repositories and the supplementary materials of publications, not for the metadata in the experiment section. Therefore, we want to emphasize that the chemist doesn't need to enter their data in the recommended format as long as the repository is capable of converting it. For instance, the user might only upload NMR datasets, then NMRium extracts the solvent, and the repository does the mapping to the CHEBI instance.

While forging this standard, we have considered two aspects: How to make sense of the data on the first hand, where we need the minimum mentioned here in the first level, and data traceability and reproducibility, where details like the number of scans and the instrument become very useful, so we asked for them in the second level.

The recommendations started with metadata for reporting NMR analyses of synthetic compounds only, covering the reaction leading to the analyzed product. Then the decision was taken to split the recommendations and remove the synthetic compounds section to make them more modular and broader to cover all small molecules, including natural products, synthetic compounds, and mixtures where we have known molecules. They also started by making crucial and automatically extractable metadata ([by NMRium](https://www.nmrium.org/)) mandatory, which can encourage chemists to use automatic workflows, and we made metadata relevant to impurities recommended. However, for historical data, authors might fail to submit with restricted minimum information (MI), which led to the decision to keep automatically extractable metadata recommended if it wasn't crucial.

[Here is the link to the recommendations draft](https://docs.google.com/document/d/1fPltMeYXRmpCnzSOznekDpavrbIqzrpMyd8plNnrYcU/edit), which will be open for editing until publication.

##  Scientific applications development - NMRium

Here we show Zakodium approach for the development of NMRium and how to make programming fair. Central to their methodology is the creation of highly sought-after libraries, such as React components including parsers, jcamp or Bruker converters, and tools for generating jcamp from other data.Zakodium adopts the practice of conventional committing to facilitate the automated generation of the change log based on bug fixes and new features, seamlessly closing associated issues. They harness continuous integration and leverage automatic GitHub testing. "Coverage" tells how much of the code was tested and which lines weren't, usually over 80% of the code is tested. 

To ensure the visibility and accessibility of their projects, Zakodium utilizes the Zenodo platform for publication, thereby obtaining Digital Object Identifiers (DOIs). Furthermore, they incorporate a "CITATION.cff" file, streamlining the generation of project citations in various formats, such as plain text or BibTeX. 

### Building React Application:

In the construction of React Applicationa, Zakodium employs a modular approach, relying on a multitude of specialized libraries for the graphical user interface (GUI), React components, and other functionalities. Impressively, over 60 libraries managed by Zakodium are integrated into NMRium, each serving specific purposes such as converters, structure viewing, and data loading and saving. A notable example is the 'nmr-load-save' library, capable of extracting comprehensive metadata from raw files within NMRium. Another case in point is 'Pixelium,' a library primarily focused on image processing. While not directly related to NMR, Pixelium extensively utilizes libraries originally created for NMRium, showcasing the versatility and cross-applicability of their development efforts. The team employs GitHub projects feature, providing a comprehensive overview of ongoing work and enabling the archiving of completed tasks. Automation is key in their workflow, with automatic bug reporting integrated into NMRium to promptly flag and address issues as they arise.

### New NMRium Features
NMRium introduces a range of new features that enhance its capabilities:

- **Multiplet analysis**: Conduct multiplet analysis directly within the browser without the need for downloads, where you can display multiplicity trees, show the structure and do the assignment.The relation between the tables, molecule and spectra is interactive.
- **Databases**: NMRium incorporates a versatile database featur to have databases for solvent or references for instance. Users can perform searches based on structure, substructure, or shifts. Additionally, there is advanced search to look for specific atoms.
Simulation:
- **Prediction**: Offering both 1D and 2D prediction capabilities, NMRium predicts spectra based on user-provided structures. It is also interactive. 
- **Simulation**: A novel addition, the simulation feature enables spectrum generation by entering values directly into the table, which is particularly beneficial for educational purposes
- **Metabolomics**: NMRium excels in handling substantial gigabyte-sized files even within the browser. Filtering options enable users to navigate and extract relevant information from large amount of files based on specific criteria such as the type.
- **e-learning**: You process the spectrum and and propose a structure and you find if correct or not.

### Formats Discussion 

In our considerations of data formats, it's crucial to draw a distinction between archival formats and those tailored for processing. A case in point is mzML, which, despite its stability over time, has faced reservations among users for certain applications. In Massbank, there exists a diversity of formats, including the less-documented Bruker MS, in contrast to the well-documented Bruker NMR.
In the context of NMRium, an approach encapsulating both original and processed data within a single JSON file is adopted. Notably, the utilization of JSON holds the promise of longevity, as its readability is anticipated to endure over the next 30 years. Audit trails are needed and we need to be able to read the data in 30 years from now.

## Towards Open NMR Data Formats - What We Want and What We Can Have
[Dr. Johannes Liermann Presentation](https://docs.google.com/presentation/d/1QFzXAtckjrZBRC-RhCfl1dPXBVNx7wFiLdT-7kz_cGc/edit#slide=id.g255fdc7fa39_0_0)

We prepare a sample with a molecule and in the spectrometer we get information that we want to assign to the molecule, which results in several layers of NMR data: raw data, processed data, assignment data and another layer that is the metadata. In higher levels in NMR it is difficult to tell what is data and what is metadata.

There are several NMR formats available:

- **JCAMP**: Text-based format with tags defining both metadata and actual data along with the binary data, making it lengthy if uncompressed.
- **Bruker**: Utilizes a folder structure with various files. 'fid' file holds binary data from acquisition. 'acqu' file relates to JCAMP and provides metadata. Bruker dataset is comprehensive, containing all necessary elements to reproduce an NMR experiment.
- **nmrML**: Employs an embedded ontology, distinguishing itself as probably the only one of the  NMR formats utilizing ontology. Predominantly recognized in the metabolomics and biology domains but can be adapted for broader use.
- **NMReData**: Focuses beyond spectral data, extending into sdf structure and enriching it with 1D, 2D, assignments, coupling constants, and correlations.

The landscape: JCAMP and Bruker cover raw and processed data and if at all assignment data.
nmrML covers a little assignment but not designed for that. NMReDara is covers only assignment data.

### Challenges Examples:


    Challenge: 
    Solution: Establishing a machine-readable syntax for pulse sequences can aid in identifying experiments and their parameters within the repository.


- **Flip angle in Bruker**: Obtaining the flip angle information requires reference to the pulse sequence, which may be clear for chemists but poses difficulty for developers. Recognizing the specific NMR experiment, such as HMBC, within a repository can indeed be challenging due to the diverse pulse sequence names. However, they all follow a machine readable syntax that can identify the experiment.
- **TOCSY Experiment Naming Complexity**: TOCSY experiment names can be intricate, especially when the term "TOCSY" is not explicitly mentioned.
- **Deciphering Pulse Program Information**: In cases like d8 representing the mixing time, finding the relevant information in the dataset file (D field) may be challenging as you have to find the 8th one.
- **Locating Coupling Constants**: Coupling constants may be embedded in the pulse sequence, requiring additional steps for retrieval.
- **Ontologies**: Maintaining consistency in units, solvent values, and experiment types can be challenging without standardized ontologies. We need to actively contribute to and utilize available NMR ontologies

### Discussion:

Establishing a mapping between ontology descriptions and vendors' datasets emerges as a crucial step. Later on, software can take an ontology and select a relevant branch of it for example to ask the user to pick a solvent. To initiate the effective integration of ontologies into a format, the we need following considerations: The primary requirement is to incorporate unique identifiers for ontology terms, as the software doesn’t need to understand the semantic of the term at this level. Integration of a unit ontology can enhance the consistency and accuracy of data representation. 

What do we want from an open NMR format? Do we need one to start with?

- Bruker's documentation being open is a positive step. If it becomes even more widely adopted, it could potentially fulfill the needs of the NMR community, and it might reduce the immediate need for a separate open format. Developing and maintaining an open format requires considerable resources and collaboration. Modernizing Bruker formats might be a pragmatic approach, given their widespread usage.

- JCAMP's popularity for Electronic Lab Notebooks (ELNs) makes it challenging to replace with Bruker formats,. Overlapping documentation for various analytical techniques using JCAMP can lead to confusion and hinder effective utilization. Despite JCAMP's capacity for metadata, there are limitations in including crucial information, emphasizing the need for enhancements. JCAMP's textual nature poses challenges for modern parsers, discouraging efforts to update and modernize it. The lack of a standardized way to validate JCAMP, requiring parsers writing for all "standard" versions, adds complexity to the format. Introducing ontologies into JCAMP may face resistance due to concerns that such modifications might not align with the preferences or understanding of chemists.

Collaborating with IUPAC by incorporating elements from Bruker and seeking IUPAC recommendations could be a strategic approach to improving and modernizing JCAMP. We can enhance JCAMP by identifying and determining the minimum information missing there and incorporating them. Utilizing the dot in JCAMP for optional fields could offer a structured way to add relevant information specific to NMR.

### We Are Still Stuck With The Question of What Format to Go With

- The consensus is to focus on enhancing existing formats rather than developing entirely new ones. The applied modifications should remain minimal. 
- Acknowledgment that JCAMP, while popular, has limitations and misses important elements. This serves as a motivation to enhance and improve the format to capture more comprehensive data. A suggestion to take the JCAMP model and provide an additional serialization in JSON format, while emphasizing the importance of validation and testing, particularly for industry use.

Conclusion:
- Considering the option of having the existing files with an additional JSON file for metadata. We need use cases where available formats fall short is highlighted. Existing NMR formats are not perceived as "bad enough" to warrant the development of entirely new formats. This reflects a pragmatic approach to evolving the current standards.
