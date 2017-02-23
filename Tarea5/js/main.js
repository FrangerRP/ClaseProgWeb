var Usuarios=[];

function User(c,n,a,t,ur){
	this.cedula = c;
	this.nombre = n;
	this.apellido = a;
	this.telefono = t;	
	this.foto = ur;
}

function CleanUserInput(){
	document.getElementById('TxtCedula').value='';
	document.getElementById('TxtNombre').value='';
	document.getElementById('TxtApellido').value='';
	document.getElementById('TxtTelefono').value='';	
}

function SaveLocalS(){
	db = JSON.stringify(Usuarios);
	localStorage.setItem('MisUsuarios', db);
}

function AddUser(){				
		c=document.getElementById('TxtCedula').value;
		n=document.getElementById('TxtNombre').value;
		a=document.getElementById('TxtApellido').value;
		t=document.getElementById('TxtTelefono').value;	
		ur =document.getElementById('imgg').src;
				
		Usuarios.push(new User(c,n,a,t,ur));	
		CleanUserInput();
		ViewUsers();
		SaveLocalS();
}

function ViewUsers(){
	destino=document.getElementById("AreaRegistro");
	destino.innerHTML="";
	for(x=0; x<Usuarios.length; x++){
	Userd = Usuarios[x];
	tr= document.createElement("tr");
	tr.setAttribute('indice',x);

	td= document.createElement("td");
	td.innerHTML = Userd.cedula;
	tr.appendChild(td);

	td= document.createElement("td");
	td.innerHTML = Userd.nombre;
	tr.appendChild(td);

	td= document.createElement("td");
	td.innerHTML = Userd.apellido;
	tr.appendChild(td);

	td= document.createElement("td");
	td.innerHTML = Userd.telefono;
	tr.appendChild(td);

	td= document.createElement("td");//Foto		
	img = document.createElement("img");
	opp = Userd.foto;	
	img.setAttribute("src", opp);
	img.setAttribute("width", "100");
	td.appendChild(img);
	tr.appendChild(td);

	td = document.createElement("td");//Eliminar
	btn = document.createElement("button");
	btn.setAttribute('class','Stilo')
	miImg =document.createElement("img");
	miImg.setAttribute('src','img/icon/DeleteIco.png');
	btn.appendChild(miImg);
	btn.setAttribute('onclick','DropUser(this)');
	td.appendChild(btn);
	tr.appendChild(td);

	td = document.createElement("td");//Editar
	btn = document.createElement("button");
	btn.setAttribute('class','Stilo')
	miImg =document.createElement("img");
	miImg.setAttribute('src','img/icon/EditIco.png');
	btn.appendChild(miImg);
	btn.setAttribute('onclick','EditUser(this)');
	td.appendChild(btn);
	tr.appendChild(td);

	destino.appendChild(tr);

	}
}
function DropUser(btn){
	tr = btn.parentNode.parentNode;
	tr.setAttribute('class','borrar');
	if(confirm('Estas a punto de borrar este usuario. Estas seguro?')){
		indice = tr.getAttribute('indice');
		tarr =[];
		for(x=0; x<Usuarios.length;x++){
			if(x!=indice){
				tarr.push(Usuarios[x]);
			}
		}	
		Usuarios = tarr;
		tr.parentNode.removeChild(tr);
		SaveLocalS();
	}
	tr.setAttribute('class','borrar');
}
function EditUser(btn){
	tr = btn.parentNode.parentNode;
	indice = tr.getAttribute('indice');	
	tarr=[];
	for(x=0; x<Usuarios.length; x++){
		if(x==indice){
			document.getElementById('TxtCedula').value=Usuarios[x].cedula;
			document.getElementById('TxtNombre').value=Usuarios[x].nombre;
			document.getElementById('TxtApellido').value=Usuarios[x].apellido;
			document.getElementById('TxtTelefono').value=Usuarios[x].telefono;
			document.getElementById('imgg').src=Usuarios[x].foto;			
		}
	}
	soloRemove();
}
function soloRemove(){	
		indice = tr.getAttribute('indice');
		tarr =[];
		for(y=0; y<Usuarios.length;y++){
			if(y!=indice){
				tarr.push(Usuarios[y]);
			}
		}	
		Usuarios = tarr;
		tr.parentNode.removeChild(tr);
		SaveLocalS();		
}

function LoadUser(){
	db = localStorage.getItem('MisUsuarios');
	if(db != null){
		Usuarios = JSON.parse(db);
		ViewUsers();
	}
}