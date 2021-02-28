# Effective Design for storing User Data through Local Storage

* Status: Accepted
* Deciders: Kevin, Stone, Shwet, Manav, Jakob
* Date: 2021-02-27

## Context and Problem Statement

The main feature we want to have is to be able to easily store user data and related pomodoro statistics to help enable our users gain better insights into their work habits and productivity. Our project constraint is that we cannot use a database hosted on a different server, so our next best choice is using the Local Storage API. The problem here is how do we go about storing such data using Local Storage, how do we structure our code to handle this smoothly?

## Considered Options

### Code Organization

* Develop several layers of abstraction that handle the full process from end user interaction to storage in local storage
  * These layers will be the "database" layer that directly interacts with the local storage API, the next layer will be the "middle" layer which uses the functionality of the "database" layer to help store information we need. The top most layer is the website itself and it will utilize functions from the "middle" layer to store and retrieve data it needs.
  * **Thoughts:** This is well organized, keeps our code separate and modularized which makes it easier to unit test our code and find bugs. However, a downside is we will need to write more code to link these several layers and create these layers of abstraction
* Another choice is to remove the database layer and just have the "middle" layer and the top most layer
  * **Thoughts:** This is easy to do, and thankfully the local storage API is simple enough that we might not even need a true database layer. However, code is less modularized and through some our playtesting we found this more difficult to maintain.

### What should be stored?

* Tasks created by User:
  * **Thoughts**: We want to keep track of this data so the user can refresh their page and still have their tasks they created and not lose their information
* Pomo Sessions initiated by the User:
  * **Thoughts:** This helps us keep track of what session the user is in and the relevant information such as the IDs of the tasks related to that session or perhaps the current pomodoro time
* Statistics:
  * **Thoughts**: We want to display the stats at the end of each pomodoro session as well as provide some historical stats to allow users to reflect upon and improve their productivity with.
* The current time of the pomodoro session:
  * **Thoughts**: This will help us keep track of the current time of the pomodoro timer so if the user refreshes the page they can always come back and start again
* User profile information:
  * **Thoughts**: Here, we would try and store perhaps the user's name, perhaps any other settings related to the user and the pomodoro timer.

## Decision Outcome

### Code Organization

We ultimately decided on developing 3 layers as opposed to 2. We found that by separating the "database" layer that interacts with the local storage API from the rest of our code, our code looked cleaner, was more readable, and a lot easier to test. The only downside is that we will need to write more code but in the long run this will bring us more benefits than problems.

### What should be stored?

The final classes of information we wanted to store for our current sprint is "Tasks created by user", "Pomo sessions intiated by the user", and "statistics". These three points of information are most relevant to the core functionality of our pomdoro app. 

We decided not to include current time of the session as a separate object to store because we could just easily store it inthe pmodoro sessions information.

Finally, we decided for now, not to consider storing user profile information and / or settings because of our current timeline constraints forces us to first focus on more pertinent features.