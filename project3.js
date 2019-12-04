var fullfirst = 0;
var fullsecond = 0;
var fullthird = 0;
var fullfourth = 0;
var fullfifth = 0;
var fullsixth = 0;
var log = document.getElementById("logbox");
//FIRST ROOM FIRST ROOM FIRST ROOM FIRST ROOM FIRST ROOM FIRST ROOM FIRST ROOM FIRST ROOM FIRST ROOM FIRST ROOM FIRST ROOM FIRST ROOM
function addName1() {
    //Getting the Time
    var checkintime = new Date();
    var day = checkintime.getDay();
    var hour = checkintime.getHours();
    var minute = checkintime.getMinutes();
    var second = checkintime.getSeconds();
    //Day # to Day Name
    if (day == 0) {
        day = "Sunday"
    }
    else if (day == 1) {
        day = "Monday"
    }
    else if (day == 2) {
        day = "Tuesday"
    }
    else if (day == 3) {
        day = "Wednesday"
    }
    else if (day == 4) {
        day = "Thursday"
    }
    else if (day == 5) {
        day = "Friday"
    }
    else if (day == 6) {
        day = "Saturday"
    }
    var totaltime = day + " " + hour + ":" + minute + ":" + second;
    //Adding stuff
    var newlist1 = document.createElement("li");
    newlist1.className = "li1";
    var newtext1 = document.createTextNode(document.getElementById("addPerson1").value + " " + totaltime);
    newlist1.appendChild(newtext1);
    var position1 = document.getElementById("ol1");
    if (document.getElementById("addPerson1").value == "") {
        return;
    }
    //Max out at 4 people
    if (fullfirst > 3) {
        var stop1 = document.getElementById("stop1").innerHTML = "Room is full";
        return;
    } 
    //Adding into the total people box
    var totalpeople1 = document.createElement("li");
    var newtext1 = document.createTextNode(document.getElementById("addPerson1").value + " " + totaltime);
    totalpeople1.appendChild(newtext1);
    log.appendChild(totalpeople1);

    position1.appendChild(newlist1);
    document.getElementById("addPerson1").value = "";
    fullfirst++
}
function removeName1() {
    var removelist1 = document.getElementById("removePerson1").value;
    var getchild1 = document.getElementsByClassName("li1")[removelist1 - 1];
    var getparent1 = getchild1.parentNode;
    getparent1.removeChild(getchild1);
    document.getElementById("removePerson1").value = "";
    fullfirst--
    //If less than 4 people take out "Room is full"
    if (fullfirst < 4) {
        var stop1 = document.getElementById("stop1").innerHTML = "";
        return;
    }
}
function disableRoom1() {
    document.getElementById("addPerson1").disabled = true;
    document.getElementById("addPerson1").value = "";
}
function undisableRoom1() {
    document.getElementById("addPerson1").disabled = false;
}
function removeAll1() {
    fullfirst = 0;
    document.getElementById("ol1").innerHTML = "";
    document.getElementById("stop1").innerHTML = "";
}
//
//
//
//
//SECOND ROOM SECOND ROOM SECOND ROOM SECOND ROOM SECOND ROOM SECOND ROOM SECOND ROOM SECOND ROOM SECOND ROOM SECOND ROOM SECOND ROOM SECOND ROOM
function addName2() {
    var checkintime = new Date();
    var day = checkintime.getDay();
    var hour = checkintime.getHours();
    var minute = checkintime.getMinutes();
    var second = checkintime.getSeconds();
    if (day == 0) {
        day = "Sunday"
    }
    else if (day == 1) {
        day = "Monday"
    }
    else if (day == 2) {
        day = "Tuesday"
    }
    else if (day == 3) {
        day = "Wednesday"
    }
    else if (day == 4) {
        day = "Thursday"
    }
    else if (day == 5) {
        day = "Friday"
    }
    else if (day == 6) {
        day = "Saturday"
    }
    var totaltime = day + " " + hour + ":" + minute + ":" + second;
    var newlist2 = document.createElement("li");
    newlist2.className = "li2";
    var newtext2 = document.createTextNode(document.getElementById("addPerson2").value + " " + totaltime);
    newlist2.appendChild(newtext2);
    var position2 = document.getElementById("ol2");
    if (document.getElementById("addPerson2").value == "") {
        return;
    }
    if (fullsecond > 3) {
        var stop2 = document.getElementById("stop2").innerHTML = "Room is full";
        return;
    }
    var totalpeople2 = document.createElement("li");
    var newtext2 = document.createTextNode(document.getElementById("addPerson2").value + " " + totaltime);
    totalpeople2.appendChild(newtext2);
    log.appendChild(totalpeople2);
    position2.appendChild(newlist2);
    document.getElementById("addPerson2").value = "";
    fullsecond++
}
function removeName2() {
    var removelist2 = document.getElementById("removePerson2").value;
    var getchild2 = document.getElementsByClassName("li2")[removelist2 - 1];
    var getparent2 = getchild2.parentNode;
    getparent2.removeChild(getchild2);
    document.getElementById("removePerson2").value = "";
    fullsecond--
    if (fullsecond < 4) {
        var stop2 = document.getElementById("stop2").innerHTML = "";
        return;
    }
}
function disableRoom2() {
    document.getElementById("addPerson2").disabled = true;
    document.getElementById("addPerson2").value = "";
}
function undisableRoom2() {
    document.getElementById("addPerson2").disabled = false;
}
function removeAll2() {
    fullsecond = 0;
    document.getElementById("ol2").innerHTML = "";
    document.getElementById("stop2").innerHTML = "";
}
//
//
//
//
//THIRD ROOM THIRD ROOM THIRD ROOM THIRD ROOM THIRD ROOM THIRD ROOM THIRD ROOM THIRD ROOM THIRD ROOM THIRD ROOM THIRD ROOM THIRD ROOM
function addName3() {
    var checkintime = new Date();
    var day = checkintime.getDay();
    var hour = checkintime.getHours();
    var minute = checkintime.getMinutes();
    var second = checkintime.getSeconds();
    if (day == 0) {
        day = "Sunday"
    }
    else if (day == 1) {
        day = "Monday"
    }
    else if (day == 2) {
        day = "Tuesday"
    }
    else if (day == 3) {
        day = "Wednesday"
    }
    else if (day == 4) {
        day = "Thursday"
    }
    else if (day == 5) {
        day = "Friday"
    }
    else if (day == 6) {
        day = "Saturday"
    }
    var totaltime = day + " " + hour + ":" + minute + ":" + second;
    var newlist3 = document.createElement("li");
    newlist3.className = "li3";
    var newtext3 = document.createTextNode(document.getElementById("addPerson3").value + " " + totaltime);
    newlist3.appendChild(newtext3);
    var position3 = document.getElementById("ol3");
    if (document.getElementById("addPerson3").value == "") {
        return;
    }
    if (fullthird > 3) {
        var stop3 = document.getElementById("stop3").innerHTML = "Room is full";
        return;
    }
    var totalpeople3 = document.createElement("li");
    var newtext3 = document.createTextNode(document.getElementById("addPerson3").value + " " + totaltime);
    totalpeople3.appendChild(newtext3);
    log.appendChild(totalpeople3);
    position3.appendChild(newlist3);
    document.getElementById("addPerson3").value = "";
    fullthird++
}
function removeName3() {
    var removelist3 = document.getElementById("removePerson3").value;
    var getchild3 = document.getElementsByClassName("li3")[removelist3 - 1];
    var getparent3 = getchild3.parentNode;
    getparent3.removeChild(getchild3);
    document.getElementById("removePerson3").value = "";
    fullthird--
    if (fullthird < 4) {
        var stop3 = document.getElementById("stop3").innerHTML = "";
        return;
    }
}
function disableRoom3() {
    document.getElementById("addPerson3").disabled = true;
    document.getElementById("addPerson3").value = "";
}
function undisableRoom3() {
    document.getElementById("addPerson3").disabled = false;
}
function removeAll3() {
    fullthird = 0;
    document.getElementById("ol3").innerHTML = "";
    document.getElementById("stop3").innerHTML = "";
}
//
//
//
//
//FOURTH ROOM FOURTH ROOM FOURTH ROOM FOURTH ROOM FOURTH ROOM FOURTH ROOM FOURTH ROOM FOURTH ROOM FOURTH ROOM FOURTH ROOM FOURTH ROOM FOURTH ROOM
function addName4() {
    var checkintime = new Date();
    var day = checkintime.getDay();
    var hour = checkintime.getHours();
    var minute = checkintime.getMinutes();
    var second = checkintime.getSeconds();
    if (day == 0) {
        day = "Sunday"
    }
    else if (day == 1) {
        day = "Monday"
    }
    else if (day == 2) {
        day = "Tuesday"
    }
    else if (day == 3) {
        day = "Wednesday"
    }
    else if (day == 4) {
        day = "Thursday"
    }
    else if (day == 5) {
        day = "Friday"
    }
    else if (day == 6) {
        day = "Saturday"
    }
    var totaltime = day + " " + hour + ":" + minute + ":" + second;
    var newlist4 = document.createElement("li");
    newlist4.className = "li4";
    var newtext4 = document.createTextNode(document.getElementById("addPerson4").value + " " + totaltime);
    newlist4.appendChild(newtext4);
    var position4 = document.getElementById("ol4");
    if (document.getElementById("addPerson4").value == "") {
        return;
    }
    if (fullfourth > 3) {
        var stop4 = document.getElementById("stop4").innerHTML = "Room is full";
        return;
    }
    var totalpeople4 = document.createElement("li");
    var newtext4 = document.createTextNode(document.getElementById("addPerson4").value + " " + totaltime);
    totalpeople4.appendChild(newtext4);
    log.appendChild(totalpeople4);
    position4.appendChild(newlist4);
    document.getElementById("addPerson4").value = "";
    fullfourth++
}
function removeName4() {
    var removelist4 = document.getElementById("removePerson4").value;
    var getchild4 = document.getElementsByClassName("li4")[removelist4 - 1];
    var getparent4 = getchild4.parentNode;
    getparent4.removeChild(getchild4);
    document.getElementById("removePerson4").value = "";
    fullfourth--
    if (fullfourth < 4) {
        var stop4 = document.getElementById("stop4").innerHTML = "";
        return;
    }
}
function disableRoom4() {
    document.getElementById("addPerson4").disabled = true;
    document.getElementById("addPerson4").value = "";
}
function undisableRoom4() {
    document.getElementById("addPerson4").disabled = false;
}
function removeAll4() {
    fullfourth = 0;
    document.getElementById("ol4").innerHTML = "";
    document.getElementById("stop4").innerHTML = "";
}
//
//
//
//
//FIFTH ROOM FIFTH ROOM FIFTH ROOM FIFTH ROOM FIFTH ROOM FIFTH ROOM FIFTH ROOM FIFTH ROOM FIFTH ROOM FIFTH ROOM FIFTH ROOM FIFTH ROOM
function addName5() {
    var checkintime = new Date();
    var day = checkintime.getDay();
    var hour = checkintime.getHours();
    var minute = checkintime.getMinutes();
    var second = checkintime.getSeconds();
    if (day == 0) {
        day = "Sunday"
    }
    else if (day == 1) {
        day = "Monday"
    }
    else if (day == 2) {
        day = "Tuesday"
    }
    else if (day == 3) {
        day = "Wednesday"
    }
    else if (day == 4) {
        day = "Thursday"
    }
    else if (day == 5) {
        day = "Friday"
    }
    else if (day == 6) {
        day = "Saturday"
    }
    var totaltime = day + " " + hour + ":" + minute + ":" + second;
    var newlist5 = document.createElement("li");
    newlist5.className = "li5";
    var newtext5 = document.createTextNode(document.getElementById("addPerson5").value + " " + totaltime);
    newlist5.appendChild(newtext5);
    var position5 = document.getElementById("ol5");
    if (document.getElementById("addPerson5").value == "") {
        return;
    }
    if (fullfifth > 3) {
        var stop5 = document.getElementById("stop5").innerHTML = "Room is full";
        return;
    }
    var totalpeople5 = document.createElement("li");
    var newtext5 = document.createTextNode(document.getElementById("addPerson5").value + " " + totaltime);
    totalpeople5.appendChild(newtext5);
    log.appendChild(totalpeople5);
    position5.appendChild(newlist5);
    document.getElementById("addPerson5").value = "";
    fullfifth++
}
function removeName5() {
    var removelist5 = document.getElementById("removePerson5").value;
    var getchild5 = document.getElementsByClassName("li5")[removelist5 - 1];
    var getparent5 = getchild5.parentNode;
    getparent5.removeChild(getchild5);
    document.getElementById("removePerson5").value = "";
    fullfifth--
    if (fullfifth < 4) {
        var stop5 = document.getElementById("stop5").innerHTML = "";
        return;
    }
}
function disableRoom5() {
    document.getElementById("addPerson5").disabled = true;
    document.getElementById("addPerson5").value = "";
}
function undisableRoom5() {
    document.getElementById("addPerson5").disabled = false;
}
function removeAll5() {
    fullfifth = 0;
    document.getElementById("ol5").innerHTML = "";
    document.getElementById("stop5").innerHTML = "";
}
//
//
//
//
//SIXTH ROOM SIXTH ROOM SIXTH ROOM SIXTH ROOM SIXTH ROOM SIXTH ROOM SIXTH ROOM SIXTH ROOM SIXTH ROOM SIXTH ROOM SIXTH ROOM SIXTH ROOM
function addName6() {
    var checkintime = new Date();
    var day = checkintime.getDay();
    var hour = checkintime.getHours();
    var minute = checkintime.getMinutes();
    var second = checkintime.getSeconds();
    if (day == 0) {
        day = "Sunday"
    }
    else if (day == 1) {
        day = "Monday"
    }
    else if (day == 2) {
        day = "Tuesday"
    }
    else if (day == 3) {
        day = "Wednesday"
    }
    else if (day == 4) {
        day = "Thursday"
    }
    else if (day == 5) {
        day = "Friday"
    }
    else if (day == 6) {
        day = "Saturday"
    }
    var totaltime = day + " " + hour + ":" + minute + ":" + second;
    var newlist6 = document.createElement("li");
    newlist6.className = "li6";
    var newtext6 = document.createTextNode(document.getElementById("addPerson6").value + " " + totaltime);
    newlist6.appendChild(newtext6);
    var position6 = document.getElementById("ol6");
    if (document.getElementById("addPerson6").value == "") {
        return;
    }
    if (fullsixth > 3) {
        var stop6 = document.getElementById("stop6").innerHTML = "Room is full";
        return;
    }
    var totalpeople6 = document.createElement("li");
    var newtext6 = document.createTextNode(document.getElementById("addPerson6").value + " " + totaltime);
    totalpeople6.appendChild(newtext6);
    log.appendChild(totalpeople6);
    position6.appendChild(newlist6);
    document.getElementById("addPerson6").value = "";
    fullsixth++
}
function removeName6() {
    var removelist6 = document.getElementById("removePerson6").value;
    var getchild6 = document.getElementsByClassName("li6")[removelist6 - 1];
    var getparent6 = getchild6.parentNode;
    getparent6.removeChild(getchild6);
    document.getElementById("removePerson6").value = "";
    fullsixth--
    if (fullsixth < 4) {
        var stop6 = document.getElementById("stop6").innerHTML = "";
        return;
    }
}
function disableRoom6() {
    document.getElementById("addPerson6").disabled = true;
    document.getElementById("addPerson6").value = "";
}
function undisableRoom6() {
    document.getElementById("addPerson6").disabled = false;
}
function removeAll6() {
    fullsixth = 0;
    document.getElementById("ol6").innerHTML = "";
    document.getElementById("stop6").innerHTML = "";
}