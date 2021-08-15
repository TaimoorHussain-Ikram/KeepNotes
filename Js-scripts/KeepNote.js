
const noTeTitles = JSON.parse(localStorage.getItem('NoTeTitle'));	
const noTeTexs = JSON.parse(localStorage.getItem('NoTeBody'));
	
if(noTeTitles || noTeTexs){ noTeTitles.forEach((noTes,ind)=>{ addNoTes(noTes, noTeTexs[ind]) })}

const counT = document.querySelector('footer').querySelectorAll('h1');
counT.forEach((conTer)=>{
		conTer.innerHTML=0;
		function upcounT(){
					const tarcounT = +conTer.getAttribute('data-target');
					const sTrCount = Number(conTer.innerHTML)
					if(sTrCount < tarcounT){
								conTer.innerHTML=Math.round(sTrCount + (tarcounT/100));
								setTimeout(upcounT,10);}
					else{conTer.innerHTML=tarcounT}}
		upcounT();});
				
function addNoTes(noTeH, noTeB){const mainB = document.getElementById('maiN');
				const nviewhTml=`<div class='noTeV' onclick='ednoTe(this)'>
			<Button class='dbuT' onclick='delnoTe(this.parentElement)'><i class="fas fa-trash-alt"></i></button>
			<h2 class='nTile'></h2> <hr/> <p class='nTex'></p> </div>`;
				mainB.insertAdjacentHTML('afterbegin',nviewhTml);
				
				mainB.querySelector('.nTile').innerHTML = noTeH;
				mainB.querySelector('.nTex').innerHTML = noTeB;
				
				updaTeNoTe();
				
				if(noTeH !='' && noTeB !=''){
					const linE = mainB.querySelector('hr');
					linE.style.display='block'}}
	
	
	const addnoTeB = document.getElementById('addnoTeB');
	const arrowiT = document.getElementById('arrowiT');
	const arroW = document.getElementById('arroW');
	const noTeCe = document.getElementById('noTeCe');
	
	addnoTeB.onmouseover= ()=>{
		arrowiT.style.width='22px';
		arroW.style.left='25px';}
		
	addnoTeB.onmouseout= ()=>{
		arrowiT.style.width='1px';
		arroW.style.left='10px';}
		
	addnoTeB.onclick= (texT='')=>{
		const noTe = document.createElement('div');
		noTe.classList.add('noTeC');
		const noTehTml= `<div class='noTe'</div>
				<div class='closBuT'><i class="far fa-times-circle fa-2x"></i></div>
				<textarea class='noTeH' placeholder="Title"></textarea> <hr/>
				<textarea class='noTeB' placeholder="Write Here"></textarea>`;
		noTe.insertAdjacentHTML('afterbegin',noTehTml);
		const noTeC = noTe.querySelector('.noTeC');
		document.body.appendChild(noTe);
		
		const Tex1 = noTe.querySelector('.noTeH');
		Tex1.onclick = ()=> event.stopPropagation();
		
		const Tex2 = noTe.querySelector('.noTeB');
		Tex2.onclick = ()=> event.stopPropagation();
		
		const delnoTe = noTe.querySelector('.fa-times-circle');
		delnoTe.onclick = ()=>{
			event.stopPropagation();
			const noTeH = Tex1.value;
			const noTeB = Tex2.value;
			if(noTeH ==='' && noTeB ===''){ noTe.remove()}
			else{savNnoTe(noTeH, noTeB)}}
			
		noTe.onclick= ()=>{
			event.stopPropagation();
			const noTeH = noTe.querySelector('.noTeH').value;
			const noTeB = noTe.querySelector('.noTeB').value;
			(noTeH !='' || noTeB !='')? savNnoTe(noTeH, noTeB):''}}
	
	function savNnoTe(noTeH, noTeB){const mainB = document.getElementById('maiN');
				const nviewhTml=`<div class='noTeV' onclick='ednoTe(this)'>
			<Button class='dbuT' onclick='delnoTe(this.parentElement)'><i class="fas fa-trash-alt"></i></button>
			<h2 class='nTile'></h2> <hr/> <p class='nTex'></p> </div>`;
				mainB.insertAdjacentHTML('afterbegin',nviewhTml);
				
				mainB.querySelector('.nTile').innerHTML = noTeH;
				mainB.querySelector('.nTex').innerHTML = noTeB;
				
				updaTeNoTe();
				
				if(noTeH !='' && noTeB !=''){
					const linE = mainB.querySelector('hr');
					linE.style.display='block'}
				document.querySelector('.noTeC').remove()}
			
function delnoTe(noTeN){ event.stopPropagation(); noTeN.remove(); updaTeNoTe() }
		
	function ednoTe(noTeN){
		const noTeH = noTeN.querySelector('.nTile');
		const Tex1 = noTeCe.querySelector('.noTeH');
		Tex1.value = noTeH.innerHTML;
		Tex1.onclick = ()=> event.stopPropagation();
		
		const noTeB = noTeN.querySelector('.nTex');
		const Tex2 = noTeCe.querySelector('.noTeB');
		Tex2.value = noTeB.innerHTML;
		Tex2.onclick = ()=> event.stopPropagation();
		
		noTeCe.style.display='grid';
		
		const compnoTe = noTeCe.querySelector('.fa-times-circle');
		compnoTe.onclick = ()=>{
			event.stopPropagation();
			if(Tex1.value  == '' && Tex2.value == ''){ 
				noTeCe.style.display='none';
				delnoTe(noTeN);}
			else{	
				noTeH.innerHTML=Tex1.value;
				noTeB.innerHTML=Tex2.value;
				(noTeH.innerHTML != '' && noTeB.innerHTML != '')? 
				noTeN.querySelector('hr').style.display='block':
				noTeN.querySelector('hr').style.display='none';
				noTeCe.style.display='none';
				updaTeNoTe()}}
		
		noTeCe.onclick = () =>{
			noTeH.innerHTML=Tex1.value;
			noTeB.innerHTML=Tex2.value;
			if(noTeH.innerHTML != '' || noTeB.innerHTML != ''){
				(noTeH.innerHTML != '' && noTeB.innerHTML != '')? 
				noTeN.querySelector('hr').style.display='block':
				noTeN.querySelector('hr').style.display='none';
				noTeCe.style.display='none';
				updaTeNoTe()}}}	
				
				
		function updaTeNoTe(){
					const noTeH = document.querySelectorAll('.nTile');
					const noTeB = document.querySelectorAll('.nTex');
					const noTTile = []; const NoTText = [];
					noTeH.forEach((noTe, ind)=>{
						noTTile.push(noTe.innerHTML)
						NoTText.push(noTeB[ind].innerHTML)});
					
					localStorage.setItem('NoTeTitle', JSON.stringify(noTTile));
					localStorage.setItem('NoTeBody', JSON.stringify(NoTText));}



