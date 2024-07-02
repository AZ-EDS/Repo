import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
	
	const refdiv = document.querySelector('.references-wrapper');
	const refblock = document.querySelector('.references.block');
	
  const button = document.createElement('button');
	button.classList.add('ref-button');
	const itemspan = document.createElement('span');
	itemspan.textContent = 'References';
	itemspan.classList.add('accordion-title');
	button.appendChild(itemspan);
	refdiv.insertBefore(button, refdiv.firstChild);
	const iconspan = document.createElement('span');
	iconspan.classList.add('reference-accordion-icon');
	iconspan.classList.add('fas');
	iconspan.classList.add('fa-chevron-down');	
	button.appendChild(iconspan);
	
	refblock.style.display='none';
	
	const refbutton = document.querySelector('.ref-button');
	refbutton.addEventListener('click', function() {
		 if(refblock.style.display=='none'){
		iconspan.classList.remove('fa-chevron-down');
		iconspan.classList.add('fa-chevron-up');
		 refblock.style.display = 'block';}
		 else{
			 iconspan.classList.remove('fa-chevron-up');
		iconspan.classList.add('fa-chevron-down');
		 refblock.style.display = 'none';
		 }
	 });
}
