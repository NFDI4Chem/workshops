---
sidebar_position: 1
---
# Textual Guidelines
These textual guidelines explain the meaning and purpose of the more concise [tabular standard](table), which enumerates the requested metadata, each item assigned a number in the "No." column, indicating the hierarchical relationship between rows. NMR Spectroscopy Assay is the root with Number 0 indicating that all following rows are metadata of the NMR assay. As mentioned in the comments column, An assay means the single NMR assay (1H, HSQC...) and not the entire experiment where multiple assays are possibly run. As an example, "NMR sample" is assigned the number "0.1" as the sample details are part of the assay (0) metadata. The “NMR solvent” included in the sample is prefixed with "0.1" and has its own number "2" (0.1.2), and then the “ratio of solvents” is labeled as "0.1.2.1."

![No Column](/img/nmr/no1.png)

We assign a unique NFDI4Chem identifier to each requested property point. All identifiers start with "NFDI.nmr." and further extend in a structured manner, reflecting the hierarchical relationship between the respective elements:
- NFDI.nmr.sample
- NFDI.nmr.sample.solvent
- NFDI.nmr.sample.solvent.ratio

![ID Column](/img/nmr/id1.png)

Whenever possible, we provide a definition for each element using a controlled vocabulary term within the "Definition" column.

![cv Column](/img/nmr/def1.png)

The “Export Format” clarifies the expected format of the metadata when exported by the digital platforms, i.e. if the user submits a raw data file from which metadata can be extracted, the platform is not required to request the same metadata anew. Instead, it should be capable of mapping it to the mentioned format.

For instance, the Jeol format incorporates temperature values in Celsius, here the user doesn’t need to enter that value. Nevertheless, when the platform provides an export/download of the metadata, the system should map this temperature value to Kelvin, which comes from the UO ontology.

![Format Column](/img/nmr/ex1.png)

The cardinality column (C) indicates how often to report the metadata point. It splits the recommendations into two levels:
- Level 1 (required): This level encompasses the absolute minimum information (MI) that must be reported for NMR experiments. Infrastructure implementing this standard must not accept data missing this metadata. It can be identified in the table by a cardinality of no less than 1. For enhanced visibility, these entries are highlighted in green.
- Level 2 (recommended): This level comprises metadata that is advisable to accompany the data whenever possible. However, in cases where this metadata is absent, the primary data can still be interpreted meaningfully. Infrastructure adhering to this standard must raise a warning when such metadata is missing.  Level 2 entries can be identified in the table by cardinality starting from 0. For enhanced visibility,  these entries are highlighted in yellow.

![Cardinality Column](/img/nmr/c1.png)

The cardinality of the four groups of requested metadata (highlighted in gray) is outlined as follows:
1. NMR Sample: Cardinality = 1, as this recommendation considers NMR assay conducted on 1 sample.
2. NMR Acquisition Parameters: Cardinality = 1, indicating that each assay must possess one set of reported acquisition parameters. 
3. NMR Instrument: Cardinality = 0-1, as reporting instrument metadata is not mandatory (0), and a single assay can be conducted only in one instrument (1).
4. NMR Data Processing: Cardinality = 1-n, as it is mandatory to report at least the reference compound. One NMR assay can have different processings and therefore the "n".

Finally, both human-readable and machine-readable examples are provided for enhanced clarity and utility, accompanied by comments.