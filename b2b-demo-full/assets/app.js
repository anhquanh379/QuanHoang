const $=s=>document.querySelector(s);const $$=s=>Array.from(document.querySelectorAll(s));
const fmt=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n/100);
const PRODUCTS=[
{id:101,name:'Berber Pillow Cover',price:9900,image:'https://picsum.photos/seed/berber/800/800'},
{id:102,name:'Bluff Nightstand',price:39900,image:'https://picsum.photos/seed/nightstand/800/800'},
{id:103,name:'Bluff Papercord Woven Bench',price:74900,image:'https://picsum.photos/seed/bench/800/800'}];
function getCart(){return JSON.parse(localStorage.getItem('cart')||'[]')}
function setCart(c){localStorage.setItem('cart',JSON.stringify(c));const n=c.reduce((s,i)=>s+i.qty,0);const el=$('.cart-count');if(el){el.textContent=n;el.style.display=n?'inline-block':'none';}}
function addToCart(id){let c=getCart();let f=c.find(i=>i.id===id);if(f)f.qty++;else{let p=PRODUCTS.find(p=>p.id===id);c.push({...p,qty:1});}setCart(c);}
function subtotal(){return getCart().reduce((s,i)=>s+i.price*i.qty,0)}
if($('#product-list')){PRODUCTS.forEach(p=>{$('#product-list').innerHTML+=`
  <div class="card"><div class="media" style="background:url('${p.image}') center/cover"></div>
  <div class="content"><div style="display:flex;justify-content:space-between"><span>${p.name}</span><span class="price">${fmt(p.price)}</span></div>
  <button class="btn primary" onclick="addToCart(${p.id})">Add to cart</button></div></div>`});}
if($('#cart-tbody')){function render(){let c=getCart();$('#cart-tbody').innerHTML='';c.forEach(i=>{$('#cart-tbody').innerHTML+=`
  <tr><td><img src="${i.image}" width="60"></td><td>${i.name}</td><td>${fmt(i.price)}</td>
  <td><div class="qty"><button onclick="chg(${i.id},-1)">-</button><input value="${i.qty}" readonly><button onclick="chg(${i.id},1)">+</button></div></td>
  <td>${fmt(i.price*i.qty)}</td></tr>`});$('#cart-subtotal').textContent=fmt(subtotal());}
  window.chg=(id,d)=>{let c=getCart();let it=c.find(i=>i.id===id);if(!it)return;it.qty+=d;if(it.qty<=0)c=c.filter(i=>i.id!==id);setCart(c);render();};
  render();$('#to-checkout').onclick=()=>location.href='checkout.html';}
const SHIP={standard:1500,express:3000,pickup:0};let disc=0;
function ship(){const r=document.querySelector('input[name=shipping]:checked');return r?SHIP[r.value]:0}
function renderSummary(){if(!$('#summary-items'))return;let c=getCart();$('#summary-items').innerHTML='';
  c.forEach(i=>{$('#summary-items').innerHTML+=`<div style="display:flex;justify-content:space-between"><span>${i.name} x${i.qty}</span><span>${fmt(i.price*i.qty)}</span></div>`});
  $('#subtotal').textContent=fmt(subtotal());$('#shippingFee').textContent=ship()?fmt(ship()):'Free';
  $('#discount').textContent='-'+fmt(disc);$('#total').textContent=fmt(Math.max(0,subtotal()+ship()-disc));}
if($('#summary-items')){renderSummary();$$('input[name=shipping]').forEach(r=>r.addEventListener('change',renderSummary));
  $('#applyDiscount').onclick=()=>{const code=$('#discountCode').value.trim().toUpperCase();if(code==='SALE10')disc=Math.round(subtotal()*0.1);else if(code==='FREESHIP')disc=Math.min(ship(),3000);else if(code==='SALE50')disc=5000;else disc=0;renderSummary();};
  $('#placeOrder').onclick=()=>{const need=['#fullName','#email','#address1','#city'];const miss=need.filter(s=>!$(s).value.trim()).map(s=>$(s).previousElementSibling.textContent);if(getCart().length===0)miss.push('Cart');if(miss.length){alert('Please fill: '+miss.join(', '));return;}alert('Order placed! '+$('#total').textContent);localStorage.removeItem('cart');location.href='shop.html';};}
setCart(getCart());