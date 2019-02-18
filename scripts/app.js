let command = "";


const render = function (inputStr){
  $('#list').html(inputStr)
}

const print = function (){
  let inputStr = '';
  for (let i = 0; i < employeeList.length; i++){
    inputStr += `<div class="entry"><p> ${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div><br>`
  }
  render(inputStr);
}

const clearInput = function (){
  console.log('remove content from input field');
  $('#name').text("");
}

const runCommand = function (event){
  console.log('added');
  event.preventDefault();
  switch (command) {
    case 'add':
      add();
      clearInput();
      break;
    case 'verify':
      verify();
      break;
    case 'delete':
      deleteUser();
      break;
    case 'update':
      update();
      break;
    default:
  }
}

const add = function (){
  const name = $('#name').val();
  const office = $('#office').val();
  const phone = $('#phone').val();
  employeeList.push({
    name: name,
    officeNum: office,
    phoneNum: phone
  })
    print();
  }

const verify = function (){
  const name = $('#name').val();
  let boolean = 'false';
  for (let i = 0; i < employeeList.length; i++){
    if (employeeList[i].name == name){
        boolean = 'true';
    }
  }
  render(boolean);
}

const update = function (){
  const name = $('#name').val();
  const office = $('#office').val();
  const phone = $('#phone').val();
  for (let i = 0; i < employeeList.length; i++){
    if(employeeList[i].name === name){
      employeeList[i].officeNum = office;
      employeeList[i].phoneNum = phone;
    }
  }
  print();
}

const deleteUser = function (){
  const name = $('#name').val();
  for (let i = 0; i < employeeList.length; i++){
    if (employeeList[i].name === name){
      employeeList.splice(i,1)
    }
  }
  print();
}

const setView = function (){
  $('#list').empty();
  command = '';
  $('form').show();
  $('.extra-inputs').hide();
  print();
}

const setAdd = function(){
  $('#list').empty();
  command = 'add';
  $('form').show();
  $('.extra-inputs').show();
}

const setVerify = function (){
  $('#list').empty();
  command = 'verify';
  $('.extra-inputs').hide();
}

const setUpdate = function (){
  $('#list').empty();
  command = 'update';
  $('form').show();
  $('.extra-inputs').hide();
}
const setDelete = function (){
  $('#list').empty();
  command = 'delete';
  $('form').show();
  $('.extra-inputs').hide();

}


$('#view').on('click', setView);
$('#add').on('click', setAdd);
$('#delete').on('click', setDelete);
$('#verify').on('click', setVerify);
$('#update').on('click', setUpdate);
$('#submit').on('click',runCommand);
$('#submit').on('click', clearInput);
