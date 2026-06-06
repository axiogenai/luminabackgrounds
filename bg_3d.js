window.BG_DATA = window.BG_DATA || [];
window.BG_DATA.push(...[
  {
    "id": 41,
    "name": "Rotating 3D Sphere",
    "category": "3D",
    "description": "Wireframe sphere slowly spinning.",
    "scriptReplace": {
      "find": "sph-cvs",
      "replace": "sph-cvs-"
    },
    "code": "<canvas id=\"sph-cvs\" style=\"width:100%;height:100%;background:#030308;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('sph-cvs'),ctx=c.getContext('2d'),w,h,t=0;\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;}\n  window.addEventListener('resize',sz);sz();\n  function project(x,y,z){var fov=300,d=fov/(fov+z);return{x:w/2+x*d,y:h/2+y*d,s:d};}\n  function draw(){\n    ctx.fillStyle='rgba(3,3,8,.3)';ctx.fillRect(0,0,w,h);\n    var R=Math.min(w,h)*.28,lat=8,lon=16;\n    for(var i=0;i<=lat;i++){\n      var phi=Math.PI*i/lat;\n      for(var j=0;j<lon;j++){\n        var theta=2*Math.PI*j/lon+t*.004;\n        var theta2=2*Math.PI*(j+1)/lon+t*.004;\n        var x1=R*Math.sin(phi)*Math.cos(theta),y1=R*Math.cos(phi),z1=R*Math.sin(phi)*Math.sin(theta);\n        var x2=R*Math.sin(phi)*Math.cos(theta2),y2=R*Math.cos(phi),z2=R*Math.sin(phi)*Math.sin(theta2);\n        var p1=project(x1,y1,z1),p2=project(x2,y2,z2);\n        ctx.beginPath();ctx.moveTo(p1.x,p1.y);ctx.lineTo(p2.x,p2.y);\n        ctx.strokeStyle='rgba(100,140,220,'+(p1.s*.15)+')';ctx.lineWidth=.5;ctx.stroke();\n      }\n    }\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 42,
    "name": "Floating 3D Objects",
    "category": "3D",
    "description": "Faint wireframe cubes slowly drifting.",
    "scriptReplace": {
      "find": "fo-cvs",
      "replace": "fo-cvs-"
    },
    "code": "<canvas id=\"fo-cvs\" style=\"width:100%;height:100%;background:#030308;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('fo-cvs'),ctx=c.getContext('2d'),w,h,cubes=[],t=0;\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;cubes=[];for(var i=0;i<5;i++)cubes.push({x:(Math.random()-.5)*w*.8,y:(Math.random()-.5)*h*.8,z:Math.random()*200-100,rx:Math.random()*.005,ry:Math.random()*.005,ax:0,ay:0,size:15+Math.random()*20});}\n  window.addEventListener('resize',sz);sz();\n  function drawCube(cx,cy,s,ax,ay,depth){\n    var cos=Math.cos,sin=Math.sin,fov=300;\n    var verts=[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]];\n    var edges=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];\n    var proj=verts.map(function(v){\n      var x=v[0]*s,y=v[1]*s,z=v[2]*s;\n      var y2=y*cos(ax)-z*sin(ax),z2=y*sin(ax)+z*cos(ax);\n      var x2=x*cos(ay)+z2*sin(ay),z3=-x*sin(ay)+z2*cos(ay);\n      var d=fov/(fov+z3+depth+300);\n      return{px:w/2+cx+x2*d,py:h/2+cy+y2*d,d:d};\n    });\n    edges.forEach(function(e){ctx.beginPath();ctx.moveTo(proj[e[0]].px,proj[e[0]].py);ctx.lineTo(proj[e[1]].px,proj[e[1]].py);ctx.strokeStyle='rgba(100,130,200,.12)';ctx.lineWidth=.5;ctx.stroke();});\n  }\n  function draw(){\n    ctx.fillStyle='rgba(3,3,8,.3)';ctx.fillRect(0,0,w,h);\n    cubes.forEach(function(cu){cu.ax+=cu.rx;cu.ay+=cu.ry;drawCube(cu.x,cu.y,cu.size,cu.ax,cu.ay,cu.z);});\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 43,
    "name": "Infinite Tunnel",
    "category": "3D",
    "description": "Slow perspective tunnel of receding rings.",
    "scriptReplace": {
      "find": "it-cvs",
      "replace": "it-cvs-"
    },
    "code": "<canvas id=\"it-cvs\" style=\"width:100%;height:100%;background:#020208;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('it-cvs'),ctx=c.getContext('2d'),w,h,t=0;\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(2,2,8,.35)';ctx.fillRect(0,0,w,h);\n    var cx=w/2,cy=h/2,N=10;\n    for(var i=0;i<N;i++){\n      var depth=(i/N+t*.008)%1;\n      var size=(1-depth)*Math.min(w,h)*.4;\n      var alpha=(1-depth)*.12;\n      var hue=220+depth*60;\n      ctx.beginPath();ctx.ellipse(cx,cy,size,size*.5,0,0,Math.PI*2);\n      ctx.strokeStyle='hsla('+hue+',50%,60%,'+alpha+')';ctx.lineWidth=1;ctx.stroke();\n    }\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 44,
    "name": "Wireframe Terrain",
    "category": "3D",
    "description": "Slowly morphing wireframe landscape.",
    "scriptReplace": {
      "find": "wt-cvs",
      "replace": "wt-cvs-"
    },
    "code": "<canvas id=\"wt-cvs\" style=\"width:100%;height:100%;background:#030308;display:block;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('wt-cvs'),ctx=c.getContext('2d'),w,h,t=0;\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;}\n  window.addEventListener('resize',sz);sz();\n  function draw(){\n    ctx.fillStyle='rgba(3,3,8,.3)';ctx.fillRect(0,0,w,h);\n    var cols=14,rows=8,cx=w/2,cy=h*.7;\n    for(var row=0;row<rows;row++){\n      ctx.beginPath();\n      for(var col=0;col<=cols;col++){\n        var px=cx+(col-cols/2)*(w/cols);\n        var pz=row*(120/rows);\n        var elevation=Math.sin(col*.4+t*.01)*10*((rows-row)/rows)+Math.sin(row*.5+t*.008)*8;\n        var scale=1/(1+pz*.006);\n        var sx=cx+(px-cx)*scale,sy=cy-pz*scale*0.5-elevation*scale;\n        if(col===0)ctx.moveTo(sx,sy);else ctx.lineTo(sx,sy);\n      }\n      ctx.strokeStyle='rgba(60,100,200,'+(0.08*(rows-row)/rows)+')';ctx.lineWidth=.8;ctx.stroke();\n    }\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  },
  {
    "id": 45,
    "name": "Fluid Simulation",
    "category": "3D",
    "description": "Gentle slow-flowing fluid blobs.",
    "code": "<div style=\"width:100%;height:100%;background:#04020a;position:relative;overflow:hidden;\">\n  <div style=\"position:absolute;width:50%;height:50%;background:radial-gradient(circle,rgba(60,20,120,.2),transparent 70%);animation:fl1 20s ease-in-out infinite alternate;filter:blur(40px);top:10%;left:10%;\"></div>\n  <div style=\"position:absolute;width:40%;height:40%;background:radial-gradient(circle,rgba(20,60,140,.15),transparent 70%);animation:fl2 25s ease-in-out infinite alternate;filter:blur(50px);top:40%;left:50%;\"></div>\n  <div style=\"position:absolute;width:35%;height:35%;background:radial-gradient(circle,rgba(80,20,100,.12),transparent 70%);animation:fl3 18s ease-in-out infinite alternate;filter:blur(45px);top:50%;left:20%;\"></div>\n</div>\n<style>@keyframes fl1{to{transform:translate(40%,50%);}}@keyframes fl2{to{transform:translate(-30%,-40%);}}@keyframes fl3{to{transform:translate(50%,-30%);}}</style>"
  },
  {
    "id": 46,
    "name": "Lava Lamp Simulation",
    "category": "3D",
    "description": "Slow rising and falling dark blobs.",
    "code": "<div style=\"width:100%;height:100%;background:#03010a;overflow:hidden;position:relative;\">\n  <div style=\"position:absolute;width:40%;height:40%;background:radial-gradient(circle,rgba(80,20,160,.25),transparent 70%);border-radius:50%;animation:lav1 18s ease-in-out infinite alternate;filter:blur(20px);bottom:5%;left:20%;\"></div>\n  <div style=\"position:absolute;width:35%;height:35%;background:radial-gradient(circle,rgba(120,10,180,.2),transparent 70%);border-radius:50%;animation:lav2 22s ease-in-out infinite alternate;filter:blur(25px);bottom:20%;left:40%;\"></div>\n  <div style=\"position:absolute;width:30%;height:30%;background:radial-gradient(circle,rgba(60,10,120,.2),transparent 70%);border-radius:50%;animation:lav3 16s ease-in-out infinite alternate;filter:blur(20px);bottom:10%;right:20%;\"></div>\n</div>\n<style>@keyframes lav1{0%{transform:translateY(0);}100%{transform:translateY(-70%);}}@keyframes lav2{0%{transform:translateY(-20%);}100%{transform:translateY(-80%);}}@keyframes lav3{0%{transform:translateY(10%);}100%{transform:translateY(-60%);}}</style>"
  },
  {
    "id": 47,
    "name": "Metaballs",
    "category": "3D",
    "description": "Slow merging blobs with soft glow.",
    "code": "<div style=\"width:100%;height:100%;background:#030308;overflow:hidden;position:relative;filter:contrast(1.1);\">\n  <div style=\"position:absolute;width:35%;height:35%;background:radial-gradient(circle,rgba(80,50,200,.3),transparent 65%);border-radius:50%;animation:mb_a 15s ease-in-out infinite alternate;filter:blur(25px);top:20%;left:20%;\"></div>\n  <div style=\"position:absolute;width:30%;height:30%;background:radial-gradient(circle,rgba(50,80,220,.25),transparent 65%);border-radius:50%;animation:mb_b 20s ease-in-out infinite alternate;filter:blur(25px);top:40%;left:50%;\"></div>\n  <div style=\"position:absolute;width:25%;height:25%;background:radial-gradient(circle,rgba(100,40,180,.2),transparent 65%);border-radius:50%;animation:mb_c 12s ease-in-out infinite alternate;filter:blur(25px);top:55%;left:30%;\"></div>\n</div>\n<style>@keyframes mb_a{to{transform:translate(60%,40%);}}@keyframes mb_b{to{transform:translate(-40%,30%);}}@keyframes mb_c{to{transform:translate(40%,-40%);}}</style>"
  },
  {
    "id": 48,
    "name": "Morphing Geometry",
    "category": "3D",
    "description": "Slowly morphing geometric form.",
    "code": "<div style=\"width:100%;height:100%;background:#030308;display:flex;align-items:center;justify-content:center;overflow:hidden;\">\n  <div style=\"width:30%;height:30%;background:radial-gradient(circle,rgba(60,40,180,.2),rgba(30,20,100,.1) 60%,transparent 100%);animation:mgeom 20s ease-in-out infinite;filter:blur(5px);\"></div>\n</div>\n<style>@keyframes mgeom{0%{border-radius:50%;transform:rotate(0deg) scale(1);}25%{border-radius:30% 70% 70% 30%/30% 30% 70% 70%;transform:rotate(90deg) scale(1.1);}50%{border-radius:50% 50% 20% 80%/50% 20% 80% 50%;transform:rotate(180deg) scale(.95);}75%{border-radius:70% 30% 50% 50%/30% 70% 50% 50%;transform:rotate(270deg) scale(1.05);}100%{border-radius:50%;transform:rotate(360deg) scale(1);}}</style>"
  },
  {
    "id": 49,
    "name": "Glass Distortion Shader",
    "category": "3D",
    "description": "Subtle glass-like refraction shimmer.",
    "code": "<div style=\"width:100%;height:100%;background:linear-gradient(135deg,#040412,#060820);position:relative;overflow:hidden;\">\n  <div style=\"position:absolute;width:100%;height:100%;background:repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(100,120,220,.03) 41px);animation:glassdist 30s linear infinite;\"></div>\n  <div style=\"position:absolute;width:60%;height:60%;top:20%;left:20%;background:radial-gradient(ellipse,rgba(100,120,255,.05),transparent 70%);border-radius:50%;animation:glasspulse 12s ease-in-out infinite;filter:blur(2px);\"></div>\n</div>\n<style>@keyframes glassdist{0%{background-position:0 0;}100%{background-position:80px 80px;}}@keyframes glasspulse{0%,100%{transform:scale(1) rotate(0deg);}50%{transform:scale(1.08) rotate(5deg);}}</style>"
  },
  {
    "id": 50,
    "name": "Interactive Shader Background",
    "category": "3D",
    "description": "Mouse-reactive soft color field.",
    "scriptReplace": {
      "find": "ish-cvs",
      "replace": "ish-cvs-"
    },
    "code": "<canvas id=\"ish-cvs\" style=\"width:100%;height:100%;display:block;background:#030308;\"></canvas>\n<script>\n(function(){\n  var c=document.getElementById('ish-cvs'),ctx=c.getContext('2d'),w,h,mx=.5,my=.5,t=0;\n  function sz(){w=c.width=c.offsetWidth||320;h=c.height=c.offsetHeight||200;}\n  window.addEventListener('resize',sz);sz();\n  c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();mx=e.clientX/w;my=e.clientY/h;});\n  function draw(){\n    var g=ctx.createRadialGradient(mx*w,my*h,0,mx*w,my*h,Math.max(w,h)*.6);\n    g.addColorStop(0,'rgba(60,40,160,.12)');g.addColorStop(.5,'rgba(20,30,100,.06)');g.addColorStop(1,'rgba(3,3,8,1)');\n    ctx.fillStyle='rgba(3,3,8,.15)';ctx.fillRect(0,0,w,h);\n    ctx.fillStyle=g;ctx.fillRect(0,0,w,h);\n    t++;requestAnimationFrame(draw);\n  }draw();\n})();\n</script>"
  }
]);
