---
sidebar_position: 2
---

# MIChI Structure
We provide our MIChS as tables. This section explains the structure of the tabular MIChI, covering the meaning of the columns and the division of rows. The MIChI enumerates the requested metadata properties, clarifying them by providing definitions, export formats (accepted values), and whether they are mandatory or not, along with examples.

## MIChI Rows
To simplify readability, the MIChI rows follow a color map reflecting the rows' numbers. If you feel comfortable following that numbering, you can skip this section to [MIChI Columns](#michi-columns)
- The first row is always in teal, including the names of the columns.
- The black rows start a whole MIChI or a specialisation of the MIChI. For instance, there can be a black row saying this is a sample MIChI, and another one starting a specialisation specifically for the polymer sample.
- The gray rows divide the MIChI into sections.
- The requested metadata rows: These are the actual metadata that need reporting:
  - The green rows include the mandatory metadata.
  - The yellow rows include the recommended metadata.
  - The red rows include the optional metadata.

## MIChI Columns
### No.
Each item (metadata property) is assigned a number in the "No." column, indicating the hierarchical relationship between rows. In the following image taken from [NMR MARGARITAS MIChI](/docs/michi/tabular/nmr/v1/table.md), **NMR Spectroscopy Assay** is the root with Number "1" indicating that this is what the MIChI covers, while all following rows start with "1." indicating that they are all metadata properties of the **NMR Spectroscopy Assay**. 

As an example of row numbering, the **NMR Sample** is assigned the number "1.1" as the sample details are part of the assay (1) metadata. The **NMR Solvent** included in the sample is prefixed with "1.1" and has its own number "2" (1.1.2), and then the **NMR Solvent Volume/Volume Ratio** is labeled as "1.1.2.1".

![No Column](/img/nmr/v1/no.png)

### Property

This is the main column including the required metadata.

### NFDI4Chem ID

This column was removed in newer versions, and it is to be ignored.

### Definition
To avoid any confusion regarding the requested metadata, we provide their definitions and, whenever possible,
as a controlled vocabulary, otherwise we offer a free text definition recommended by the field experts.

![cv Column](/img/nmr/v1/def.png)

### Export Format

The "Export Format" column is sometimes referred to as "accepted values". It clarifies the expected format of the metadata property **when exported** by the digital platforms, i.e., if the user submits a raw data file from which a property can be extracted, the platform is not required to request the same property anew. Instead, it should be capable of mapping it to the requested format.

For instance, the Jeol format incorporates temperature values in Celsius. Here, users do not need to enter that value. Nevertheless, when the platform provides an export/download of the metadata, the system should map this temperature value to Kelvin, which comes from the UO ontology.

![Format Column](/img/nmr/v1/ex.png)

### Cardinality
The cardinality column indicates how often to report the metadata property. It splits the recommendations into 3 levels:
- Level 1 (required): This level encompasses the absolute minimum information (MI) that must be reported. Infrastructure implementing our MIChI must not accept data missing this metadata property. It can be identified in the table by a cardinality of no less than 1. For enhanced visibility, these entries are highlighted in green.
- Level 2 (recommended): This level comprises metadata properties that are advised to accompany the data whenever possible. However, in cases where these properties are absent, the primary data is still meaningfully interpretable. Infrastructure adhering to this standard must raise a warning when such metadata is missing. Level 2 entries are highlighted in yellow. 
In NFDI4Chem, metadata properties extractable from data files are mostly  deemed recommended (instead of optional) unless they are mandatory. The purpose is to take the unstandardized metadata from the files and present them in a standardized manner by the repository.

![Cardinality Column](/img/nmr/v1/c.png)

Here is an example from [NMR MARGARITAS MIChI v1](/docs/michi/tabular/nmr/v1/table.md)
The cardinality of the four groups of requested metadata (highlighted in gray) is outlined as follows:
1. NMR Sample: Cardinality = 1, as this recommendation considers 1 NMR assay conducted on 1 sample.
2. NMR Acquisition Parameters: Cardinality = 1, indicating that each assay must possess one set of reported acquisition parameters. 
3. NMR Instrument: Cardinality = 0-1, as reporting instrument metadata is not mandatory (0), and a single assay can be conducted only in one instrument (1).
4. NMR Data Processing: Cardinality = 1-n, as it is mandatory to report at least the **Chemical Shift Reference Compound**. One NMR assay can have different processings and therefore the "n" limit.

Please note that some fields additionally get a cardinality with the letter "d", which indicates the dimensionality. For instance, the Acquisition Nucleus has a cardinality of 1-d, as the user can't report more than two nuclei in 2D NMR.

### Human-Readable Example
The purpose of this column is to show the reader "What we are talking about"; it doesn't show an accepted representation.

### Machine-Readable Example
This column shows an example of how the metadata property should look in the exported metadata file. 
