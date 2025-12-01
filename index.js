const produitListe = document.getElementById('Produit-card');
const produits = [
    {id : 1, name : "Ordinateur DELL", Description : "Tres bonne qualité, 256GB SDD, RAM : 8GB", prix : 15000, image : "https://location.nrix.fr/wp-content/uploads/2023/11/pc-portable.jpg"},
      {id : 2, name : "Macbook pro", Description : "Tres bonne qualité, 256GB SDD, RAM : 8GB", prix : 15000, image : "https://www.pc-koubou.jp/upload/save_image/used/SELLMORE/2350005577716-21184.jpg"},
        {id : 3, name : "Macbook Air M1 ", Description : "Tres bonne qualité, 256GB SDD, RAM : 8GB", prix : 15000, image : "https://img.joomcdn.net/71ac327ce4eb7454a5c34d3954226e8311aa91c2_original.jpeg"},
          {id : 4, name : "Ordinateur DELL", Description : "Tres bonne qualité, 256GB SDD, RAM : 8GB", prix : 15000, image : "https://dispo.sn/wp-content/uploads/2024/04/F3AD1F8C-6438-4A5A-8762-A5872CAFAA0A.jpeg"},
            {id : 5, name : "Ordinateur DELL", Description : "Tres bonne qualité, 256GB SDD, RAM : 8GB", prix : 15000, image : "https://technoplace.ma/14746-medium_default/ordinateur-portable-hp-15-da0007nk-i3-4gb-1tb-156.jpg"},
              {id : 6, name : "Ordinateur DELL", Description : "Tres bonne qualité, 256GB SDD, RAM : 8GB", prix : 15000, image : "https://www.journaldugeek.com/app/uploads/2024/05/asusuxoled.jpg"},
                {id : 7, name : "Ordinateur DELL", Description : "Tres bonne qualité, 256GB SDD, RAM : 8GB", prix : 15000, image : "https://www.journaldugeek.com/app/uploads/2024/05/asusuxoled.jpg"},
                  {id : 8, name : "Ordinateur DELL", Description : "Tres bonne qualité, 256GB SDD, RAM : 8GB", prix : 15000, image : "https://www.journaldugeek.com/app/uploads/2024/05/asusuxoled.jpg"},
                    {id : 9, name : "Ordinateur DELL", Description : "Tres bonne qualité, 256GB SDD, RAM : 8GB", prix : 15000, image : "https://www.journaldugeek.com/app/uploads/2024/05/asusuxoled.jpg"},
                      {id : 10, name : "Ordinateur DELL", Description : "Tres bonne qualité, 256GB SDD, RAM : 8GB", prix : 15000, image : "https://www.journaldugeek.com/app/uploads/2024/05/asusuxoled.jpg"},

    
];

function afficheProd(){
    produitListe.innerHTML +='';
    produits.forEach(p =>{
        let div = document.createElement('div');
        div.innerHTML +=`
        <div class ="card-produit">
<img src=${p.image} </img>
<h2>${p.name} </h2>
<p>${p.Description} </p>
<div class="prix">
<h4> ${p.prix} FCFA </h4> 

<div class="panier">
<i class="fa-regular fa-heart"></i>

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#113be2ff"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>
</div>

</div>

        </div>
        
        
        `
        produitListe.appendChild(div)

    })
};
 afficheProd(produits)
