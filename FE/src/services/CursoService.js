import axios from "axios";

axios.get('/cursos')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error){
    console.error(error);
  });

