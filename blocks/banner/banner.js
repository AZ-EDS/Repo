export default function decorate(block) {
  console.log(block);
  addClassTochildren(block,1);
 }
 
 function addClassTochildren(element, depth){
	 	 
	 Array.from(element.children).forEach(function(child){
		
		 child.classList.add('banner-'+ depth++);
	 });
 }

