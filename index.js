function loadPlaceInformation() {

    getDisplay(function(target) {
        var allHotels = target.hotel.businesses;
        var allFoods = target.food.businesses;

        getDisplayItems(allHotels , function(displayHotels) {
            getDisplayItems(allFoods, function(displayFoods) {

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

                document.getElementById("hotelName0").innerHTML = displayHotels[0].name;
                document.getElementById("hotel_0_image_url").src = displayHotels[0].image_url;
                document.getElementById("hotel_0_url").href = displayHotels[0].url;
                document.getElementById("hotel_0_rating_image_url").src = displayHotels[0].rating_img_url;

                document.getElementById("hotelName1").innerHTML = displayHotels[1].name;
                document.getElementById("hotel_1_image_url").src = displayHotels[1].image_url;
                document.getElementById("hotel_1_url").href = displayHotels[0].url;
                document.getElementById("hotel_1_rating_image_url").src = displayHotels[0].rating_img_url;

                document.getElementById("hotelName2").innerHTML = displayHotels[2].name;
                document.getElementById("hotel_2_image_url").src = displayHotels[2].image_url;
                document.getElementById("hotel_2_url").href = displayHotels[2].url;
                document.getElementById("hotel_2_rating_image_url").src = displayHotels[2].rating_img_url;

                document.getElementById("foodName0").innerHTML = displayFoods[0].name;
                document.getElementById("food_0_image_url").src = displayFoods[0].image_url;
                document.getElementById("food_0_url").href = displayFoods[0].url;
                document.getElementById("food_0_rating_image_url").src = displayFoods[0].rating_img_url;

                document.getElementById("foodName1").innerHTML = displayFoods[1].name;
                document.getElementById("food_1_image_url").src = displayFoods[1].image_url;
                document.getElementById("food_1_url").href = displayFoods[1].url;
                document.getElementById("food_1_rating_image_url").src = displayFoods[1].rating_img_url;

                document.getElementById("foodName2").innerHTML = displayFoods[2].name;
                document.getElementById("food_2_image_url").src = displayFoods[2].image_url;
                document.getElementById("food_2_url").href = displayFoods[2].url;
                document.getElementById("food_2_rating_image_url").src = displayFoods[2].rating_img_url;

                //TODO add map information

            });
        });
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

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function getDisplayItems(items, callback) {
    shuffle(items);
    callback([items[0],items[1],items[2]]);
}

