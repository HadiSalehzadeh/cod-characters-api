# Call of Duty Characters API
This is a simple API that returns information about some of the characters from the Call of Duty video game series. The API is built with Node.js, Express, and CORS.

# How to use the API
The API has three endpoints:

  - / : This endpoint serves an HTML file that displays a list of the available characters and their images.
  - /cod : This endpoint returns a JSON object with all the characters and their details, such as name, role, voice actor, and image URL.
  - /cod/:name : This endpoint returns a JSON object with the details of a specific character, based on the name parameter. If the name is not found, it returns an error message.

To use the API, you need to have Node.js and npm installed on your machine. Then, follow these steps:

  - Clone this repository or download the zip file.
  - Navigate to the project folder and run npm install to install the dependencies.
  - Run node app.js to start the server.
  - Open your browser and go to http://localhost:2000/ to see the HTML file, or use a tool like Postman or curl to make requests to the other endpoints.

# How to contribute to the API
If you want to contribute to this project, you can do so by:

  - Adding more characters and their details to the codChar object in the app.js file.
  - Improving the HTML file or the JSON responses with more features or better formatting.
  - Writing tests or documentation for the API.
  - Reporting any issues or bugs you find.

To contribute, please fork this repository, make your changes, and submit a pull request. Thank you for your interest in this project!
