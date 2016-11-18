function loadPlaceInformation() {
    var target = selectTargetPlace();
    document.getElementById("name").innerHTML = target.name;
    document.getElementById("intro_name").innerHTML += target.name;
    document.getElementById("introduction").innerHTML = target.introduction;
    document.getElementById("rating").innerHTML += target.rating;
    document.getElementById("rating_img_url").src = target.rating_img_url;

    document.getElementById("user_rating").innerHTML += target.reviews[0].rating;
    document.getElementById("user_rating_image_url").src = target.reviews[0].rating_image_large_url;
    document.getElementById("user_excerpt").innerHTML = target.reviews[0].excerpt;
    document.getElementById("snippet_image_url").src = target.snippet_image_url;
    document.getElementById("image_url").src = target.image_url;
    document.getElementById("display_address").innerHTML += target.location.display_address;
    document.getElementById("phone").innerHTML += target.display_phone;
    document.getElementById("website_url").innerHTML += target.website_url;

}

function selectTargetPlace() {
    return spaceNeedle;
}
