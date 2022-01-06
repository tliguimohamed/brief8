


    var titre =document.getElementById("titre")
    var aut =document.getElementById("Auteur")
    var emal = document.getElementById("email")
    var prix =document.getElementById("Prix")
    var date =document.getElementById("date")
    var lang =document.getElementById("fname")

    var rad = document.getElementsByClassName ("radio-1")
    var tbody = document.getElementsByTagName("tbody")[0];
    var liste =[];
    var list2= ""
    var from_valide = true;
class Ouvrage {
    constructor(titre,auteur,email ,Prix,date,Langs,type){
        this.titre=titre;
        this.auteur=auteur;
        this.email=email;
        this.prix=Prix;
        this.date=date;
        this.Langs=Langs;
        this.type=type;
    
    }
    
    DétailOuvrage(){
        return "L'ouvrage" +this. titre + "est un" + auteur + "en langue" +Langs+ "écrit par" + auteur + "et publié le" + dates + "Le prix de" + titre + "est de" + prix + "Dhs"
    }
        
    }
    //  localStorage

    list2=JSON.parse(localStorage.getItem("list"));
    if (list2 != null) {
        for(i=0;i<list2.length;i++){
            var livre_info = new Ouvrage(list2[i].titre, list2[i].auteur, list2[i].email, list2[i].prix, list2[i].date, list2[i].Langs, list2[i].type)
            liste.push(livre_info);
        }

    }
  

    





let myform = document.getElementById("myform");
myform.addEventListener("submit",function(e){
    e.preventDefault();
    

    

    
    var emi = /\S+@gmail\.com/
  



    if(titre.value== ""){ 
        var errortitre=document.getElementById("titre-1")
        errortitre.innerHTML=('Remplir le champs')
        errortitre.style.color="red"
        from_valide = false
    }
    else if(!isNaN(titre.value)){
        var errortitre=document.getElementById("titre-1")
        errortitre.innerHTML=('Only text')
        errortitre.style.color="red"
        from_valide = false

    } 
    else{
        var errortitre=document.getElementById("titre-1")
        errortitre.innerHTML=('Good')
        errortitre.style.color="green"
        from_valide = true
    }
    if(titre.value.length>20){ 
        var errortitre=document.getElementById("titre-1")
        errortitre.innerHTML=('Titre de louvrage max 20')
        errortitre.style.color="red"
        from_valide = false

      }
    
      if(aut.value== ""){ 
          var errorauteur=document.getElementById("auteur-1")
          errorauteur.innerHTML=('Remplir le champs')
          errorauteur.style.color="red"
          from_valide = false

        }
    
        else if(!isNaN(aut.value)){
            var errorauteur=document.getElementById("auteur-1")
            errorauteur.innerHTML=('Only text')
            errorauteur.style.color="red"
            from_valide = false

        } 
        else{
            var errorauteur=document.getElementById("auteur-1")
            errorauteur.innerHTML=('Good')
            errorauteur.style.color="green"
            from_valide = true

        }
        if(aut.value.length>20){ 
            var errorauteur=document.getElementById("auteur-1")
            errorauteur.innerHTML=('Titre de louvrage max 20')
            errorauteur.style.color="red"
            from_valide = false

          }
        // Email
    var erroremal = document.getElementById("email-1")

    if(emal.value== ""){ 
        erroremal.innerHTML=('Remplir le champs')
        erroremal.style.color="red"
        from_valide = false;
      }
    else if(emi.test(emal.value) == false){
        erroremal.innerHTML=('Only text')
        erroremal.style.color="red"
        from_valide = false;


      }
      else{
        erroremal.innerHTML = "Good";
        erroremal.style.color ="green"
        from_valide = true;

      }
    

          var prix=document.getElementById("Prix")
          if((prix.value).trim() == ""){
          var errorprix=document.getElementById("prix-1")
          errorprix.innerHTML=('Message no validé')
          errorprix.style.color="red"
          from_valide = false;

}
else if(isNaN(prix.value)){
    var errorprix=document.getElementById("prix-1")
    errorprix.innerHTML=('Message no validé')
    errorprix.style.color="red"
    from_valide = false;



}
else if((prix.value)<=0){
    var errorprix=document.getElementById("prix-1")
    errorprix.innerHTML=('Le prix doit etre positif')
    errorprix.style.color="red"
    from_valide = false;

}

else{
    var errorprix =document.getElementById("prix-1")
    errorprix.innerHTML=('Good')
    errorprix.style.color="green"
    from_valide = true;

}


if(date.value== "" ) { 
    var errordate=document.getElementById("date-1")
    errordate.innerHTML=('Message no validé')
    errordate.style.color="red"
    from_valide = false;

 }
else{
        var errordate=document.getElementById("date-1")
        errordate.innerHTML=('Good')
        errordate.style.color="green"
        from_valide = true;

}
if(lang.value== "" ) { 
    var errorlang=document.getElementById("lang-1")
    errorlang.innerHTML=('Message no validé')
    errorlang.style.color="red"
    from_valide = false;

 }
    else{
        var errorlang=document.getElementById("lang-1")
        errorlang.innerHTML=('Good')
        errorlang.style.color="green"
        from_valide = true;

 }


//radio
if (!(rad[0].checked || rad[1].checked || rad[2].checked)) {
    var errorradio = document.getElementById("rad-1");
    errorradio.innerHTML=("Veuillez sélectionner un type");
    errorradio.style.color = "red";
    from_valide = false;

}

else{
    var errorradio = document.getElementById("rad-1")
    errorradio.innerHTML=("Good")
    errorradio.style.color="green"
    


}



if (from_valide == true){
    var type_btn = document.querySelector(".radio-1:checked")
    var ouvrage =  new Ouvrage(titre.value,aut.value,emal.value,prix.value,date.value,lang.options[lang.selectedIndex].value,type_btn.value)
                       
// ajouter l'objet ouvrage dans une liste JS
liste.push(ouvrage)
localStorage.setItem("list" , JSON.stringify(liste))

// trier la liste
trier();
tbody.innerHTML = "";
for(var i=0;i<liste.length;i++){
    var row = tbody.insertRow(-1);
    row.insertCell(0).innerHTML = liste[i].titre;
    row.insertCell(1).innerHTML = liste[i].auteur;
    row.insertCell(2).innerHTML = liste[i].email;                       
    row.insertCell(3).innerHTML = liste[i].prix;
    row.insertCell(4).innerHTML = liste[i].date;
    row.insertCell(5).innerHTML = liste[i].Langs;
    row.insertCell(6).innerHTML = liste[i].type;
    row.insertCell(7).innerHTML = 
'<button onclick= "Edit(this)" value= "Edit" >Edit</button>' + '<button Onclick="deleteRow(this)" value="delet">Delete</button>' ;
}
}

         
                       

                        
                       
                     
                     
                     
    
                        
                        
            
           
} 
)


