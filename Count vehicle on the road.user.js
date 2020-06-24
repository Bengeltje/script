// ==UserScript==
// @name         Count vehicle on the road
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Script om te zien welke voertuigen aanrijdend zijn
// @author       Laurel
// @match https://www.meldkamerspel.com/missions/*
// @grant        none
// ==/UserScript==

var tst = 0;
var ambu = 0;
var rv = 0;
var hv = 0;
var daovd = 0;
var dahod = 0;
var co = 0;
var daags = 0;
var ab = 0;
var pmwvd = 0;
var davl = 0;
var sl = 0;
var afoosc = 0;
var ct = 0;
var wo = 0;
var woa = 0;
var nh = 0;
var meflex = 0;
var meco = 0;
var hond = 0;
var ovdp = 0;
var ovdg = 0;
var mmt = 0;
var polheli = 0;
var atc = 0;
var ato = 0;
var atm = 0;

var ontheway = $('#mission_vehicle_driving > tbody > tr').length;
  if(ontheway > 0){
    $('#mission_vehicle_driving > tbody > tr').each(function() {
        var getvehicletypeid = $(this).find("td:eq(1) a").attr('vehicle_type_id');
        check_vehicle_type(getvehicletypeid);
    });
    if(nh > 0 || polheli > 0 || hond > 0 || ato > 0 || atc > 0 || atm > 0 || ovdp > 0 || meco > 0 || meflex > 0 || tst > 0 || ambu > 0 || rv > 0 || hv > 0 || daovd > 0 || dahod > 0 || ovdg > 0 || co > 0 || ab > 0 || daags > 0 || pmwvd > 0 || sl > 0 || afoosc > 0 || ct > 0 || wo > 0 || woa > 0){
    $('#missing_text').after('<div class="alert alert-info" id="vehicleodw">Voertuigen onderweg: '+ (nh > 0 ? nh + ' Noodhulpeenheden, ': '') +' '+ (polheli > 0 ? polheli + ' Politiehelikopter, ': '') +' '+ (ovdp > 0 ? ovdp + ' Officier van Dienst - Politie, ': '') +' '+ (tst > 0 ? tst + ' Tankautospuiten, ': '') +'  '+ (ambu > 0 ? ambu + ' Ambulance, ': '')+' '+ (rv > 0 ? rv + ' Redvoertuigen, ': '') +' '+ (hv > 0 ? hv + ' Hulpverleningsvoertuigen, ': '') +' '+ (ab > 0 ? ab + ' Adembeschermingsvoertuig, ': '') +' '+ (sl > 0 ? sl + ' Slangenwagen/Tankwagen, ': '') +' '+ (wo > 0 ? wo + ' Waterongevallenvoertuig, ': '') +' '+ (woa > 0 ? woa + ' Waterongevallenaanhanger, ': '') +' '+ (daovd > 0 ? daovd + ' Officier van Dienst - Brandweer, ': '') +' '+ (ct > 0 ? ct + ' Crashtenders, ': '') +' '+ (afoosc > 0 ? afoosc + ' AFO/OSCs, ': '') +' '+ (hond > 0 ? hond + ' Hondengeleider, ': '') +'  '+ (atc > 0 ? atc + ' AT-Commandant, ': '') +' '+ (ato > 0 ? ato + ' AT-Operator, ': '') +' '+ (atm > 0 ? atm + ' AT-Materiaalwagen, ': '') +' '+ (meflex > 0 ? meflex + ' ME Groepsvoertuig, ': '') +' '+ (meco > 0 ? meco + ' ME Commandovoertuig, ': '') +' '+ (dahod > 0 ? dahod + ' Hoofd Officier van Dienst, ': '') +' '+ (ovdg > 0 ? ovdg + ' Officier van Dienst Geneeskunde, ': '') +' '+ (co > 0 ? co + ' Commandowagens, ': '') +' '+ (pmwvd > 0 ? pmwvd + ' Waarschuwings- en Verkenningsdienst, ': '') +' '+ (daags > 0 ? daags + ' Adviseur Gevaarlijke Stoffen, ': '') +' '+ (davl > 0 ? davl + ' Voorlichters, ': '') +' '+ (mmt > 0 ? mmt + ' MMT auto/Lifeliner, ': '') +'</div>');
}
}
function check_vehicle_type(typenumber){
  switch(typenumber){
    /* BRW */
    case '0':
    case '1':
    case '6':
    case '7':
    case '8':
    case '9':
    case '12':
    case '13':
    case '14':
    case '15':
    case '17':
       tst++;
       break;
    case '4':
    case '51':
        hv++;
        break;
    case '2':
    case '18':
        rv++;
        break;
    case '10':
    case '34':
    case '29':
    case '45':
        sl++;
        break;
    case '5':
    case '27':
        ab++;
        break;
    case '24':
        daags++;
        break;
    case '11':
        pmwvd++;
        break;
    case '3':
        daovd++;
        break;
    case '19':
        daovd++;
        dahod++;
        break;
    case '31':
    case '32':
        co++;
        break;
    case '56':
        davl++;
        break;
    /* Vliegtuig*/
    case '44':
        afoosc++;
        break;
    case '41':
    case '42':
    case '43':
        ct++;
        break;
    /* Water*/
    case '36':
        woa++;
        break;
    case '33':
    case '49':
    case '50':
        wo++;
        break;
    /* POL */
    case '22':
    case '25':
    case '46':
        nh++;
        break;
    case '47':
    case '48':
        nh++;
        hond++;
        break;
    case '35':
        ovdp++;
        break;
    case '39':
        meco++;
        break;
    case '40':
        meflex++;
        break;
    case '28':
        polheli++;
        break;
    case '53':
        atc++;
        break;
    case '54':
        ato++;
        break;
    case '55':
        atm++;
        break;
    /* AMBU */
    case '16':
       ambu++;
          break;
     case '38':
        ovdg++;
         break;
     case '23':
     case '37':
         mmt++;
         break;
  }
}