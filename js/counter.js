var a = 1;
var b = 1;
var c = 1;
var d = 1;
function participants()
{
  if (a < 1000)
  {
    a += 1
  }
  document.getElementById('part').innerHTML = a;
}
setInterval(participants, 10);
function teams()
{
  if (b < 100)
  {
    b += 1
  }
  document.getElementById('team').innerHTML = b;
}
setInterval(teams, 100);
function hours()
{
  if (c < 2000)
  {
    c += 1
  }
  document.getElementById('hour').innerHTML = c;
}
setInterval(hours, 5);
function cols()
{
  if (d < 10)
  {
    d += 1
  }
  document.getElementById('col').innerHTML = d;
}
setInterval(cols, 1000);
