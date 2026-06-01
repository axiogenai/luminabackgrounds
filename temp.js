

var BG_DATA = JSON.parse(atob(document.getElementById('bg-json').textContent));
var activeId = null;

function escH(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderCards(cat) {
  var grid = document.getElementById('cards-grid');
  grid.innerHTML = '';
  var list = cat === 'All' ? BG_DATA : BG_DATA.filter(function(b) { return b.category === cat; });
  list.forEach(function(bg) {
    var card = document.createElement('div');
    card.className = 'bg-card';
    var html = '';
    html += '<div class="bg-preview" id="p' + bg.id + '">';
    html += '<span class="preview-label">' + bg.id + '. ' + bg.name + '</span>';
    html += '</div>';
    html += '<div class="p-4 flex flex-col gap-3" style="flex:1;">';
    html += '<div class="flex items-start justify-between gap-2">';
    html += '<div>';
    html += '<h3 class="outfit text-base font-bold text-white">' + bg.name + '</h3>';
    html += '<p class="text-gray-500 text-xs mt-0.5">' + bg.description + '</p>';
    html += '</div>';
    html += '<span class="tag" style="flex-shrink:0;">' + bg.category + '</span>';
    html += '</div>';
    html += '<div class="flex gap-2">';
    html += '<button class="btn-integrate" style="flex:1;" onclick="openModal(' + bg.id + ')">&#9889; Integrate</button>';
    html += '<button class="btn-copy" onclick="toggleCode(' + bg.id + ', this)">Code</button>';
    html += '</div>';
    html += '<div id="code' + bg.id + '" style="display:none;">';
    html += '<div class="code-block">' + escH(bg.code) + '</div>';
    html += '<button class="btn-copy" style="width:100%;margin-top:8px;" onclick="copyCode(' + bg.id + ')">Copy Code</button>';
    html += '</div>';
    html += '</div>';
    card.innerHTML = html;
    grid.appendChild(card);
    (function(b) { setTimeout(function() { injectPreview(b); }, 10); })(bg);
  });
}

function injectPreview(bg) {
  var container = document.getElementById('p' + bg.id);
  if (!container) return;

  // Apply ID replacement to THE ENTIRE CODE (HTML + JS) so canvas IDs match
  var fullCode = bg.code;
  if (bg.scriptReplace) {
    var newId = bg.scriptReplace.replace + bg.id;
    fullCode = fullCode.split(bg.scriptReplace.find).join(newId);
  }

  var tmp = document.createElement('div');
  tmp.innerHTML = fullCode;

  // Extract and inject scoped styles
  var styleEls = tmp.querySelectorAll('style');
  for (var i = 0; i < styleEls.length; i++) {
    var scoped = document.createElement('style');
    // prefix all non-@ rules with the preview container id
    scoped.textContent = styleEls[i].textContent.replace(
      /([^{}\n]+)\s*\{/g,
      function(m, sel) {
        if (sel.trim().charAt(0) === '@') return m;
        return '#p' + bg.id + ' ' + sel.trim() + ' {';
      }
    );
    document.head.appendChild(scoped);
    styleEls[i].parentNode.removeChild(styleEls[i]);
  }

  // Collect script code (IDs already replaced above)
  var scriptEls = tmp.querySelectorAll('script');
  var codes = [];
  for (var j = 0; j < scriptEls.length; j++) {
    codes.push(scriptEls[j].textContent);
    scriptEls[j].parentNode.removeChild(scriptEls[j]);
  }

  // Create wrapper and add to DOM BEFORE running scripts (so canvas has dimensions)
  var wrapper = document.createElement('div');
  wrapper.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;';
  wrapper.innerHTML = tmp.innerHTML;
  container.appendChild(wrapper);

  // Force canvas dimensions explicitly
  var canvases = wrapper.querySelectorAll('canvas');
  for (var ci = 0; ci < canvases.length; ci++) {
    canvases[ci].width = container.offsetWidth || 320;
    canvases[ci].height = container.offsetHeight || 200;
  }

  // Run scripts after a tick so layout is complete
  setTimeout(function() {
    for (var k = 0; k < codes.length; k++) {
      try { new Function(codes[k])(); }
      catch(e) { console.warn('Preview bg' + bg.id + ':', e.message); }
    }
  }, 20);
}

function toggleCode(id, btn) {
  var el = document.getElementById('code' + id);
  var vis = el.style.display !== 'none';
  el.style.display = vis ? 'none' : 'block';
  btn.textContent = vis ? 'Code' : 'Hide';
}

function copyCode(id) {
  var bg = BG_DATA.find(function(b) { return b.id === id; });
  navigator.clipboard.writeText(bg.code).then(function() { alert('Code copied!'); });
}

function openModal(id) {
  activeId = id;
  document.getElementById('modal').classList.add('open');
  document.getElementById('input-code').value = '';
  document.getElementById('output-section').style.display = 'none';
  document.getElementById('modal-status').textContent = 'Paste your code and click Integrate';
  document.getElementById('modal-status').style.color = '#6b7280';
  var bg = BG_DATA.find(function(b) { return b.id === id; });
  document.getElementById('modal-bg-name').innerHTML =
    'Selected: <strong style="color:#a78bfa;">' + bg.name + '</strong> &mdash; Paste your HTML below.';
  document.getElementById('run-btn').textContent = 'Integrate "' + bg.name + '"';
  document.getElementById('run-btn').disabled = false;
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

function runIntegration() {
  var input = document.getElementById('input-code').value.trim();
  if (!input) { alert('Paste some HTML first!'); return; }
  var bg = BG_DATA.find(function(b) { return b.id === activeId; });
  var status = document.getElementById('modal-status');
  var btn = document.getElementById('run-btn');
  status.textContent = 'Analyzing DOM structure...';
  status.style.color = '#a78bfa';
  btn.disabled = true;
  setTimeout(function() {
    status.textContent = 'Injecting background...';
    setTimeout(function() {
      var tmp = document.createElement('div');
      tmp.innerHTML = bg.code;
      var styleStr = '';
      var ss = tmp.querySelectorAll('style');
      for (var i = 0; i < ss.length; i++) { styleStr += ss[i].outerHTML + '\n'; ss[i].parentNode.removeChild(ss[i]); }
      var scriptStr = '';
      var sc = tmp.querySelectorAll('script');
      for (var j = 0; j < sc.length; j++) { scriptStr += sc[j].outerHTML + '\n'; sc[j].parentNode.removeChild(sc[j]); }
      var bgHtml = tmp.innerHTML.trim();
      if (bgHtml.indexOf('position:fixed') === -1) {
        bgHtml = '<div style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none;">\n' + bgHtml + '\n</div>';
      }
      var result = input;
      if (styleStr) {
        var cssBlock = '\n  <!-- Lumina Styles -->\n  ' + styleStr;
        if (result.indexOf('</head>') !== -1) result = result.replace('</head>', cssBlock + '\n</head>');
        else result = cssBlock + result;
      }
      var bodyBg = '\n  <!-- Lumina Background -->\n  ' + bgHtml;
      if (result.indexOf('<body>') !== -1) result = result.replace('<body>', '<body>' + bodyBg);
      else result = bodyBg + result;
      if (scriptStr) {
        var jsBlock = '\n  <!-- Lumina Scripts -->\n  ' + scriptStr;
        if (result.indexOf('</body>') !== -1) result = result.replace('</body>', jsBlock + '\n</body>');
        else result += jsBlock;
      }
      document.getElementById('output-code').value = result;
      document.getElementById('output-section').style.display = 'block';
      status.textContent = 'Done! Copy the result below \u2705';
      status.style.color = '#4ade80';
      btn.disabled = false;
    }, 600);
  }, 400);
}

function copyResult() {
  var text = document.getElementById('output-code').value;
  navigator.clipboard.writeText(text).then(function() { alert('Integrated code copied!'); });
}

document.querySelectorAll('.filter-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    renderCards(btn.dataset.cat);
  });
});

renderCards('All');

