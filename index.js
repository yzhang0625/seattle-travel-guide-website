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
                document.getElementById("hotel_1_url").href = displayHotels[1].url;
                document.getElementById("hotel_1_rating_image_url").src = displayHotels[1].rating_img_url;

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
    saveUserClickPlaceTimes(localStorage.getItem("targetPlace"));
    saveUserRecentView(localStorage.getItem("targetPlace"));
    callback(target);
}

function savePlaceDisplay(place) {
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

/**
* Angular-js for Hotel and Food page display
*/
angular.module('myApp', []).controller('namesCtrl', function($scope) {
    var places = [spaceNeedleYelp, pikeMarketYelp, uwYelp, startbucksYelp,
        sanJuanYelp, olympicParkYelp, southLakeUnionYelp, rainierYelp,
        childMuseumYelp, zooYelp, aquariumYelp, flightMuseumYelp,
        artMuseumYelp, paramountTheatreYelp, empYelp, glassMusiumYelp,
        stevenPassYelp, seaPlaneYelp, centuryLinkYelp, huskyStatiumYelp]
    $scope.places = places;
    $scope.displayThreeItems = function (items) {
        shuffle(items);
        return [items[0], items[2], items[3]];
    };
});

/**
 * User profile data local storage logic
 */
function saveUserClickPlaceTimes(place) {
    if (typeof(Storage) !== "undefined") {
        var key = place;
        if (!localStorage.getItem("UserClickEachPlaceTimes")) {
            var obj = {};
            obj[key] = 1;
            localStorage.setItem("UserClickEachPlaceTimes", JSON.stringify(obj));
        } else if (!JSON.parse(localStorage.getItem("UserClickEachPlaceTimes"))[key]){
            var obj = JSON.parse(localStorage.getItem("UserClickEachPlaceTimes"));
            obj[key] = 1;
            localStorage.setItem("UserClickEachPlaceTimes", JSON.stringify(obj));
        } else {
            var obj = JSON.parse(localStorage.getItem("UserClickEachPlaceTimes"));
            obj[key] += 1;
            localStorage.setItem("UserClickEachPlaceTimes", JSON.stringify(obj));
        }
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function saveUserRecentView(place) {
    if (typeof(Storage) !== "undefined") {
        var recentViews = localStorage.getItem("UserRecentViews");
        if (!recentViews) {    // no user view local storage before
            var obj = [];
            obj.unshift(place);
            localStorage.setItem("UserRecentViews", JSON.stringify(obj));
        } else {    // have local storage before
            var obj = JSON.parse(recentViews);

            if (obj.indexOf(place) > -1) {  //place exists in array, remove it
                obj.splice(obj.indexOf(place), 1);
            }

            obj.unshift(place);
            var newArray = [obj[0],obj[1],obj[2]];
            localStorage.setItem("UserRecentViews", JSON.stringify(newArray));
        }
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function reference(place) {
    var target;
    switch (place) {
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
    return target;
}

function loadHomePage() {


    //place you may like
    var userClickTimes = JSON.parse(localStorage.getItem("UserClickEachPlaceTimes"));
    if(userClickTimes) {
        var target = getHighestClick(userClickTimes);
        console.log(target);
        var arr = getSimilarPlaces(target);

        localStorage.setItem("placeYouMayLike", JSON.stringify(arr));

        console.log(arr);
        document.getElementById("like_0").innerHTML = reference(arr[0]).name;
        document.getElementById("like_1").innerHTML = reference(arr[1]).name;
        document.getElementById("like_2").innerHTML = reference(arr[2]).name;

        document.getElementById("likeImage_0").src = reference(arr[0]).image_url;
        document.getElementById("likeImage_1").src = reference(arr[1]).image_url;
        document.getElementById("likeImage_2").src = reference(arr[2]).image_url;

        document.getElementById("like_url_0").href = "place.html";
        document.getElementById("like_url_1").href = "place.html";
        document.getElementById("like_url_2").href = "place.html";

    }


    //recent view places
    var userRecentViews = JSON.parse(localStorage.getItem("UserRecentViews"));
    if (userRecentViews[0] !== null) {
        document.getElementById("recentView_0").innerHTML = reference(userRecentViews[0]).name;
        document.getElementById("recentViewImage_0").src = reference(userRecentViews[0]).image_url;
    }

    if (userRecentViews[1] !== null) {
        document.getElementById("recentView_1").innerHTML = reference(userRecentViews[1]).name;
        document.getElementById("recentViewImage_1").src = reference(userRecentViews[1]).image_url;
    }

    if (userRecentViews[2] !== null) {
        document.getElementById("recentView_2").innerHTML = reference(userRecentViews[2]).name;
        document.getElementById("recentViewImage_2").src = reference(userRecentViews[2]).image_url;
    }

    /*
    document.getElementById("recentView_0").innerHTML = reference(userRecentViews[0]).name;
    document.getElementById("recentView_1").innerHTML = reference(userRecentViews[1]).name;
    document.getElementById("recentView_2").innerHTML = reference(userRecentViews[2]).name;

    document.getElementById("recentViewImage_0").src = reference(userRecentViews[0]).image_url;
    document.getElementById("recentViewImage_1").src = reference(userRecentViews[1]).image_url;
    document.getElementById("recentViewImage_2").src = reference(userRecentViews[2]).image_url;
    */

}

function getSimilarPlaces(place) {
    var types = {
        signature: ["spaceNeedleYelp","pikeMarketYelp","uwYelp","startbucksYelp"],
        outdoors: ["sanJuanYelp","olympicParkYelp","southLakeUnionYelp","rainierYelp"],
        family:["childMuseumYelp","zooYelp","aquariumYelp","flightMuseumYelp"],
        art:["artMuseumYelp","paramountTheatreYelp","empYelp","glassMusiumYelp"],
        game:["stevenPassYelp","seaPlaneYelp","centuryLinkYelp","huskyStatiumYelp"]
    };
    for (var key in types) {
        var arr = types[key];
        if (arr.indexOf(place) > -1) {
            return arr;
        }
    }
}

function getHighestClick(userClickTimes){
    var highestCount = 0;
    var target = "spaceNeedleYelp";
    for(var key in userClickTimes) {
        if (userClickTimes[key] > highestCount) {
            target = key;
            highestCount = userClickTimes[key];
        }
    }
    return target;
}

function onclickPlace(buttonName) {
    var likeArr = JSON.parse(localStorage.getItem("placeYouMayLike"));
    var obj = {
        "like_0": likeArr[0],
        "like_1": likeArr[1],
        "like_2": likeArr[2]
    };
    localStorage.setItem("targetPlace", obj[buttonName]);
    console.log("change local storage to " + obj[buttonName]);

}
