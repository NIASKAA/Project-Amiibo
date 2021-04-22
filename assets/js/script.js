$.getJSON("https://www.amiiboapi.com/api/amiibo/?name=mario",
    function(data){
        console.log(data);

    
    let icon ="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png";
    let aName = data.amiibo[0].name;
    let aSeries = data.amiibo[0].amiiboSeries;

    $('.icon').attr("src", icon);
    $('.name').append(aName);
    $('.series').append(aSeries);
    }
);