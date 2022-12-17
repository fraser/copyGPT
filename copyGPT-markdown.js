javascript:(function() {
  var transcript = "# ChatGPT: " + (new Date().toDateString());
  var q = 'div[class^="react-scroll-to-bottom"] div.items-center div.dark\\:bg-gray-800, div[class^="react-scroll-to-bottom"] div.items-center div.prose';
  document.querySelectorAll(q).forEach(function(x,i) {
    if (x.classList.contains('dark:bg-gray-800')) {
      transcript += "\n\n## Prompt:\n\n" + x.innerText
    }  else if (x.classList.contains('prose')) {
      var c = x.cloneNode(true);
      c.querySelectorAll('button').forEach((e,i) => e.remove());
      c.querySelectorAll('div > p').forEach((e,i) => e.innerHTML = e.innerHTML + '\n\n');
      c.querySelectorAll('ol > li').forEach((e,i) => e.innerHTML = (i+1) + '. ' + e.innerHTML + '\n');
      c.querySelectorAll('ul > li').forEach((e,i) => e.innerHTML = '- ' + e.innerHTML + '\n');
      c.querySelectorAll('ol, ul').forEach((e,i) => e.innerHTML = e.innerHTML + '\n');
      c.querySelectorAll('pre').forEach((e,i) => e.innerHTML = '```\n' + e.innerHTML + '\n```\n\n');
      transcript += "\n\n### ChatGPT:\n\n" + c.innerText;
    }});
  var e = document.createElement("textarea");
  e.textContent = transcript;
  document.body.appendChild(e);
  e.select();
  document.execCommand("copy");
  document.body.removeChild(e);
})()
