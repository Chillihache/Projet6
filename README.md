Project 6 - Just Stream It
-
As part of the OpenClassroom "Python Application Developer" training program, this project is a web application 
that provides information on the highest-rated movies

The application interacts with the OCMovies API, which can be found at this link: https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR

How to install the program on Windows
-

FIrst, you need to install the local API on your machine by following the instructions in the README.md file of the repository.

Then, clone this repository using $ git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git

How to run the application on your browser
-





Directory Composition
-

This application adheres to the MVC (Model-View-Controller) architecture. It includes:
- Models : Main objects
- Views : Interacts with the user
- Controllers : Bridges between models and views
- Helpers :
  - json-helper : Handles reading and writing JSON files
  - input_helper : Verifies user inputs
- main.py : Launch the program
- flake_rapport : Directory for Flake8-html report
- .gitignore : Git ignore file

