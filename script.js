var button_pastesortunique, button_sortunique, textarea;

button_pastesortunique = document.querySelector("body > main > div > button.button.pastesortunique");
button_sortunique = document.querySelector("body > main > div > button.button.sortunique");
textarea = document.querySelector("body > main > textarea");

function natural_compare(a, b){
  var ax = []
     ,bx = []
     ;

  a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]) });
  b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]) });

  while(ax.length > 0 && bx.length > 0) {
    var an, bn, nn;
    an = ax.shift();
    bn = bx.shift();
    nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
    if(0 !== nn) return nn;
  }

  return ax.length - bx.length;
}

function sort_and_copy(ev){
  var lines = textarea.value.replace(/[\r\n]+/gm,"\n").split("\n")
     ,tmp   = {}
     ,i
     ;

  // make lines unique
  let check_unique = document.querySelector("#unique");
  if (check_unique.checked) {
    for(i=0; i<lines.length; i++)
    tmp[ lines[i] ] = "";
    lines = Object.keys(tmp);
  }

  lines = lines.sort(natural_compare);

  // if there was an empty line it will be first array item now - remove
  if (check_unique.checked) {
    if (lines[0] == "") {
      lines = lines.slice(1);
    }
  }

  textarea.value = lines.join("\n");

  window.getSelection().removeAllRanges();
  try{
  textarea.select();
  document.execCommand("copy");
  }catch(err){}

  window.getSelection().removeAllRanges();
  textarea.selectionStart = 0;
  textarea.selectionEnd = 0;
  textarea.focus();
}

function paste() {
  navigator.clipboard.readText()
    .then(text => {
      textarea.value = text;
      sort_and_copy();
    });
}

function keys(e, r) // r fuer Richtung der Taste:     'd' down    'u' up
{
  if (e.key == "1" && r == 'd') paste();
  if (e.key == "2" && r == 'd') sort_and_copy();
}
