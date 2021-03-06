---
layout: "post"
title: "Housing Sales Analysis During the Coronavirus Pandemic"
date:   2020-10-16 14:38:09 -0600
categories: Sales-Analysis
permalink: /:categories
---

This project was initially created to determine if Covid-19 was reducing sale prices on houses in Boulder County. I used MLS listings to pull the sales data, cleaned the data, and synthesized it into a category plot. It was found that the trend was basically flat from early March to early July 2020.

My client (Boulder County Assessor's Office) used this data in their mass modeling process to see if their model was reflecting this change during the summer of 2020.

<b>Methods</b><br>
In order to collect the sale data necessary for analysis, I downloaded sale PDFs from the MLS database and utilized OCR to convert the PDF into a pandas dataframe

I used pandas to clean up the dataframe (seen below):

|MLS #|Date|Address|Status|Listing Price|Concession Amt|Concession %|Concession_check|Price Range|
|---|---|---|---|---|---|---|---|---|
|907188|6/9/2020|3223 Iron Forge Pl 104, Boulder 80301|SOLD|179651|179651|0|No Concession|100 - 200k|


Then I ran an analysis on whether the sale priced was reduced, and by how much, and used seaborn to produce this chart.

<br><b>Results</b>
<img src="https://raw.githubusercontent.com/tkravits/MLS_PDFproject/main/Figure_1.png">


The code is found <a href="https://github.com/tkravits/MLS_PDFproject">here</a>
