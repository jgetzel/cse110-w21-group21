# Source Code Repo organization 

* Status: accepted
* Deciders: Stone, Shwet, Ethan, Brian, Kevin, Jakob, Jaehee, Manav
* Date: 2021-02-27

## Context and Problem Statement

Need to decide how to organize our source code. This is an important decision as an optimal organization would make it easier to find things and reference different files in our code. This will also help our testing files since they will also be organized in the same hierarchy like our source code.

## Considered Options

* Putting all HTML files in one folder
  * **Thoughts**: Help keep our HTML code together and avoid cluttering our source folder. By default, accessing home page would require going to the HTML source and then the home page which would make the URL unecessarily longer.
* Putting all the web components code in one folder
  * **Thoughts**:Helps keep all the web components together which makes it easy to reference them and use them in various other HTML files. 
* All the svgs in one folder
  * **Thoughts**: This would again make it easy to find all the images and reference them. They wouldn't clutter the source folder. 
* Putting all the styles in one folder
  * **Thoughts**: Keeps all the CSS files organized and makes it way easier to find them.
* Putting all the database files together
  * **Thoughts**: This helps us find the corresponding database files easily and also makes out file hierarchy look cleaner and prettier. 

## Decision Outcome

We chose all the options except putting all the HTML files together. This would help us reference all the related files easily. It would also declutter our source folder and make our file hierarchy more readable and cleaner. One down side is that there will be many folders and some more effort is requried to find these folders and maintain this system. We decided against putting HTML files together as we didnot want to mess up the URL links. 

