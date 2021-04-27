$(".modal-button").click(function() {
    $("html").addClass("is-clipped");
    $(".modal").addClass("is-active");
    });
    
$(".close-modal").click(function(){
    $("html").removeClass("is-clipped");
    $(".modal").removeClass("is-active");
});

let amiiboFunc = {
    fetchAmiibo: function (name) {
        fetch(
            "https://www.amiiboapi.com/api/amiibo/?name="
            + name )
        .then((response) => response.json())
        .then((data) => this.showAmiibo(data));
    },

    showAmiibo: function(data) {
        const name = data.amiibo[0].name;
        const amiiboSeries = data.amiibo[0].amiiboSeries;
        const gSeries = data.amiibo[0].gameSeries;
        const releaseDate = data.amiibo[0].release.au;
        const releaseDate1 = data.amiibo[0].release.na;
        const img = data.amiibo[0].image;
        document.querySelector(".name").innerHTML = name + ".";
        document.querySelector(".gSeries").innerHTML = gSeries + ".";
        document.querySelector(".aSeries").innerHTML = "The Amiibo series is from " + amiiboSeries + ".";
        document.querySelector(".releaseDate").innerHTML = "The release date in AU is " + releaseDate + ".";
        document.querySelector(".releaseDate1").innerHTML = "The release date in NA is " + releaseDate1 + ".";
        document.querySelector(".img").src =  img;
      },
      search: function() {
        this.fetchAmiibo(document.querySelector(".searchBar").value);
      },
    };

    /*let amiiboFuncSeries = {
        fetchAmiiboSeries: function(series) {
            fetch(
                "https://amiiboapi.com/api/gameseries/?name="
                + series)
            .then((response) => response.json())
            .then((data) => this.showAmiiboSeries(data));
        },

    showAmiiboSeries: function(data) {
        const name = data.amiibo[0].name;
        const keyNum = data.amiibo[0].key;

        document.querySelector(".name").innerHTML = "Game character is " + name + ".";
        document.querySelector(".gSeries").innerHTML = "Game character's key number is " + keyNum+ ".";
    },
    search: function() {
        this.fetchAmiiboSeries(document.querySelector(".searchBar").value);
    },

    };*/

    document.querySelector(".searchBtn").addEventListener("click", function(){
        amiiboFunc.search();
    });

    document.querySelector(".searchBar").addEventListener("keyup", function(event){
        if(event.key === "Enter") {
            amiiboFunc.search();
        }
    });


