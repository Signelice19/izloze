const vardi=['Inese Zeltiņa','Gatis Krūmiņš','Artis Dāgs','Mārtiņš Smilga','Linda Baravika'];
const balvas=['Apple dators','tālrunis','automašīna','veļasmašīna','traktors'];
const naudaKopa=1000000;
let uzvaretajuSkaits=5;
let rindas= document.querySelector('.rindas');
rindas.innerHTML=' ';
for(let i=0;i<5;i++){
let rand= Math.random()*vardi.length;
rand= Math.floor(rand);//noapaļo uz leju

let uzvaretajs = vardi[rand];//izvada konsolē
rindas.innerHTML +=
<tr>
    <td>${i+1}</td>
    <td>${uzvaretajs}</td>
</tr>
}

