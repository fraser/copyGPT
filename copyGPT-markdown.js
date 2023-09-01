javascript:(function() {
  function convertListToMarkdown(e,d,i) {
    if (e.tagName === 'OL' || e.tagName === 'UL') {
      d += 1;
    }
    var children = e.children;
    for(var ic = 0; ic < children.length; ic++) {
      convertListToMarkdown(children[ic], d, ic);
    }
    if (e.tagName === 'LI') {
      var prefix = '';
      prefix += i == 0 ? '' : '\n';
      prefix += ' '.repeat(d*2);
      prefix += e.parentNode.tagName === 'OL' ? (i+1) + '. ' : '- ';
      e.innerHTML = prefix + e.innerHTML;
    }
    if (e.tagName === 'OL' || e.tagName === 'UL') {
      e.innerHTML = '\n' + e.innerHTML + '\n';
    }
  }
  function getSubject(str) {
    var subject = str.replace(/\s+/g, ' ').trim();
    subject = subject.replace(/[*_`#+\-[\]!()|]+/g,' ');
    subject = subject.substring(0,100) + (subject.length > 100 ? '...' : '');
    return subject;
  }
  var transcript = "";
  var first_prompt = null;
  var q = 'div.text-token-text-primary div.empty\\:hidden, div.text-token-text-primary div.prose';
  document.querySelectorAll(q).forEach(function(x,i) {
    if (x.classList.contains('prose')) {
      var c = x.cloneNode(true);
      convertListToMarkdown(c,-1,0);
      c.querySelectorAll('button').forEach((e,i) => e.remove());
      c.querySelectorAll('div > p').forEach((e,i) => e.innerHTML = '\n' + e.innerHTML + '\n');
      c.querySelectorAll('pre').forEach((e,i) => e.innerHTML = '\n```\n' + e.innerText + '\n```\n\n');
      c.querySelectorAll('pre div.items-center span').forEach((e,i) => e.remove());
      c.querySelectorAll('code').forEach((e,i) => e.innerHTML = '`' + e.innerHTML + '`');
      c.querySelectorAll('strong').forEach((e,i) => e.innerHTML = '**' + e.innerHTML + '**');
      transcript += "\n\n## ChatGPT: " + getSubject(c.innerText) + "\n" + c.innerText;
    }
    else {
      first_prompt ||= x.innerText;
      transcript += "\n\n## Prompt: " + getSubject(x.innerText) + "\n\n" + x.innerText;
    }
  });
  var preamble = "";
  preamble += "# ChatGPT: " + getSubject(first_prompt) + "\n";
  preamble += "\n" + "Date: " + (new Date().toDateString());
  var url = document.URL;
  if (/https:\/\/chat.openai.com\/c\/[a-z0-9-]+$/.test(url)) {
    preamble += "\n" + "URL: " + url;
  }
  transcript = preamble + transcript;
  var e = document.createElement("textarea");
  e.textContent = transcript;
  document.body.appendChild(e);
  e.select();
  document.execCommand("copy");
  document.body.removeChild(e);
})()
