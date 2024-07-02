import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ol = document.createElement('ol');
  ol.className = 'tablist';
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      div.className = 'tab-item';
    });
    ol.append(li);
  });
  
  
  block.append(ol);
  const tabItems = document.querySelectorAll('.tab-item');

// Loop through the tab items and add a click event listener to each one
tabItems.forEach(tabItem => {
	if(tabItem.querySelector('p').innerHTML=='Summary'){
		tabItem.classList.add('active');
	}
  tabItem.addEventListener('click', function() {
    // Remove the 'active' class from all tab items
    tabItems.forEach(item => {
      item.classList.remove('active');
    });
    
    // Add the 'active' class to the clicked tab item
    this.classList.add('active');
	
	const sddiv = document.querySelector('.study-design.block');
	const summaryDiv = document.querySelector('.summary.block');
	if(this.querySelector('p').innerHTML=='Study Design'){
		sddiv.style.display = 'block';
		summaryDiv.style.display = 'none';		
		const tableblock = document.querySelector('.summary-table.block');
		tableblock.style.display = 'none';
		
	}
	if(this.querySelector('p').innerHTML=='Summary'){
		sddiv.style.display = 'none';
		summaryDiv.style.display = 'block';		
		const tableblock = document.querySelector('.summary-table.block');
		tableblock.style.display = 'block';
	}
    
    // You can add more functionality here, such as showing/hiding content based on the clicked tab
  });
});


}


