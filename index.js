function loadPlaceInformation() {
    getDisplay(function(target) {
        document.getElementById("name").innerHTML = target.name;
        document.getElementById("intro_name").innerHTML += target.name;
        document.getElementById("introduction").innerHTML = target.introduction;
        document.getElementById("image_url").src = target.image_url;

        document.getElementById("rating").innerHTML += target.rating;
        document.getElementById("rating_img_url").src = target.rating_img_url;

        document.getElementById("user_rating").innerHTML += target.reviews[0].rating;
        document.getElementById("user_rating_image_url").src = target.reviews[0].rating_image_large_url;
        document.getElementById("user_excerpt").innerHTML = target.reviews[0].excerpt;
        document.getElementById("user_name").innerHTML = target.reviews[0].user.name;
        document.getElementById("snippet_image_url").src = target.snippet_image_url;

        document.getElementById("display_address").innerHTML += target.location.display_address;
        document.getElementById("phone").innerHTML += target.display_phone;
        document.getElementById("website_url").innerHTML += target.website_url;

        //TODO add map information
        //TODO add hotel
        //TODO add food
    });
}

function getDisplay(callback) {
    var target;
    switch (localStorage.getItem("targetPlace")) {
        case "spaceNeedleYelp":
            target = spaceNeedleYelp;
            break;
        case "pikeMarketYelp":
            target = pikeMarketYelp;
            break;
        case "uwYelp":
            target = uwYelp;
            break;
        case "startbucksYelp":
            target = startbucksYelp;
            break;
        case "sanJuanYelp":
            target = sanJuanYelp;
            break;
        case "olympicParkYelp":
            target = olympicParkYelp;
            break;
        case "southLakeUnionYelp":
            target = southLakeUnionYelp;
            break;
        case "rainierYelp":
            target = rainierYelp;
            break;
        case "childMuseumYelp":
            target = childMuseumYelp;
            break;
        case "zooYelp":
            target = zooYelp;
            break;
        case "aquariumYelp":
            target = aquariumYelp;
            break;
        case "flightMuseumYelp":
            target = flightMuseumYelp;
            break;
        case "artMuseumYelp":
            target = artMuseumYelp;
            break;
        case "paramountTheatreYelp":
            target = paramountTheatreYelp;
            break;
        case "empYelp":
            target = empYelp;
            break;
        case "glassMusiumYelp":
            target = glassMusiumYelp;
            break;
        case "stevenPassYelp":
            target = stevenPassYelp;
            break;
        case "seaPlaneYelp":
            target = seaPlaneYelp;
            break;
        case "centuryLinkYelp":
            target = centuryLinkYelp;
            break;
        case "huskyStatiumYelp":
            target = huskyStatiumYelp;
            break;
    }
    callback(target);
}

function setDisplay(place) {
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("targetPlace", place);
        console.log("storing user click " + place);
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}


