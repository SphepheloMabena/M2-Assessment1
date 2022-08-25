
console.log("My Name is Sphephelo Mabena and I am working full time as an Android Developer.",
"My Github username is @Sphephelo Mabena"
)


var categories = [
    "Best Consumer Solution",
    "Best Enterprise Solution",
    "Best African Solution",
    "Most Innovative Solution",
    "Best Gaming Solution",
    "Best Health Solution",
    "Best Agricultural Solution",
    "Best Educational Solution",
    "Best Financial Solution",
    "Best Hackathon Solution",
    "Best South African Solution",
    "Best Campus Cup Solution",
    "Huawei AppGallery Category 15"
]
const winner = document.getElementById("winner")
function getWinningCategory(){

    var randomNumber = Math.random() *100
    var categoryNumber = Math.floor(randomNumber) 

    if(randomNumber > 13 ) {
        getWinningCategory()
    } else {
        winner.textContent = "Winning Category: "+ categories[categoryNumber]
    }
}
async function loadData(){
    const url = "text.txt"
let response = await fetch(url);

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  response.text().then((responseData) => {
    console.log(responseData);
    
  })
} else {
  alert("HTTP-Error: " + response.status);
}

}

loadData()


