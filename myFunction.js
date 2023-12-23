                                //تعريف متغيرات مجموع سعر المنتجات والضريبة وسعر المنتج على حدد وعدد القطع منه  
var sum =0;var dreph = 0;var endsum=0;var samsung=0;var samsungO=0; khlatO=0; var khlat=0; var mkef=0;mkefO=0;
var frn=0;var frnO=0; var shasha=0;var shashaO=0;var raotar=0;var raotarO =0; var gassala=0;var gassalaO=0;
var mroha = 0; var mrohaO = 0;mdfah=0;mdfahO=0;shashapc=0;shashapcO=0;
                //تعريف طريقة لكل منتج بحيث تقوم بالتالي
function samsungprice(){
        //نضع في المتغري سامسونغ اللذي يعبر عن سعر مجموع سعر القطع المختاره من المنتج الاول المجموع القديم 
        //ونضيف له سعر المنتج مرة اخرى عند الضغط على الزر 
    samsung=Number(samsung)+Number(document.getElementById("samsung").value);
    //نضع في سلة المشتريات في خانة سعر المنتج لنظهر مجموع سعر المنتج الذي حسبناه في التعيلمة السابقة
    document.getElementById("samsungS").value=samsung;
    //نضيف واحد لعدد قطع المنتج الذي ضغطما على زره
    samsungO++;
    //نضع في سلة المشتريات في خانة عدد قطع المنتج لنظهر مجموع قطع المنتج الذي حسبناه في التعيلمة السابقة
    document.getElementById("samsungO").value=samsungO;
    //نضيف الى مجموع سعر المنتجات سعر المنتج الذي اضفناه
    sum=sum+Number(document.getElementById("samsung").value);
    // نضع في سلة المشتريات في خانة مجموع سعر المنتجات قبل اضافة الضريبة لنظهري السعر الجديد
    document.getElementById("sum").value=sum;
    //نحسب الضريبة من تقسيم مجموع سعر المنتجات على  مئة وضربها ب خمسة
    dreph = (sum*5)/100;
    //نضع في سلة المشتريات في خانة الضريبة قيمة الضريبة الجديدة التي حسبناها في التعليمة السابقة
    document.getElementById("drephS").value=dreph;
    // نحسب مجموع النهائي بعد اضافة الضريبة الى مجموع سعر المنتجات
    endsum = Number(sum)+Number(dreph);
    //نضع في سلة المشتريات في خانة مجموع سعر المنتجات مع الضريبة قيمتها بعد حسابه في التعليمة السابقة
    document.getElementById("sum%").value=endsum;
    //نطبق هذه الطريقة على باقي المنتجات التسع
}
            //المنتج الثاني
function khlatprice(){
    khlat=Number(khlat)+Number(document.getElementById("khlat").value);
    document.getElementById("khlatS").value=khlat;
    khlatO++
    document.getElementById("khlatO").value=khlatO;
    sum=sum+Number(document.getElementById("khlat").value);
    document.getElementById("sum").value=sum;
    dreph = (sum*5)/100;
    document.getElementById("drephS").value=dreph;
    endsum = Number(sum)+Number(dreph);
    document.getElementById("sum%").value=endsum;
}
            //المنتج الثالث
function mkefprice(){
    mkef=Number(mkef)+Number(document.getElementById("mkef").value);
    document.getElementById("mkefS").value=mkef;
    mkefO++;
    document.getElementById("mkefO").value=mkefO;
    sum=sum+Number(document.getElementById("mkef").value);
    document.getElementById("sum").value=sum;
    dreph = (sum*5)/100;
    document.getElementById("drephS").value=dreph;
    endsum = Number(sum)+Number(dreph);
    document.getElementById("sum%").value=endsum;
}
function frnprice(){
    frn=Number(frn)+Number(document.getElementById("frn").value);
    document.getElementById("frnS").value=frn;
    frnO++;
    document.getElementById("frnO").value=frnO;
    sum=sum+Number(document.getElementById("frn").value);
    document.getElementById("sum").value=sum;
    dreph = (sum*5)/100;
    document.getElementById("drephS").value=dreph;
    endsum = Number(sum)+Number(dreph);
    document.getElementById("sum%").value=endsum;
}
function shashaprice(){
    shasha=Number(shasha)+Number(document.getElementById("shasha").value);
    document.getElementById("shashaS").value=shasha;
    shashaO++;
    document.getElementById("shashaO").value=shashaO;
    sum=sum+Number(document.getElementById("shasha").value);
    document.getElementById("sum").value=sum;
    dreph = (sum*5)/100;
    document.getElementById("drephS").value=dreph;
    endsum = Number(sum)+Number(dreph);
    document.getElementById("sum%").value=endsum;
}
function raotarprice(){
    raotar=Number(raotar)+Number(document.getElementById("raotar").value);
    document.getElementById("raotarS").value=raotar;
    raotarO++;
    document.getElementById("raotarO").value=raotarO;
    sum=sum+Number(document.getElementById("raotar").value);
    document.getElementById("sum").value=sum;
    dreph = (sum*5)/100;
    document.getElementById("drephS").value=dreph;
    endsum = Number(sum)+Number(dreph);
    document.getElementById("sum%").value=endsum;
}
function ghasalaprice(){
    gassala=Number(gassala)+Number(document.getElementById("gassala").value);
    document.getElementById("gassalaS").value=gassala;
    gassalaO++;
    document.getElementById("gassalaO").value=gassalaO;
    sum=sum+Number(document.getElementById("gassala").value);
    document.getElementById("sum").value=sum;
    dreph = (sum*5)/100;
    document.getElementById("drephS").value=dreph;
    endsum = Number(sum)+Number(dreph);
    document.getElementById("sum%").value=endsum;
}
function mrohaprice(){
    mroha=Number(mroha)+Number(document.getElementById("mroha").value);
    document.getElementById("mrohaS").value=mroha;
    mrohaO++;
    document.getElementById("mrohaO").value=mrohaO;
    sum=sum+Number(document.getElementById("mroha").value);
    document.getElementById("sum").value=sum;
    dreph = (sum*5)/100;
    document.getElementById("drephS").value=dreph;
    endsum = Number(sum)+Number(dreph);
    document.getElementById("sum%").value=endsum;
}
function mdfahaprice(){
    mdfah=Number(mdfah)+Number(document.getElementById("mdfah").value);
    document.getElementById("mdfahS").value=mdfah;
    mdfahO++;
    document.getElementById("mdfahO").value=mdfahO;
    sum=sum+Number(document.getElementById("mdfah").value);
    document.getElementById("sum").value=sum;
    dreph = (sum*5)/100;
    document.getElementById("drephS").value=dreph;
    endsum = Number(sum)+Number(dreph);
    document.getElementById("sum%").value=endsum;
}
    //المنتج العاشر
