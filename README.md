#ToDoList Manager
###Meticulously hand crafted in JavaScript and AngularJS
###Tested with care in Karma and Protractor

[![Build Status](https://travis-ci.org/sanjsanj/todo_challenge.svg?branch=master)](https://travis-ci.org/sanjsanj/todo_challenge)  [![Coverage Status](https://coveralls.io/repos/sanjsanj/todo_challenge/badge.svg)](https://coveralls.io/r/sanjsanj/todo_challenge)  [![Code Climate](https://codeclimate.com/github/sanjsanj/todo_challenge/badges/gpa.svg)](https://codeclimate.com/github/sanjsanj/todo_challenge)

####Table of contents

- [Specification](#specification)
- [Development blog](#development-blog)
- [How to run](#how-to-run)
- [User stories](#user-stories)
- [Unit tests (Karma)](#unit-tests-karma)
- [Feature tests (Protractor)](#feature-tests-protractor)
- [Aims](#aims)

------

![todo challenge screenshot](http://sanjsanj.github.io/images/week8_todo.png)

-----

####Specification

Build a Todo list as a mini front-end application to satisfy the provided user stories (listed below).

-----------------

####Development blog

- [Day 0](http://sanjsanj.github.io/Week%207,%20Day%205/)
- [Day 1](http://sanjsanj.github.io/Week%207,%20Day%206/)
- [Day 2](http://sanjsanj.github.io/Week%207,%20Day%207/)
- [Day 3](http://sanjsanj.github.io/Week%208,%20Day%201/)

-----------

####How to run

######Setup

```
npm start
webdriver-manager start
```

######Tests

```
karma start test/karma.conf.js
protractor test/e2e/conf.js
```

-------------

####User stories

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

**Bonus**

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

-------------------

####Unit tests (Karma)

```
ToDoListController
  Initializes with
    an empty ToDo item list
    view set to 1

  When adding items it
    can display an item
    knows item is not complete
    can display multiple items
    cannot clear an active item

  After marking an item as complete it
    knows item is complete
    can mark it as active again
    can clear a completed item

  When toggling view
    has the right view
```

---------------------------

####Feature tests (Protractor)

```
ToDoList
  When initialized
    has a title
    has an input form
    has a submit button

  When creating an item
    has a task count of 1
    can display the item
    has a checkbox to mark item as completed
    can clear completed items
```

-----

####Aims

* Well written, well structured acceptance and unit tests
* Clear and expressive JavaScript
* Good HTML5 markup and CSS
* Deploy the Node.js app to Heroku
* Setup Travis-CI and Coveralls
