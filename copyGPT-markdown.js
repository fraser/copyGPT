javascript:(function() {
  var transcript = "# ChatGPT: " + (new Date().toDateString());
  var q = 'div[class^="react-scroll-to-bottom"] div.items-center div.dark\\:bg-gray-800, div[class^="react-scroll-to-bottom"] div.items-center div[class^="request-"]';
  document.querySelectorAll(q).forEach(function(x,i) {
    if (x.classList.contains('dark:bg-gray-800')) {
      transcript += "\n\n## Prompt:\n\n" + x.innerText
    }  else if (x.classList.contains('prose')) {
      var c = x.cloneNode(true);
      c.querySelectorAll('button').forEach((b,i) => b.remove());
      c.querySelectorAll('ol li').forEach((l,i) => l.innerHTML = i + '. ' + l.innerHTML + '\n');      
      c.querySelectorAll('ul li').forEach((l,i) => l.innerHTML = '- ' + l.innerHTML + '\n');
      c.querySelectorAll('pre').forEach((p,i) => p.innerHTML = '\n\n```\n' + p.innerHTML + '\n```\n\n');
      transcript += "\n\n### ChatGPT:\n\n" + c.innerText;
    }});
  var e = document.createElement("textarea");
  e.textContent = transcript;
  document.body.appendChild(e);
  e.select();
  document.execCommand("copy");
  document.body.removeChild(e);
})()
