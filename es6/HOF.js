function add(x, y , cb) {
  let res = x + y;
  cb(res) // call the callback function 

  return () => console.log(res) // return a function
}

add(2, 3, function(res)
{
  console.log(res);
}  )


add(2,5, val => console.log(val))


let resfun = add(2, 3, function(res)
{
  console.log(res);
}  )
resfun() // 5


