<!-- File format should be NNNNN-decision-title where N is the decision number-->

# Optimal Solution to store information about Tasks

* Status: Accepted <!-- optional -->
* Deciders: Kevin, Stone, Shwet, Manav, Jakob, Xiaolong <!-- optional -->
* Date: 2021-03-08 <!-- optional -->


## Context and Problem Statement

We want to create and store information about tasks in an effective manner for the following reasons:
 - Before Timer Starts:
   - The User should be able to create, edit and delete tasks
   - The User should be able to view the tasks they've added
 - During Work and Break Time:
   - The User should be able to see how many pomos they've used vs how many pomos they expected
   - The User should be able to differentiate between their current task and the other tasks
   - The User should be able to checkoff tasks with a single click, and the current task should be updated
 - Statistics:
   - The User should be able to visualize which tasks were completed and which tasks weren't completed
   - The User should be also be able to differentiate between tasks completed within the expected number of pomos and tasks that exceeded the expected number of Pomos.

How do we effectively store information about tasks, both for easy access in the HTML parts of our project, as well as to allow all of the above functionalities?

## Considered Options <!-- optional -->

* ### What Should be Stored?
  * **Title**: 
    * The User should be able to store and visualize the task's names for future references when they are working.
  * **Description**: 
    * The User should be given the option to expand on the title, to provide more information about a task.
  * **Required POMOs**: 
    * The User should predict how many POMOs they will use for a task. Users can then observe if they are efficient or not.
  * **POMOs Used**: 
    * The User should be able to visualize how many POMOs they've used on a task, to compare this with the amount of POMOs they predicted.
  * **Has the task been completed**: 
    * If a task has been completed, then it should no longer be in the task list while users are working. 
    * Also, if a task has not been completed even after the session has been completed, these tasks need to be treated with concern by the Users.
  * **The type of Task**: 
    * If a task has been completed within the given POMO requirement, then it can be considered an <span style = "color: #22DD9A;">efficient</span> task. 
    * If a task has been completed inefficiently, then it can be considered an <span style = "color: #F9C644;">inefficient</span> task. 
    * If a task hasn't been completed, it can be considered an <span style = "color: #FA7F7F;">incomplete</span> task.

## Decision Outcome

* In order to reduce complexity, we won't be storing the the type of class, and instead we would use the following information to relay the same information:
  * Pomos Used
  * Pomos Required
  * If the task has been completed or not

* In order to effectively display the tasks, they will be wrapped within an `<li>` object, and within it everything will be wrapped within a `flex-container`.
