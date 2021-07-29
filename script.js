let xhr = new XMLHttpRequest();
xhr.open("get","example.php",false);
xhr.send(null);

if((xhr.status>=200 && xhr.status<300) || xhr.status == 304){
    alert(xhr.responseText)
}