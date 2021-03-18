# Onboarding Documentation

Team Name: Skribblers

Team number: 21

(video outline stuff)

- Each team member should be present and in their own words state what they did on the project, what they are proud of and what they feel they could improve upon or address beyond the class (assume around ~30seconds per member)

A more involved retrospective about how your Agile practices were conducted and what challenges and victories the team faced. Honesty is the best course of action here as we are more likely to be lenient if we understand you are aware of what you didn't do well on the project and practices. 

Conclude your video with a discussion of what things a team taking on your project should do next. Discuss the features not built yet, improvements to the build pipeline or anything else you would have gotten to given another quarter worth of work.

- Agile outline
  - Challenges
    - Initial learning curve was a bit high, Agile was complicated and to get everyone on board and familair with agile took extra time and effort that slowed us down initially
    - Our Agile practices were not well conducted in the context that we are still students and cannot run agile like a fully fledged company and thus that we probably should have made slight modifications to adjust to our situation (remote, pandemic, time constrained by classes)
    - Management of workload and tasks were unbalanced, some sprints did not have enough work and our assigned tasks finished quickly whereas others had too much and created extra backlog
    - We had inconsistent meetings unfortunately, which raised some inefficiencies when we tried to follow Agile which has the assumption that people are available and up to date through meetings.
  - Victories
    - Using a sprint planner, via Github Projects, greatly helped the team visibly see sprint progress, what tasks they are assigned to, what pull requests needs review, and how is the current balance of sprint tasks, backlog etc. is. Moreover, Github Projects automates the updating of the sprint planner in accordance to when pull requests are made, linked to tasks / issues, and closed, greatly improving our efficiency and reducing redundancy.
    - Having weekly sprint meetings helped us stay on track to finish our MVP, iterate over new designs, and productively add features, fix bugs and more. In fact, the majority of our codebase is quite similar to our MVP, of which sprint meetings were a great contributor to this great progress.
    - Retrospectives were really helpful in keeping us on track and identifying issues that weren't obvious. One problem we had with our first sprint was that we didn't start early or start often, which we collectively identified as a big issue and after adapting to that, we succesfully finished a reasonable MVP we were happy with. Retrospectives also helped sprint plan better after we identified as a team that our first sprint planning had many issues, including many cross-issue dependencies that slowed our development. Lastly, our retrospectives helped glue the team together and improve team communication, which can be clearly seen by consistent slack messaging, commenting on Github and more



## Development

### Getting Started

To get started with development, first clone the repo at https://github.com/jgetzel/cse110-w21-group21/ and change to the dev branch. The main branch serves our production ready code that has been reviewed and is what clients will see. The dev branch is where we make our changes before merging dev to main.

After the branch is cloned to your local workspace, make sure to run `npm i` to install all necessary modules for development. Then run `npm run build` and then `npm run start` to start a local webserver that runs the web app.

### Development Process

The following steps describe the general development process for this project

1. Take an assigned an issue, and create a new branch off of the dev branch to work on said issue.
2. Make local changes and push to remote branch, then create a pull request to merge changes into the dev branch
3. Pipeline will now run various checks, including testing, linting, and code coverage
4. If some checks fail or changes are requested by another team member, go back and make necessary changes to pass all checks and requests
5. Once all checks pass and an approval is given by another team member via the Github review system, the author of the PR can go ahead and merge their PR into dev branch

After every sprint, the dev branch is merged into the main branch.

## File Organization

The folders at the root level are `.github`, `admin`, `out`, `source`, `__tests__`,  `specs`. 

### .github

This folder contains files for our pipeline using GitHub Actions. This includes automated testing, linting, code coverage, and documentation generation.

### admin

#### diagrams

This contains diagrams relevant to the project. In particular, it holds our pipeline architecture diagram.

#### meetings

This folder contains all our meeting notes, organized by `<mmddyy>-<name>`.md where mm is the month, dd is the day, and yy is the year.

#### misc

This folder is for miscellaneous documents, which include the team working agreement

#### videos

This folder contains all videos created by the team, including videos about our pipeline, about us, and a status update

### specs

This folder contains some specifications about our web app, including our initial brainstorming documents, userstories, and pitch. Moreover, it contains our ADRs (Architectural Decision Records) that should be regularly updated.

### out

This folder contains auto-generated documentation using jsdoc.

### source

This folder contains all our source code. The source code is organized as follows.

At the root level, we have our html files and a folder called assets with folders for our CSS, javascript and images/svgs

#### assets/styles

This contains all the CSS used in our web app

#### assets/scripts

This contains all the javascript for our web app

It contains subfolders for various code that work together such as our components, any code related to local storage. At the root level contains the main javascript files for each of the html pages.

#### assets/svgImages

This folder contains all the svgs used by our web app

#### assets/images/backgrounds

This folder contains all the background images for the web app

### \_\_tests\_\_

This folder contains all of our unit testing code, organized in the same structure our javascript code is organiszed.

### cypress

This contains our cypress testing code, performing our web app end to end tests.

### files at root level

#### .eslintrc

This file species how the javascript linter, eslint, should lint our code

#### jest.config.js

This file specifies how jest, the unit testing framework we use, will use and run our tests

#### package.json

This file is a meta-data file about our webapp, containing various scripts to run things such as testing, documentation, and linting, as well as specifying the necessary packages required to run and develop the web app

