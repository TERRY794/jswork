str ='<table border="1">'
for(let i=9;i>0;--i){
    str +='<tr>'
    for(var j=9;j>0;--j){
        str +='<td>&nbsp;</td>'
    }
    str +='</tr>'

}
str +='</table>'
document.getElementById('table').innerHTML=str

str ='<table border="2">'
for(let i=9;i>0;--i){
    str +='<tr>'
    for(var j=i;j>0;--j){
        str +='<td>&nbsp;</td>'
    }
    str +='</tr>'

}
str +='</table>'
document.getElementById('table2').innerHTML=str

str ='<table border="3">'
for(let i=9;i>0;--i){
    str +='<tr>'
    for(var j=1;j<=i;++j){
        str += '<td>'+ j + '*'+i +'=' + (j*i) +'</td>'
    }
    str +='</tr>'

}
str +='</table>'
document.getElementById('table3').innerHTML=str