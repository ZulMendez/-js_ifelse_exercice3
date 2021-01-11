// # Partie 1
// - # Exo 1
//     - ## Créez un tableau comprenant 5 prénoms, la variable doit se nommer "tabPrenoms"
//     - ## Récuperez la longueur de ce tableau et stockez la dans une variable du nom de "tabLength" et affichez là en suite via un console.log()
//     - ## Affichez dans la console chaque prénom précédé de "Bonjour " exemple
//     - ## Bonjour Nicolas
let tabPrenoms = ['olivia', 'alicia', 'camille', 'florence', 'marie'];
let tabLength = tabPrenoms.length;
console.log(tabPrenoms);
console.log(`Bonjour ${tabPrenoms[0]}`);
console.log(`Bonjour ${tabPrenoms[1]}`);
console.log(`Bonjour ${tabPrenoms[2]}`);
console.log(`Bonjour ${tabPrenoms[3]}`);
console.log(`Bonjour ${tabPrenoms[4]}`);

//  - # Exo 2 
//     - ## Créez une variable qui comprend un chiffre aléatoire entre 1 et 10
//     - ## Posez la question a l'utilisateur, demandez lui d'entrer un chiffre entre 1 et 10
//     - ## Si le nombre entré par l'utilisateur est différent du nombre aléatoire généré alors répétez la question
//     - ## Sinon félicitez l'utilisateur d'avoir trouvé le bon nombre !
// let chiffAlea = Math.round(Math.random() * (10 - 3));
// alert(chiffAlea);

// let reponse = parseInt(prompt('Entrez un chiffre entre 1 et 10: '));

// if (reponse != chiffAlea) {
//     reponse = parseInt(prompt('Mauvaise réponse. Entrez un  autre chiffre entre 1 et 10: '))
//     if (reponse != chiffAlea) {
//         alert(`tu as raté 3 fois la bonne réponse est : ${chiffAlea}`);
//     }
//     else {
//         alert('bonne réponse');
//     }
// }
// else {
//     alert('Bonne réponse');
// }

//  - # Exo 3 -> Bonus : Le QCM
//     - ## Créez un QCM avec 3 questions,les bonnes réponses seront stockées dans un tableau.
//     - ## Astuce : 
//     - ## - Il faudra faire une condition
//     - ## - Il y aura 3 tableaux : 
//     - ## - Un tableau avec les 3 questions
//     - ## - Un tableau avec les 3 réponses
//     - ## Un tableau avec les questions + les réponses aux quelles on à correctement répondu
//     - ## Et plein d'autres choses bonne chance.
let tabQuest = ['capital du japon?', '5 * 5 = ' , '10 + 7 = '];
let tabRep = ['tokyo', '25', '17'];
let tabQuesRep = [];

// let resp = prompt(`${tabQuest[0]} `);
// if (resp != tabRep[0]) {
//     resp = prompt(`${tabQuest[0]}`);
//     if (resp != tabRep[0]) {
//         resp = prompt(`${tabQuest[0]}`);
//         if (resp != tabRep[0]) {
//             alert(`dommage, la réponse est ${tabRep[0]}`);
//         }   else {
//                 alert('bonne réponse');
//                 tabQuesRep.push(`${tabQuest[0]} ${resp}`);
//         }
//     } else {
//         alert('bonne réponse');
//         tabQuesRep.push(`${tabQuest[0]} ${resp}`);
//         }
// }   else {
//         alert('bonne réponse');
//         tabQuesRep.push(`${tabQuest[0]} ${resp}`);
// }

// let resp = parseInt(prompt(`${tabQuest[1]} `));
// if (resp != tabRep[1]) {
//     resp = parseInt(prompt(`${tabQuest[1]}`));
//     if (resp != tabRep[1]) {
//         resp = parseInt(prompt(`${tabQuest[1]}`));
//         if (resp != tabRep[1]) {
//             alert(`dommage, la réponse est ${tabRep[1]}`);
//         }   else {
//                 alert('bonne réponse');
//                 tabQuesRep.push(`${tabQuest[1]} ${resp}`);
//         }
//     } else {
//         alert('bonne réponse');
//         tabQuesRep.push(`${tabQuest[1]} ${resp}`);
//         }
// }   else {
//         alert('bonne réponse');
//         tabQuesRep.push(`${tabQuest[1]} ${resp}`);
// }

let resp = parseInt(prompt(`${tabQuest[2]} `));
if (resp != tabRep[2]) {
    resp = parseInt(prompt(`${tabQuest[2]}`));
    if (resp != tabRep[2]) {
        resp = parseInt(prompt(`${tabQuest[2]}`));
        if (resp != tabRep[2]) {
            alert(`dommage, la réponse est ${tabRep[2]}`);
        }   else {
                alert('bonne réponse');
                tabQuesRep.push(`${tabQuest[2]} ${resp}`);
        }
    } else {
        alert('bonne réponse');
        tabQuesRep.push(`${tabQuest[2]} ${resp}`);
        }
}   else {
        alert('bonne réponse');
        tabQuesRep.push(`${tabQuest[2]} ${resp}`);
}
//  # Partie 2
// - ## Prompt()
//     - ## prompt() me permet de poser une question à l'utilisateur,la réponse qu'il entrera sera en suite stockée dans la variable "reponse".

    let reponse = prompt("Bonjour comment vas-tu ?");

//     - ## J'affiche la réponse donnée par l'utilisateur

    console.log(reponse);

// - ## Alert()
//     - ## let question = prompt('Comment vas-tu ?');

//     - ## alert() permet d'ouvrir une boite de dialogue avec la valeur que je mentionnerai entre les parenthèses.

    alert("Super je suis content que tu ailles bien");

    let question = prompt('comment vas-tu?');

    if (question == 'bien') {
        alert("Super je suis content que tu ailles bien");
    }
    else if (question == 'très bien') {
        alert('Woaw tu as la pêche !');
    }
    else {
        alert('courage!');
    };
// - ## Exercice
//     - ## Le but de l’exercice est de créer  un « programme » permettant de vous répondre SUR LA CONSOLE .

//     - ## Vous aurez besoin de créer une variable contenant la fonction prompt avec comme paramètres « Quelle temps fait-il aujourd’hui ? « 
let temps = prompt(`Quelle temps fait-il aujourd’hui ?`);
//     - ## Le programme doit ce comporter de cette manière :

//     - ## Si vous écrivez « soleil » dans votre prompt , la console vous réponds «  Sortez en T-shirt »
if (temps == 'soleil') {
    console.log('sortez en t-shirt');
}
//     - ## Si vous écrivez « vent » dans votre prompt, la console vous réponds « Sortez en Pull »
else if (temps == 'vent') {
    console.log('sortez en pull');
}
//     - ## Si vous écrivez « pluie » dans votre prompt, la console vous réponds « Mettez une veste »
else if (temps == 'pluie') {
    console.log('mettez une veste');
}
//     - ## Si vous écrivez « Neïge  » dans votre prompt, la console vous réponds « Reste chez toi, il fait froid »
else if (temps== 'neige') {
    console.log('reste chez toi il fait froid');
}
//     - ## Et si vous écrivez un message est différent de toute ceux inscrits au-dessus, la console vous réponds « je n’ai pas compris »
else {
    console.log(`je n'ai pas compris`);
}