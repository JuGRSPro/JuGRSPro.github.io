const areaError = document.getElementById('erreur');
const areaInput = document.getElementById('input_area');
const areaBtn = document.getElementById('button_resolve_area');
const areaSoluce = document.getElementById('solution_area');


let tabLength = document.getElementById('tab_length'); /////valeur saisie <==> longueur du tableau 
let tabMax = [];////////////////////////////////////////////tableau recherche du Max

let maximum = 0;

const buttonValid = document.getElementById('valider'); ////////bouton valider

buttonValid.addEventListener('click', function(){//////////////////verifification bonne saisie de la dimension
    try {
        if (tabLength.value <=0){
            throw 'Saisir une valeur strictement positive';
        }
        else if (tabLength.value > 20){
            throw 'Saisir un nombre infèrieur à 20';
        }
        else { 
            areaError.innerHTML ="";
            const btnResolve = document.createElement('button');////////////////création btn resolve
            btnResolve.id ='solve';
            const btnName = document.createTextNode('Résultat');
            btnResolve.appendChild(btnName);
            areaBtn.appendChild(btnResolve);
            buttonValid.disabled = true;

            for (let i = 1; i <= tabLength.value; i++){///////////////////////////////////////création des inputs
                let input = document.createElement('input');
                input.id = `input${i}`;
                input.setAttribute("type", "number");///////////////////créer des inputs de type nombre
                areaInput.appendChild(input);
            };

            btnResolve.addEventListener("click", function(){/////////////////////////////////appui sur le bouton resolve
                for( i = 1; i <= tabLength.value; i++ ){
                    document.getElementById(`input${i}`).style.backgroundColor = "white";
                    tabMax.push(Number(document.getElementById(`input${i}`).value));
                    maximum = Math.max.apply(null, tabMax);
                    areaSoluce.innerHTML = `Le maximum du tableau est ${maximum}`;
                    
                };
                for (i = 1; i <= tabLength.value; i++) {
                    if (document.getElementById(`input${i}`).value == maximum) {
                        document.getElementById(`input${i}`).style.backgroundColor = "yellow";
                    };
                };
            });///////////////////////////////////////////////////////////////////////////////////fin appui bouton resolve
        };
    }catch(e){
        areaError.innerHTML = e;
    };
});

tabLength.addEventListener('input', function(){ //////////reset des tableau/input/bouton solve
    buttonValid.disabled = false;
    areaSoluce.innerHTML = "";
    tabMax=[];
    while (areaInput.firstChild) {
        areaInput.removeChild(areaInput.firstChild);
    };
    while (areaBtn.firstChild) {
        areaBtn.removeChild(areaBtn.firstChild);
    };
});

