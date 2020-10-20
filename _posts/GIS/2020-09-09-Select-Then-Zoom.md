---
layout: "post"
title: "A Select Then Zoom ArcGIS Toolbox"
date:   2020-10-16 14:38:09 -0600
categories: Select-Then-Zoom
permalink: /:categories
---
In day to day GIS processes, I often found I needed to take a closer look at a property. Instead of manually pulling up the associated table and zooming to it, I create a toolbox that simplifies the process. The user would input the attribute they want to zoom to and it does so automatically.

<b>Methods</b><br>
This ArcPy code is designed to select a field within a layer and zoom to it in ArcGIS Desktop. It was developed using ArcMap 10.5. This code also assumes the individual knows how to create a toolbox in ArcGIS. If help is needed to create a toolbox see:
 <https://desktop.arcgis.com/en/arcmap/10.3/analyze/managing-tools-and-toolboxes/creating-a-custom-toolbox.htm>

The user will set up ahead of time what field is to be selected. Once the toolbox is opened, it will ask for the user input for the field. Example is given below:<br>
<img src="https://github.com/tkravits/Select-Then-Zoom/raw/master/Select-Then-Zoom.jpg">


The code is found <a href="https://github.com/tkravits/Select-Then-Zoom">here</a>
