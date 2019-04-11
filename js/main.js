$('#sub').click(()=>{
let num = $('#numberwrapper h1').text()
num = +num
input = $('#input').val()
input = +input
$('#numberwrapper h1').text(num - input)
})
$('#add').click(()=>{
let num = $('#numberwrapper h1').text()
num = +num
input = $('#input').val()
input = +input
$('#numberwrapper h1').text(num + input)
})

$('.double').click(()=>{
    let num = $('#numberwrapper h1').text();
    num = +num
    if(num < 0){
        $('#numberwrapper h1').css("color","red");
    }else {$('#numberwrapper h1').css("color","black");}
    
})

