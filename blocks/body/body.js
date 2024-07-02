export default function decorate(block) {
	console.log('body');
 const link = block.querySelector('a');
  const path = 'http://localhost:3000/body.plain.html' ; 
  
  //link ? link.getAttribute('href')+'.plain.html' : block.textContent.trim();
  
  
fetch(path)
  .then(response => {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Network response was not ok.');
  })
  .then(htmlContent => {
    // Once the HTML content is fetched, you can include it in the current page
    const newDiv = document.querySelector('.body.block');
    newDiv.innerHTML = htmlContent;
    
  })
  .catch(error => {
    console.error('Error fetching the HTML content:', error);
  });
 }
 
