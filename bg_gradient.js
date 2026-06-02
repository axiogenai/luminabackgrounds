window.BG_DATA = window.BG_DATA || [];
window.BG_DATA.push(...[
  {
    "id": 1,
    "name": "Aurora Borealis",
    "category": "Gradient",
    "description": "Slow, smooth flowing aurora gradients.",
    "code": "<div style=\"width:100%;height:100%;background:linear-gradient(-45deg,#0a0a2e,#1a0a3e,#0d1a4a,#0a2a3e);background-size:400% 400%;animation:aur 25s ease infinite;\"></div>\n<style>@keyframes aur{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}</style>"
  },
  {
    "id": 2,
    "name": "Moving Mesh Gradient",
    "category": "Gradient",
    "description": "Soft drifting blobs of color.",
    "code": "<div style=\"width:100%;height:100%;background:#0a0a1a;position:relative;overflow:hidden;\">\n  <div style=\"position:absolute;width:70%;height:70%;background:radial-gradient(circle,rgba(100,60,200,0.25) 0%,transparent 70%);top:-15%;left:-15%;animation:mb1 18s ease infinite alternate;filter:blur(50px);\"></div>\n  <div style=\"position:absolute;width:60%;height:60%;background:radial-gradient(circle,rgba(30,80,180,0.2) 0%,transparent 70%);bottom:-10%;right:-10%;animation:mb2 22s ease infinite alternate;filter:blur(50px);\"></div>\n  <div style=\"position:absolute;width:50%;height:50%;background:radial-gradient(circle,rgba(80,180,200,0.15) 0%,transparent 70%);top:40%;left:40%;animation:mb3 20s ease infinite alternate;filter:blur(60px);\"></div>\n</div>\n<style>@keyframes mb1{to{transform:translate(40%,30%) scale(1.1);}}@keyframes mb2{to{transform:translate(-40%,-25%) scale(1.15);}}@keyframes mb3{to{transform:translate(-30%,20%) scale(0.9);}}</style>"
  },
  {
    "id": 3,
    "name": "Liquid Gradient",
    "category": "Gradient",
    "description": "Slow flowing liquid color movement.",
    "code": "<div style=\"width:100%;height:100%;background:conic-gradient(from 0deg,#1a0040,#001a40,#001a20,#1a0040);animation:liq 30s linear infinite;filter:blur(40px) contrast(1.2);transform:scale(1.3);\"></div>\n<style>@keyframes liq{100%{transform:scale(1.3) rotate(360deg);}}</style>"
  },
  {
    "id": 4,
    "name": "Rainbow Gradient Shift",
    "category": "Gradient",
    "description": "Slow subtle rainbow hue cycling.",
    "code": "<div style=\"width:100%;height:100%;background:linear-gradient(135deg,#0a001a,#001030,#001a10,#1a000a);animation:rgs 20s linear infinite;\">\n</div>\n<style>@keyframes rgs{0%{filter:hue-rotate(0deg) brightness(0.6);}100%{filter:hue-rotate(360deg) brightness(0.6);}}</style>"
  },
  {
    "id": 5,
    "name": "Breathing Gradient",
    "category": "Gradient",
    "description": "Gently pulsing radial glow.",
    "code": "<div style=\"width:100%;height:100%;background:radial-gradient(ellipse at center,#1a0a2e 0%,#050510 70%);animation:brth 8s ease-in-out infinite alternate;\"></div>\n<style>@keyframes brth{0%{opacity:0.7;transform:scale(1);}100%{opacity:1;transform:scale(1.05);}}</style>"
  },
  {
    "id": 6,
    "name": "Rotating Gradient",
    "category": "Gradient",
    "description": "Very slowly rotating two-tone gradient.",
    "code": "<div style=\"width:100%;height:100%;background:linear-gradient(0deg,#050520,#0a1030);animation:rotg 25s linear infinite;\"></div>\n<style>@keyframes rotg{0%{filter:hue-rotate(0deg);}100%{filter:hue-rotate(360deg);}}</style>"
  },
  {
    "id": 7,
    "name": "Animated Conic Gradient",
    "category": "Gradient",
    "description": "Slow conic sweep, very subtle.",
    "code": "<div style=\"width:100%;height:100%;background:conic-gradient(from 0deg at 50% 50%,#0a001a,#001030,#001a10,#1a0010,#0a001a);animation:cong 35s linear infinite;opacity:0.9;\"></div>\n<style>@keyframes cong{100%{transform:rotate(360deg) scale(1.4);}}</style>"
  },
  {
    "id": 8,
    "name": "Morphing Gradient Blobs",
    "category": "Gradient",
    "description": "Organic slow-morphing blob shape.",
    "code": "<div style=\"width:100%;height:100%;background:#050510;display:flex;justify-content:center;align-items:center;overflow:hidden;\">\n  <div style=\"width:60%;height:60%;background:radial-gradient(circle,rgba(80,40,180,0.3) 0%,rgba(40,80,180,0.15) 60%,transparent 100%);border-radius:30% 70% 70% 30%/30% 30% 70% 70%;animation:morp 15s ease-in-out infinite alternate;filter:blur(30px);\"></div>\n</div>\n<style>@keyframes morp{0%{border-radius:30% 70% 70% 30%/30% 30% 70% 70%;transform:rotate(0deg) scale(1);}100%{border-radius:70% 30% 30% 70%/70% 70% 30% 30%;transform:rotate(120deg) scale(1.2);}}</style>"
  },
  {
    "id": 9,
    "name": "Color Wave Gradient",
    "category": "Gradient",
    "description": "Slow color waves washing across.",
    "code": "<div style=\"width:100%;height:100%;background:#050510;position:relative;overflow:hidden;\">\n  <div style=\"position:absolute;width:200%;height:100%;background:linear-gradient(90deg,transparent,rgba(60,30,120,0.15),transparent);animation:cwv 12s linear infinite;\"></div>\n  <div style=\"position:absolute;width:200%;height:100%;background:linear-gradient(90deg,transparent,rgba(30,60,120,0.1),transparent);animation:cwv 18s linear infinite 6s;\"></div>\n</div>\n<style>@keyframes cwv{0%{transform:translateX(-50%);}100%{transform:translateX(0%);}}</style>"
  },
  {
    "id": 10,
    "name": "Noise + Gradient Motion",
    "category": "Gradient",
    "description": "Subtle animated grain over dark gradient.",
    "scriptReplace": {
      "find": "noise-cvs",
      "replace": "noise-cvs-"
    },
    "code": "<canvas id=\"noise-cvs\" style=\"width:100%;height:100%;display:block;\"></canvas>\n<style>#noise-cvs{background:linear-gradient(135deg,#050510,#0a0520);}</style>\n<script>\n(function(){\n  var cvs=document.getElementById('noise-cvs'),ctx=cvs.getContext('2d'),w,h;\n  function r(){w=cvs.width=cvs.offsetWidth||320;h=cvs.height=cvs.offsetHeight||200;}\n  window.addEventListener('resize',r);r();\n  function d(){\n    var id=ctx.createImageData(w,h);\n    for(var i=0;i<id.data.length;i+=4){var v=Math.random()*18;id.data[i]=v;id.data[i+1]=v;id.data[i+2]=v+5;id.data[i+3]=255;}\n    ctx.putImageData(id,0,0);\n    setTimeout(function(){requestAnimationFrame(d);},60);\n  }d();\n})();\n</script>"
  }
]);
