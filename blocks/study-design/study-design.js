export default function decorate(block) {	
	
	
  /* change to ul, li */
  
  const ul = document.createElement('ul');
  
  [...block.children].forEach((row) => {
	  if(row.innerHTML!=('Study Design')){
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
     
    });
    ul.append(li);
	  }
  });
  
  block.append(ul);
  
  const sddiv = document.querySelector('.study-design.block');
	const heading = document.createElement('h2'); 
	heading.classList.add('headings');
	const span = document.createElement('span'); span.textContent = 'Study Design';
	heading.appendChild(span);
	sddiv.insertBefore(heading, sddiv.firstChild);
  
  sddiv.style.display = 'none';
  
 }

