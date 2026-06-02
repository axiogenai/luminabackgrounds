window.BG_DATA = window.BG_DATA || [];
window.BG_DATA.push(...[
  {
    "id": 51,
    "name": "Milky Way Spiral",
    "category": "Galaxy",
    "description": "Slow rotating spiral galaxy with glowing core.",
    "scriptReplace": {
      "find": "mw-cvs",
      "replace": "mw-cvs-"
    },
    "code": "<canvas id=\"mw-cvs\" style=\"width:100%;height:100%;background:#000;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('mw-cvs'),ctx=c.getContext('2d'),w,h,t=0,stars=[];\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;stars=[];var cx=w/2,cy=h/2;for(var arm=0;arm<3;arm++)for(var i=0;i<80;i++){var a=(i*.12)+(arm*Math.PI*2/3);var r=i*2;stars.push({a:a,r:r,speed:.0008,hue:200+i*.5,s:.6+Math.random()*.8});}}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(0,0,4,.25)';ctx.fillRect(0,0,w,h);\n    var cx=w/2,cy=h/2;\n    stars.forEach(function(s){\n      s.a+=s.speed;\n      var x=cx+Math.cos(s.a)*s.r,y=cy+Math.sin(s.a)*s.r*.45;\n      ctx.beginPath();ctx.arc(x,y,s.s,0,6.28);ctx.fillStyle='hsla('+s.hue+',60%,85%,.4)';ctx.fill();\n    });\n    var g=ctx.createRadialGradient(cx,cy,0,cx,cy,50);g.addColorStop(0,'rgba(220,200,160,.12)');g.addColorStop(1,'transparent');\n    ctx.fillStyle=g;ctx.fillRect(0,0,w,h);\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 52,
    "name": "Nebula Clouds",
    "category": "Galaxy",
    "description": "Softly drifting color nebula clouds.",
    "code": "<div style=\"width:100%;height:100%;background:#020008;position:relative;overflow:hidden;\">\n  <div style=\"position:absolute;width:70%;height:70%;background:radial-gradient(ellipse,rgba(60,20,120,.18),transparent 70%);animation:neb1 30s ease-in-out infinite alternate;filter:blur(50px);top:5%;left:5%;\"></div>\n  <div style=\"position:absolute;width:60%;height:60%;background:radial-gradient(ellipse,rgba(20,40,140,.14),transparent 70%);animation:neb2 38s ease-in-out infinite alternate;filter:blur(60px);top:30%;right:5%;\"></div>\n  <div style=\"position:absolute;width:50%;height:50%;background:radial-gradient(ellipse,rgba(80,20,100,.12),transparent 70%);animation:neb3 25s ease-in-out infinite alternate;filter:blur(55px);bottom:5%;left:30%;\"></div>\n</div>\n<style>@keyframes neb1{to{transform:translate(20%,25%);}}@keyframes neb2{to{transform:translate(-25%,15%);}}@keyframes neb3{to{transform:translate(15%,-20%);}}</style>"
  },
  {
    "id": 53,
    "name": "Black Hole Vortex",
    "category": "Galaxy",
    "description": "Slow orbiting particles around a dark core.",
    "scriptReplace": {
      "find": "bh-cvs",
      "replace": "bh-cvs-"
    },
    "code": "<canvas id=\"bh-cvs\" style=\"width:100%;height:100%;background:#000;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('bh-cvs'),ctx=c.getContext('2d'),w,h,pts=[],t=0;\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;pts=[];for(var i=0;i<80;i++){var a=Math.random()*Math.PI*2,r=50+Math.random()*Math.min(w,h)*.35;pts.push({a:a,r:r,speed:.003+Math.random()*.004,hue:30+Math.random()*30});}}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(0,0,0,.25)';ctx.fillRect(0,0,w,h);\n    var cx=w/2,cy=h/2;\n    pts.forEach(function(p){p.a+=p.speed*(60/p.r);p.r-=.04;if(p.r<40){p.r=50+Math.random()*Math.min(w,h)*.35;p.a=Math.random()*Math.PI*2;}\n      var x=cx+Math.cos(p.a)*p.r,y=cy+Math.sin(p.a)*p.r*.4;\n      var alpha=Math.min(.5,(p.r-40)/60);\n      ctx.beginPath();ctx.arc(x,y,1,0,6.28);ctx.fillStyle='hsla('+p.hue+',80%,70%,'+alpha+')';ctx.fill();\n    });\n    var bg=ctx.createRadialGradient(cx,cy,0,cx,cy,40);bg.addColorStop(0,'rgba(0,0,0,1)');bg.addColorStop(1,'transparent');\n    ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 54,
    "name": "Cosmic Dust Storm",
    "category": "Galaxy",
    "description": "Sparse slow-drifting cosmic dust motes.",
    "scriptReplace": {
      "find": "cd-cvs",
      "replace": "cd-cvs-"
    },
    "code": "<canvas id=\"cd-cvs\" style=\"width:100%;height:100%;background:#020008;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('cd-cvs'),ctx=c.getContext('2d'),w,h,dust=[],t=0;\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;dust=[];for(var i=0;i<80;i++)dust.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.15,vy:(Math.random()-.5)*.1,s:Math.random()*1.2+.3,hue:220+Math.random()*60,a:.1+Math.random()*.3});}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(2,0,8,.2)';ctx.fillRect(0,0,w,h);\n    dust.forEach(function(d){d.x+=d.vx;d.y+=d.vy;if(d.x<0)d.x=w;if(d.x>w)d.x=0;if(d.y<0)d.y=h;if(d.y>h)d.y=0;ctx.beginPath();ctx.arc(d.x,d.y,d.s,0,6.28);ctx.fillStyle='hsla('+d.hue+',50%,80%,'+d.a+')';ctx.fill();});\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 55,
    "name": "Supernova Glow",
    "category": "Galaxy",
    "description": "Calm gentle pulsing star glow.",
    "code": "<div style=\"width:100%;height:100%;background:#000;position:relative;overflow:hidden;\">\n  <div style=\"position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40%;height:40%;background:radial-gradient(circle,rgba(255,200,100,.12) 0%,rgba(200,100,255,.06) 50%,transparent 100%);animation:sng 10s ease-in-out infinite alternate;border-radius:50%;filter:blur(30px);\"></div>\n  <div style=\"position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:20%;height:20%;background:radial-gradient(circle,rgba(255,220,150,.18),transparent 70%);animation:sng2 7s ease-in-out infinite alternate;border-radius:50%;filter:blur(15px);\"></div>\n</div>\n<style>@keyframes sng{0%{opacity:.4;transform:translate(-50%,-50%) scale(1);}100%{opacity:.8;transform:translate(-50%,-50%) scale(1.15);}}@keyframes sng2{0%{transform:translate(-50%,-50%) scale(.9);}100%{transform:translate(-50%,-50%) scale(1.1);}}</style>"
  },
  {
    "id": 56,
    "name": "Wormhole Tunnel",
    "category": "Galaxy",
    "description": "Slow hypnotic tunnel of drifting stars.",
    "scriptReplace": {
      "find": "wh-cvs",
      "replace": "wh-cvs-"
    },
    "code": "<canvas id=\"wh-cvs\" style=\"width:100%;height:100%;background:#000;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('wh-cvs'),ctx=c.getContext('2d'),w,h,stars=[],t=0;\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;stars=[];for(var i=0;i<120;i++)stars.push({x:(Math.random()-.5)*2,y:(Math.random()-.5)*2,z:Math.random()});}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(0,0,4,.3)';ctx.fillRect(0,0,w,h);\n    var cx=w/2,cy=h/2;\n    stars.forEach(function(s){\n      s.z-=.005;if(s.z<=0){s.z=1;s.x=(Math.random()-.5)*2;s.y=(Math.random()-.5)*2;}\n      var sx=cx+s.x/s.z*cx,sy=cy+s.y/s.z*cy;\n      var pz=s.z+.005,px=cx+s.x/pz*cx,py=cy+s.y/pz*cy;\n      var alpha=(1-s.z)*.6;\n      ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(sx,sy);\n      ctx.strokeStyle='rgba(180,200,255,'+alpha+')';ctx.lineWidth=(1-s.z)*1.5;ctx.stroke();\n    });\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 57,
    "name": "Star Cluster",
    "category": "Galaxy",
    "description": "Dense twinkling star cluster with depth.",
    "scriptReplace": {
      "find": "sc-cvs",
      "replace": "sc-cvs-"
    },
    "code": "<canvas id=\"sc-cvs\" style=\"width:100%;height:100%;background:#000510;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('sc-cvs'),ctx=c.getContext('2d'),w,h,stars=[],t=0;\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;stars=[];for(var i=0;i<200;i++){var a=Math.random()*Math.PI*2,r=Math.pow(Math.random(),.5)*Math.min(w,h)*.42;stars.push({x:.5+Math.cos(a)*r/Math.max(w,1),y:.5+Math.sin(a)*r/Math.max(h,1),s:.3+Math.random()*1.5,tw:Math.random()*Math.PI*2,sp:.015+Math.random()*.025,hue:200+Math.random()*60});}}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(0,5,16,.25)';ctx.fillRect(0,0,w,h);\n    stars.forEach(function(s){s.tw+=s.sp;var a=.2+Math.sin(s.tw)*.3;ctx.beginPath();ctx.arc(s.x*w,s.y*h,s.s,0,6.28);ctx.fillStyle='hsla('+s.hue+',50%,90%,'+a+')';ctx.fill();});\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 58,
    "name": "Galactic Core Pulse",
    "category": "Galaxy",
    "description": "Gentle pulsing galactic center glow.",
    "scriptReplace": {
      "find": "gc-cvs",
      "replace": "gc-cvs-"
    },
    "code": "<canvas id=\"gc-cvs\" style=\"width:100%;height:100%;background:#000;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('gc-cvs'),ctx=c.getContext('2d'),w,h,dust=[],t=0;\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;dust=[];for(var i=0;i<60;i++)dust.push({a:Math.random()*Math.PI*2,r:20+Math.random()*Math.min(w,h)*.35,speed:.001+Math.random()*.001});}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(0,0,0,.2)';ctx.fillRect(0,0,w,h);\n    var cx=w/2,cy=h/2,pulse=Math.sin(t*.03)*8;\n    dust.forEach(function(d){d.a+=d.speed;var x=cx+Math.cos(d.a)*d.r,y=cy+Math.sin(d.a)*d.r*.45;ctx.beginPath();ctx.arc(x,y,.8,0,6.28);ctx.fillStyle='rgba(220,180,100,.3)';ctx.fill();});\n    var g=ctx.createRadialGradient(cx,cy,0,cx,cy,30+pulse);\n    g.addColorStop(0,'rgba(255,180,60,.1)');g.addColorStop(.5,'rgba(180,80,220,.05)');g.addColorStop(1,'transparent');\n    ctx.fillStyle=g;ctx.fillRect(0,0,w,h);\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 59,
    "name": "Comet Shower",
    "category": "Galaxy",
    "description": "Slow occasional comets with faint tails.",
    "scriptReplace": {
      "find": "cm-cvs",
      "replace": "cm-cvs-"
    },
    "code": "<canvas id=\"cm-cvs\" style=\"width:100%;height:100%;background:#000;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('cm-cvs'),ctx=c.getContext('2d'),w,h,comets=[],stars=[];\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;stars=[];for(var i=0;i<80;i++)stars.push({x:Math.random()*w,y:Math.random()*h,s:.5+Math.random(),a:.15+Math.random()*.4});}\n  window.addEventListener('resize',sz);sz();\n  function mk(){return{x:-30,y:Math.random()*h*.6,vx:2+Math.random()*2,vy:.5+Math.random()*1,trail:[],hue:200+Math.random()*40,s:1.5+Math.random()};}\n  setInterval(function(){if(comets.length<3)comets.push(mk());},4000);\n  function draw(){\n    ctx.fillStyle='rgba(0,0,4,.3)';ctx.fillRect(0,0,w,h);\n    stars.forEach(function(s){ctx.beginPath();ctx.arc(s.x,s.y,s.s,0,6.28);ctx.fillStyle='rgba(200,200,255,'+s.a+')';ctx.fill();});\n    comets=comets.filter(function(cm){\n      cm.trail.unshift({x:cm.x,y:cm.y});if(cm.trail.length>25)cm.trail.pop();\n      cm.x+=cm.vx;cm.y+=cm.vy;\n      cm.trail.forEach(function(p,i){ctx.beginPath();ctx.arc(p.x,p.y,cm.s*(1-i/cm.trail.length),0,6.28);ctx.fillStyle='rgba(180,210,255,'+(1-i/cm.trail.length)*.4+')';ctx.fill();});\n      return cm.x<w+50;\n    });\n    requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 60,
    "name": "Aurora Galaxia",
    "category": "Galaxy",
    "description": "Space aurora with subtle nebula hues.",
    "code": "<div style=\"width:100%;height:100%;background:#000308;position:relative;overflow:hidden;\">\n  <div style=\"position:absolute;width:180%;height:50%;top:15%;left:-40%;background:radial-gradient(ellipse,rgba(0,180,80,.1) 0%,rgba(60,0,160,.07) 50%,transparent 70%);animation:agal1 25s ease-in-out infinite alternate;filter:blur(30px);\"></div>\n  <div style=\"position:absolute;width:160%;height:40%;top:30%;left:-20%;background:radial-gradient(ellipse,rgba(120,0,160,.07) 0%,rgba(0,80,180,.05) 50%,transparent 70%);animation:agal2 35s ease-in-out infinite alternate;filter:blur(40px);\"></div>\n  <div style=\"position:absolute;width:100%;height:100%;background-image:radial-gradient(1px 1px at 15% 25%,rgba(255,255,255,.4) 0%,transparent 100%),radial-gradient(1px 1px at 75% 15%,rgba(255,255,255,.3) 0%,transparent 100%),radial-gradient(1.5px 1.5px at 45% 65%,rgba(200,220,255,.5) 0%,transparent 100%),radial-gradient(1px 1px at 85% 45%,rgba(255,255,255,.25) 0%,transparent 100%);\"></div>\n</div>\n<style>@keyframes agal1{to{transform:translateX(8%) scaleY(1.2);}}@keyframes agal2{to{transform:translateX(-10%) scaleY(.85);}}\n</style>"
  },
  {
    "id": 61,
    "name": "Pulsar Waves",
    "category": "Galaxy",
    "description": "Slow expanding rings from a pulsing star.",
    "scriptReplace": {
      "find": "ps-cvs",
      "replace": "ps-cvs-"
    },
    "code": "<canvas id=\"ps-cvs\" style=\"width:100%;height:100%;background:#000;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('ps-cvs'),ctx=c.getContext('2d'),w,h,rings=[],t=0;\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;}\n  window.addEventListener('resize',sz);sz();\n  setInterval(function(){rings.push({r:0,alpha:.15,hue:200+Math.random()*40});},2000);\n  rings.push({r:0,alpha:.15,hue:210});\n  function draw(){\n    ctx.fillStyle='rgba(0,0,4,.25)';ctx.fillRect(0,0,w,h);\n    var cx=w/2,cy=h/2;\n    rings=rings.filter(function(r){return r.alpha>.002;});\n    rings.forEach(function(r){r.r+=.8;r.alpha*=.99;ctx.beginPath();ctx.arc(cx,cy,r.r,0,Math.PI*2);ctx.strokeStyle='hsla('+r.hue+',60%,70%,'+r.alpha+')';ctx.lineWidth=1;ctx.stroke();});\n    var pg=ctx.createRadialGradient(cx,cy,0,cx,cy,8);pg.addColorStop(0,'rgba(200,230,255,.6)');pg.addColorStop(1,'transparent');\n    ctx.fillStyle=pg;ctx.fillRect(cx-8,cy-8,16,16);\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 62,
    "name": "Galaxy Collision",
    "category": "Galaxy",
    "description": "Two slowly merging galaxy star fields.",
    "scriptReplace": {
      "find": "gcol-cvs",
      "replace": "gcol-cvs-"
    },
    "code": "<canvas id=\"gcol-cvs\" style=\"width:100%;height:100%;background:#000;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('gcol-cvs'),ctx=c.getContext('2d'),w,h,g1=[],g2=[],t=0;\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;g1=[];g2=[];for(var i=0;i<80;i++){var a=Math.random()*Math.PI*2,r=Math.random()*60;g1.push({a:a,r:r,speed:.0015});g2.push({a:a+Math.PI,r:r*.8,speed:-.002,hue:270+Math.random()*30});}}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(0,0,4,.25)';ctx.fillRect(0,0,w,h);\n    var off=60*Math.cos(t*.002),cx1=w/2-off,cy1=h/2,cx2=w/2+off,cy2=h/2;\n    g1.forEach(function(s){s.a+=s.speed;ctx.beginPath();ctx.arc(cx1+Math.cos(s.a)*s.r,cy1+Math.sin(s.a)*s.r*.4,1,0,6.28);ctx.fillStyle='rgba(220,200,160,.35)';ctx.fill();});\n    g2.forEach(function(s){s.a+=s.speed;ctx.beginPath();ctx.arc(cx2+Math.cos(s.a)*s.r,cy2+Math.sin(s.a)*s.r*.4,1,0,6.28);ctx.fillStyle='hsla('+s.hue+',60%,70%,.3)';ctx.fill();});\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 63,
    "name": "Space Warp",
    "category": "Galaxy",
    "description": "Slow gentle star-field drift.",
    "scriptReplace": {
      "find": "sw-cvs",
      "replace": "sw-cvs-"
    },
    "code": "<canvas id=\"sw-cvs\" style=\"width:100%;height:100%;background:#000;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('sw-cvs'),ctx=c.getContext('2d'),w,h,stars=[],t=0;\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;stars=[];for(var i=0;i<150;i++)stars.push({x:(Math.random()-.5)*4,y:(Math.random()-.5)*4,z:Math.random()*3,pz:0});}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(0,0,4,.3)';ctx.fillRect(0,0,w,h);\n    var cx=w/2,cy=h/2;\n    stars.forEach(function(s){s.pz=s.z;s.z-=.008;if(s.z<=0){s.z=3;s.pz=3;s.x=(Math.random()-.5)*4;s.y=(Math.random()-.5)*4;}\n      var sx=cx+s.x/s.z*cx*.5,sy=cy+s.y/s.z*cy*.5,px=cx+s.x/s.pz*cx*.5,py=cy+s.y/s.pz*cy*.5;\n      var brightness=Math.min(.5,(3-s.z)/3);\n      ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(sx,sy);ctx.strokeStyle='rgba(200,210,255,'+brightness+')';ctx.lineWidth=(1-s.z/3)*1.5;ctx.stroke();\n    });\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 64,
    "name": "Binary Stars",
    "category": "Galaxy",
    "description": "Two stars slowly orbiting each other.",
    "scriptReplace": {
      "find": "bs-cvs",
      "replace": "bs-cvs-"
    },
    "code": "<canvas id=\"bs-cvs\" style=\"width:100%;height:100%;background:#000;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('bs-cvs'),ctx=c.getContext('2d'),w,h,t=0,stars=[];\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;stars=[];for(var i=0;i<60;i++)stars.push({x:Math.random()*w,y:Math.random()*h,s:.3+Math.random(),a:.1+Math.random()*.4});}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(0,0,4,.25)';ctx.fillRect(0,0,w,h);\n    var cx=w/2,cy=h/2,orb=50;\n    var s1x=cx+Math.cos(t*.006)*orb,s1y=cy+Math.sin(t*.006)*orb*.4;\n    var s2x=cx-Math.cos(t*.006)*orb,s2y=cy-Math.sin(t*.006)*orb*.4;\n    // bg stars\n    stars.forEach(function(s){ctx.beginPath();ctx.arc(s.x,s.y,s.s,0,6.28);ctx.fillStyle='rgba(200,200,255,'+s.a+')';ctx.fill();});\n    // star glows\n    [[s1x,s1y,'rgba(160,200,255,.15)'],[s2x,s2y,'rgba(255,200,120,.1)']].forEach(function(s){\n      var g=ctx.createRadialGradient(s[0],s[1],0,s[0],s[1],25);g.addColorStop(0,s[2]);g.addColorStop(1,'transparent');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);\n    });\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 65,
    "name": "Deep Space Rift",
    "category": "Galaxy",
    "description": "Faint glowing energy rift in deep space.",
    "scriptReplace": {
      "find": "dr-cvs",
      "replace": "dr-cvs-"
    },
    "code": "<canvas id=\"dr-cvs\" style=\"width:100%;height:100%;background:#000;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('dr-cvs'),ctx=c.getContext('2d'),w,h,pts=[],t=0;\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;pts=[];for(var i=0;i<60;i++)pts.push({prog:Math.random(),speed:.002+Math.random()*.002,side:Math.random()<.5?-1:1,offset:(Math.random()-.5)*30,a:.2+Math.random()*.4});}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(0,0,4,.25)';ctx.fillRect(0,0,w,h);\n    var cx=w/2,cy=h/2,len=h*.65;\n    var g=ctx.createLinearGradient(cx,cy-len/2,cx,cy+len/2);g.addColorStop(0,'transparent');g.addColorStop(.3,'rgba(100,30,180,.2)');g.addColorStop(.7,'rgba(120,50,200,.2)');g.addColorStop(1,'transparent');\n    ctx.fillStyle=g;ctx.fillRect(cx-2,cy-len/2,4,len);\n    pts.forEach(function(p){p.prog+=p.speed;if(p.prog>1)p.prog=0;\n      var py=cy-len/2+p.prog*len;var ripple=Math.sin(p.prog*Math.PI*4+t*.03)*p.offset;\n      ctx.beginPath();ctx.arc(cx+p.side*ripple,py,1,0,6.28);ctx.fillStyle='rgba(150,80,255,'+p.a*.4+')';ctx.fill();\n    });\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  }
]);
