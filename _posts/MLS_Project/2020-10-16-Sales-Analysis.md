---
layout: "post"
title: "Housing Sales Analysis During the Coronavirus Pandemic"
date:   2020-10-16 14:38:09 -0600
categories: Sales-Analysis
permalink: /:categories
---

This project was initially created to determine if Covid-19 was reducing sale prices on houses in Boulder County.

In order to collect the sale data necessary for analysis, I downloaded sale PDFs from the MLS database and utilized OCR to convert the PDF into a pandas dataframe. An example of the PDF I used is below:

<img src="https://github.com/tkravits/MLS_PDFproject/raw/master/MLS_PDF.jpg" width="525" height="600">


I used pandas to clean up the dataframe (seen below):

|MLS #|Date|Address|Status|Listing Price|Concession Amt|Concession %|Concession_check|Price Range|
|---|---|---|---|---|---|---|---|---|
|907188|6/9/2020|3223 Iron Forge Pl 104, Boulder 80301|SOLD|179651|179651|0|No Concession|100 - 200k|


Then I ran an analysis on whether the sale priced was reduced, and by how much, and used seaborn to produce this chart:


<img src="https://github.com/tkravits/MLS_PDFproject/raw/master/Figure_1.png">

I found that the trend was basically flat from early March to early July 2020.

The code is found <a href="https://github.com/tkravits/MLS_PDFproject">here</a>