function deleteRow(r){
    var i = r.parentNode.parentNode.rowIndex;
    table.deleteRow(i);
}
function Edit(r) {
    var rad = document.getElementsByClassName ("radio-1")
    var i = r.parentNode.parentNode.rowIndex;
    var row = table.rows[i];




    if (r.innerHTML == "Edit") {
        titre.value = row.cells[0].innerHTML;
        Auteur.value = row.cells[1].innerHTML;
        email.value = row.cells[2].innerHTML;
        Prix.value = row.cells[3].innerHTML;
        date.value = row.cells[4].innerHTML;
        document.getElementById("fname").value = row.cells[5].innerHTML;

        // Type
        for (var i = 0; i < rad.length; i++) {
            if (row.cells[5].innerHTML == rad[i].value) {
                rad[i].checked = true;
            }
        }
        r.innerHTML = "Save";
        document.getElementById("btn").setAttribute("disabled", "true");
    }
    else {
        row.cells[0].innerHTML = titre.value;
        row.cells[1].innerHTML = Auteur.value;
        row.cells[2].innerHTML = email.value;
        row.cells[3].innerHTML = Prix.value;
        row.cells[4].innerHTML = date.value;
        row.cells[5].innerHTML = lang.options[lang.selectedIndex].value;
        console.log(lang.options[lang.selectedIndex].value);
        for (var i = 0; i < rad.length; i++) {
            if (rad[i].checked) {
                row.cells[6].innerHTML = rad[i].value;
            }
        }
        r.innerHTML = "Edit";
        document.getElementById("btn").removeAttribute("disabled")
    }
}
function trier(){
    liste.sort(function(a,b){
        if (a.titre < b.titre){
            return -1
        }
        if (a.titre > b.titre){
            return 1
        }
        else {
            return 0
        }
    })
}
function printTable(){
    var tableDiv = document.getElementsByTagName("tbody")[0].innerHTML;
    var bodyContent = document.body.innerHTML;

    document.body.innerHTML = tableDiv;
    window.print();
    document.body.innerHTML = bodyContent;
}

