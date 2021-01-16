# Pixel-Art-Maker-Project
By the Pixel Art Maker you can create a canvas of any size, choose a color using the color picker, and click on the canvas's table cells to set their color.
## Table of Contents

* [ Overview](# Overview)
* [Development Strategy](#Development Strategy)

## Overview

To get started, start building out the app's functionality..

App functionality Submitting the form builds a Design Canvas
App functionality Clicking in a cell in the Design Canvas applies a color
App functionality Picking a new color and clicking a cell displays the new color
Pixel Art Project works correctly with randomly sized tables


## Development Strategy
 keep these four tasks in mind:

1.Define your variables by selecting the DOM elements that the user will interact with. This is where your DOM skills can come into play! For instance, the submit button, the table, and the color picker need to be accessed. The value of the color selected needs to be stored as well, since the clicked cell in the table needs to be set to the selected color.

2.Add event listeners to the relevant DOM elements, so that user input can be color values and table sizes can be dynamically set by the user.

3.Set the size of the cross stitch canvas as an _N_ by _M_ grid with the makeGrid() function. 

4.Use your knowledge of JavaScript loops to dynamically clear and create the table based on user input. Each cell should have an event listener that sets the background color of the cell to the selected color.

Now test it! When you're done, you should be able to create a canvas of any size, choose a color using the color picker, and click on the canvas's table cells to set their color.

Note: To complete Pixel Art Maker, you must be using the current version of Edge, Firefox, or Chrome. Due to implementation differences, this exercise does not work effectively in Safari or Opera.

This is a Udacity lab
