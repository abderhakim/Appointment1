'use strict';

$(document).ready(function () {
    $(function () {
        $('#loading').hide();
        $(document).ajaxStart(function () {
            $('#loading').show();
        }).ajaxStop(function () {
            $('#loading').hide();
        });
    });

   
    
    //Trigger user press enter key
    $('#SearchAppt').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            requestData();
        }
    });
    //Show result when user click Search button
    $("#btnsearch").click(requestData);


    function requestData() {
        var SearchAppt = $("#SearchAppt").val();
        var requestURL = "http://localhost:8080/OnlineAppointment/ApptServlet";
        if (SearchAppt !== '') {
            $.post(requestURL, {"SearchAppt": SearchAppt}).done(getAppointmentData).error(onRequestError);

        }
    }

    function getAppointmentData(data) {
        var result = JSON.parse(data);
        result = result.AppointmentData;
        var searchResult = '';
        $.each(result, function (index, value) {
            searchResult += "<dl>";
            searchResult += "<dt class='Id'>";
            searchResult += value.Id;
            searchResult += "<span class='appointmentTime'>(" + value.appointmentTime + ")</span></dt>";
            searchResult += "<span class='appointmentDate'>(" + value.appointmentTime + ")</span></dt>";
            searchResult += "<dd class='description'>" + value.description + "</dd>";
            searchResult += "</dl>";
        });
        if (searchResult !== '') {
            $("#result").html(searchResult);
        } else {
            $("#result").html("<div class='notFound'>Search not found!</div>");
        }

    }



    function onRequestError(xhr, status, exceptio) {
        console.log(xhr, status, exception);
    }
});


