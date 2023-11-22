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
