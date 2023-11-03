


const ul = document.querySelector('.mytodolist')
const noitems = document.querySelector('.noitems')
const total = document.querySelector('.totaltasks')
const add = document.querySelector('#type')
const quickBtn = document.querySelector('#quick-btn')

$("#add").click(additems)

function additems(){
    if($("#type").val()  === ''){
        
        $('#type').css('border', '2px solid red')
    } else{
       const li = document.createElement('li');
       ul.appendChild(li)
       li.innerText = $('#type').val()
       li.classList.add('items')
       let span = document.createElement('span');
       li.appendChild(span)
       span.classList.add('theX')
       span.innerHTML = "\u00d7"  
       if(quickBtn.style.display = 'none'){
        quickBtn.style.display = 'block'
       } 
       

    }
    add.value = '';
}


// the "Mark as done" button checkes all tasks functionality

$('#selectAll').click(function(){
    if($('.mytodolist li').hasClass('checked')){
        $('.mytodolist li').removeClass('checked')
    } else {
        $('.mytodolist li').addClass('checked');
    }
})

// mark as done, individual tasks

$('.mytodolist').click(function(e){
    if($(e.target).hasClass('checked')){
        $(e.target).removeClass('checked')
        
    } else{
        $(e.target).addClass('checked')
    }
    
    
  
})
additems()


// add tasks by pressing the Enter 

$('#type').keypress(function(e){
    if(e.key === 'Enter'){
        additems();  
    }
})


// the "remove all" button , removes all the tasks
$('#removeAll').click(function(e){
    if(e.type === "click" ){
        $(".mytodolist li").remove()
        quickBtn.style.display = 'none'
    }
})

// remove individual elements
$('.mytodolist').click(function(e){
    if(e.target.tagName === "SPAN" ){
        e.target.parentElement.remove()
    }
})
