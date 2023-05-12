---
sidebar_position: 1
---

# Workshop Overview

## Date and Location
Karlsruhe: 09.06.2022 - 10.06.2022

## Participants (Alphabetically)

Mr. Adam Basha, [Prof. Albena Lederer](https://orcid.org/0000-0002-1760-6426), Mr. Alexander Grimm, [Prof. Bradley Olsen](https://orcid.org/0000-0002-7272-7140), [Prof. Christine Luscombe](https://orcid.org/0000-0001-7456-1343), [Prof. Christoph Steinbeck](https://orcid.org/0000-0001-6966-0814), [Dr. Christopher Klein](https://orcid.org/0000-0001-8028-4741), Ms. Claire Lin, [Mr. Daniel Döpping](https://orcid.org/0000-0003-1118-1970), Dr. Dominik Voll, [Mr. Jonas Eichhorn](https://orcid.org/0000-0001-7632-7112), [Ms. Leah McEwen](https://orcid.org/0000-0003-2968-1674), Mr. Lukas Siegwardt, [Prof. Martina Stenzel](https://orcid.org/0000-0002-6433-4419), Ms. Melina Feldhof, [Dr. Michael Deagen](https://orcid.org/0000-0002-8034-0667), [Prof. Michael Meier](https://orcid.org/0000-0001-7042-7606), Ms. Michele Illmann, [Dr. Nezha Badi](https://orcid.org/0000-0003-4220-571X), [Dr. Nicole Jung](https://orcid.org/0000-0001-9513-2468), Ms. Noura Rayya, [Prof. Patrick Theato](https://orcid.org/0000-0002-4562-9254), Ms. Pei-Chi Huang, [Dr. Steffen Neumann](https://orcid.org/0000-0002-7899-7192), [Dr. Susanne Boye](https://orcid.org/0000-0003-1223-2434), Ms. Tasnim Mehzabin, [Dr. Valerian Hirschberg](https://orcid.org/0000-0001-8752-930X).

## Introduction
### [Data Life Cycle](https://docs.google.com/presentation/d/18Iifpy29e8_T0kKRpGzD5XZqtmgB2AdR/edit#slide=id.g132bd33a3ce_1_0)
![Data Life Cycle](@site/static/img/cycle.png)
In this cycle, the Electronic Lab Notebook (ELN) role comes mainly in the Experiment/Data Collection step, where acquisition and documentation can happen, while repositories facilitate the data Disclosure and Publication. Those repositories include RADAR4Chem, which is a generic repository where we have the flexibility, but we miss the structure needed. Another repository is Chemotion. Both are open to all countries.

### [NFDI4Chem Support for Data Publication](https://docs.google.com/presentation/d/18Iifpy29e8_T0kKRpGzD5XZqtmgB2AdR/edit#slide=id.g132bd33a3ce_1_262)
- [Lead-by-example](https://www.nfdi4chem.de/index.php/2022/02/02/data-pledge-lets-lead-by-example-2/): We would like to collect datasets that are as complete as possible today using the tools developed in NFDI4Chem.
- [NFDI4Chem helpdesk](https://www.nfdi4chem.de/index.php/helpdesk/): It provide consulting on how to structure the data.
- [NFDI4Chem workshop series on RDM (Research Data Management)](https://www.nfdi4chem.de/index.php/event/workshop-fair-research-data-management-basics-for-chemists/):
We provide talks and receive questions. Registration is open, and we have many events coming. The workshops (online) are open to all people, and internationalization is part of our mission.

### [The Minimum Information on Chemistry Investigations (MIChI)](https://docs.google.com/presentation/d/18Iifpy29e8_T0kKRpGzD5XZqtmgB2AdR/edit#slide=id.g132bd33a3ce_1_161)
Data needs to be associated with metadata, otherwise, data loses context. Metadata can be domain independent (funder, publisher, author, dates..) or specific, as in the domain of chemistry. We are especially interested in the Minimum Information subset out of the metadata, which we call minimum information on Chemistry investigation (MIChI). We can store the MIChI standards on specific repositories like FAIRsharing.

We would like to provide our MIChI as:
- Guidelines article: Useful for students and researchers.
- Checklist for authors
- Data Model: A conceptual idea for the programmers.
- Ontology terms: to support the MIChI. 
- Implementation can happen in ELNs and repositories, and behind the scene, you have the APIs, databases, and the file formats.

Structured data can be tedious work, but it saves a lot of time later when we need to publish, it is also essential for reusability

### [Publication with Chemotion](https://docs.google.com/presentation/d/18Iifpy29e8_T0kKRpGzD5XZqtmgB2AdR/edit#slide=id.g13276bf8c50_0_0)
Using Chemotion ELN or repository, one can generate reports that contain the description, the reaction scheme, identifiers and information coming from the identifiers (such as the molecular mass). If the data comes from the repository, the report contains its DOI. Supplemental information then can be submitted to the journals.
If the data is already published in journals, corresponding links can be added to the “Reference” section.

Supplemental information is already partially standardized for organic chemistry but not completely, as standardized elements such as the names and identifiers are being used in larger non-standardized sections, such as the description and results.


## [Introduction in Polymer Chemistry](https://docs.google.com/presentation/d/18Iifpy29e8_T0kKRpGzD5XZqtmgB2AdR/edit#slide=id.g1321c6861e1_0_16)

### Polymer 101
A macromolecule is the single chain while the polymer is an ensemble of macromolecules (multiple macromolecular chains), this is challenging as we need to look into both the macromolecule and the polymer. Additionally, polymers have distributions in their chain length, the broadness of distribution depends on the synthetic way and we don’t have those issues in the macromolecule. However, the information on the macromolecule level and the polymer level go hand in hand.

One can synthesize aspirin by many methods, paths, and people, and the same material will always be obtained. But in the case of polymers, one will get another polymer each time, as the resulting polymers might have similar properties, but they still differ on the molecular level. This is why we are always dealing with statistical distribution when dealing with polymers.

### Naming Polymers

It is challenging as different principles are followed. 
- Source based naming: Starting from the monomer and adding poly in front of it. It is an easy way, but it doesn’t always work and it is not always correct.
- IUPAC, based on constitutional repeating units: IUPAC naming works only for simple polymers, but then it becomes very long.
- Abbreviations and acronyms: They can be not clear for non polymer chemists.
- Trade names are useful for narrow fields.
- There are also rules for SMILES and big SMILES that are not much easy to use regularly. 

### [From Small Molecules to Polymers - Challenges with Digitalization](https://docs.google.com/presentation/d/18Iifpy29e8_T0kKRpGzD5XZqtmgB2AdR/edit#slide=id.g13276bf8c50_0_10)
- Small molecules can be analyzed by relatively simple methods, such as NMR, IR, and MS, but when they form a polymer or an oligomer, they need more difficult and specialized methods, such as SEC, MALDI-ToF, SEC/ESI MS.
- The repeating units in the product polymer can be controlled during the reaction, but such details are difficult to mirror in ELNs (such as [Chemotion ELN](https://www.chemotion.net/chemotionsaurus/index.html)). The same happens with nested polymers structures, which are very common.
- The materials generated from polymers can undergo further procedures (post modifications) that are difficult to include in ELNs.
- When it comes to polymers, we have neither standardized names, reaction information, sample structures, nor repositories entries with  identifiers.

## Polymers Minimum Information 
Many MI are actually expanding to become "Maximum" standards and they are really extensive. This problem can be tackled by having several levels of mandations, e.i., mandatory, recommened, and optional. The ELN might be a great first data-entry spot where these levels can be tranlsated into flags. ELNs can also serve by collecting statistics on how people report their data, where all input fields can start as optional, and based on a certain suggested percentage of users reporting this data, it can become recommended or later mandatory. There remains the risk of people report random data when Forced to fill in the mandatory fields which they don't have.

One point to keep in mind about MI is its dependency on the field, e.g., for battery science you might only care about ion connectivity where molecular weight might not be of concern. This can easily be noticed in the different journals. 


### Polymers Description - On The Way to MIChI
There is some basic information that can be used to describe polymers and the procedures carried out to generate them. In the following table you can find a basic description of a polymer.

| Information  | Details |
| :---:        | :----:| 
| Synthesis      | method, yield, degree of polymerization | 
| Chemical identity   | Which polymer is this? What additives are present? Is there contamination?        | 
| Morphology   | Amount of crystallinity (tacticity?), optical properties| 
| Molecular weight   | M<sub>n</sub>, M<sub>w</sub>, etc. : Molecular weight distribution Ð = M<sub>w</sub>/M<sub>n</sub>|
|Solution behavior| Viscosity, flow, gel| 
| Solution behavior   | Viscosity, flow, gel| 
| Thermal behavior   | Glass transition, melt and decomposition temperature, melt viscosity| 
| Mechanical properties  | Tensile strength, modulus, impact, creep, dimensional stability| 

And next you can find a basic description of a polymer generation process with its expected metadata. Most important ones are highlighted.

| Step        | Sub-steps      | 
| :---: |:-------------:| 
|Humans     | <ul><li>Idea</li><li>Affiliation</li><li>Partners</li><li>Funding</li></ul> | 
| Planning | <ul><li>Hypothesis</li><li>Arrays</li><li>Structures</li></ul>      | 
| Synthesis | <ul><li>**Method**</li><li>**Conditions**</li><li>**Repetition?**</li><li>Multiple steps?</li><li>Online analytics</li><li>Failure?</li><li>Contamination</li></ul> |  
| Analytics |  <ul><li>Hypothesis</li><li>**Instruments**</li><li>**Preparation**</li><li>**M<sub>w</sub>**</li><li>Solubility</li><li>Thermal</li><li>Mechanical</li></ul>     | 
| Processing Application        | <ul><li>Prparation</li><li>Additives</li><li>Casting</li><li>Extrusion</li><li>Post-modification</li><li>Lifecycle</li><li>Recycling?</li><li>Performance</li></ul>|

## Polymers in Electronic Structure Editors
There are several available electronic structure editors that can handle polymers and, from which, Chemotion ELN users can pick, including:
- Ketcher
- Marvin 
- ChemDraw
- HELM

### ChemDraw
- Most people in the workshop only use Chemdraw, but:
- It provides a wide span of functions which polymer chemists don’t actually use.
- It needs more documentation. 
- It is not possible to define []<sub>x-y</sub>.

![chemDraw1](@site/static/img/chemDraw1.png)
![chemDraw2](@site/static/img/chemDraw2.png)


## Polymers in Electronic Lab Notebooks
On top of what the editors provide, ELNs can describe procceses as planned, ongoing, succeeded, failed. This becomes handy remembering the importance of maintaining failure results, which people might not be interested in publishing at the beginning, but these results are very important on their own to show others what actually works, and also for machine learning as better training comes with a mixed of good and bad data.  This is still challenging when it comes to publications as reviewers might not be interested, and such results are usually not provided in the supporting material. We need to record what the polymer community finds useful and we can work on it day to day.

Furthermore, ELNs help in keeping notes on why you picked a certain parameter, e.g. why an experiment is done at a certain temperature, along with the random variables not thought of by the researcher, which they might miss recording.

When it comes to MI, ELNs can prevent the scenario of needing to report a certain mandatory parameter, but failing to do so as it wasn't recorded during the experiment. But more discussion is needed for MIs in ELNs, for instance, in addition to showing and describing the polymer, we still need to provide the dataset, the repeating units, and how they are linked because it is something you can’t show in chemdraw and you need to describe in words, along with the application in mind, on which the polymer charectrisitcs depend. 


## Future Discussions
- What is the Minimum Information in polymer synthesis?
- What is the Minimum Information in structural characterization?
- What is the Minimum Information in property characterization?

- What is the most suitable structure editor for polymerstool? 
- Can all editors mentioned in this overview be used adequately? 
- What definitions are necessary in ELN/for documentation? 
