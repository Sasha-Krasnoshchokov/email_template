# Getting Started with Create React App

- [DEMO](https://sasha-krasnoshchokov.github.io/email_template/)
- [UI design](https://www.figma.com/file/HcQ8uMVeTyrDldblY5Axou/Email-Templater?node-id=1%3A2)

## About project
- On screen you have three section:
  1. Interactive menu that can help you switches between components of second section.
  2. Section for creating and filling templates. 
      - On first step you can create templates - {placeholders} for email letter.
      Fields Recipients and Subject are non creation fields. They are only for fill information.
      - On second step you must describes all {placeholders}.
      - Then you can preview and send your email letter.
  3. The third section will notify you about success or unsuccess     sending.

## Functional Requirements
1.	UI Design, it’s pixel perfect, please try to match it as much as possible.
2.	In template editor, user is expected to enter a text with placeholders (variables) like this: {name}. Placeholders start with “{“, followed by any number of english letters and end with “}”. Spaces or any other characters are not allowed, so “{ name,}” is not a valid placeholder.
NOTE: placeholders are not static, users can add as many of them as they want. Don’t rely on just {subject} {date} that are present on figma designs, there may be 10 or 20 of those placeholders.
3.	On the second step, the user should have a possibility to enter a value for each placeholder found in the template (which means that form should be dynamically generated).
4.	On the third step, the user should be able to preview the generated email, where all placeholders are replaced with the values entered by the user on the second step. In order to send an email, send a POST request to this endpoint:  https://mock.at.leanylabs.com/email
The payload should look like this:
  {
    "to": "hr@leanylabs.com",
    "subject": "NY Party",
    "body": "the actual body of the email"
  }
In case of success, the server will respond with 200 and will send the request body back in “echo” property.
NOTE: server will return 500 or 200 status code randomly (50% chance each). It’s done intentionally, so that you can test that your app handles errors properly.
5.	In case of a successful response from the server, show a success message. The message should be visible for 5 seconds, then disappear.
6.	In case of an error response from the server, show an error message (also for 5 seconds).
7.	BONUS: make the app work correctly if one of the values is the same as the placeholder name. For example we have the following template: “let’s swap {one} and {two}, so that we get {two} and {one}”, and we set the value for “{one}” = “{two}”, and value for “{two}” = “{one}”, the result should be:  “let’s swap {two} and {one}, so that we get {one} and {two}”.

## Technical Requirements
1.	Please use React to build the UI part
2.	You may use Redux or any other state management library
3.	You may use CRA (create react app) or any other boilerplate to bootstrap a React application
4.	You may use any other libraries if needed
5.	It should be possible to easily start an app on another developer’s machine.
6.	Please share your code via GitHub
7.	Please deploy your code to Github pages.
