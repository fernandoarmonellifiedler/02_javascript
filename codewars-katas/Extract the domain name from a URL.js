/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url){
  let first = url.split('//')
  let second = first.length > 1 ? first[1].split('.') : first[0].split('.');
  let third = second[0] === 'www' ? second[1] : second[0]
  return third;
}

// solution using replace
function domainName(url){
  let first = url.split('//')
  let second = first.length > 1 ? first[1].split('.') : first[0].split('.');
  let third = second[0] === 'www' ? second[1] : second[0]
  return third;
}

// solution using regex
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}