// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {            
            const div = document.getElementById("container");
            for (let i=0; i<json.length; i++){                
                div.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li id="active${i}">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>                        
                        <img class="avatar" src="${json[i].picture}">
                    </div>
                `;
                console.log(document.getElementById("active"+i));
                if (json[i].active) {
                    document.getElementById("active"+i).style.color="green";
                }
            }
        });
    });
});