const app=document.querySelector('.App');

var tabel = document.createElement("TABLE");
tabel.setAttribute("id", "myTable");
app.appendChild(tabel);

const set={level:'',time:''};
btn.addEventListener('click',(e)=>{
    set.level=document.getElementById('level').value;
    set.time=document.getElementById('time').value;
    
    var tr = document.createElement("TR");
    tr.setAttribute("id", "myTr");
    tabel.appendChild(tr);

    var td = document.createElement("TD");
    var row_value = document.createTextNode(`${set.level} ${set.time}`);
    td.appendChild(row_value);
    tr.appendChild(td);

})
app.append(tabel);
