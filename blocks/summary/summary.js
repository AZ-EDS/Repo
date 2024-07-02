export default function decorate(block) {
	
	
	
  /* change to ul, li */
  
  const ul = document.createElement('ul');
  
  [...block.children].forEach((row) => {
	  if(row.innerHTML!=('summary')){
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
     
    });
    ul.append(li);
	  }
  });
  
  block.append(ul);
  
  const summaryDiv = document.querySelector('.summary.block');
	const heading = document.createElement('h2'); 
	heading.classList.add('headings');
	const span = document.createElement('span'); span.textContent = 'Summary';
	heading.appendChild(span);
	summaryDiv.insertBefore(heading, summaryDiv.firstChild);
  
  
 }

