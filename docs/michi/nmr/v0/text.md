---
sidebar_position: 1
---
# Textual Guidelines
These textual guidelines explaining the meaning and purpose of the more concise [tabular standard](table), which enumerates the requested metadata, each item assigned a number in the "No." column, indicating the hierarchical relationship between rows. For example, "NMR sample" is assigned the number "1," the “solvent” included in the sample is prefixed with "1" and has its own number "2" (1.2), and then the “ratio of solvents” is labeled as "1.2.1."

![No Column](/img/nmr/no.png)

We assign a unique NFDI4Chem identifier to each requested metadata point. All identifiers start with "NFDI.nmr." and further extend in a structured manner, reflecting the hierarchical relationship between the respective elements:
- NFDI.nmr.sample
- NFDI.nmr.sample.solvent
- NFDI.nmr.sample.solvent.ratio

![ID Column](/img/nmr/id.png)

Whenever possible, we provide a definition for each element using a controlled vocabulary term within the "Definition" column.

![cv Column](/img/nmr/cv.png)

The “Export Format” clarifies the expected format of the metadata when exported by the digital platforms, i.e. if the user submits a raw data file from which metadata can be extracted, the platform is not required to request the same metadata anew. Instead, it should be capable of mapping it to the mentioned format.

For instance, the Jeol format incorporates temperature values in Celsius, here the user doesn’t need to enter that value. Nevertheless, when the platform provides an export/download of the metadata, the system should map this temperature value to Kelvin, which comes from the UO ontology.

![Format Column](/img/nmr/format.png)

The cardinality column (C) indicates how often to report the metadata point. It splits the recommendations into two levels:
- Level 1 (required): This level encompasses the absolute minimum information (MI) that must be reported for NMR experiments. Infrastructure implementing this standard must not accept data missing this metadata. It can be identified in the table by a cardinality of no less than 1. The second sheet in the file summaries again all the MI in one table. For enhanced visibility, these entries are highlighted in red.
- Level 2 (recommended): This level comprises metadata that is advisable to accompany the data whenever possible. However, in cases where this metadata is absent, the primary data can still be interpreted meaningfully. Infrastructure adhering to this standard must raise a warning when such metadata is missing.  Level 2 entries can be identified in the table by cardinality starting from 0. For enhanced visibility,  these entries are highlighted in green.

![Cardinality Column](/img/nmr/c.png)

The cardinality of the four groups of requested metadata (highlighted in gray) is outlined as follows:
1. NMR Sample: Cardinality = 1, as this recommendation considers NMR experiments conducted on 1 sample.
2. NMR Acquisition Parameter: Cardinality = 1 - n, indicating that each sample must possess at least one NMR assay with reported acquisition parameters. Moreover, it can have more than one assay.
    - 2D NMR: Cardinality = 0 - n, as one sample may not have any 2D assays, or it might have several (Recommended to have).
3. NMR Instrument: Cardinality = 0 - n, as reporting instrument metadata is not mandatory (0), and a single sample can be studied in more than one instrument (n).
4. NMR Data Processing: Cardinality = 0 - n, as it is not mandatory to report processing metadata, but if the sample has n assays, then there will be n times of NMR Data Processing reports.

Furthermore, we offer mapping to [FAIRspec properties](https://github.com/IUPAC/IUPAC-FAIRSpec/blob/main/src/main/java/org/iupac/fairdata/contrib/fairspec/fairspec.properties) whenever feasible. Finally, both human-readable and machine-readable examples are provided for enhanced clarity and utility.

![FAIRspec Column](/img/nmr/fair.png)

Next version:
In the upcoming version, in addition to incorporating expected edits from the community, our aim is to actively contribute to NMR controlled vocabularies, and to expand the integration of these vocabularies into our recommendations.
