
const photos = document.getElementsByClassName("photo");
const details = document.getElementsByClassName("detail");

/* set hover event */
function onHover(photoID, detailID) {

    /* show hidden content */
    const detail = document.getElementById(detailID);
    detail.setAttribute("style", "visibility:visible;");

    /* REFRESH LISTENER */

    const photo = document.getElementById(photoID);
    /* remove old listener */
    photo.removeEventListener("mouseover", onHover);
    /* add new listener */
    photo.addEventListener("mouseout", () => {
        hideDetail(photoID, detailID);
    });

}

/* set hoverable photo details to hidden */
function hideDetail(photoID, detailID) {

    /* hide content again */
    const detail = document.getElementById(detailID);
    detail.setAttribute("style", "visibility:hidden;");

}

/* collect photo details to hide */
for (let i = 0; i < details.length; i++) {
    const photo = photos[i];
    const detail = details[i];

    /* Estabilish id tags */
    const detailID = `detailID${i}`;
    const photoID = `photoID${i}`;
    console.log(i + " & mouseOver listener");

    //add ID to hidden details
    detail.setAttribute('id', detailID)
    photo.setAttribute('id', photoID)

    /* add event listener */
    photo.addEventListener("mouseover", (event) => {
        console.log("mouseOver listener executed");
        onHover(photoID, detailID)
    });

    /* establishing hidden elements */
    hideDetail(photoID, detailID);

};