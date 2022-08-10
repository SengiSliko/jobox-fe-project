const downButton = document.getElementById('contract-download');
const nameinput = document.getElementById('clientname');
const costinput = document.getElementById('clientcost');
const stdateinput = document.getElementById('date');
const endateinput = document.getElementById('');


nameinput,addEventListener("keyup",(e)=>{

    const value = e.currentTarget.value;
    downButton.disabled = false;

    if(value === ""){
        downButton.disabled = true;
    }

});

let btnshow = document.querySelector('button');

btnshow







function generate_pdf(){

    var cname = document.getElementById('clientname').value;
    var costs = document.getElementById('clientcost').value;
    var para = document.getElementById('inover').value;
    var startdate = document.getElementById('stdate').value;
    var endddate = document.getElementById('endate').value;

    var Imargin = 15;
    var Rmargin = 15;
    var pdfinMM = 210;

    var doc = new jsPDF();
    doc.setFontSize(14);
    
    doc.fromHTML(document.getElementById('page1'));
    doc.text(2,70,cname);

    $("#saying1").removeAttr('hidden');
    doc.fromHTML(document.getElementById('saying1'),50,80);
    $("#saying1").attr('hidden','true');
    doc.addPage();
    doc.fromHTML(document.getElementById('page2.1'));
    doc.text(2,20,"Service cost: R"+costs +".00");

    doc.fromHTML(document.getElementById('page2.2'),2,30);

    doc.addPage();
    

    doc.fromHTML(document.getElementById('page3.1'));
   

    doc.text(2,50,para);

    doc.fromHTML(document.getElementById('page3.2'),2,65);


    doc.text(2,85,'Start date: '+startdate);

    doc.text(2,95,'End date: '+endddate);

    


    

    

    doc.save('clientcontract.pdf');
}