function shashapcprice(){
    shashapc=Number(shashapc)+Number(document.getElementById("shashapc").value);
    document.getElementById("shashapcS").value=shashapc;
    shashapcO++;
    document.getElementById("shashapcO").value=shashapcO;
    sum=sum+Number(document.getElementById("shashapc").value);
    document.getElementById("sum").value=sum;
    dreph = (sum*5)/100;
    document.getElementById("drephS").value=dreph;
    endsum = Number(sum)+Number(dreph);
    document.getElementById("sum%").value=endsum;
}

dreph = (sum*5)/100;

            //عند الضغط على زر المتابعة في سلة المشتريات تقوم بنقلنا الى الفورم لتعبئة المتطلبات
function movetoform(){
    document.location.href = "#form";
}
                //للتحقق من صحة المدخلا
function validateInput() {
                //تعريف متغيرات ووضع فيها قيم المدخلات
    var name = document.getElementById("name").value;
    var serial = document.getElementById("serial").value;
    var databrith = document.getElementById("databrith").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    
    
    // التحقق من اذا الاسم بالعربي
    if (!/^[\u0621-\u064A ]+$/.test(name)) {
        alert("الرجاء إدخال الاسم باللغة العربية فقط.");
        return false;
    }

    // التحقق من اذا التاريخ من الشكل العام لع وبحيث يأخذ عدد الايام من واحد الى واحد وثلاقين
    //وعدد الاشهر من واحد الى اثنا عشر شهر
    if (!/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(19\d\d|20[01][0-9]|202[0-3])$/.test(databrith)) {
        alert("الرجاء إدخال تاريخ الولادة بالشكل dd/mm/yyyy.");
        return false;
    }
    
    // التحقق من اذا رقم الهاتف يبدا ب صفر بعدها تسعة وبعدها ثمان ارقام 
    if (!/^09\d{8}$/.test(phone)) {
        alert("الرجاء إدخال رقم الهاتف بالشكل 09xxxxxxxx.");
        return false;
    }
    
    // للتحقق من الرقم الوطني الذي يتالف من 11 رقم اول رقمين من 01 الى 14 وبعدها تسع ارقام 
    if (!/(0[1-9]|1[0-4])\d{9}/.test(serial)) {
        alert("الرجاء إدخال الرقم الوطني بالشكل الصحيح.");
        return false;
    }

    // التحقق من اذا الجيميل بالحساب النظامي
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("الرجاء إدخال البريد الإلكتروني بالشكل الصحيح.");
        return false;
    }
    //اذا تحققت جميع المنتجات اظهار تم التحقق من المنتجات وانشاء كاباتشا للتحقق منها
    else{
    alert("تم التحقق من الدخلات بنجاح !! الرجاء كتابه التالي");
    createCaptcha();
    return true;
    }
}

        //طريقة انشاء الكابتشا
function createCaptcha(){
    document.getElementById('captcha').innerHTML = "";
    var charsArray =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
        var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
        if (captcha.indexOf(charsArray[index]) == -1)
            captcha.push(charsArray[index]);
        else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canv);
}
            //طريقة التحقق من الكابتشا 
function validateCaptcha() {
    event.preventDefault();
    debugger
    if (document.getElementById("cpatchaTextBox").value == code) {
        //اذا كانت الكابتشا صحيحة يتم اظهار المجموع النهائي لسعر المنتجات
        alert("تم تأكيد العملية بنجاح والمبلغ الكلي للمنتجات : "+endsum)
    } else {
        // اذا لم تكن صحيح يتم اظهار تحذير وانشاء كابتشا جديدة
        alert("Invalid Captcha. try Again");
        createCaptcha();
    }
}