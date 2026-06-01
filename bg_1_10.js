// Category 1: Gradient Animations
window.backgrounds.push(
  {
    id: 1, name: "Aurora Borealis", description: "Smooth flowing colorful gradients like AI websites.", category: "Gradient",
    code: `<div style="width:100%;height:100%;background:linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);background-size:400% 400%;animation:aurora 15s ease infinite;"></div>
<style>@keyframes aurora { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }</style>`
  },
  {
    id: 2, name: "Moving Mesh Gradient", description: "Moving blob gradients with soft transitions.", category: "Gradient",
    code: `<div style="width:100%;height:100%;background-color:#0f172a;position:relative;overflow:hidden;">
  <div style="position:absolute;width:60%;height:60%;background:radial-gradient(circle, rgba(167,139,250,0.8) 0%, transparent 70%);top:-10%;left:-10%;animation:blob1 8s ease infinite alternate;filter:blur(40px);"></div>
  <div style="position:absolute;width:60%;height:60%;background:radial-gradient(circle, rgba(96,165,250,0.8) 0%, transparent 70%);bottom:-10%;right:-10%;animation:blob2 10s ease infinite alternate;filter:blur(40px);"></div>
</div>
<style>@keyframes blob1 { to { transform:translate(50%, 20%) scale(1.2); } } @keyframes blob2 { to { transform:translate(-50%, -20%) scale(1.2); } }</style>`
  },
  {
    id: 3, name: "Liquid Gradient", description: "Fluid shader-like color movement.", category: "Gradient",
    code: `<div style="width:100%;height:100%;background:conic-gradient(from 0deg, #ff0080, #7928ca, #ff0080);animation:liqSpin 8s linear infinite;filter:blur(30px) contrast(2);"></div>
<style>@keyframes liqSpin { 100%{transform:scale(2) rotate(360deg);} }</style>`
  },
  {
    id: 4, name: "Rainbow Gradient Shift", description: "Changing rainbow gradients.", category: "Gradient",
    code: `<div style="width:100%;height:100%;background:linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);background-size:200% 100%;animation:rainbow 5s linear infinite;"></div>
<style>@keyframes rainbow { 0%{background-position:0% 0;} 100%{background-position:-200% 0;} }</style>`
  },
  {
    id: 5, name: "Breathing Gradient", description: "Soft expanding and contracting gradients.", category: "Gradient",
    code: `<div style="width:100%;height:100%;background:radial-gradient(circle, #fce7f3, #be185d);animation:breatheGrad 4s ease-in-out infinite alternate;"></div>
<style>@keyframes breatheGrad { 0%{background-size:100% 100%;} 100%{background-size:150% 150%;background-position:center;} }</style>`
  },
  {
    id: 6, name: "Rotating Gradient", description: "Spinning multi-color gradient.", category: "Gradient",
    code: `<div style="width:100%;height:100%;background:linear-gradient(0deg, #22d3ee, #818cf8);animation:rotGrad 6s linear infinite;"></div>
<style>@keyframes rotGrad { 0%{filter:hue-rotate(0deg);} 100%{filter:hue-rotate(360deg);} }</style>`
  },
  {
    id: 7, name: "Animated Conic Gradient", description: "Conic sweep animation.", category: "Gradient",
    code: `<div style="width:100%;height:100%;background:conic-gradient(from 0deg, #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6, #ef4444);animation:conicSpin 4s linear infinite;"></div>
<style>@keyframes conicSpin { 100%{transform:rotate(360deg) scale(1.5);} }</style>`
  },
  {
    id: 8, name: "Morphing Gradient Blobs", description: "Organic morphing blobs.", category: "Gradient",
    code: `<div style="width:100%;height:100%;background:#1e1b4b;display:flex;justify-content:center;align-items:center;overflow:hidden;">
  <div style="width:200px;height:200px;background:linear-gradient(45deg, #ec4899, #8b5cf6);border-radius:30% 70% 70% 30% / 30% 30% 70% 70%;animation:morph 4s ease-in-out infinite alternate;"></div>
</div>
<style>@keyframes morph { 0%{border-radius:30% 70% 70% 30%/30% 30% 70% 70%;transform:rotate(0deg);} 100%{border-radius:70% 30% 30% 70%/70% 70% 30% 30%;transform:rotate(180deg);} }</style>`
  },
  {
    id: 9, name: "Color Wave Gradient", description: "Animated color streaks.", category: "Gradient",
    code: `<div style="width:100%;height:100%;background:#111;position:relative;overflow:hidden;">
  <div style="position:absolute;width:100%;height:10px;background:linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6);top:50%;left:0;animation:gradBeam 3s linear infinite;"></div>
</div>
<style>@keyframes gradBeam { 0%{transform:translateX(-100%);} 100%{transform:translateX(100%);} }</style>`
  },
  {
    id: 10, name: "Noise + Gradient Motion", description: "Moving grain texture.", category: "Gradient", scriptReplace: {find:"noise-cvs", replace:"noise-cvs-prev"},
    code: `<canvas id="noise-cvs" style="width:100%;height:100%;background:linear-gradient(45deg,#8b5cf6,#ec4899);display:block;opacity:0.8;"></canvas>
<script>
(function(){
  const cvs=document.getElementById('noise-cvs'); const ctx=cvs.getContext('2d'); let w,h;
  function r(){ w=cvs.width=cvs.offsetWidth; h=cvs.height=cvs.offsetHeight; } window.addEventListener('resize',r); r();
  function d(){
    let id=ctx.createImageData(w,h);
    for(let i=0;i<id.data.length;i+=4){ let v=Math.random()*30; id.data[i]=id.data[i+1]=id.data[i+2]=v; id.data[i+3]=255; }
    ctx.putImageData(id,0,0); requestAnimationFrame(d);
  } d();
})();
</script>`
  }
);
