// Select color input
var color;
// Select size input
var height, width;
// When size is submitted by the user, call makeGrid()

$("#sizePicker").submit(function(grid){
    grid.preventDefault();
    height=$("#inputWeight").val();
    width=$("#inputHeight").val();
    makeGrid(height,width);

})
 function makeGrid(height,width){
    $("tr").remove();
// Your code goes here!
for (let i = 1; i<=height; i++){
    $('#pixelCanvas').append('<tr id=table' +i+'></tr>');
     for (let j = 1; j<=width; j++){
         $('#table'+i).append('<td></td>');
     }
}

//adding color
$("td").click(function addColor(){
    color = $("#colorPicker").val();
    if ( $(this).attr("style")){
        $(this).removeAttr("style")
    } else {
        $(this).attr('style','background-color:' + color);

    }
})
 } 

