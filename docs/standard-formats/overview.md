---
sidebar_position: 1
---

# Workshop Overview

## Date and Location
Hannover: 11.10.2022

## Participants (Alphabetically)
Mr. Adam Basha, Mr. Bhavin Katabathuni, [Prof. Christoph Steinbeck](https://orcid.org/0000-0001-6966-0814), Ms. Claire Lin, [Dr. David Rauh](https://orcid.org/0000-0001-7499-1693), [Dr.-Ing Felix Bach](https://orcid.org/0000-0002-5035-7978), [Dr. Giacomo Lanza](https://orcid.org/0000-0002-2239-3955), Dr. Holger Israel, Dr. Joachim Richert, [Dr. Johannes Liermann](https://orcid.org/0000-0003-2060-842X), [Ms. Leah McEwen](https://orcid.org/0000-0003-2968-1674), [Michael Klix](https://orcid.org/0000-0002-0591-6582), Ms. Nikki Parks, Ms. Nisha Sharma, Ms. Noura Rayya, Ms. Pei-Chi Huang, [Philip Strömert](https://orcid.org/0000-0002-1595-3213), [Dr. René Meier](https://orcid.org/0000-0002-1501-1349), [Dr. Rukeia El-Athman](https://orcid.org/0000-0003-0749-160X), [Dr. Steffen Neumann](https://orcid.org/0000-0002-7899-7192), Dr. Timothy holbrook, [Dr. Tobias Schulze](https://orcid.org/0000-0002-9744-8914)

## Data Formats in General
[Dr. Steffen Neumann Presentation](https://docs.google.com/presentation/d/1OBIs4V_jp3JP0l4PcVJwTyohha2P4q04s0vxJE3ZkJg/edit#slide=id.g12376113ab6_0_2)

There are [several standards](https://docs.google.com/presentation/d/1OBIs4V_jp3JP0l4PcVJwTyohha2P4q04s0vxJE3ZkJg/edit#slide=id.g1257ae3bac8_7_280) to specify files' content. Ontologies are of the most important. Here we provide some branches that provide definitions of file formats:
- [EDAM Format](https://terminology.nfdi4chem.de/ts/ontologies/edam/terms?iri=http%3A%2F%2Fedamontology.org%2Fformat_1915&viewMode=All&siblings=false)
- [cheminf- e.g., MOLfile](https://terminology.nfdi4chem.de/ts/ontologies/cheminf/terms?iri=http%3A%2F%2Fsemanticscience.org%2Fresource%2FCHEMINF_000058&viewMode=All&siblings=false)
- [swo - data format specification](https://www.ebi.ac.uk/ols/ontologies/swo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FIAO_0000098). 


## Vibrational Spectroscopy 
[Dr. Timothy Holbrook Presentatioin](https://docs.google.com/presentation/d/1OBIs4V_jp3JP0l4PcVJwTyohha2P4q04s0vxJE3ZkJg/edit#slide=id.g1552c92008e_0_0)

Vibrational Spec Files' metadata often lacks normalization and standardization as it comes from different manufacturers. When it comes to ontologies, [NFDI4Chem](https://www.nfdi4chem.de/) is developing the [Vibrational Spectroscopy Ontology](https://github.com/NFDI4Chem/VibrationalSpectroscopyOntology) to represent execution and analysis of vibrational spectroscopy assays metadata. Building this ontology still requires more domain experts' involvement to provide the needed terms, such as the devices with their parts and configuration parameters. 

## Nuclear Magnetic Resonance Spectroscopy
[Ms. Noura Rayya Presentation](https://docs.google.com/presentation/d/1WtDW0D7OIDuVL70w8j3hinPgj-J8Ai_5l_Hy2vsk01s/edit#slide=id.g15eb7e5b52a_0_95)

Several open formats exist for NMR, but are any ready to be recommended as a community standard? So far,  inadequate conversion seems to be the most urging pitfall to be solved before making a recommendation, as different converters output different files. This issue is faced with both JCAMP-DX and NMReData. Provided that vendor and software formats are standardly converted to NMReData and nmrML, an approach mentioned in the article [NMReDATA: Tools and applications](https://doi.org/10.1002/mrc.5146) recommends combining those two formats in a zipped NMR record, which may be promising. Some vendors, such as Bruker, already provide NMReData export by default in their software, while importing scripts might be required first to enable this export in other software. 

Further development of an NMR standard will need to answer the question of what metadata to include there. Instrument names might be a suggestion as they considerably vary and show a lack of standardization whenever reported. However, such metadata is not required to reproduce the experiment as long as the pulse sequence is provided. Further similar discussions will be needed to decide the purpose of metadata included in the format, and thus, the metadata itself.

## Continuous Testing Approach for Data Conversion as a Service
[Michael Klix Presentatioin](https://docs.google.com/presentation/d/1OBIs4V_jp3JP0l4PcVJwTyohha2P4q04s0vxJE3ZkJg/edit#slide=id.g13a29de33b1_0_69)

