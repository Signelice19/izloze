const vardi=['Inese Zeltiņa','Gatis Krūmiņš','Artis Dāgs','Mārtiņš Smilga','Linda Baravika'];
const balvas=['Apple dators','tālrunis','automašīna','veļasmašīna','traktors'];
const naudaKopa=1000000;
let uzvaretajuSkaits=5;
let rand= Math.random()*5;
rand= Math.floor(rand);//noapaļo uz leju
console.log(vardi[rand]);//izvada konsolē nejauši izvēlētus vārdus
