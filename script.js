function generateFact()
{
  fetch ("https://randomfox.ca/floof/")
  .then ((response) => response.json())
  .then((json) =>console.log(json))

  var pic = document.createElement("img");
  
  var ranNum = Math.floor( Math.random() * 100 );
      pic.src = 'https://randomfox.ca//images//' + ranNum +  '.jpg';
      document.body.appendChild(pic);
}
