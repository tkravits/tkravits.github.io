<h1><strong>Data science porfolio by Taylor Kravits</strong></h1>

This is a portfolio of various data science and GIS projects. Many of these projects were developed to clean, analyze, and present property data but there are personal projects related to outdoor adventures and the financial sector as well.

<h2> Data Science Projects </h2>

<h3> Building Permit Data Clean Up and Automation </h3>

This tool allows the user to select an excel sheet from which to import given permit information. Many municipalities in Boulder County either hand enter or have extraneous data which leads to errors. The script then makes the necessary changes to the data and reformats the information.

The result it three output files: an excel sheet with the permits are being reviewed, a text file in the correct format to be pulled into a CAMA database, and an excel sheet summarizing the information for the appraisers. The code is found <a href="https://github.com/tkravits/Building-Permit-Automation">here</a>

<h3> Housing Sale Analysis </h3>

This project to pull the PDFs from the MLS database and see if residential housing prices are being affected by the Coronavirus pandemic. This code reads the MLS PDFs and pulls the sold price, and any concessions (if there are any), then compares it as a percentage, and produces a <a href="https://github.com/tkravits/MLS_PDFproject/blob/master/Figure_1.png">chart</a>. The code is found <a href="https://github.com/tkravits/MLS_PDFproject">here</a>

<h2> Side Projects </h2>

<h3> Financial Technical Analysis </h3>

A work in progress on developing new technical analysis to predict future stock prices. As of now, I have been able to graph out RSI, MA, MACD, and other established technical analyses. The code for this is <a href="https://github.com/tkravits/Financials">here</a>


<h2> GIS Projects </h2>

<h3><a href="https://github.com/tkravits/Select-Then-Zoom">Select Then Zoom ArcGIS Toolbox</a></h3>

<h3> County Board of Equalization Automated Map Creation </h3>

This ArcPy code is designed to automate the map creation process for the County Assessor's Office. It was developed using ArcMap 10.5. This code also assumes the individual knows how to create a toolbox in ArcGIS. If help is needed to create a toolbox see: https://desktop.arcgis.com/en/arcmap/10.3/analyze/managing-tools-and-toolboxes/creating-a-custom-toolbox.htm

The user will set up ahead of time the subject property and the comparable sales that are to be mapped. The process creates two layers, applies symbology that was pre-set up ahead of time, zooms to the selected layers, and changes the title based on the subject input.

This completes the map making process with the exception of creating annotation (condos cause the labeling to be screwy) and cleaning up the scale bar. The code is found <a href="https://github.com/tkravits/CBOE-Map">here</a>

