function gotResults(error, results) {
    if (error) {
        console.error(error);
    }   else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_label").innerHTML = 'I can hear - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";


        img = document.getElementById('dog1');
        img1 = document.getElementById('cat2');


        if (results[0].label == "Clap") {
            img.src = 'bark-01.gif';
            img.src = 'dog-01-png';

        }

        if (results[0].label == "Clap") {
            img.src = 'cat-02-jpg';
            img.src = 'meow-02-gif';

        }

    }
}