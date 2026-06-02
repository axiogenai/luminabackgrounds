window.BG_DATA = window.BG_DATA || [];
window.BG_DATA.push(...[
  {
    "id": 11,
    "name": "Particle Network",
    "category": "Particle",
    "description": "Sparse floating dots with thin connection lines.",
    "scriptReplace": {
      "find": "pn-cvs",
      "replace": "pn-cvs-"
    },
    "code": "<canvas id=\"pn-cvs\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('pn-cvs'),ctx=c.getContext('2d'),w,h,pts=[];\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;}\n  window.addEventListener('resize',sz);sz();\n  for(var i=0;i<40;i++)pts.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3});\n  function draw(){\n    ctx.fillStyle='rgba(5,5,16,0.4)';ctx.fillRect(0,0,w,h);\n    for(var i=0;i<pts.length;i++){\n      var p=pts[i];p.x+=p.vx;p.y+=p.vy;\n      if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;\n      ctx.beginPath();ctx.arc(p.x,p.y,1.5,0,6.28);ctx.fillStyle='rgba(120,100,220,0.7)';ctx.fill();\n      for(var j=i+1;j<pts.length;j++){\n        var q=pts[j],dx=p.x-q.x,dy=p.y-q.y,d=Math.sqrt(dx*dx+dy*dy);\n        if(d<80){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle='rgba(100,80,200,'+(1-d/80)*0.2+')';ctx.lineWidth=0.5;ctx.stroke();}\n      }\n    }\n    requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 12,
    "name": "Floating Dust Particles",
    "category": "Particle",
    "description": "Very slow tiny glowing motes drifting upward.",
    "scriptReplace": {
      "find": "fd-cvs",
      "replace": "fd-cvs-"
    },
    "code": "<canvas id=\"fd-cvs\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('fd-cvs'),ctx=c.getContext('2d'),w,h,pts=[];\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;pts=[];for(var i=0;i<60;i++)pts.push({x:Math.random()*w,y:Math.random()*h,vy:-.2-.2*Math.random(),vx:(Math.random()-.5)*.1,s:Math.random()*1.5+.5,a:Math.random(),hue:220+Math.random()*60});}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(5,5,16,0.3)';ctx.fillRect(0,0,w,h);\n    pts.forEach(function(p){\n      p.y+=p.vy;p.x+=p.vx;p.a=Math.abs(Math.sin(p.y/50));\n      if(p.y<-5)p.y=h+5;\n      ctx.beginPath();ctx.arc(p.x,p.y,p.s,0,6.28);ctx.fillStyle='hsla('+p.hue+',60%,80%,'+p.a*0.6+')';ctx.fill();\n    });\n    requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 13,
    "name": "Snowfall",
    "category": "Particle",
    "description": "Gentle slow snowflakes drifting down.",
    "scriptReplace": {
      "find": "sf-cvs",
      "replace": "sf-cvs-"
    },
    "code": "<canvas id=\"sf-cvs\" style=\"width:100%;height:100%;background:linear-gradient(180deg,#080820,#05051a);display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('sf-cvs'),ctx=c.getContext('2d'),w,h,flakes=[];\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;flakes=[];for(var i=0;i<50;i++)flakes.push({x:Math.random()*w,y:Math.random()*h,r:.5+Math.random()*2,vy:.3+Math.random()*.5,vx:(Math.random()-.5)*.2,a:.3+Math.random()*.5});}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle='rgba(5,5,26,0.35)';ctx.fillRect(0,0,w,h);\n    flakes.forEach(function(f){\n      f.y+=f.vy;f.x+=f.vx;if(f.y>h+5){f.y=-5;f.x=Math.random()*w;}\n      ctx.beginPath();ctx.arc(f.x,f.y,f.r,0,6.28);ctx.fillStyle='rgba(200,210,255,'+f.a+')';ctx.fill();\n    });\n    requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 14,
    "name": "Fireflies",
    "category": "Particle",
    "description": "Slow drifting glowing dots that gently pulse.",
    "scriptReplace": {
      "find": "ff-cvs",
      "replace": "ff-cvs-"
    },
    "code": "<canvas id=\"ff-cvs\" style=\"width:100%;height:100%;background:#030a08;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('ff-cvs'),ctx=c.getContext('2d'),w,h,flies=[];\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;flies=[];for(var i=0;i<30;i++)flies.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,phase:Math.random()*Math.PI*2,speed:.02+Math.random()*.02});}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(3,10,8,0.25)';ctx.fillRect(0,0,w,h);\n    flies.forEach(function(f){\n      f.x+=f.vx;f.y+=f.vy;f.phase+=f.speed;\n      if(f.x<0||f.x>w)f.vx*=-1;if(f.y<0||f.y>h)f.vy*=-1;\n      var a=(Math.sin(f.phase)+1)/2;\n      var g=ctx.createRadialGradient(f.x,f.y,0,f.x,f.y,6);\n      g.addColorStop(0,'rgba(120,220,80,'+(a*.8)+')');g.addColorStop(1,'transparent');\n      ctx.fillStyle=g;ctx.fillRect(f.x-6,f.y-6,12,12);\n    });\n    requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 15,
    "name": "Spark Particles",
    "category": "Particle",
    "description": "Faint slow sparks drifting with gentle glow.",
    "scriptReplace": {
      "find": "sp-cvs",
      "replace": "sp-cvs-"
    },
    "code": "<canvas id=\"sp-cvs\" style=\"width:100%;height:100%;background:#08040a;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('sp-cvs'),ctx=c.getContext('2d'),w,h,sparks=[];\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;sparks=[];for(var i=0;i<50;i++)sparks.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.5,vy:-.2-.5*Math.random(),life:Math.random(),hue:280+Math.random()*60});}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(8,4,10,0.3)';ctx.fillRect(0,0,w,h);\n    sparks.forEach(function(s){\n      s.x+=s.vx;s.y+=s.vy;s.life-=.003;\n      if(s.life<=0){s.life=.5+Math.random()*.5;s.x=Math.random()*w;s.y=h;}\n      ctx.beginPath();ctx.arc(s.x,s.y,1,0,6.28);ctx.fillStyle='hsla('+s.hue+',80%,80%,'+s.life*.5+')';ctx.fill();\n    });\n    requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 16,
    "name": "Shooting Stars",
    "category": "Particle",
    "description": "Occasional faint shooting stars on dark sky.",
    "scriptReplace": {
      "find": "ss-cvs",
      "replace": "ss-cvs-"
    },
    "code": "<canvas id=\"ss-cvs\" style=\"width:100%;height:100%;background:#04040e;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('ss-cvs'),ctx=c.getContext('2d'),w,h,stars=[],shooters=[];\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;stars=[];for(var i=0;i<80;i++)stars.push({x:Math.random()*w,y:Math.random()*h,s:.5+Math.random(),a:.2+Math.random()*.5});}\n  window.addEventListener('resize',sz);sz();\n  function addShooter(){if(Math.random()<.003)shooters.push({x:-20,y:Math.random()*h*.5,vx:4+Math.random()*3,vy:1+Math.random()*2,trail:[]});}\n  function draw(){\n    ctx.fillStyle='rgba(4,4,14,0.35)';ctx.fillRect(0,0,w,h);\n    stars.forEach(function(s){ctx.beginPath();ctx.arc(s.x,s.y,s.s,0,6.28);ctx.fillStyle='rgba(200,200,255,'+s.a+')';ctx.fill();});\n    addShooter();\n    shooters=shooters.filter(function(sh){\n      sh.trail.unshift({x:sh.x,y:sh.y});if(sh.trail.length>20)sh.trail.pop();\n      sh.x+=sh.vx;sh.y+=sh.vy;\n      sh.trail.forEach(function(t,i){ctx.beginPath();ctx.arc(t.x,t.y,1*(1-i/sh.trail.length),0,6.28);ctx.fillStyle='rgba(200,220,255,'+(1-i/sh.trail.length)*.6+')';ctx.fill();});\n      return sh.x<w+20;\n    });\n    requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 17,
    "name": "Galaxy Particle System",
    "category": "Particle",
    "description": "Sparse slow-orbiting star particles.",
    "scriptReplace": {
      "find": "gps-cvs",
      "replace": "gps-cvs-"
    },
    "code": "<canvas id=\"gps-cvs\" style=\"width:100%;height:100%;background:#020208;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('gps-cvs'),ctx=c.getContext('2d'),w,h,pts=[];\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;pts=[];var cx=w/2,cy=h/2;for(var i=0;i<120;i++){var a=Math.random()*Math.PI*2,r=10+Math.pow(Math.random(),.5)*(Math.min(w,h)*.4);pts.push({a:a,r:r,speed:.0003+Math.random()*.0005,hue:200+Math.random()*80,s:.5+Math.random()*1.5});}}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(2,2,8,0.25)';ctx.fillRect(0,0,w,h);\n    var cx=w/2,cy=h/2;\n    pts.forEach(function(p){p.a+=p.speed;var x=cx+Math.cos(p.a)*p.r,y=cy+Math.sin(p.a)*p.r*.45;ctx.beginPath();ctx.arc(x,y,p.s,0,6.28);ctx.fillStyle='hsla('+p.hue+',60%,85%,.5)';ctx.fill();});\n    requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 18,
    "name": "Mouse-Reactive Particles",
    "category": "Particle",
    "description": "Particles gently drift toward cursor.",
    "scriptReplace": {
      "find": "mr-cvs",
      "replace": "mr-cvs-"
    },
    "code": "<canvas id=\"mr-cvs\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('mr-cvs'),ctx=c.getContext('2d'),w,h,mx=0,my=0,pts=[];\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;mx=w/2;my=h/2;}\n  window.addEventListener('resize',sz);sz();\n  c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;});\n  for(var i=0;i<50;i++)pts.push({x:Math.random()*500,y:Math.random()*300,vx:0,vy:0,hue:200+Math.random()*80});\n  function draw(){\n    ctx.fillStyle='rgba(5,5,16,0.35)';ctx.fillRect(0,0,w,h);\n    pts.forEach(function(p){\n      var dx=mx-p.x,dy=my-p.y,d=Math.sqrt(dx*dx+dy*dy);\n      if(d<120){p.vx+=dx/d*.08;p.vy+=dy/d*.08;}\n      p.vx*=.94;p.vy*=.94;p.x+=p.vx;p.y+=p.vy;\n      if(p.x<0)p.x=w;if(p.x>w)p.x=0;if(p.y<0)p.y=h;if(p.y>h)p.y=0;\n      ctx.beginPath();ctx.arc(p.x,p.y,1.5,0,6.28);ctx.fillStyle='hsla('+p.hue+',60%,80%,.5)';ctx.fill();\n    });\n    requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 19,
    "name": "Particle Explosion Loops",
    "category": "Particle",
    "description": "Slow soft pulses radiating outward.",
    "scriptReplace": {
      "find": "pe-cvs",
      "replace": "pe-cvs-"
    },
    "code": "<canvas id=\"pe-cvs\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('pe-cvs'),ctx=c.getContext('2d'),w,h,rings=[];\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;}\n  window.addEventListener('resize',sz);sz();\n  setInterval(function(){rings.push({r:0,alpha:.25,hue:220+Math.random()*80});},2500);\n  rings.push({r:0,alpha:.25,hue:240});\n  function draw(){\n    ctx.fillStyle='rgba(5,5,16,0.2)';ctx.fillRect(0,0,w,h);\n    var cx=w/2,cy=h/2;\n    rings=rings.filter(function(r){return r.alpha>.005;});\n    rings.forEach(function(r){r.r+=.8;r.alpha*=.985;ctx.beginPath();ctx.arc(cx,cy,r.r,0,Math.PI*2);ctx.strokeStyle='hsla('+r.hue+',60%,70%,'+r.alpha+')';ctx.lineWidth=1;ctx.stroke();});\n    requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 20,
    "name": "Flow Field Particles",
    "category": "Particle",
    "description": "Particles following a calm perlin-like flow.",
    "scriptReplace": {
      "find": "fl-cvs",
      "replace": "fl-cvs-"
    },
    "code": "<canvas id=\"fl-cvs\" style=\"width:100%;height:100%;background:#040410;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('fl-cvs'),ctx=c.getContext('2d'),w,h,pts=[],t=0;\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;pts=[];for(var i=0;i<80;i++)pts.push({x:Math.random()*w,y:Math.random()*h,hue:200+Math.random()*80});}\n  window.addEventListener('resize',sz);sz();\n  function noise(x,y){return Math.sin(x*.008+t*.005)*Math.cos(y*.008+t*.004)*Math.PI*2;}\n  function draw(){\n    ctx.fillStyle='rgba(4,4,16,0.12)';ctx.fillRect(0,0,w,h);\n    pts.forEach(function(p){\n      var angle=noise(p.x,p.y);p.x+=Math.cos(angle)*.8;p.y+=Math.sin(angle)*.8;\n      if(p.x<0||p.x>w||p.y<0||p.y>h){p.x=Math.random()*w;p.y=Math.random()*h;}\n      ctx.beginPath();ctx.arc(p.x,p.y,1,0,6.28);ctx.fillStyle='hsla('+p.hue+',50%,75%,.35)';ctx.fill();\n    });\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 66,
    "name": "Particle: Plain Drift",
    "category": "Particle",
    "description": "Slow random drifting particles with smooth borders.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-66\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-66');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#8899ff';\n  const count = 80;\n  let pts = [];\n  function build() {\n    pts = [];\n    for(let i=0;i<count;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.3,0.3), vy:rnd(-0.3,0.3), r:rnd(1,2.5), a:rnd(0.2,0.6) });\n  }\n  build();\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.x+=p.vx; p.y+=p.vy;\n      if(p.x<0)p.x=w; if(p.x>w)p.x=0;\n      if(p.y<0)p.y=h; if(p.y>h)p.y=0;\n      ctx.save(); ctx.globalAlpha=p.a;\n      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);\n      ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 67,
    "name": "Particle: Connected Network",
    "category": "Particle",
    "description": "Drifting dots connected with dynamic grid lines.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-67\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-67');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#7788ff';\n  const count = 70;\n  const maxDist = 120;\n  let pts = [];\n  function build() {\n    pts = [];\n    for(let i=0;i<count;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.2,0.2), vy:rnd(-0.2,0.2), r:rnd(1,2) });\n  }\n  build();\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => { p.x+=p.vx; p.y+=p.vy; if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0; });\n    for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++) {\n      const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);\n      if(d<maxDist) { ctx.save(); ctx.globalAlpha=(1-d/maxDist)*0.2; ctx.strokeStyle=color; ctx.lineWidth=0.5; ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke(); ctx.restore(); }\n    }\n    pts.forEach(p => { ctx.save(); ctx.globalAlpha=0.6; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore(); });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 68,
    "name": "Particle: Mouse Repel",
    "category": "Particle",
    "description": "Particles that push away from the cursor.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-68\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-68');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  canvas.style.pointerEvents = 'auto';\n  const color = '#aabbff';\n  let mouse = { x:-999, y:-999 };\n  canvas.addEventListener('mousemove', e => { const r=canvas.getBoundingClientRect(); mouse.x=e.clientX-r.left; mouse.y=e.clientY-r.top; });\n  canvas.addEventListener('mouseleave', () => { mouse.x=-999; mouse.y=-999; });\n  let pts = [];\n  for(let i=0;i<90;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), ox:0, oy:0, vx:rnd(-0.2,0.2), vy:rnd(-0.2,0.2), r:rnd(1,2.2), a:rnd(0.3,0.7) });\n  pts.forEach(p => { p.ox=p.x; p.oy=p.y; });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      const dx=p.x-mouse.x, dy=p.y-mouse.y, d=Math.sqrt(dx*dx+dy*dy);\n      if(d<80) { p.x+=dx/d*2; p.y+=dy/d*2; } else { p.x+=p.vx; p.y+=p.vy; }\n      if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0;\n      ctx.save(); ctx.globalAlpha=p.a; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 69,
    "name": "Particle: Mouse Attract",
    "category": "Particle",
    "description": "Gravity simulation attracting particles to your cursor.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-69\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-69');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  canvas.style.pointerEvents = 'auto';\n  const color = '#ff88cc';\n  let mouse = { x: w/2, y: h/2 };\n  canvas.addEventListener('mousemove', e => { const r=canvas.getBoundingClientRect(); mouse.x=e.clientX-r.left; mouse.y=e.clientY-r.top; });\n  let pts = [];\n  for(let i=0;i<100;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.5,0.5), vy:rnd(-0.5,0.5), r:rnd(1,2), a:rnd(0.2,0.6) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      const dx=mouse.x-p.x, dy=mouse.y-p.y, d=Math.sqrt(dx*dx+dy*dy);\n      if(d<150) { p.vx+=dx/d*0.08; p.vy+=dy/d*0.08; }\n      p.vx*=0.97; p.vy*=0.97; p.x+=p.vx; p.y+=p.vy;\n      if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0;\n      ctx.save(); ctx.globalAlpha=p.a; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 70,
    "name": "Particle: Snow Fall",
    "category": "Particle",
    "description": "Slowly falling snowflakes with soft drift variance.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-70\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-70');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#ffffff';\n  let pts = [];\n  for(let i=0;i<150;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), vy:rnd(0.3,1.2), vx:rnd(-0.2,0.2), r:rnd(1,3), a:rnd(0.2,0.7) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.y+=p.vy; p.x+=p.vx;\n      if(p.y>h) { p.y=0; p.x=rnd(0,w); }\n      if(p.x<0)p.x=w; if(p.x>w)p.x=0;\n      ctx.save(); ctx.globalAlpha=p.a; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 71,
    "name": "Particle: Rain Shower",
    "category": "Particle",
    "description": "Fast falling vertical rain lines.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-71\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-71');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#88ccff';\n  let pts = [];\n  for(let i=0;i<120;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), vy:rnd(4,10), len:rnd(10,25), a:rnd(0.1,0.4) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.y+=p.vy;\n      if(p.y>h) { p.y=-p.len; p.x=rnd(0,w); }\n      ctx.save(); ctx.globalAlpha=p.a; ctx.strokeStyle=color; ctx.lineWidth=0.8;\n      ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(p.x-2,p.y+p.len); ctx.stroke(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 72,
    "name": "Particle: Firefly Swarm",
    "category": "Particle",
    "description": "Drifting fireflies with realistic glow halos.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-72\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-72');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#aaff88';\n  let pts = [];\n  for(let i=0;i<60;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.4,0.4), vy:rnd(-0.4,0.4), r:rnd(1.5,3), pulse:rnd(0,Math.PI*2), ps:rnd(0.02,0.05) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.x+=p.vx; p.y+=p.vy; p.pulse+=p.ps;\n      if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0;\n      const a = 0.3+0.7*Math.abs(Math.sin(p.pulse));\n      ctx.save(); ctx.globalAlpha=a*0.8;\n      const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*6);\n      g.addColorStop(0,color+'cc'); g.addColorStop(1,'transparent');\n      ctx.beginPath(); ctx.arc(p.x,p.y,p.r*6,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();\n      ctx.globalAlpha=a; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=color; ctx.fill();\n      ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 73,
    "name": "Particle: Confetti Falling",
    "category": "Particle",
    "description": "Slowly rotating, multi-colored confetti strips.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-73\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-73');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const colors = ['#ff4466','#ffcc00','#44ddff','#aa44ff','#44ff88'];\n  let pts = [];\n  for(let i=0;i<100;i++) pts.push({ x:rnd(0,w), y:rnd(-100,h), vx:rnd(-0.5,0.5), vy:rnd(1,3), rot:rnd(0,Math.PI*2), rs:rnd(-0.05,0.05), w:rnd(5,10), h:rnd(3,6), col:colors[rndInt(0,colors.length)] });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.y+=p.vy; p.x+=p.vx; p.rot+=p.rs;\n      if(p.y>h) { p.y=-10; p.x=rnd(0,w); }\n      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot); ctx.globalAlpha=0.85;\n      ctx.fillStyle=p.col; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 74,
    "name": "Particle: Bubble Float",
    "category": "Particle",
    "description": "Light, rising transparent bubble rings.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-74\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-74');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#44aaff';\n  let pts = [];\n  for(let i=0;i<50;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), vy:rnd(-0.5,-0.15), vx:rnd(-0.15,0.15), r:rnd(4,18), a:rnd(0.05,0.2) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.y+=p.vy; p.x+=p.vx;\n      if(p.y<-p.r) { p.y=h+p.r; p.x=rnd(0,w); }\n      ctx.save(); ctx.globalAlpha=p.a; ctx.strokeStyle=color; ctx.lineWidth=1;\n      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.stroke();\n      ctx.globalAlpha=p.a*0.3; ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 75,
    "name": "Particle: Starfield Zoom",
    "category": "Particle",
    "description": "Perspective forward space travel simulation.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-75\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-75');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#ffffff';\n  let stars = [];\n  for(let i=0;i<200;i++) stars.push({ x:rnd(-1,1), y:rnd(-1,1), z:rnd(0,1) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    const cx=w/2, cy=h/2;\n    stars.forEach(s => {\n      s.z-=0.003;\n      if(s.z<=0) { s.x=rnd(-1,1); s.y=rnd(-1,1); s.z=1; }\n      const px=cx+s.x/s.z*cx, py=cy+s.y/s.z*cy;\n      const r=(1-s.z)*2.5;\n      if(px<0||px>w||py<0||py>h) return;\n      ctx.save(); ctx.globalAlpha=1-s.z;\n      ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 76,
    "name": "Particle: Pulse Rings",
    "category": "Particle",
    "description": "Fading concentric circles expanding from random positions.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-76\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-76');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#6644ff';\n  let rings = [];\n  function spawnRing() { rings.push({ x:rnd(0,w), y:rnd(0,h), r:0, maxR:rnd(60,150), a:0.5 }); }\n  for(let i=0;i<5;i++) spawnRing();\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    rings.forEach((r,idx) => {\n      r.r+=0.6; r.a=0.5*(1-r.r/r.maxR);\n      if(r.r>=r.maxR) { rings.splice(idx,1); spawnRing(); return; }\n      ctx.save(); ctx.globalAlpha=r.a; ctx.strokeStyle=color; ctx.lineWidth=1.5;\n      ctx.beginPath(); ctx.arc(r.x,r.y,r.r,0,Math.PI*2); ctx.stroke(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 77,
    "name": "Particle: Neon Drift",
    "category": "Particle",
    "description": "Multi-colored glowing particles floating slowly.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-77\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-77');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const colors = ['#00f5ff','#bf00ff','#ff00aa','#00ff88'];\n  let pts = [];\n  for(let i=0;i<70;i++) {\n    const col = colors[rndInt(0,colors.length)];\n    pts.push({ x:rnd(0,w), y:rnd(0,w), vx:rnd(-0.3,0.3), vy:rnd(-0.3,0.3), r:rnd(1,2.5), col, a:rnd(0.3,0.7), pulse:rnd(0,Math.PI*2), ps:rnd(0.01,0.03) });\n  }\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.x+=p.vx; p.y+=p.vy; p.pulse+=p.ps;\n      if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0;\n      const a = p.a*(0.6+0.4*Math.sin(p.pulse));\n      ctx.save(); ctx.globalAlpha=a;\n      const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*5);\n      g.addColorStop(0,p.col+'aa'); g.addColorStop(1,'transparent');\n      ctx.beginPath(); ctx.arc(p.x,p.y,p.r*5,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();\n      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill();\n      ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 78,
    "name": "Particle: Geometric Triangles",
    "category": "Particle",
    "description": "Outlined triangles slowly rotating and floating.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-78\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-78');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#aabbff';\n  let shapes = [];\n  for(let i=0;i<30;i++) shapes.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.3,0.3), vy:rnd(-0.3,0.3), size:rnd(8,22), rot:rnd(0,Math.PI*2), rs:rnd(-0.01,0.01), a:rnd(0.05,0.2) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    shapes.forEach(s => {\n      s.x+=s.vx; s.y+=s.vy; s.rot+=s.rs;\n      if(s.x<0)s.x=w; if(s.x>w)s.x=0; if(s.y<0)s.y=h; if(s.y>h)p.y=0;\n      ctx.save(); ctx.translate(s.x,s.y); ctx.rotate(s.rot); ctx.globalAlpha=s.a;\n      ctx.beginPath(); ctx.moveTo(0,-s.size); ctx.lineTo(s.size,s.size); ctx.lineTo(-s.size,s.size); ctx.closePath();\n      ctx.strokeStyle=color; ctx.lineWidth=1; ctx.stroke(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 79,
    "name": "Particle: Floating Squares",
    "category": "Particle",
    "description": "Outline squares spinning gently on a dark background.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-79\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-79');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#ffaa44';\n  let shapes = [];\n  for(let i=0;i<35;i++) shapes.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.2,0.2), vy:rnd(-0.2,0.2), size:rnd(5,18), rot:rnd(0,Math.PI*2), rs:rnd(-0.008,0.008), a:rnd(0.05,0.18) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    shapes.forEach(s => {\n      s.x+=s.vx; s.y+=s.vy; s.rot+=s.rs;\n      if(s.x<0)s.x=w; if(s.x>w)s.x=0; if(s.y<0)s.y=h; if(s.y>h)s.y=0;\n      ctx.save(); ctx.translate(s.x,s.y); ctx.rotate(s.rot); ctx.globalAlpha=s.a;\n      ctx.strokeStyle=color; ctx.lineWidth=1; ctx.strokeRect(-s.size/2,-s.size/2,s.size,s.size); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 80,
    "name": "Particle: Hexagon Grid Drift",
    "category": "Particle",
    "description": "Outline hexagon wireframes floating and rotating.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-80\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-80');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#44ffdd';\n  let shapes = [];\n  for(let i=0;i<25;i++) shapes.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.2,0.2), vy:rnd(-0.2,0.2), r:rnd(8,22), rot:rnd(0,Math.PI*2), rs:rnd(-0.005,0.005), a:rnd(0.05,0.15) });\n  function hex(ctx,x,y,r) { ctx.beginPath(); for(let i=0;i<6;i++) { const a=Math.PI/3*i; ctx.lineTo(x+r*Math.cos(a),y+r*Math.sin(a)); } ctx.closePath(); }\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    shapes.forEach(s => {\n      s.x+=s.vx; s.y+=s.vy; s.rot+=s.rs;\n      if(s.x<0)s.x=w; if(s.x>w)s.x=0; if(s.y<0)s.y=h; if(s.y>h)s.y=0;\n      ctx.save(); ctx.translate(s.x,s.y); ctx.rotate(s.rot); ctx.globalAlpha=s.a;\n      hex(ctx,0,0,s.r); ctx.strokeStyle=color; ctx.lineWidth=1; ctx.stroke(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 81,
    "name": "Particle: Outline Circles",
    "category": "Particle",
    "description": "Geometric circle outlines drift and overlap.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-81\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-81');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#ff66aa';\n  let shapes = [];\n  for(let i=0;i<40;i++) shapes.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.25,0.25), vy:rnd(-0.25,0.25), r:rnd(4,20), a:rnd(0.05,0.18) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    shapes.forEach(s => {\n      s.x+=s.vx; s.y+=s.vy;\n      if(s.x<0)s.x=w; if(s.x>w)s.x=0; if(s.y<0)s.y=h; if(s.y>h)s.y=0;\n      ctx.save(); ctx.globalAlpha=s.a; ctx.strokeStyle=color; ctx.lineWidth=1;\n      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.stroke(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 82,
    "name": "Particle: Spinning Crosses",
    "category": "Particle",
    "description": "Faint cross/plus shapes rotating and drifting.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-82\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-82');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#ffffff';\n  let shapes = [];\n  for(let i=0;i<50;i++) shapes.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.2,0.2), vy:rnd(-0.2,0.2), size:rnd(4,14), rot:rnd(0,Math.PI*2), rs:rnd(-0.01,0.01), a:rnd(0.07,0.25) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    shapes.forEach(s => {\n      s.x+=s.vx; s.y+=s.vy; s.rot+=s.rs;\n      if(s.x<0)s.x=w; if(s.x>w)s.x=0; if(s.y<0)s.y=h; if(s.y>h)s.y=0;\n      ctx.save(); ctx.translate(s.x,s.y); ctx.rotate(s.rot); ctx.globalAlpha=s.a; ctx.strokeStyle=color; ctx.lineWidth=1;\n      ctx.beginPath(); ctx.moveTo(-s.size,0); ctx.lineTo(s.size,0); ctx.moveTo(0,-s.size); ctx.lineTo(0,s.size); ctx.stroke(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 83,
    "name": "Particle: Dots Grid Pulse",
    "category": "Particle",
    "description": "Minimalist grid of dots pulsing with coordinate wave math.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-83\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-83');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#6655ff';\n  const gap = 40;\n  let t = 0;\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    t += 0.03;\n    for(let x=gap/2;x<w;x+=gap) for(let y=gap/2;y<h;y+=gap) {\n      const d=Math.sqrt((x-w/2)**2+(y-h/2)**2);\n      const pulse=Math.sin(t-d*0.03)*0.5+0.5;\n      ctx.save(); ctx.globalAlpha=pulse*0.5; ctx.beginPath(); ctx.arc(x,y,2,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    }\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 84,
    "name": "Particle: Orbital Systems",
    "category": "Particle",
    "description": "Planetary-like orbiting dots on concentric paths.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-84\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-84');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#44ccff';\n  let systems = [];\n  function build() {\n    systems = [];\n    for(let i=0;i<6;i++) {\n      const cx=rnd(100,w-100), cy=rnd(100,h-100);\n      const orbits = [];\n      for(let j=0;j<rndInt(2,5);j++) orbits.push({ r:rnd(15,60), speed:rnd(0.005,0.02)*( Math.random()<0.5?1:-1), angle:rnd(0,Math.PI*2), size:rnd(1,3) });\n      systems.push({cx,cy,orbits});\n    }\n  }\n  build();\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    systems.forEach(s => {\n      s.orbits.forEach(o => {\n        o.angle+=o.speed;\n        const px=s.cx+Math.cos(o.angle)*o.r, py=s.cy+Math.sin(o.angle)*o.r;\n        ctx.save(); ctx.globalAlpha=0.15; ctx.strokeStyle=color; ctx.lineWidth=0.5;\n        ctx.beginPath(); ctx.arc(s.cx,s.cy,o.r,0,Math.PI*2); ctx.stroke();\n        ctx.globalAlpha=0.7; ctx.beginPath(); ctx.arc(px,py,o.size,0,Math.PI*2); ctx.fillStyle=color; ctx.fill();\n        ctx.restore();\n      });\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 85,
    "name": "Particle: Wave Particles",
    "category": "Particle",
    "description": "Particle band flowing in a sine-wave formation.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-85\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-85');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#55aaff';\n  let t = 0;\n  const count = 80;\n  let pts = [];\n  function build() {\n    pts = [];\n    for(let i=0;i<count;i++) pts.push({ xi:rnd(0,w), phase:rnd(0,Math.PI*2), speed:rnd(0.01,0.03), amp:rnd(20,80), r:rnd(1,2.5), a:rnd(0.2,0.5) });\n  }\n  build();\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    t+=0.02;\n    pts.forEach(p => {\n      const y = h/2 + Math.sin(t + p.phase) * p.amp;\n      ctx.save(); ctx.globalAlpha=p.a; ctx.beginPath(); ctx.arc(p.xi,y,p.r,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 86,
    "name": "Particle: Spiral Orbit",
    "category": "Particle",
    "description": "Twisting particle streams rotating around a center point.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-86\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-86');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#cc44ff';\n  let pts = [];\n  function build() {\n    pts = [];\n    for(let i=0;i<120;i++) { const a=i*0.3, r=i*3; pts.push({ angle:a, r, speed:rnd(0.002,0.008), size:rnd(1,2.5), a:rnd(0.2,0.6) }); }\n  }\n  build();\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    const cx=w/2, cy=h/2;\n    pts.forEach(p => {\n      p.angle+=p.speed;\n      const x=cx+Math.cos(p.angle)*p.r, y=cy+Math.sin(p.angle)*p.r;\n      if(x<0||x>w||y<0||y>h) return;\n      ctx.save(); ctx.globalAlpha=p.a; ctx.beginPath(); ctx.arc(x,y,p.size,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 87,
    "name": "Particle: Explosion Burst",
    "category": "Particle",
    "description": "Click anywhere on screen to trigger gravity-reactive particle bursts.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-87\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-87');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  canvas.style.pointerEvents = 'auto';\n  const color = '#ffaa00';\n  let pts = [];\n  function explode(x, y) {\n    for(let i=0;i<30;i++) { const angle=rnd(0,Math.PI*2), speed=rnd(1,5); pts.push({ x, y, vx:Math.cos(angle)*speed, vy:Math.sin(angle)*speed, r:rnd(1,3), a:1, life:1 }); }\n  }\n  canvas.addEventListener('click', e => { const r=canvas.getBoundingClientRect(); explode(e.clientX-r.left, e.clientY-r.top); });\n  setTimeout(() => explode(w/2, h/2), 500);\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts = pts.filter(p => p.life>0);\n    pts.forEach(p => {\n      p.x+=p.vx; p.y+=p.vy; p.vy+=0.05; p.life-=0.015; p.a=p.life;\n      ctx.save(); ctx.globalAlpha=p.a; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 88,
    "name": "Particle: Micro Dust",
    "category": "Particle",
    "description": "Ultra fine microscopic dust motes floating on a breeze.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-88\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-88');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#ccbbaa';\n  let pts = [];\n  for(let i=0;i<200;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.1,0.1), vy:rnd(-0.05,0.05), r:rnd(0.3,1.2), a:rnd(0.05,0.25) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.x+=p.vx; p.y+=p.vy;\n      if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0;\n      ctx.save(); ctx.globalAlpha=p.a; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 89,
    "name": "Particle: Digital Code Rain",
    "category": "Particle",
    "description": "Faint falling code rain streams.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-89\" style=\"width:100%;height:100%;background:#000;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-89');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#00ff44';\n  const fontSize = 12;\n  let cols, drops;\n  function build() { cols=Math.floor(w/fontSize); drops=Array(cols).fill(1); }\n  build();\n  function loop() {\n    ctx.fillStyle='rgba(0,0,0,0.05)'; ctx.fillRect(0,0,w,h);\n    ctx.fillStyle=color; ctx.font=fontSize+'px monospace';\n    drops.forEach((y,idx) => {\n      ctx.globalAlpha=0.5;\n      const ch=String.fromCharCode(0x30A0+Math.random()*96);\n      ctx.fillText(ch,idx*fontSize,y*fontSize);\n      if(y*fontSize>h&&Math.random()>0.975) drops[idx]=0;\n      drops[idx]++;\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 90,
    "name": "Particle: Bokeh Lights",
    "category": "Particle",
    "description": "Huge, soft, slow-moving blurred circles of light.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-90\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-90');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const colors = ['#ffeeaa','#ffaacc','#aaccff','#aaffcc'];\n  let pts = [];\n  for(let i=0;i<35;i++) { const col=colors[rndInt(0,colors.length)]; pts.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.15,0.15), vy:rnd(-0.15,0.15), r:rnd(15,55), a:rnd(0.03,0.1), col }); }\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.x+=p.vx; p.y+=p.vy;\n      if(p.x<-p.r)p.x=w+p.r; if(p.x>w+p.r)p.x=-p.r;\n      if(p.y<-p.r)p.y=h+p.r; if(p.y>h+p.r)p.y=-p.r;\n      const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r);\n      g.addColorStop(0,p.col+'88'); g.addColorStop(0.5,p.col+'33'); g.addColorStop(1,'transparent');\n      ctx.save(); ctx.globalAlpha=p.a; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=g; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 91,
    "name": "Particle: Hologram Lightning",
    "category": "Particle",
    "description": "Occasionally flashing electrical discharge tracks.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-91\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-91');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#aaaaff';\n  function bolt(x1,y1,x2,y2,depth) {\n    if(depth===0) { ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); return; }\n    const mx=(x1+x2)/2+(rnd(-1,1)*50/depth), my=(y1+y2)/2+(rnd(-1,1)*50/depth);\n    bolt(x1,y1,mx,my,depth-1); bolt(mx,my,x2,y2,depth-1);\n  }\n  let t=0;\n  function loop() {\n    ctx.clearRect(0,0,w,h); t++;\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    if(t%90===0) {\n      ctx.save(); ctx.strokeStyle=color; ctx.lineWidth=0.8; ctx.globalAlpha=0.4;\n      ctx.beginPath(); bolt(rnd(0,w),0,rnd(0,w),h,4); ctx.stroke(); ctx.restore();\n    }\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 92,
    "name": "Particle: Liquid Ink Drops",
    "category": "Particle",
    "description": "Fading circular ink pools merging into darkness.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-92\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-92');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#334499';\n  let drops = [];\n  function spawn() { drops.push({ x:rnd(0,w), y:rnd(0,h), r:0, maxR:rnd(30,100), a:0.3 }); }\n  for(let i=0;i<4;i++) spawn();\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    drops.forEach((d,idx) => {\n      d.r+=0.5; d.a=0.3*(1-d.r/d.maxR);\n      if(d.r>=d.maxR) { drops.splice(idx,1); spawn(); return; }\n      ctx.save(); ctx.globalAlpha=d.a; ctx.beginPath(); ctx.arc(d.x,d.y,d.r,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 93,
    "name": "Particle: Comet Streams",
    "category": "Particle",
    "description": "Linear comets with fading tail vectors showering down.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-93\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-93');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#ffffff';\n  let meteors = [];\n  function spawn() { meteors.push({ x:rnd(0,w), y:rnd(-100,0), vx:rnd(2,5), vy:rnd(3,7), len:rnd(30,80), a:rnd(0.3,0.7) }); }\n  for(let i=0;i<8;i++) spawn();\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    meteors.forEach((m,idx) => {\n      m.x+=m.vx; m.y+=m.vy;\n      if(m.y>h||m.x>w) { meteors.splice(idx,1); spawn(); return; }\n      const g=ctx.createLinearGradient(m.x,m.y,m.x-m.vx*(m.len/5),m.y-m.vy*(m.len/5));\n      g.addColorStop(0,color); g.addColorStop(1,'transparent');\n      ctx.save(); ctx.globalAlpha=m.a; ctx.strokeStyle=g; ctx.lineWidth=1.5;\n      ctx.beginPath(); ctx.moveTo(m.x,m.y); ctx.lineTo(m.x-m.vx*(m.len/5),m.y-m.vy*(m.len/5)); ctx.stroke(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 94,
    "name": "Particle: DNA Helix",
    "category": "Particle",
    "description": "Double helix structural wave rotating vertically.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-94\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-94');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const c1 = '#4488ff', c2 = '#ff4488';\n  let t = 0;\n  function loop() {\n    ctx.clearRect(0,0,w,h); t+=0.02;\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    const cx=w/2;\n    for(let i=0;i<40;i++) {\n      const y=(i/40)*h;\n      const x1=cx+Math.sin(t+i*0.4)*60, x2=cx-Math.sin(t+i*0.4)*60;\n      ctx.save(); ctx.globalAlpha=0.6;\n      ctx.beginPath(); ctx.arc(x1,y,3,0,Math.PI*2); ctx.fillStyle=c1; ctx.fill();\n      ctx.beginPath(); ctx.arc(x2,y,3,0,Math.PI*2); ctx.fillStyle=c2; ctx.fill();\n      if(i%4===0) { ctx.globalAlpha=0.15; ctx.strokeStyle='#ffffff'; ctx.lineWidth=0.8; ctx.beginPath(); ctx.moveTo(x1,y); ctx.lineTo(x2,y); ctx.stroke(); }\n      ctx.restore();\n    }\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 95,
    "name": "Particle: Drifting Smoke",
    "category": "Particle",
    "description": "Very slow, rising transparent smoke particles.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-95\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-95');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#888888';\n  let pts = [];\n  for(let i=0;i<40;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.3,0.3), vy:rnd(-0.5,-0.1), r:rnd(10,40), a:rnd(0.02,0.07), life:rnd(0,1) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.y+=p.vy; p.x+=p.vx; p.r+=0.2; p.a-=0.0003;\n      if(p.y<-p.r||p.a<=0) { p.y=h+p.r; p.x=rnd(0,w); p.r=rnd(10,30); p.a=rnd(0.02,0.06); }\n      const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r);\n      g.addColorStop(0,color+'44'); g.addColorStop(1,'transparent');\n      ctx.save(); ctx.globalAlpha=p.a; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=g; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 96,
    "name": "Particle: Glitter Dust",
    "category": "Particle",
    "description": "Glittering star dust drifting and fading in brightness.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-96\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-96');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const colors = ['#ffee88','#ffccaa','#ffffff','#ffddff'];\n  let pts = [];\n  for(let i=0;i<120;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.15,0.15), vy:rnd(0.1,0.5), r:rnd(0.5,1.8), a:rnd(0,1), da:rnd(0.02,0.06), col:colors[rndInt(0,colors.length)] });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.x+=p.vx; p.y+=p.vy; p.a+=p.da;\n      if(p.a>1||p.a<0) p.da*=-1;\n      if(p.y>h) { p.y=0; p.x=rnd(0,w); }\n      ctx.save(); ctx.globalAlpha=p.a; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=p.col; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 97,
    "name": "Particle: Cosmic Vortex",
    "category": "Particle",
    "description": "Star particles spiraling in towards a central sink.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-97\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-97');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#8844ff';\n  let pts = [];\n  function build() {\n    pts = [];\n    for(let i=0;i<100;i++) { const angle=rnd(0,Math.PI*2), r=rnd(20,Math.min(w,h)/2); pts.push({ angle, r, speed:rnd(0.005,0.02)*(r<100?1.5:1), size:rnd(1,2.5), a:rnd(0.3,0.7) }); }\n  }\n  build();\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    const cx=w/2, cy=h/2;\n    pts.forEach(p => {\n      p.angle+=p.speed; p.r-=0.03;\n      if(p.r<5) { p.r=Math.min(w,h)/2; p.angle=rnd(0,Math.PI*2); }\n      const x=cx+Math.cos(p.angle)*p.r, y=cy+Math.sin(p.angle)*p.r;\n      ctx.save(); ctx.globalAlpha=p.a; ctx.beginPath(); ctx.arc(x,y,p.size,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 98,
    "name": "Particle: Pixel Rain",
    "category": "Particle",
    "description": "Grid-locked square pixels raining downward.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-98\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-98');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#44ff88';\n  const size = 4;\n  let pts = [];\n  function build() {\n    pts = [];\n    for(let i=0;i<80;i++) pts.push({ x:Math.floor(rnd(0,w/size))*size, y:rnd(-h,0), vy:rnd(1,4), a:rnd(0.3,0.8) });\n  }\n  build();\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.y+=p.vy;\n      if(p.y>h) { p.y=-size; p.x=Math.floor(rnd(0,w/size))*size; }\n      ctx.save(); ctx.globalAlpha=p.a; ctx.fillStyle=color; ctx.fillRect(p.x,p.y,size,size); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 99,
    "name": "Particle: Petal Drift",
    "category": "Particle",
    "description": "Faint elliptical flower petals swaying down.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-99\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-99');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#ffaacc';\n  let pts = [];\n  for(let i=0;i<30;i++) pts.push({ x:rnd(0,w), y:rnd(-100,h), vx:rnd(-0.5,0.5), vy:rnd(0.3,1), rot:rnd(0,Math.PI*2), rs:rnd(-0.02,0.02), w:rnd(6,14), h:rnd(10,20), a:rnd(0.2,0.6) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.y+=p.vy; p.x+=p.vx+Math.sin(p.rot)*0.3; p.rot+=p.rs;\n      if(p.y>h) { p.y=-20; p.x=rnd(0,w); }\n      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot); ctx.globalAlpha=p.a;\n      ctx.beginPath(); ctx.ellipse(0,0,p.w/2,p.h/2,0,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 100,
    "name": "Particle: Warp Speed",
    "category": "Particle",
    "description": "High velocity linear star travel stretches.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-100\" style=\"width:100%;height:100%;background:#000;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-100');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#aaaaff';\n  let stars = [];\n  for(let i=0;i<150;i++) stars.push({ x:rnd(-1,1), y:rnd(-1,1), z:rnd(0,1), pz:0 });\n  function loop() {\n    ctx.fillStyle='rgba(0,0,0,0.2)'; ctx.fillRect(0,0,w,h);\n    const cx=w/2, cy=h/2;\n    stars.forEach(s => {\n      s.pz=s.z; s.z-=0.01;\n      if(s.z<=0) { s.x=rnd(-1,1); s.y=rnd(-1,1); s.z=1; s.pz=1; }\n      const px=cx+s.x/s.z*cx, py=cy+s.y/s.z*cy;\n      const ppx=cx+s.x/s.pz*cx, ppy=cy+s.y/s.pz*cy;\n      if(px<0||px>w||py<0||py>h) return;\n      const len=Math.sqrt((px-ppx)**2+(py-ppy)**2);\n      ctx.save(); ctx.globalAlpha=Math.min(1-s.z,0.8); ctx.strokeStyle=color; ctx.lineWidth=Math.max(0.5,1-s.z);\n      ctx.beginPath(); ctx.moveTo(ppx,ppy); ctx.lineTo(px,py); ctx.stroke(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 101,
    "name": "Particle: Heartbeat Pulse",
    "category": "Particle",
    "description": "Expanding waves pulsing at regular intervals from center.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-101\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-101');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#ff4444';\n  let pulses = [];\n  let t=0;\n  function loop() {\n    ctx.clearRect(0,0,w,h); t++;\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    if(t%90===0) pulses.push({ r:0, a:0.5 });\n    const cx=w/2, cy=h/2;\n    pulses = pulses.filter(p=>p.a>0);\n    pulses.forEach(p => { p.r+=1.5; p.a-=0.005; ctx.save(); ctx.globalAlpha=p.a; ctx.strokeStyle=color; ctx.lineWidth=1.5; ctx.beginPath(); ctx.arc(cx,cy,p.r,0,Math.PI*2); ctx.stroke(); ctx.restore(); });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 102,
    "name": "Particle: Sand Storm",
    "category": "Particle",
    "description": "High speed particle flow sweeping horizontally.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-102\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-102');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#ddaa55';\n  let pts = [];\n  for(let i=0;i<300;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(1,4), vy:rnd(-0.5,0.5), r:rnd(0.3,1.5), a:rnd(0.05,0.25) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.x+=p.vx; p.y+=p.vy;\n      if(p.x>w) p.x=0;\n      if(p.y<0)p.y=h; if(p.y>h)p.y=0;\n      ctx.save(); ctx.globalAlpha=p.a; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 103,
    "name": "Particle: Atmospheric Aurora",
    "category": "Particle",
    "description": "Soft linear gradient waves waving vertically like aurora curtains.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-103\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-103');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const colors = ['#00ffaa','#0088ff','#aa00ff'];\n  let t=0;\n  function loop() {\n    ctx.clearRect(0,0,w,h); t+=0.005;\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    colors.forEach((col,ci) => {\n      for(let x=0;x<w;x+=4) {\n        const y = h*0.3 + Math.sin(x*0.008+t+ci*1.2)*60 + Math.sin(x*0.02+t*1.5+ci)*30;\n        const ht = 80+Math.sin(x*0.01+t+ci)*40;\n        const g=ctx.createLinearGradient(x,y,x,y+ht);\n        g.addColorStop(0,col+'00'); g.addColorStop(0.3,col+'22'); g.addColorStop(1,col+'00');\n        ctx.fillStyle=g; ctx.fillRect(x,y,4,ht);\n      }\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 104,
    "name": "Particle: Thermal Lava Blobs",
    "category": "Particle",
    "description": "Glow-blending circular lava bubbles rising and drifting.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-104\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-104');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#ff5500';\n  let blobs = [];\n  for(let i=0;i<8;i++) blobs.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.3,0.3), vy:rnd(-0.5,0.5), r:rnd(30,70), a:rnd(0.04,0.1) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    blobs.forEach(b => {\n      b.x+=b.vx; b.y+=b.vy;\n      if(b.x<-b.r)b.x=w+b.r; if(b.x>w+b.r)b.x=-b.r;\n      if(b.y<-b.r)b.y=h+b.r; if(b.y>h+b.r)b.y=-b.r;\n      const g=ctx.createRadialGradient(b.x,b.y,0,b.x,b.y,b.r);\n      g.addColorStop(0,color+'cc'); g.addColorStop(0.6,color+'44'); g.addColorStop(1,'transparent');\n      ctx.save(); ctx.globalAlpha=b.a; ctx.beginPath(); ctx.arc(b.x,b.y,b.r,0,Math.PI*2); ctx.fillStyle=g; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 105,
    "name": "Particle: Micro Circuit Traces",
    "category": "Particle",
    "description": "Faint trace lines with glowing pulse nodes.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-105\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-105');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#00ff88';\n  let lines = [], nodes = [];\n  const gap=40;\n  function build() {\n    nodes = []; lines = [];\n    for(let x=0;x<w;x+=gap) for(let y=0;y<h;y+=gap) { if(Math.random()<0.6) nodes.push({x,y,pulse:rnd(0,Math.PI*2),ps:rnd(0.02,0.05)}); }\n    for(let i=0;i<nodes.length;i++) { const n=nodes[i]; if(Math.random()<0.4&&i+1<nodes.length) lines.push({x1:n.x,y1:n.y,x2:nodes[rndInt(i,Math.min(i+5,nodes.length-1))].x,y2:nodes[rndInt(i,Math.min(i+5,nodes.length-1))].y}); }\n  }\n  build();\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    ctx.save(); ctx.globalAlpha=0.06; ctx.strokeStyle=color; ctx.lineWidth=0.8;\n    lines.forEach(l => { ctx.beginPath(); ctx.moveTo(l.x1,l.y1); ctx.lineTo(l.x2,l.y2); ctx.stroke(); }); ctx.restore();\n    nodes.forEach(n => { n.pulse+=n.ps; const a=0.1+0.3*Math.abs(Math.sin(n.pulse)); ctx.save(); ctx.globalAlpha=a; ctx.beginPath(); ctx.arc(n.x,n.y,2,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore(); });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 106,
    "name": "Particle: Rising Embers",
    "category": "Particle",
    "description": "Drifting heat spark embers rising upward with horizontal sway.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-106\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-106');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#ff8833';\n  let pts = [];\n  for(let i=0;i<80;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.5,0.5), vy:rnd(-0.5,-0.1), r:rnd(0.5,2.5), a:rnd(0.3,0.9), life:rnd(0,1) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.y+=p.vy; p.x+=p.vx+Math.sin(p.y*0.05)*0.3; p.life-=0.004; p.a=p.life;\n      if(p.life<=0) { p.y=h; p.x=rnd(0,w); p.life=rnd(0.5,1); p.vy=rnd(-0.8,-0.2); }\n      ctx.save(); ctx.globalAlpha=p.a; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 107,
    "name": "Particle: Floating Plasma Blobs",
    "category": "Particle",
    "description": "Extremely slow, faint circular glow fields drifting.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-107\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-107');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#0055ff';\n  let t=0;\n  let pts = [];\n  for(let i=0;i<12;i++) pts.push({ cx:rnd(0,w), cy:rnd(0,h), r:rnd(30,70), speed:rnd(0.005,0.015), angle:rnd(0,Math.PI*2) });\n  function loop() {\n    ctx.clearRect(0,0,w,h); t+=0.01;\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.cx += Math.cos(p.angle+t)*0.3; p.cy += Math.sin(p.angle+t*0.7)*0.3;\n      if(p.cx<0)p.cx=w; if(p.cx>w)p.cx=0; if(p.cy<0)p.cy=h; if(p.cy>h)p.cy=0;\n      const g=ctx.createRadialGradient(p.cx,p.cy,0,p.cx,p.cy,p.r);\n      g.addColorStop(0,color+'55'); g.addColorStop(1,'transparent');\n      ctx.save(); ctx.globalAlpha=0.07; ctx.beginPath(); ctx.arc(p.cx,p.cy,p.r,0,Math.PI*2); ctx.fillStyle=g; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 108,
    "name": "Particle: Horizontal Wind Lines",
    "category": "Particle",
    "description": "Short horizontal lines blowing across at high speeds.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-108\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-108');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#aaaaff';\n  let strips = [];\n  for(let i=0;i<20;i++) strips.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-1,-0.3), vy:rnd(-0.5,0.5), len:rnd(20,80), rot:rnd(-0.5,0.5), a:rnd(0.05,0.2) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    strips.forEach(s => {\n      s.x+=s.vx; s.y+=s.vy;\n      if(s.x<-s.len) { s.x=w+s.len; s.y=rnd(0,h); }\n      ctx.save(); ctx.translate(s.x,s.y); ctx.rotate(s.rot); ctx.globalAlpha=s.a;\n      ctx.strokeStyle=color; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(s.len,0); ctx.stroke(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 109,
    "name": "Particle: Ripple Click",
    "category": "Particle",
    "description": "Click to expand circular ripples on the canvas grid.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-109\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-109');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  canvas.style.pointerEvents = 'auto';\n  const color = '#44aaff';\n  let ripples = [];\n  canvas.addEventListener('click', e => { const r=canvas.getBoundingClientRect(); ripples.push({ x:e.clientX-r.left, y:e.clientY-r.top, r:0, a:0.7 }); });\n  setInterval(() => { ripples.push({ x:rnd(0,w), y:rnd(0,h), r:0, a:0.3 }); }, 1500);\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    ripples = ripples.filter(r=>r.a>0);\n    ripples.forEach(r => { r.r+=1.5; r.a-=0.008; ctx.save(); ctx.globalAlpha=r.a; ctx.strokeStyle=color; ctx.lineWidth=1; ctx.beginPath(); ctx.arc(r.x,r.y,r.r,0,Math.PI*2); ctx.stroke(); ctx.restore(); });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 110,
    "name": "Particle: Neon Grid Wave",
    "category": "Particle",
    "description": "Perspective lines waving in horizontal grid alignments.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-110\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-110');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#00ffff';\n  const gap = 50;\n  let t=0;\n  function loop() {\n    ctx.clearRect(0,0,w,h); t+=0.02;\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    for(let x=0;x<=w;x+=gap) {\n      const wave=Math.sin(t+x*0.02)*8;\n      ctx.save(); ctx.globalAlpha=0.1; ctx.strokeStyle=color; ctx.lineWidth=0.5;\n      ctx.beginPath(); ctx.moveTo(x+wave,0); ctx.lineTo(x-wave,h); ctx.stroke(); ctx.restore();\n    }\n    for(let y=0;y<=h;y+=gap) {\n      const wave=Math.sin(t+y*0.02)*8;\n      ctx.save(); ctx.globalAlpha=0.1; ctx.strokeStyle=color; ctx.lineWidth=0.5;\n      ctx.beginPath(); ctx.moveTo(0,y+wave); ctx.lineTo(w,y-wave); ctx.stroke(); ctx.restore();\n    }\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 111,
    "name": "Particle: Cosmic Constellation",
    "category": "Particle",
    "description": "Star map nodes linked by dynamic triangulation vectors.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-111\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-111');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#ccddff';\n  let pts = [];\n  for(let i=0;i<50;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.08,0.08), vy:rnd(-0.08,0.08), r:rnd(0.8,2) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.x+=p.vx; p.y+=p.vy;\n      if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0;\n    });\n    for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++) {\n      const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);\n      if(d<100) { ctx.save(); ctx.globalAlpha=(1-d/100)*0.1; ctx.strokeStyle=color; ctx.lineWidth=0.5; ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke(); ctx.restore(); }\n    }\n    pts.forEach(p => { ctx.save(); ctx.globalAlpha=0.7; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore(); });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 112,
    "name": "Particle: Pixel Sparkle",
    "category": "Particle",
    "description": "Twinkling 4-point geometric stars sparkle in random places.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-112\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-112');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const colors = ['#ffffff','#ffffaa','#ffaaff','#aaffff'];\n  let pts = [];\n  for(let i=0;i<60;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), size:rnd(2,8), a:rnd(0,1), da:rnd(0.02,0.06), col:colors[rndInt(0,colors.length)], vx:rnd(-0.2,0.2), vy:rnd(-0.2,0.2) });\n  function drawStar(x,y,size,a) {\n    ctx.save(); ctx.globalAlpha=a; ctx.strokeStyle='#ffffff'; ctx.lineWidth=1;\n    ctx.beginPath(); ctx.moveTo(x-size,y); ctx.lineTo(x+size,y); ctx.moveTo(x,y-size); ctx.lineTo(x,y+size); ctx.stroke(); ctx.restore();\n  }\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.x+=p.vx; p.y+=p.vy; p.a+=p.da;\n      if(p.aStream>=1||p.a<=0) p.da*=-1;\n      if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0;\n      drawStar(p.x,p.y,p.size,p.a);\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 113,
    "name": "Particle: Binary Rain",
    "category": "Particle",
    "description": "Green matrix style falling zeros and ones.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-113\" style=\"width:100%;height:100%;background:#000;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-113');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#00ff44';\n  const size=14;\n  let cols, drops;\n  function build() { cols=Math.floor(w/size); drops=Array(cols).fill(0).map(()=>rnd(0,h/size)); }\n  build();\n  function loop() {\n    ctx.fillStyle='rgba(0,0,0,0.04)'; ctx.fillRect(0,0,w,h);\n    ctx.font=size+'px monospace'; ctx.fillStyle=color;\n    drops.forEach((y,idx) => {\n      ctx.globalAlpha=0.4;\n      ctx.fillText(Math.random()<0.5?'0':'1',idx*size,y*size);\n      if(y*size>h&&Math.random()>0.98) drops[idx]=0;\n      drops[idx]+=0.5;\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 114,
    "name": "Particle: Twinkling Stars",
    "category": "Particle",
    "description": "Distant night sky twinkling star field.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-114\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-114');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#ffffff';\n  let stars = [];\n  for(let i=0;i<180;i++) stars.push({ x:rnd(0,w), y:rnd(0,h), r:rnd(0.3,1.8), pulse:rnd(0,Math.PI*2), ps:rnd(0.01,0.04), base:rnd(0.1,0.5) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    stars.forEach(s => {\n      s.pulse+=s.ps;\n      const a=s.base*(0.5+0.5*Math.sin(s.pulse));\n      ctx.save(); ctx.globalAlpha=a; ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 115,
    "name": "Particle: Color Shift Drift",
    "category": "Particle",
    "description": "Rainbow shifting particles drifting slowly.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-115\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-115');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  let pts = [], t=0;\n  for(let i=0;i<90;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.2,0.2), vy:rnd(-0.2,0.2), r:rnd(1,2.5), hue:rnd(0,360), hs:rnd(0.2,0.8), a:rnd(0.2,0.5) });\n  function loop() {\n    ctx.clearRect(0,0,w,h); t+=0.01;\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.x+=p.vx; p.y+=p.vy; p.hue+=p.hs;\n      if(p.hue>360)p.hue=0;\n      if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0;\n      ctx.save(); ctx.globalAlpha=p.a; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=`hsl(${p.hue},80%,70%)`; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 116,
    "name": "Particle: Zen Dots",
    "category": "Particle",
    "description": "Ultra minimal, quiet floating dust specks.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-116\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-116');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#ffffff';\n  let pts = [];\n  for(let i=0;i<40;i++) pts.push({ x:rnd(0,w), y:rnd(0,h), vx:rnd(-0.08,0.08), vy:rnd(-0.08,0.08), r:rnd(1,3), a:rnd(0.05,0.2) });\n  function loop() {\n    ctx.clearRect(0,0,w,h);\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    pts.forEach(p => {\n      p.x+=p.vx; p.y+=p.vy;\n      if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0;\n      ctx.save(); ctx.globalAlpha=p.a; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.restore();\n    });\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  },
  {
    "id": 117,
    "name": "Particle: Sine Wave Lines",
    "category": "Particle",
    "description": "Layered scrolling sine wave lines scrolling horizontally.",
    "scriptReplace": {
      "find": "pbg-canvas",
      "replace": "pbg-canvas-"
    },
    "code": "<canvas id=\"pbg-canvas-117\" style=\"width:100%;height:100%;background:#050510;display:block;\"></canvas>\n<script>\n(function(){\n  const canvas = document.getElementById('pbg-canvas-117');\n  const ctx = canvas.getContext('2d');\n  let w, h;\n  function resize() {\n    w = canvas.width = canvas.offsetWidth || 320;\n    h = canvas.height = canvas.offsetHeight || 200;\n  }\n  resize();\n  window.addEventListener('resize', resize);\n  \n  const rnd = (a, b) => Math.random() * (b - a) + a;\n  const rndInt = (a, b) => Math.floor(rnd(a, b));\n\n  const color = '#4488ff';\n  let t=0;\n  const lines = 5;\n  function loop() {\n    ctx.clearRect(0,0,w,h); t+=0.02;\n    ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);\n    for(let i=0;i<lines;i++) {\n      ctx.beginPath();\n      const amp = 20 + i*10;\n      const freq = 0.005 + i*0.002;\n      for(let x=0;x<=w;x+=5) {\n        const y = h/2 + Math.sin(x*freq + t + i)*amp;\n        if(x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);\n      }\n      ctx.strokeStyle = color; ctx.save(); ctx.globalAlpha = 0.15 - i*0.02; ctx.lineWidth = 1; ctx.stroke(); ctx.restore();\n    }\n    requestAnimationFrame(loop);\n  }\n  loop();\n})();\n</script>"
  }
]);
