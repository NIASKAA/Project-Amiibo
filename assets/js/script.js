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
        const img = data.amiibo[0].image;
        document.querySelector(".name").innerHTML = "Name is " + name;
        document.querySelector(".gSeries").innerHTML = "The character's series is from " + gSeries;
        document.querySelector(".aSeries").innerHTML = "The Amiibo series is from " + amiiboSeries;
        document.querySelector(".releaseDate").innerHTML = "The release date in AU is " + releaseDate;
        document.querySelector(".img").src =  img;
        
      
    }
};