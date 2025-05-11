document.addEventListener("DOMContentLoaded", function () {
    // Oluştur butonunu seçin
    const javascriptRange = document.getElementById("javascript");
    const javascriptOutput = document.getElementById("javascriptOutput");
    javascriptRange.addEventListener("input", function () {
        javascriptOutput.value = javascriptRange.value;
    });
    const javaRange = document.querySelector("#java");
    const javaOutput = document.querySelector("#javaOutput");
    javaRange.addEventListener("input", function () {
        javaOutput.value = javaRange.value;
    });
    const pythonRange = document.querySelector("#python");
    const pythonOutput = document.querySelector("#pythonOutput");
    pythonRange.addEventListener("input", () => {
        pythonOutput.value = pythonRange.value;
    });
    const cRange = document.querySelector("#c");
    const cOutput = document.querySelector("#cOutput");
    cRange.addEventListener("input", () => {
        cOutput.value = cRange.value;
    });
    const cppRange = document.querySelector("#cpp");
    const cppOutput = document.querySelector("#cppOutput");
    cppRange.addEventListener("input", () => {
        cppOutput.value = cppRange.value;
    });
    const csharpRange = document.querySelector("#csharp");
    const csharpOutput = document.querySelector("#csharpOutput");
    csharpRange.addEventListener("input", () => {
        csharpOutput.value = csharpRange.value;
    })
    const phpRange = document.querySelector("#php");
    const phpOutput = document.querySelector("#phpOutput");
    phpRange.addEventListener("input", () => {
        phpOutput.value = phpRange.value;
    });

    let olusturButton = document.querySelector('.btn.btn-sm.btn-success');
    let cvisim = document.getElementById("cvisim");
    let cvmeslek = document.getElementById("cvmeslek");
    let name = document.getElementById("name");
    let lastName = document.getElementById("lastname");
    let bolum = document.getElementById("bolum");
    let resim = document.getElementById("fileInput");
    let cvresim = document.getElementById("cvresim");
    let cvsoyisim = document.getElementById("cvsoyisim");
    let cvFile = document.getElementById("cvFile");
    let cvsite = document.getElementById("cvsite");
    let cvtel = document.getElementById("cvtel");
    let cvmail = document.getElementById("cvmail");
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");
    let site = document.getElementById("site");
    let baslik1=document.getElementById("baslik1");
    let alan=document.getElementById("alan");
    let egitimBaslik=document.getElementById("egitimB");
    let cvisim2=document.getElementById("cvisim2");
    let cvsoyisim2=document.getElementById("cvsoyisim2");
    let cvyas=document.getElementById("cvyas");
    let cvcinsiyet=document.getElementById("cvcinsiyet");
    let erkekOpt=document.getElementById("erkek");
    let kadinOpt=document.getElementById("kadin");
    let kisiselB=document.getElementById("kisiselB");
    let age=document.getElementById("age");
    let cvmyil=document.getElementById("cvmyil");
    let cvbolum=document.getElementById("cvbolum");
    let cvuni=document.getElementById("cvuni");
    let cvnotort=document.getElementById("cvnotort");
    let school=document.getElementById("school");
    let mezuniyet=document.getElementById("mezuniyet");
    let not=document.getElementById("not");
    let yabdillerB=document.getElementById("yabdillerB");
    let chckbxing=document.getElementById("ing");
    let chckbxfra=document.getElementById("fra");
    let chckbxalm=document.getElementById("alm");
    let chckbxita=document.getElementById("ita");
    let chckbxisp=document.getElementById("isp");
    let chckbxjap=document.getElementById("jap");
    let bilinenydiller=document.getElementById("bilinenydiller");
    let progdillerB=document.getElementById("progdillerB");
    let javadil=document.getElementById("javadil");
    let pythondil=document.getElementById("pythondil");
    let javascriptdil=document.getElementById("javascriptdil");
    let cdil=document.getElementById("cdil");
    let cppdil=document.getElementById("cppdil");
    let csdil=document.getElementById("csdil");
    let phpdil=document.getElementById("phpdil");
    olusturButton.addEventListener('click', function (event) {

        event.preventDefault();
        alert("CV oluşturma başarılı!Sayfanın aşağısında cv'nizi görebilirsiniz");
        cvFile.style.display = "block";
        cvisim.textContent = name.value+" ";
        cvsoyisim.textContent = lastName.value;
        cvmeslek.textContent = alan.value
        cvsite.textContent +=" "+ site.value;
        cvmail.textContent +=" "+ email.value;
        cvtel.textContent +=" "+ tel.value;
        kisiselB.textContent="Kişisel Bilgiler";
        kisiselB.style.borderBottom="2px solid black";
        kisiselB.style.paddingBottom="4px";
        egitimBaslik.style.borderBottom="2px solid black";
        egitimBaslik.style.paddingBottom="4px";
        baslik1.style.borderBottom="2px solid black";
        baslik1.style.paddingBottom="4px";
        egitimBaslik.textContent="Eğitim Bilgileri";
        baslik1.textContent="İletişim bilgileri";
        cvisim2.textContent+=" " + name.value;
        cvsoyisim2.textContent+=" " + lastName.value;
        cvyas.textContent+=" "+age.value;
        cvuni.textContent+=" "+school.value;
        cvbolum.textContent+=" "+bolum.value;
        cvmyil.textContent+=" "+mezuniyet.value;
        cvnotort.textContent+= " "+not.value;
        yabdillerB.textContent="Yabancı diller";
        yabdillerB.style.borderBottom="2px solid black";
        javadil.textContent="Java :";
        javascriptdil.textContent="Javascript :";
        pythondil.textContent="Python :";
        cppdil.textContent="C++ :";
        cdil.textContent="C :";
        csdil.textContent="C# :";
        phpdil.textContent="PHP :";
        javadil.textContent+=" %"+ javaOutput.value;
        javascriptdil.textContent+=" %"+ javascriptOutput.value;
        cppdil.textContent+=" %"+ cppOutput.value;
        cdil.textContent+=" %"+ cOutput.value;
        csdil.textContent+=" %"+ csharpOutput.value;
        phpdil.textContent+=" %"+ phpOutput.value;
        pythondil.textContent+=" %"+ pythonOutput.value;
        progdillerB.textContent="Bildiğiniz Programlama Dilleri";
        progdillerB.style.borderBottom="2px solid black";

        if(chckbxing.checked){
            if(bilinenydiller.textContent==""){
                bilinenydiller.textContent+="İngilizce";
            }
            else{
                bilinenydiller.textContent+=", İngilizce";
            }
        }
        if(chckbxalm.checked){
            if(bilinenydiller.textContent==""){
                bilinenydiller.textContent+="Almanca";
            }
            else{
                bilinenydiller.textContent+=", Almanca";
            }
        }
        if(chckbxfra.checked){
            if(bilinenydiller.textContent==""){
                bilinenydiller.textContent+="Fransızca";
            }
            else{
                bilinenydiller.textContent+=", Fransızca";
            }
        }
        if(chckbxisp.checked){
            if(bilinenydiller.textContent==""){
                bilinenydiller.textContent+="İspanyolca";
            }
            else{
                bilinenydiller.textContent+=", İspanyolca";
            }
        }
        if(chckbxita.checked){
            if(bilinenydiller.textContent==""){
                bilinenydiller.textContent+="İtalyanca";
            }
            else{
                bilinenydiller.textContent+=", İtalyanca";
            }
        }
        if(chckbxjap.checked){
            if(bilinenydiller.textContent==""){
                bilinenydiller.textContent+="Japonca";
            }
            else{
                bilinenydiller.textContent+=", Japonca";
            }
        }
        if(erkekOpt.checked){
            cvcinsiyet.textContent+=" Erkek";
        }
        else if(kadinOpt.checked){
            cvcinsiyet.textContent+=" Kadın";
        }
        const secilenResim = resim.files[0];
        if (secilenResim) {
            
            cvresim.src = URL.createObjectURL(secilenResim);
        
        }
        
        

    });
});