let list=[2,3,4,5,6];
map(list,filter);
//Transforming list into double list.
function map(list,filter)
{
  let output=double(list);
  filter(output,reduce);
}
//Filtering even numbers.
function filter(list,reduce)
{
  let output=filterEvenNumbers(list);
  reduce(output,foreach);
}
//Finding the max number in the list
function reduce(list,foreach)
{
    let output=findMaxnumberUsingReduceFunctionality(list);
    foreach(list);
}
//Adding one to ever number
function foreach(output)
{
    for(let i=0;i<output.length;i++)
    {
      AddingOneAndPrintingUsingForEachFunctinality(output[i]);
    }
}


function double(list)
{
  for(let i=0;i<list.length;i++)
  {
    list[i]=list[i]*2;
  }
  return list;
}

function filterEvenNumbers(list)
{
  let evenList=[];
  let k=0;
  for(let i=0;i<list.length;i++)
  {
    if(list[i]%2==0)
    {
      evenList[k++]=list[i];
    }
  }
  return evenList;
}

function findMaxnumberUsingReduceFunctionality(list)
{
  let curr=0;
  let acc=0;
  for(let i=0;i<list.length;i++)
  {
    curr=list[i];
    acc=reduceFunction(curr,acc);
  }
  return acc;
}

function reduceFunction(curr,acc) {

  if(curr>acc)
  {
    return curr;
  }
  else
  {
    return acc;
  }
}

function AddingOneAndPrintingUsingForEachFunctinality(output)
{
  console.log(output+1);
}
