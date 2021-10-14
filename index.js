/*
File: index.js
GUI Assignment: Creating a dynamic multiplication table.
Timofey Fayzullin, Umass Lowell Computer Science,
timofey_fayzullin@student.uml.edu
Copyright (c) 2021 by Timofey. All rights reserved. May be freely copid or
excerpted for educational purposes with credit to the author.
update by TF on October 4th, 2021 at 8:14 PM*/

function makeAchart(){
  var fr = parseInt(document.getElementById('botr').value);
  var sr = parseInt(document.getElementById('topr').value);
  var fc = parseInt(document.getElementById('botc').value);
  var sc = parseInt(document.getElementById('topc').value);
  var table = document.getElementById('tbl');
  var err = document.getElementById('errors');
  var output="";
  var errid="";
  err.innerHTML=errid;
  table.innerHTML=output
  if (fr > sr)
  {
    var t;
    t = fr;
    fr = sr;
    sr = t;
  }
  if (fc > sc)
  {
    var t;
    t = fc;
    fc = sc;
    sc = t;
  }
  if(fc > 250 || sr > 250 || fr > 250 || sc > 250 || fc < -250 || sc < -250 || fr < -250 || sr < -250 || isNaN(fc) || isNaN(fr) || isNaN(sc) || isNaN(sr))
  {
    errid += "Please enter a valid number range between -250 and 250";
    err.innerHTML=errid;
    return;
  }
  for(var i=fr - 1; i<=sr; i++){
    output+="<tr>";
    for(var j=fc - 1; j<=sc; j++){
      if(i==fr-1 && j==fc-1)
      {
        output+="<th id=\"zer\">"+0+"</th>";
      }
      else
      {
        if(i==fr-1 || j==fc-1)
        {
          if(i==fr-1)
          {
            output+="<th id=\"col\">"+j+"</th>";
          }
          else
          {
            output+="<th id=\"row\">"+i+"</th>";
          }
        }
        else
        {
          output+="<td>"+i*j+"</td>";
        }
      }
    }
    output+="</tr>";
  }
  table.innerHTML=output
}
