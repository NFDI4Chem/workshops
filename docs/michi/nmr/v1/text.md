---
sidebar_position: 1
---
# Textual Guidelines
These textual guidelines explain the meaning and use of the more concise [tabular standard](table).

Thre [tabular standard](table) enumerates the requested metadata properties, whether it is mandatory or recommended. You can find more about that in the [cardinality](#cardinality) section.

## Row Numbering "No."
Each item (property) is assigned a number in the "No." column, indicating the hierarchical relationship between rows. **NMR Spectroscopy Assay** is the root with Number "1", while all following rows start with "1." indicating that they are all metadata of the **NMR Spectroscopy Assay**. As mentioned in the "Comments" column, an assay means the single NMR measurement (1H, HSQC...) and not the entire experiment where multiple assays are possibly run. 

As an example of row numbering, the **NMR Sample** is assigned the number "1.1" as the sample details are part of the assay (1) metadata. The **NMR Solvent** included in the sample is prefixed with "1.1" and has its own number "2" (1.1.2), and then the **NMR Solvent Volume/Volume Ratio** is labeled as "1.1.2.1".

![No Column](/img/nmr/v1/no.png)

## NFDI4Chem Identifier "NFDI4Chem ID"

We assign a unique NFDI4Chem identifier to each requested property point. All identifiers start with "NFDI.nmr." and further extend in a structured manner, reflecting the hierarchical relationship between the respective elements:
- NFDI.nmr.sample
- NFDI.nmr.sample.solvent
- NFDI.nmr.sample.solvent.ratio

![ID Column](/img/nmr/v1/id.png)

## Definition

Whenever possible, we provide a controlled vocabulary-derived definition for the different properties within the "Definition" column, otherwise, we offer a free text definition recommended by the field experts.

![cv Column](/img/nmr/v1/def.png)

## Export Format

The "Export Format" column clarifies the expected format of the metadata property when exported by the digital platforms, i.e., if the user submits a raw data file from which a property can be extracted, the platform is not required to request the same property anew. Instead, it should be capable of mapping it to the mentioned format.

For instance, the Jeol format incorporates temperature values in Celsius. Here, users do not need to enter that value. Nevertheless, when the platform provides an export/download of the metadata, the system should map this temperature value to Kelvin, which comes from the UO ontology.

![Format Column](/img/nmr/v1/ex.png)

## Cardinality "C"
The cardinality column (C) indicates how often to report the metadata property. It splits the recommendations into two levels:
- Level 1 (required): This level encompasses the absolute minimum information (MI) that must be reported for NMR assays. Infrastructure implementing this standard must not accept data missing this metadata property. It can be identified in the table by a cardinality of no less than 1. For enhanced visibility, these entries are highlighted in green.
- Level 2 (recommended): This level comprises metadata properties that are advised to accompany the data whenever possible. However, in cases where these properties are absent, the primary data is still meaningfully interpretable. Infrastructure adhering to this standard must raise a warning when such metadata is missing. Level 2 entries can be identified in the table by cardinality starting from 0. For enhanced visibility, these entries are highlighted in yellow.

![Cardinality Column](/img/nmr/v1/c.png)

The cardinality of the four groups of requested metadata (highlighted in gray) is outlined as follows:
1. NMR Sample: Cardinality = 1, as this recommendation considers NMR assay conducted on 1 sample.
2. NMR Acquisition Parameters: Cardinality = 1, indicating that each assay must possess one set of reported acquisition parameters. 
3. NMR Instrument: Cardinality = 0-1, as reporting instrument metadata is not mandatory (0), and a single assay can be conducted only in one instrument (1).
4. NMR Data Processing: Cardinality = 1-n, as it is mandatory to report at least the **Chemical Shift Reference Compound**. One NMR assay can have different processings and therefore the "n" limit.

Please note that some fields additionally get a cardinality with the letter "d", which indicates the dimensionality. For instance, the Acquisition Nucleus has a cardinality of 1-d, as the user can't report more than two nuclei in 2D NMR.

Finally, both human-readable and machine-readable examples are provided for enhanced clarity and utility, accompanied by comments.