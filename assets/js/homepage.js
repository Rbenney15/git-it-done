var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#username');

var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
    // make a get request to url
    fetch(apiUrl).then(function(response) {
      console.log(response);
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };
  
  getUserRepos("lernantino");



var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
};

