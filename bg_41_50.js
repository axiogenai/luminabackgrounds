// Category 5: 3D / WebGL Animations
window.backgrounds.push(
  {
    id: 41, name: "Rotating 3D Sphere", description: "Interactive rotating globe.", category: "3D",
    code: `<div style="width:100%;height:100%;background:#000;display:flex;align-items:center;justify-content:center;perspective:600px;">
  <div style="width:150px;height:150px;border-radius:50%;background:repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(56,189,248,0.3) 10px, rgba(56,189,248,0.3) 20px), repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(56,189,248,0.3) 10px, rgba(56,189,248,0.3) 20px);animation:spinSphere 10s linear infinite;border:2px solid #38bdf8;box-shadow:inset 0 0 40px rgba(56,189,248,0.8), 0 0 20px rgba(56,189,248,0.5);"></div>
</div>
<style>@keyframes spinSphere { 100%{background-position:150px 150px;transform:rotateZ(360deg);} }</style>`
  },
  {
    id: 42, name: "Floating 3D Objects", description: "Circles, squares, triangles moving.", category: "3D",
    code: `<div style="width:100%;height:100%;background:#1e1b4b;position:relative;overflow:hidden;perspective:800px;">
  <div style="position:absolute;width:40px;height:40px;border-radius:50%;background:#ec4899;top:10%;left:20%;animation:flt3d 8s ease-in-out infinite;"></div>
  <div style="position:absolute;width:50px;height:50px;background:#8b5cf6;top:60%;left:70%;animation:flt3d 12s ease-in-out infinite reverse;"></div>
</div>
<style>@keyframes flt3d { 0%{transform:translateZ(-100px) rotateX(0deg);} 50%{transform:translateZ(100px) rotateX(180deg);} 100%{transform:translateZ(-100px) rotateX(360deg);} }</style>`
  },
  {
    id: 43, name: "Infinite Tunnel", description: "Moving tunnel illusion.", category: "3D",
    code: `<div style="width:100%;height:100%;background:#000;display:flex;align-items:center;justify-content:center;overflow:hidden;">
  <div style="position:absolute;width:50px;height:50px;border:2px solid #ef4444;animation:tunnelIn 2s linear infinite;"></div>
  <div style="position:absolute;width:50px;height:50px;border:2px solid #ef4444;animation:tunnelIn 2s linear infinite 0.5s;"></div>
  <div style="position:absolute;width:50px;height:50px;border:2px solid #ef4444;animation:tunnelIn 2s linear infinite 1s;"></div>
</div>
<style>@keyframes tunnelIn { 0%{transform:scale(0.1);opacity:0;} 50%{opacity:1;} 100%{transform:scale(10);opacity:0;} }</style>`
  },
  {
    id: 44, name: "Wireframe Terrain", description: "Animated 3D mountains.", category: "3D", scriptReplace: {find:"terr-cvs", replace:"terr-cvs-prev"},
    code: `<canvas id="terr-cvs" style="width:100%;height:100%;background:#000;display:block;"></canvas>
<script>
(function(){
  const cvs=document.getElementById('terr-cvs'); const ctx=cvs.getContext('2d'); let w,h,t=0;
  function r(){ w=cvs.width=cvs.offsetWidth; h=cvs.height=cvs.offsetHeight; } window.addEventListener('resize',r); r();
  function d(){
    ctx.clearRect(0,0,w,h); ctx.strokeStyle='#a855f7'; ctx.beginPath();
    for(let y=0;y<h/2;y+=20){
      ctx.moveTo(0, h/2+y);
      for(let x=0;x<w;x+=20) ctx.lineTo(x, h/2+y - Math.sin((x+t)*0.05)*20 - Math.cos((y+t)*0.05)*20);
    } ctx.stroke(); t+=2; requestAnimationFrame(d);
  } d();
})();
</script>`
  },
  {
    id: 45, name: "Fluid Simulation", description: "Real-time liquid movement.", category: "3D",
    code: `<div style="width:100%;height:100%;background:conic-gradient(from 180deg, #14b8a6, #3b82f6, #14b8a6);background-size:200% 200%;animation:fluidSim 10s ease infinite;filter:blur(20px);"></div>
<style>@keyframes fluidSim { 0%{background-position:0% 0%;} 50%{background-position:100% 100%;} 100%{background-position:0% 0%;} }</style>`
  },
  {
    id: 46, name: "Lava Lamp Simulation", description: "Multiple blobs merging together.", category: "3D",
    code: `<div style="width:100%;height:100%;background:#4c0519;position:relative;overflow:hidden;filter:blur(10px) contrast(20);display:flex;flex-direction:column;justify-content:center;align-items:center;">
  <div style="position:absolute;width:100px;height:100px;background:#f43f5e;border-radius:50%;animation:lava 6s infinite alternate;"></div>
  <div style="position:absolute;width:80px;height:80px;background:#f43f5e;border-radius:50%;animation:lava 8s infinite alternate-reverse;"></div>
</div>
<style>@keyframes lava { 0%{transform:translateY(100px);} 100%{transform:translateY(-100px);} }</style>`
  },
  {
    id: 47, name: "Metaballs", description: "Gooey sticking shapes.", category: "3D",
    code: `<div style="width:100%;height:100%;background:#064e3b;position:relative;filter:blur(15px) contrast(30);display:flex;justify-content:center;align-items:center;">
  <div style="width:80px;height:80px;background:#10b981;border-radius:50%;position:absolute;animation:goo1 3s infinite alternate;"></div>
  <div style="width:80px;height:80px;background:#10b981;border-radius:50%;position:absolute;animation:goo2 3s infinite alternate;"></div>
</div>
<style>@keyframes goo1 { 0%{transform:translateX(-50px);} 100%{transform:translateX(50px);} } @keyframes goo2 { 0%{transform:translateX(50px);} 100%{transform:translateX(-50px);} }</style>`
  },
  {
    id: 48, name: "Morphing Geometry", description: "3D objects changing form.", category: "3D",
    code: `<div style="width:100%;height:100%;background:#1e293b;display:flex;justify-content:center;align-items:center;perspective:500px;">
  <div style="width:150px;height:150px;background:#3b82f6;animation:shapeMorph3 5s infinite;"></div>
</div>
<style>@keyframes shapeMorph3 { 0%{border-radius:0;transform:rotateX(0deg) rotateY(0deg);} 50%{border-radius:50%;background:#a855f7;transform:rotateX(180deg) rotateY(180deg);} 100%{border-radius:0;transform:rotateX(360deg) rotateY(360deg);} }</style>`
  },
  {
    id: 49, name: "Glass Distortion Shader", description: "Glassmorphism refraction.", category: "3D",
    code: `<div style="width:100%;height:100%;background:linear-gradient(45deg, #1e1b4b, #312e81);display:flex;align-items:center;justify-content:center;position:relative;">
  <div style="width:120px;height:120px;background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.4);box-shadow:0 8px 32px rgba(0,0,0,0.3);transform:rotate(45deg);animation:crystal 4s infinite alternate;"></div>
</div>
<style>@keyframes crystal { 0%{transform:rotate(45deg) scale(1);} 100%{transform:rotate(45deg) scale(1.1) skew(5deg);} }</style>`
  },
  {
    id: 50, name: "Interactive Shader Background", description: "Premium abstract WebGL style.", category: "3D",
    code: `<div style="width:100%;height:100%;background:#fafafa;position:relative;overflow:hidden;">
  <div style="position:absolute;width:100px;height:100px;background:linear-gradient(135deg, #fce7f3, #fbcfe8);border-radius:20px;box-shadow:20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff;top:20%;left:20%;animation:saasFlt 6s ease-in-out infinite alternate;"></div>
</div>
<style>@keyframes saasFlt { 0%{transform:translateY(0) rotate(0deg);} 100%{transform:translateY(-30px) rotate(15deg);} }</style>`
  }
);
