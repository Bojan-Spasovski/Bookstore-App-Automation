
How to run the Cypress Automation tests on your machine:
=========================================================

1. Make sure you have Visual Studio Code (or another source-code editor)
2. Make sure you have installed npm on your machine 
3. Make sure you have installed Git
4. Install Cypress globally on the machine by entering following command: npm install cypress
5. Open Visual Studio
6. Login to your GitHub account
7. Open command palette and go to Git: Clone, then 'Clone from GitHub'
8. Find the appropriate repo and clone it (https://github.com/Bojan-Spasovski/Bookstore-App-Automation)
9. In the terminal enter the following command: npx cypress open
10. When the modal window is opened, go to "E2E Testing"
11. Then on the next step, select Chrome --> Start E2E Testing in Chrome
12. Then you should see "cypress\e2e\test" and the test scenarios "Bookstore.cy.js, Login.cy.js, Profile.cy.js and Register.cy.js"

Additional Notes: 
=================

1. The website https://demoqa.com/books contains reCAPTCHA security measure which blocks the automation of tests. Due to this the Register.cy.js spec is missing the assertions for confirming the register functionality. 

The Register.cy.js spec tests every other functionality except those blocked by the reCAPTCHA. 

On a real world project this would be solved by the developers removing the reCAPTCHA on the QA/Test environment so the regression pack would run.

2. Due to the same reCAPTCHA blocker, the test case BS_PROFILE_008 in the Profile.cy.js spec will fail if run for a second time.

If the test is to be run multiple times, the user needs to manually register a new profile on the https://demoqa.com/register website with the folowing credentials:

First Name: John 
Last Name: Doe
Username: Temp
Password: Temp123!


How to open and run the collection in POSTMAN:
================================================

1. Make sure you have installed Postman on your machine
2. Go to the shared repo: Bookstore-App-Automation
/PostmanBookStoreApi.postman_collection.json
3. Click on Download raw file
4. In Postman: Click "Import" button
5. Import the downloaded file from your machine into Postman
6. Open the "Book Store API" and see the folders with the proper requests
7. Go to the three dots "..." on the main folder "Book Store API"
8. Click on "Run collection"
9. Then, click on "Run Book Store API" button