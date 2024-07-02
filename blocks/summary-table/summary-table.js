export default function decorate(block) {
	const table = document.createElement('table');
table.classList.add('sum-table');
 const thead = document.createElement('thead');
 const tbody = document.createElement('tbody');
 
const index = 0;
  // setup image columns
  [...block.children].forEach((row, index) => {
	  console.log(index);
	  if(index==0){
		  
		  table.appendChild(thead);
	  } 
	  if(index==1){
		  table.appendChild(tbody);
	  }
	  const rows = document.createElement('tr');

    [...row.children].forEach((col) => {
    const column = document.createElement('td');
    const pContent = col.querySelector('p').textContent; // Get the text content of the p element
    column.textContent = pContent; // Set the column content to the text content of the p element
    rows.appendChild(column); 
      
    });
	if(index==0){
		thead.appendChild(rows);
	} else {
	 tbody.appendChild(rows);
	}
	 
  });


const newDiv = document.querySelector('.summary-table.block');
    newDiv.innerHTML = ''; // Clear the content of the parent div
  newDiv.appendChild(table); 
  const heading = document.createElement('h2'); 
	
	const span = document.createElement('span'); span.textContent = 'Predictors of Hematoma Expansion, Baseline Characteristics';
	span.classList.add('tablecaption');
	heading.appendChild(span);
	newDiv.insertBefore(heading, newDiv.firstChild);
  
 }

