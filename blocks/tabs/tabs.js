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
  tabItem.addEventListener('click', function() {
    // Remove the 'active' class from all tab items
    tabItems.forEach(item => {
      item.classList.remove('active');
    });
    
    // Add the 'active' class to the clicked tab item
    this.classList.add('active');
    
    // You can add more functionality here, such as showing/hiding content based on the clicked tab
  });
});
}


