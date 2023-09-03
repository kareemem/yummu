$(document).ready(function () {
    $('.loading').slideUp(1500 ,function(){
        $("body").css("overflow", "visible")
    $(".loading").css("display", "none")
    })
    
});



let openNav = document.querySelector("#openNav");
let closeNav = document.querySelector("#closeNav");


$("#openNav").click(function () {
    $(".navOpen").animate({ left: "22vh" }, function () {});
    $(".slideBar").animate({ width: "22vh" }, function () {
        $(".list").slideDown(1000);
        $(".navFooter").slideDown(1000);
    });
    openNav.style = "display:none";
    closeNav.style = "display:block";
});

$("#closeNav").click(function () {
    $(".navOpen").animate({ left: "0" }, function () {
        $(".list").slideUp(1000);
        $(".navFooter").slideUp(1000);
    });
    $(".slideBar").animate({ width: "0" });
    closeNav.style = "display:none";
    openNav.style = "display:block";
});

// ################################3
async function displayMeal() {
    let apiResponse = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    let finalResult = await apiResponse.json();
    let x = finalResult.meals[0].strMealThumb;
    let cartona = ``;
    console.log(x);
    for (let i = 0; i < finalResult.meals.length; i++) {
        cartona += `
        <div class="col-lg-3 p-4 home">
        <div class="contentHome position-relative pointer">
            <img  class="w-100" src="${finalResult.meals[i].strMealThumb}" alt="">
            <div onclick="showMeals('${finalResult.meals[i].strMeal}')"  class="goShowMeals imgText  d-flex align-items-center p-2">
                <h3>${finalResult.meals[i].strMeal}</h3>
            </div>
        </div>
    </div>        
        `;
    }
    document.getElementById("displayEate").innerHTML = cartona;
}
displayMeal();







async function showMeals(goWeb) {
    let apiResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${goWeb}`
    );
    let finalResult = await apiResponse.json();
    let boxing = ``;
    for (let i = 0; i < finalResult.meals.length; i++) {
        boxing += `
        <div class="col-lg-6 showMeals ">
            <img class="w-100" src="${finalResult.meals[i].strMealThumb}" alt="">
            <h2 class="bold">${finalResult.meals[i].strMeal}</h2>
        </div>
        <div class="col-lg-6 contentRecipe">
            <h2 class="bold">Instructions</h2>
            <p class='text-white'>${finalResult.meals[i].strInstructions}</p>
            <p class="bold">Area : ${finalResult.meals[i].strArea} </p>
            <p class="bold">Category :  ${finalResult.meals[i].strCategory}</p>
            <p class="bold">Recipes :</p>
            <span>${finalResult.meals[i].strMeasure1}${finalResult.meals[i].strIngredient1}</span>
            <span>${finalResult.meals[i].strMeasure2}${finalResult.meals[i].strIngredient2}</span>
            <span>${finalResult.meals[i].strMeasure3}${finalResult.meals[i].strIngredient3}</span>
            <span>${finalResult.meals[i].strMeasure4}${finalResult.meals[i].strIngredient4}</span>
            <span>${finalResult.meals[i].strMeasure5}${finalResult.meals[i].strIngredient5}</span>
            <span>${finalResult.meals[i].strMeasure6}${finalResult.meals[i].strIngredient6}</span>
            <p class="bold">tags :</p>
            <p class="contentTag"> ${finalResult.meals[i].strTags}</p>
            <a class="src p-2" href="${finalResult.meals[i].strSource}">Src</a>
            <a class="youtube p-2" href="${finalResult.meals[i].strYoutube}">youtube</a>
        </div>
        `;
        document.querySelector(".row").innerHTML = boxing;
    }
}

// search


let searchPage=document.querySelector('#searchUrl')

searchPage.addEventListener('click' , function(){
    displaySearchPage()
    
    function showSearch(){
            
    let searchName=document.querySelector('#searchName')
    let searchByLetter=document.querySelector('#searchByLetter')




    async function display(){
        let apiResponse= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName.value ||searchByLetter.value}`)
        let finalResult =await apiResponse.json()
        let x=finalResult.meals[0].strMealThumb
        let trs=``;
        console.log(x)
        for(let i=0 ; i<finalResult.meals.length ;i++){

            trs+=`
            <div class="col-lg-3 p-4  ">
            <div class="contentHome position-relative pointer">
                <img  class="w-100" src="${finalResult.meals[i].strMealThumb}" alt="">
                <div onclick="showMeals('${finalResult.meals[i].strMeal}')" class="inputText d-flex align-items-center p-2">
                    <h3>${finalResult.meals[i].strMeal}</h3>
                </div>
            </div>
        </div>        
            `
        }
        document.querySelector('.row').innerHTML=trs;
    }
    $('input').keyup(function () { 



        display()

        });

        
        }
        showSearch()
    })  



function displaySearchPage(){
    document.querySelector('header').innerHTML=`<div class="search text-center my-5">
    <input class="w-25 p-1  bg-transparent d-inline-block mx-2" type="text" placeholder=" Search By Name"  id="searchName">
    <input class="w-25 p-1  bg-transparent d-inline-block" type="text" placeholder=" Search By First Letter"  maxlength="1" id="searchByLetter">
</div>
<div class="container-lg my-5 py-5">
    <div class="row  d-flex justify-content-center" >

    </div>
</div>`


}




