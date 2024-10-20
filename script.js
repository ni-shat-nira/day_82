var tshirtPrice=10;
var tshirtQty=11;
var tshirtTotalprice=tshirtPrice*tshirtQty;
var shoePrice=18;
var shoeQty=9;
var shoeTotalprice=shoePrice*shoeQty;
var phonePrice=35;
var headphonePrice=12;
var headphoneQty=4;
var headphoneTotalprice=headphonePrice*headphoneQty;
var totalCost=(tshirtTotalprice+shoeTotalprice+phonePrice+headphoneTotalprice);
var isMember = true;

if(isMember==false){
    var discount=(totalCost*30/100);
    var total=totalCost-discount;
    var vat=total*4/100;
    var pay=total+vat;
    console.log('5.Pay: '+pay)
}else if(totalCost>=30000){
    var discount=(totalCost*15/100);
    var total=totalCost-discount;
    var vat=total*4/100;
    var pay=total+vat;
    console.log('5.Pay: '+pay)
}else if(totalCost>=20000){
    var discount=(totalCost*10/100);
    var total=totalCost-discount;
    var vat=total*4/100;
    var pay=total+vat;
    console.log('5.Pay: '+pay)
}else if(totalCost>=10000){
    var discount=(totalCost*5/100);
    var total=totalCost-discount;
    var vat=total*4/100;
    var pay=total+vat;
    console.log('5.Pay: '+pay)
}else{
    var vat=totalCost*4/100;
    var pay=totalCost+vat;
    console.log('5.Pay: '+pay)
}