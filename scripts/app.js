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

const runCommand = function (event){
  console.log('added');
  event.preventDefault();
  switch (command) {
    case 'add':
      add();
      print();
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
const reset = function (){
  $('#list').empty();
  command = '';
  $('#wrap').hide();
}
const setView = function (){
  $('#list').empty();
  command = '';
  $('#wrap').hide();
  print();
}

const setAdd = function(){
  $('#list').empty();
  command = 'add';
  $('#wrap').show();


}

const setVerify = function (){

  $('#list').empty();
  command = 'verify';
  $('#name').show();
  $('#submit').show();
  $('#office').hide();
  $('#phone').hide();
}

const setUpdate = function (){
  $('#list').empty();
  command = 'update';
  $('#name').show();
  $('#office').show();
  $('#submit').show();
  $('#phone').show();
}
const setDelete = function (){
  $('#list').empty();
  command = 'delete';
  $('#name').show();
  $('#office').hide();
  $('#phone').hide();
  $('#submit').show();
}

$('#view').on('click', setView);
$('#add').on('click', setAdd);
$('#delete').on('click', setDelete);
$('#verify').on('click', setVerify);
$('#update').on('click', setUpdate);
$('.far').on('click', reset);
$('#submit').on('click',runCommand);
