
const unicodeRanges = require('unicode-range-json');

/* 

  for (var i = 0; i <  unicodeRanges.length; i++) {
    key = unicodeRanges[i]
    
  }

 */

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, "");
  });
 
var select = document.getElementById('select');
    

unicodeRanges.forEach(range => {
    var opt = document.createElement('option');
    opt.appendChild( document.createTextNode(range.category) );
    opt.value = range.category; 
    select.appendChild(opt);
});

function s_update()
{
    unicodeRanges.forEach(range => {
        if (range.category!=select.value)
        {
            return
        }
        else if (range.category==select.value)
        {
            update_html(range.range)
        }
        
    });
}

function update_html(range)
{

    var div = document.getElementById('list');
    div.innerHTML = "";

    for(var i = range[0]; i <= range[1]; i++)
    {
        
        var c = document.createElement("div")
        c.className="col s1 unicode-card"
        c.setAttribute("onclick","unicode_click()")
        c.innerText = String.fromCodePoint(i)
        div.appendChild(c)
    }
}
function unicode_click()
{
    console.log("A")
}