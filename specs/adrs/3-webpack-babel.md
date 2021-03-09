# Using Webpack and Babel to bundle code

* Status: Accepted
* Deciders: Shwet, Stone, Manav, Brian, Jakob, Ethan
* Date: 2021-03-08

## Context and Problem Statement

As we write our code, we noticed that we had a lot of separate javascript files that were all being used and loaded into all our pages. Some files were repeatedly loaded, some files had to be loaded in a specific order or else something would break.

Another issue that came out of just manually loading javascript for our html pages was that we relied on loading lots of variables, functions etc. to the global namespace and cluttering it, making it easy for another file to manipulate variables from a different file. 

Lastly, we wrote code that sometimes had more modern syntax that isn't supported by all browsers such as arrow functions, classes, and let and const.

This leads to a rather large mess of files, dependency issues between files, and sometimes seeing different results on different browsers due to web compatabiliy issues.

Lastly, it is hard to test certain javascript files that simply provide utility functions because we cannot use import export syntax easily without some more manual configuration when loading the javascript and testing that code.

## Considered Options

### Bundling our code with Webpack

- Webpack enables our code to be bundled and minified and put together into a few files that we can then load
- Automatically handles dependencies by letting us use import export syntax to make it more explicit what files need what from other files
- Makes it easy to unit test functions with jest as we can now easily export our code from javascript files.
- Can run a live server that live updates the code as we change it and show the changes
- One issue is that webpack is a new tool for the most of our team, as a result, either our team spends time learning this new tool, or we are increasing our bus factor as only a few understand and can use Webpack.

### Transforming modern syntax to compatible syntax with Babel

- Babel enables us to write cleaner code and employ better coding practices e.g. using constants, classes etc. to adhere to the object oriented principles that the team is familair with
- Babel also removes the need to worry about backwards compatability with older browsers that might not support some of the newer javascript syntaxes.
- Similar to webpack, Babel is a new tool for the most of our team, as a result, either our team spends time learning this new tool, or we are increasing our bus factor as only a few understand and can use Babel.

## Decision Outcome

We ultimately decided to adopt webpack and babel to enable faster development by reducing the number of bugs introduced by previously having to manually load javascript to our pages and handle dependencies. Moreover, this made unit testing a lot simpler as we can now simply import functions we want to test directly.

We decided that as there isn't much need to worry about the increase in bus factor is because once webpack and babel work, we don't anticipate any need to have to change the configurations over and over in the near future. 