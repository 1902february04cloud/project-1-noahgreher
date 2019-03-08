<!DOCTYPE html>
<html>
<body>

<h2>Convert a string into a date object.</h2>

<p id="demo"></p>

<script>
var text = [
  {
    "DESCRIPTION": "LEGENDARY FIRE BIRD",
    "TYPE": "FIRE",
    "NAME": "MOLTRES"
  },
  {
    "DESCRIPTION": "A FORGETTABLE ICE SEAL",
    "TYPE": "ICE",
    "NAME": "DEWGONG"
  },
  {
    "DESCRIPTION": "SCARY GHOST POKEMON",
    "TYPE": "GHOST",
    "NAME": "HAUNTER"
  }
]
var obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth; 
</script>

</body>
</html>
