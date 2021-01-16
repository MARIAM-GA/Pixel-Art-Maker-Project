// Select color input

const colorPicker= document.getElementById('colorPicker');
// Select size input
const GridHeight = document.getElementById('inputHeight');
const GridWidth = document.getElementById('inputWidth');
const pixelCanvas= document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');


// When size is submitted by the user, call makeGrid()
form.addEventListener('submit',function(event){
  //to clear previous pixelCanvas
  pixelCanvas.innerHTML = '' ; 
 event.preventDefault();                    
  makeGrid();                   
                      
  });
pixelCanvas.addEventListener('click',function(event){
                                                         
if ( event.target.nodeName==='TD'){  
 event.target.style.backgroundColor=colorPicker.value;  
}
 })
 function  makeGrid(){
   for( let N=0; N <  GridHeight.value;N++) {
   const row = pixelCanvas.insertRow (0);
     for( let M=0;M < GridWidth.value;M++) {
    row.insertCell (0);
 }

  }
       }