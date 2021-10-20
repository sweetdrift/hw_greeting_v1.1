function greet(name, name2, name3) {
  let greet_text


  if(name == '')
  {
    greet_text="Hello, my friend!"
  }

  if(name != '')
  {
    greet_text="Hello, " + name + name2 + name3 + "!";
  }

  return greet_text
}

  module.exports = greet
  