//ingredients



function displayIngredientsPage(){
    document.querySelector('header').innerHTML=`
    <div class="container-lg my-5 py-5">
            <div class="row   d-flex justify-content-center" >
    
            </div>
        </div>`


}



let ingredientsPage=document.querySelector('#ingredientsUrl')

ingredientsPage.addEventListener('click' , function(){
    displayIngredientsPage()
    
    function ingredientsSearch(){
            




    async function displayIngredients(){
        let apiResponse= await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        let finalResult =await apiResponse.json()
        let boxing=``;
        for(let i=0 ; i<20 ;i++){
            
            boxing+=`
            <div class="col-lg-3  p-4 text-white">
                <div  onclick="showIngredients('${finalResult.meals[i].strIngredient}')" class="ingredients  rounded-2 text-center ">
                <i class="fa-solid fa-drumstick-bite"></i>
                <h3>${finalResult.meals[i].strIngredient}</h3>
                <p>${finalResult.meals[i].strDescription}</p>
                </div>
            </div>        
            `
    
        }
        document.querySelector('.row').innerHTML=boxing;
    }



    displayIngredients()


        
        }
        ingredientsSearch()
    })  



async function showIngredients(goWeb) {
    let apiResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${goWeb}`
    );
    let finalResult = await apiResponse.json();
    let boxing = ``;
    for (let i = 0; i < finalResult.meals.length; i++) {
        boxing += `
        <div class="col-lg-3 p-4 home">
        <div onclick="showMeals('${finalResult.meals[i].strMeal}')" class="contentHome position-relative pointer">
            <img  class="w-100" src="${finalResult.meals[i].strMealThumb}" alt="">
            <div  class="goShowMeals imgText  d-flex align-items-center p-2">
                <h3>${finalResult.meals[i].strMeal}</h3>
            </div>
        </div>
    </div>        
        `;
        document.querySelector(".row").innerHTML = boxing;
    }
}


// categories


function displayCategoriesPage(){
    document.querySelector('header').innerHTML=`
    <div class="container-lg my-5 py-5">
        <div class="row  d-flex justify-content-center" >

        </div>
    </div>`


}



let categoriesPage=document.querySelector('#categoriesUrl')

categoriesPage.addEventListener('click' , function(){
    displayCategoriesPage()
    
    function categoriesSearch(){
            




    async function displayCategoriesPage(){
        let apiResponse= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        let finalResult =await apiResponse.json()
        let boxing=``;
        for(let i=0 ; i<finalResult.categories.length ;i++){
            
            boxing+=`
            <div class="col-lg-3 p-4">
            <div  onclick="showCategories('${finalResult.categories[i].strCategory}')" class=" pointer contentCategories position-relative">
                <img  class="w-100" src="${finalResult.categories[i].strCategoryThumb}" alt="">
                <div class="categoriesText text-center p-1">
                    <h3>${finalResult.categories[i].strCategory}</h3>
                    <p>${finalResult.categories[i].strCategoryDescription}</p>
                </div>
            </div>
        </div>        
            `
    
        }
        document.querySelector('.row').innerHTML=boxing;
    }



    displayCategoriesPage()


        
        }
        categoriesSearch()
    })  



async function showCategories(goWeb) {
    let apiResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${goWeb}`
    );
    let finalResult = await apiResponse.json();
    let boxing = ``;
    for (let i = 0; i < finalResult.meals.length; i++) {
        boxing += `
        <div class="col-lg-3 p-4 home">
        <div onclick="showMeals('${finalResult.meals[i].strMeal}')" class="contentHome position-relative pointer">
            <img  class="w-100" src="${finalResult.meals[i].strMealThumb}" alt="">
            <div  class="goShowMeals imgText  d-flex align-items-center p-2">
                <h3>${finalResult.meals[i].strMeal}</h3>
            </div>
        </div>
    </div>        
        `;
        document.querySelector(".row").innerHTML = boxing;
    }
}





// area



function displayAreaPage(){
    document.querySelector('header').innerHTML=`
    <div class="container-lg my-5 py-5">
    <div class="row  d-flex justify-content-center" >
        
    </div>
    </div>
    `


}



let areaPage=document.querySelector('#areaUrl')

areaPage.addEventListener('click' , function(){
    displayAreaPage()
    
    function areaSearch(){
            




    async function displayAreaPage(){
        let apiResponse= await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        let finalResult =await apiResponse.json()
        let boxing=``;
        for(let i=0 ; i<finalResult.meals.length ;i++){
            
            boxing+=`
            <div class="col-lg-3 p-4 text-white">
            <div onclick="showArea('${finalResult.meals[i].strArea}')" class="area text-center">
                <i class="fa-solid fa-house-laptop"></i>
                <h3>${finalResult.meals[i].strArea}</h3>
            </div>
        </div>      
            `
    
        }
        document.querySelector('.row').innerHTML=boxing;
    }



    displayAreaPage()


        
        }
        areaSearch()
    })  



