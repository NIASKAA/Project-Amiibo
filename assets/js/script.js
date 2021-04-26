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
        document.querySelector(".name").innerHTML = "Name is " + name;
        document.querySelector(".gSeries").innerHTML = "The character's series is from " + gSeries;
        document.querySelector(".aSeries").innerHTML = "The Amiibo series is from " + amiiboSeries;
        document.querySelector(".releaseDate").innerHTML = "The release date in AU is " + releaseDate;
        document.querySelector(".releaseDate").innerHTML = "The release date in NA is " + releaseDate1;
        document.querySelector(".img").src =  img;
      },
      search: function() {
        this.fetchAmiibo(document.querySelector(".searchBar").value);
      },
    };

    document.querySelector(".searchBtn").addEventListener("click", function(){
        amiiboFunc.search();
    });

    document.querySelector(".searchBtn").addEventListener("keyup", function(event){
        if(event.key === "Enter") {
            amiiboFunc.search();
        }
    });

