(sorry if I write bad in english, I'm tryng to improve with this project)

## Diary

A deb friend told me to keep a journal of the progress of the application, changes, ideas or modifications.
It's not the first day, but I want to try to keep a daily record.

# day 0 (summary last ~2 weeks)

I installed Next and I copied the React components from the old project.
I try to delete the imports and functions outdated.
Changed the indexation of the folders and pages to adapt to Next navigation system.
The navigation functions are full in red (error).
I was thinking in add more difficulty to the project with a new full stack of technologies that I never used... sounds perfect XD.
I choose Next + Prisma + Postgresql a dev who I met recommend me and cheer to try it.
2 days reading documentation.
Good news, I found a step by step to create this project stack, bad news 1 day later I discover that all the steps are not updated since 2023 it's 2025 and the frameworks, libraries and webs that recommend had changes or are deprecated.
Well, after that I deleted the project and I downloaded the version branch without the changes from github. Git saves the day... or week :P
Time to return to docu.
I decide to start from writing the app path and the db elements models and find if somethings it's not easy to navigate or wrong, the functionality of every button and if it's necessary to add a new funcionality.
Install Prisma and postgres correctly and then try to fix components and imports. First the walls then the roof (it's a local expression).

# day 1 (19/2/25)

Start write the diary
Prisma installation and models schema configuration.
The docu it's a little tricky but the schema seems good. Finger cross.

# day 2 (20/2/25)

I add the project on SonarQube, a good tool to improve the detection of errors, vulnerabilities, technical debt, etc..
https://sonarcloud.io/project/overview?id=TryoSag_chronicle-next
I changed the models to separate the userTag which is a Tag template that makes the user, from the Tag which has the different fields to write.
First migration to create the different models on db.

# day 3 (21/2/25)

I start with the refactor of the components and functions update.
First is the Login page, I add the Register form and the Login form on the same page and a selector to choose which one it's show.
On the register form I add a process to validate the format of the entering data and feedback to the user.

# day 4 (27/2/25)

Yesterday I was thinking about to separate login page and register page and make easier the navigation.
I complete all the steps to setup the db and the prisma comunication.
I make more complete the user feedback on register form.
Start the user actions to make some interactions on the db.
I need to delete or update the deprecated components and types.

# day 5 (28/2/25)

I create the login and register actions and add response on the differents results.
Refactor feedback on register Form to have only one feedback object with the different info.
Add token action and token set on Local storage on register.
Refactor home to redirect the user if was a valid token on the localstorage.
