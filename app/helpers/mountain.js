import Ember from 'ember';

export function mountain(params/*, hash*/) {
  var jonsvollHeight = 19.2;
  var mountBlanc = 4810;
  var elbrus = 5642;
  var mountEverest = 8848;

  if (isInt(params) === false) {
    console.log("Invalid input parameter");
  }

  var totalHeightWalked = params * jonsvollHeight;
  var totalHeightWalkedPercent = 0;
  var text = "";

  if (totalHeightWalked < mountBlanc) {
    totalHeightWalkedPercent = totalHeightWalked / mountBlanc * 100;
    text =  "<li>Du har gått <b>" + Number(totalHeightWalked).toFixed(0) +
                " m </b>av Mount Blanc sin høyde på <b>" + mountBlanc + " m</b></li></ul>" +
                "<li> Du har dermed fullført totalt <b>" + Number(totalHeightWalkedPercent).toFixed(1) + "%</b> av Mount Blanc</li>";

    return Ember.String.htmlSafe(text);
  }

  if (totalHeightWalked < elbrus) {
    totalHeightWalkedPercent = totalHeightWalked / elbrus * 100;
    text =  "<li>Gratulerer du har gått opp hele Mount Blanc!</li>" +
                "<li>Du har gått <b>" + Number(totalHeightWalked).toFixed(0) +
                " m </b>av Elbrus sin høyde på <b>" + elbrus + " m</b></li></ul>" +
                "<li> Du har dermed fullført totalt <b>" + Number(totalHeightWalkedPercent).toFixed(1) + "%</b> av Elbrus</li>";

    return Ember.String.htmlSafe(text);
  }

  if (totalHeightWalked < mountEverest) {
    totalHeightWalkedPercent = totalHeightWalked / mountEverest * 100;
    text =  "<li>Gratulerer du har gått opp hele Mount Blanc!</li>" +
                "<li>Jammen har du fullført Elbrus også, du er rå!!</li>" +
                "<li>Du har gått <b>" + Number(totalHeightWalked).toFixed(0) +
                " m </b>av Mount Everest sin høyde på <b>" + mountEverest + " m</b></li></ul>" +
                "<li> Du har dermed fullført totalt <b>" + Number(totalHeightWalkedPercent).toFixed(1) + "%</b> av Mount Everest</li>";

    return Ember.String.htmlSafe(text);
  }

  if (totalHeightWalked > mountEverest) {
    totalHeightWalkedPercent = totalHeightWalked / mountEverest * 100;
    text =  "<li>Gratulerer du har gått opp hele Mount Blanc!</li>" +
                "<li>Jammen har du fullført Elbrus også, du er rå!!</li>" +
                "<li>Din syke trappeperson, Mount Everest i boks!</li>" +
                "<li><b>Utvikleren spanderer gratis lunsj på deg :)</b></li>";

    return Ember.String.htmlSafe(text);
  }
}

function isInt(value) {
  var x;
  if (isNaN(value)) {
    return false;
  }
  x = parseFloat(value);
  return (x | 0) === x;
}

export default Ember.Helper.helper(mountain);
