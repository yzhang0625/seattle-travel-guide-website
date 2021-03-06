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

                document.getElementById("gmap_canvas").innerHTML = target.gmap_canvas;

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

    showspaceneedle = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'block';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';
    }

    showpikeplacemarket = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'block';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showuw = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'block';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showstarbucks = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'block';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showsanjuanisland = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'block';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showlakeunion = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'block';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showmountrainier = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'block';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showseattlechildrenmuseum = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'block';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showwoodlandparkzoo = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'block';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showseattleaquarium = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'block';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showthemuseumofflight = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'block';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showseattleartmuseum = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'block';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showparamounttheatre = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'block';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showempmuseum = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'block';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showchihulygardenandglass = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'block';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showstevenspassskykomish = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'block';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showseattleseaplanes = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'block';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showcenturylinkfield = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'block';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'none';

    }

    showhuskystadium = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'block';
        olympicnationalpark.style.display = 'none';

    }

    showolympicnationalpark = function() {
        var spaceneedle = document.getElementById('space-needle-seattle');
        var pikeplacemarket = document.getElementById('pike-place-market-seattle');
        var uw = document.getElementById('university-of-washington-seattle-8');
        var starbucks = document.getElementById('starbucks-seattle-88');
        var sanjuanisland = document.getElementById('san-juan-island-friday-harbor-2');
        var lakeunion = document.getElementById('lake-union-seattle');
        var mountrainier = document.getElementById('mount-rainier-national-park-ashford');
        var seattlechildrensmuseum = document.getElementById('seattle-childrens-museum-seattle-2');
        var woodlandparkzoo = document.getElementById('woodland-park-zoo-seattle-4');
        var seattleaquarium = document.getElementById('seattle-aquarium-seattle');
        var themuseumofflight = document.getElementById('the-museum-of-flight-seattle');
        var seattleartmuseum = document.getElementById('seattle-art-museum-seattle');
        var paramounttheatre = document.getElementById('paramount-theatre-seattle');
        var empmuseum = document.getElementById('emp-museum-seattle-3');
        var chihulygardenandglass = document.getElementById('chihuly-garden-and-glass-seattle-2');
        var stevenspassskykomish = document.getElementById('stevens-pass-skykomish');
        var seattleseaplanes = document.getElementById('seattle-seaplanes-seattle');
        var centurylinkfield = document.getElementById('centurylink-field-seattle-3');
        var huskystadium = document.getElementById('husky-stadium-seattle');
        var olympicnationalpark = document.getElementById('olympic-national-park-port-angeles');

        spaceneedle.style.display = 'none';
        pikeplacemarket.style.display = 'none';
        uw.style.display = 'none';
        starbucks.style.display = 'none';
        sanjuanisland.style.display = 'none';
        lakeunion.style.display = 'none';
        mountrainier.style.display = 'none';
        seattlechildrensmuseum.style.display = 'none';
        woodlandparkzoo.style.display = 'none';
        seattleaquarium.style.display = 'none';
        themuseumofflight.style.display = 'none';
        seattleartmuseum.style.display = 'none';
        paramounttheatre.style.display = 'none';
        empmuseum.style.display = 'none';
        chihulygardenandglass.style.display = 'none';
        stevenspassskykomish.style.display = 'none';
        seattleseaplanes.style.display = 'none';
        centurylinkfield.style.display = 'none';
        huskystadium.style.display = 'none';
        olympicnationalpark.style.display = 'block';

    }


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

            var obj = obj.length > 3? [obj[0],obj[1],obj[2]] : obj;
            localStorage.setItem("UserRecentViews", JSON.stringify(obj));
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
        var arr = getSimilarPlaces(target);
        shuffle(arr);
        localStorage.setItem("placeYouMayLike", JSON.stringify(arr));

        document.getElementById("like_0").innerHTML = reference(arr[0]).name;
        document.getElementById("like_1").innerHTML = reference(arr[1]).name;
        document.getElementById("like_2").innerHTML = reference(arr[2]).name;

        document.getElementById("likeImage_0").src = reference(arr[0]).image_url;
        document.getElementById("likeImage_1").src = reference(arr[1]).image_url;
        document.getElementById("likeImage_2").src = reference(arr[2]).image_url;

        document.getElementById("like_url_0").href = "place.html";
        document.getElementById("like_url_1").href = "place.html";
        document.getElementById("like_url_2").href = "place.html";

    } else {
        var arr = ["spaceNeedleYelp","pikeMarketYelp","uwYelp","startbucksYelp"];
        shuffle(arr);
        localStorage.setItem("placeYouMayLike", JSON.stringify(arr));

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
    if (!localStorage.getItem("UserRecentViews")) {
        document.getElementById("recentViewPanel").style.display = "none";
        document.getElementById("recentViewTitle").style.display = "none";
    } else if (userRecentViews.length < 3) {
        document.getElementById("recentViewPanel").style.display = "none";
        document.getElementById("recentViewTitle").style.display = "none";
    } else {
        document.getElementById("recentView_0").innerHTML = reference(userRecentViews[0]).name;
        document.getElementById("recentViewImage_0").src = reference(userRecentViews[0]).image_url;
        document.getElementById("view_0").href = "place.html";

        document.getElementById("recentView_1").innerHTML = reference(userRecentViews[1]).name;
        document.getElementById("recentViewImage_1").src = reference(userRecentViews[1]).image_url;
        document.getElementById("view_1").href = "place.html";

        document.getElementById("recentView_2").innerHTML = reference(userRecentViews[2]).name;
        document.getElementById("recentViewImage_2").src = reference(userRecentViews[2]).image_url;
        document.getElementById("view_2").href = "place.html";
    }
    /*
    if (userRecentViews[0] !== null) {
        document.getElementById("recentView_0").innerHTML = reference(userRecentViews[0]).name;
        document.getElementById("recentViewImage_0").src = reference(userRecentViews[0]).image_url;
        document.getElementById("view_0").href = "place.html";
    }

    if (userRecentViews[1] !== null) {
        document.getElementById("recentView_1").innerHTML = reference(userRecentViews[1]).name;
        document.getElementById("recentViewImage_1").src = reference(userRecentViews[1]).image_url;
        document.getElementById("view_1").href = "place.html";
    }

    if (userRecentViews[2] !== null) {
        document.getElementById("recentView_2").innerHTML = reference(userRecentViews[2]).name;
        document.getElementById("recentViewImage_2").src = reference(userRecentViews[2]).image_url;
        document.getElementById("view_2").href = "place.html";
    }
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
    var recentViews = JSON.parse(localStorage.getItem("UserRecentViews"));
    var obj = {
        "like_0": likeArr[0],
        "like_1": likeArr[1],
        "like_2": likeArr[2],
        "view_0": recentViews[0],
        "view_1": recentViews[1],
        "view_2": recentViews[2]
    };
    localStorage.setItem("targetPlace", obj[buttonName]);
    console.log("change local storage to " + obj[buttonName]);

}

function isSummer() {
    var d = new Date();
    var month = d.getMonth();
    if (month > 3 && month < 10)  {
        return true;
    } else {
        return false;
    }
}


/* Nan for Transporation page */

function formselected() {
    var checkedValue = $('.option:checked').val();
    var checkedValueId = "#" + checkedValue
    $("html, body").delay(100).animate({scrollTop: $(checkedValueId).offset().top - 250 }, 1000);

    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("role", checkedValue);
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function pageOnload() {
    setTimeout(function () {
        if ($(document).scrollTop() !== 0) $("html, body").animate({scrollTop: 0}, 'fast');

    }, 300);

    var role_intent = localStorage.getItem("role");
    var sectionSelector = "#" + role_intent;
    var container = $("body").find(sectionSelector)
    $('.main_content').prepend(container);
}
