/*
File: index.js
GUI Assignment: Creating a dynamic multiplication table.
Timofey Fayzullin, Umass Lowell Computer Science,
timofey_fayzullin@student.uml.edu
Copyright (c) 2021 by Timofey. All rights reserved. May be freely copid or
excerpted for educational purposes with credit to the author.
update by TF on October 4th, 2021 at 8:14 PM*/

function makeAchart(){
//taking in values from input table and converting them into vars
  var fr = parseInt(document.getElementById('botr').value);
  var sr = parseInt(document.getElementById('topr').value);
  var fc = parseInt(document.getElementById('botc').value);
  var sc = parseInt(document.getElementById('topc').value);
//setting up table and error fields for the information to be inputed in
  var table = document.getElementById('tbl');
  var err = document.getElementById('errors');
//setting up temporary output and error fields
  var output="";
  var errid="";
//linking 
  err.innerHTML=errid;
  table.innerHTML=output;
//check for the table to be made no matter which input comes first
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
//check for values which should not be inputed as well as error message set up
  if(fc > 100 || sr > 100 || fr > 100 || sc > 100 || fc < -100 || sc < -100 || fr < -100 || sr < -100 || isNaN(fc) || isNaN(fr) || isNaN(sc) || isNaN(sr))
  {
    errid += "Please enter a valid number range between -100 and 100";
    err.innerHTML=errid;
    return;
  }
//table generator
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
