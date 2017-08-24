function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  return document.getElementById("nested").querySelector(".target");
}

function deepestChild()
{
  var children = node.querySelectorAll('#grand-node > div');
  var nestedLevel = 0;
  var result;

  for (var i = 0; i < children.length; i++)
  {
    var child = children[1];
    var grandChildren = node.querySelectorAll('div')
    
  }


  return child[child.length-1];
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
