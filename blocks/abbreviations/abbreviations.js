import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
	
	const abbdiv = document.querySelector('.abbreviations.block');
	
	
	const newdiv = document.createElement('div');
	newdiv.classList.add('abbreviation-div');
  // setup image columns
  [...block.children].forEach((row) => {
	  const rows = document.createElement('p');

    [...row.children].forEach((col, index) => {
    const column = document.createElement('span');
	if(index%2===0){
		column.classList.add('abb-even');
	} else {
		column.classList.add('abb-odd');
	}
    const pContent = col.querySelector('p').textContent; // Get the text content of the p element
    column.textContent = pContent; // Set the column content to the text content of the p element
    rows.appendChild(column); 
      index = index +1;
    });
	 newdiv.appendChild(rows);
  });
   abbdiv.innerHTML = '';
   abbdiv.appendChild(newdiv);
   
   const secdiv = document.querySelector('.section.abbreviations-container.references-container');
   const br = document.createElement('br');
   secdiv.insertBefore(br, secdiv.querySelector('.references-wrapper'));
   
   const button = document.createElement('button');
	button.classList.add('accordion-button');
	const itemspan = document.createElement('span');
	itemspan.textContent = 'Abbreviations';
	itemspan.classList.add('accordion-title');
	button.appendChild(itemspan);
	abbdiv.insertBefore(button, abbdiv.firstChild);
	const iconspan = document.createElement('span');
	iconspan.classList.add('accordion-icon');
	iconspan.classList.add('fas');
	iconspan.classList.add('fa-chevron-down');	
	button.appendChild(iconspan);
	newdiv.style.display = 'none';
	
	const abButton = document.querySelector('.accordion-button');
	 const chevronIcon = document.getElementById('span.accordion-icon.fas.fa-chevron-down');
	 abButton.addEventListener('click', function() {
		 if(newdiv.style.display=='none'){
		iconspan.classList.remove('fa-chevron-down');
		iconspan.classList.add('fa-chevron-up');
		 newdiv.style.display = 'grid';}
		 else{
			 iconspan.classList.remove('fa-chevron-up');
		iconspan.classList.add('fa-chevron-down');
		 newdiv.style.display = 'none';
		 }
	 });
}





