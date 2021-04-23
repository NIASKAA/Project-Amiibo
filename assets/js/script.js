let amiiboFunc = {
    fetchAmiibo: function (name) {
        fetch(
            "https://www.amiiboapi.com/api/amiibo/?name="
            + name )
        .then((response) => response.json())
        .then((data) => this.showAmiibo(data));
    },

    showAmiibo: function(data) {
        const {name} = data.amiibo[0];
        const {character} =data.amiibo[0];
        const amiiboSeries = data.amiibo[0].amiiboSeries;
        console.log(name, character, amiiboSeries);
        document.querySelector(".name").innerHTML = " Name is " + name;
    }
};