async function showArea(goWeb) {
    let apiResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${goWeb}`
    );
    let finalResult = await apiResponse.json();
    let boxing = ``;
    for (let i=0 ; i<finalResult.meals.length ;i++) {
        boxing += `
        <div class="col-lg-3 p-4 home">
        <div onclick="showMeals('${finalResult.meals[i].strMeal}')" class="contentHome position-relative pointer">
            <img  class="w-100" src="${finalResult.meals[i].strMealThumb}" alt="">
            <div  class="goShowMeals imgText  d-flex align-items-center p-2">
                <h3>${finalResult.meals[i].strMeal}</h3>
            </div>
        </div>
    </div>        
        `;
        document.querySelector(".row").innerHTML = boxing;
    }
}

// contact

function displayContactPage(){
    document.querySelector('header').innerHTML=`
    <div class="d-flex contctHeader justify-content-center align-items-center">
    <div class="container-lg py-5">
        <div class="row g-5">
            <div class="col-lg-6">
                <input class="form-control p-2" type="text" id="yourName" placeholder=" Enter Your Name">
                <div id="nameAlert" class="bg-danger p-2 w-100 mt-2 rounded-2 text-white d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-lg-6">
                <input class="form-control p-2" type="email" id="yourEmail" placeholder=" Enter Your Email">
                <div id="emailAlert" class="bg-danger p-2 w-100 mt-2 rounded-2 text-white d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-lg-6">
                <input class="form-control p-2" type="tel" maxlength="11"  id="phoneNumber" placeholder=" Enter Your Phone">
                <div id="phoneAlert" class="bg-danger p-2 w-100 mt-2 rounded-2 text-white d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-lg-6">
                <input class="form-control p-2" type="number" id="yourAge" placeholder=" Enter Your Age">
                <div id="ageAlert" class="bg-danger p-2 w-100 mt-2 rounded-2 text-white d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-lg-6">
                <input class="form-control p-2" type="password" id="password" placeholder=" Enter Your Password">
                <div id="passwordAlert" class="bg-danger p-2 w-100 mt-2 rounded-2 text-white d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-lg-6">
                <input class="form-control p-2" type="password" id="rePassword" placeholder=" Repassword">
                <div id="repasswordAlert" class="bg-danger p-2 w-100 mt-2 rounded-2 text-white d-none">
                    Enter valid repassword 
                </div>
            </div>
            <div class="col-12 text-center">
                <button disabled class="btn contactBtn btn-outline-danger">Submit</button>
            </div>
        </div>
    </div>
</div>
    `


}



let contactPage=document.querySelector('#contactUrl')

contactPage.addEventListener('click' , function(){
    displayContactPage()
    function showContact(){
        let yourName=document.querySelector('#yourName')
let yourEmail=document.querySelector('#yourEmail')
let phoneNumber=document.querySelector('#phoneNumber')
let yourAge=document.querySelector('#yourAge')
let password=document.querySelector('#password')
let rePassword=document.querySelector('#rePassword')
let contactBtn=document.querySelector('.contactBtn')



function valditeName(){
    let regexName=/^[a-zA-Z ]+$/
    return regexName.test(yourName.value)
}

function valditeEmail(){
    let regexEmail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regexEmail.test(yourEmail.value)
}


function valditePhone(){
    let regexPhone=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    return regexPhone.test(phoneNumber.value)
}

function valditeAge(){
    let regexAge=/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/
    return regexAge.test(yourAge.value)
}

function valditePass(){
    let regexPass=/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/
    return regexPass.test(password.value)
}



function displayButton(){
    if(valditeName() && valditeAge() && valditeEmail() && valditePass() && valditePhone() && (password.value==rePassword.value) ==true  ){

        contactBtn.removeAttribute("disabled")

    }else{
        contactBtn.setAttribute("disabled" , true)

    }
}

document.addEventListener('mousemove',function(){
displayButton()

})









yourName.addEventListener('input',function(){
    if(valditeName()==true){
        document.getElementById("nameAlert").classList.replace("d-block", "d-none")
    }else{
        document.getElementById("nameAlert").classList.replace("d-none", "d-block")

    }
})

yourEmail.addEventListener('input',function(){
    if(valditeEmail()==true){
        document.getElementById("emailAlert").classList.replace("d-block", "d-none")
    }else{
        document.getElementById("emailAlert").classList.replace("d-none", "d-block")

    }
})
phoneNumber.addEventListener('input',function(){
    if(valditePhone()==true){
        document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
    }else{
        document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

    }
})
yourAge.addEventListener('input',function(){
    if(valditeAge()==true){
        document.getElementById("ageAlert").classList.replace("d-block", "d-none")
    }else{
        document.getElementById("ageAlert").classList.replace("d-none", "d-block")

    }
})
password.addEventListener('input',function(){
    if(valditePass()==true){
        document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
    }else{
        document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

    }
})
rePassword.addEventListener('input',function(){
    if(password.value == rePassword.value){
        document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
    }else{
        document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

    }
})

    }
    showContact()
})



