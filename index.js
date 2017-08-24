function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  return document.getElementById("nested").querySelector(".target");
}

//Single use case
function deepestChild()
{
  var node = document.getElementById('grand-node')
  var nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

return node
}

function increaseRankBy(n)
{
  var lists = document.getElementsByClassName("ranked-list")

for (var j = 0, lon = lists.length; j < lon; j++)
{
  var list = lists[j];
  var nodes = list.getElementsByTagName("li");
  for (var i = 0, len = nodes.length; i < len; i++)
  {
    console.log(nodes[i].innerHTML);
    nodes[i].innerHTML = parseInt(nodes[i].innerHTML) + n
  }
}
}
