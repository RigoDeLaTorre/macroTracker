var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res) {

  getDailyStats =() =>{
    url = 'https://www.myfitnesspal.com/food/diary/rigodlt/';
    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

        var title, release;
        var json = { calories : "", carbs : "", fat : "", protein:"", fiber:""};

        $('#diary-table').filter(function(){
            var data = $(this);

     var selectedLis = $('ul').children('li[data-brandId]');

      calories = data.children('tbody').children('.total').first().children().eq(1).text();
      carbs = data.children('tbody').children('.total').first().children().eq(2).children('.macro-value').text();
      fat = data.children('tbody').children('.total').first().children().eq(3).children('.macro-value').text();
      protein = data.children('tbody').children('.total').first().children().eq(4).children('.macro-value').text();
      fiber = data.children('tbody').children('.total').first().children().eq(5).text();

            json.calories = parseInt(calories);
            json.carbs = parseFloat(carbs);
            json.fat = parseFloat(fat);
            json.protein = parseFloat(protein);
            json.fiber = parseFloat(fiber);

        })
    }

     // To write to the system we will use the built in 'fs' library.
     // In this example we will pass 3 parameters to the writeFile function
     // Parameter 1 :  output.json - this is what the created filename will be called
     // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
     // Parameter 3 :  callback function - a callback function to let us know the status of our function

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

        console.log('File successfully written! - Check your project directory for the output.json file');

    })

     // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
    res.send(json);

        }) ;
  }
  // getDailyStats();
  getDailyStats();

})

app.get('/weightInfo', function(req, res) {
  getWeightInfo = () => {
    url = 'https://www.myfitnesspal.com/profile/rigodlt';
    request(url, function(error, response, html) {
      if (!error) {
        var $ = cheerio.load(html);
        var json = {
          startingWeight: "",
          startingDate: ""
        };

        $('#profile-block').filter(function() {
          var data = $(this);
          startingWeight = data.children('.col-1').children('p').first().text();
          var n = startingWeight.indexOf(':');
          var lb = startingWeight.indexOf('lb');
          startingWeight = parseFloat(startingWeight.substring(n+1,lb).trim());

          startingDate = data.children('.col-1').children('p').first().text();
          var y = startingDate.indexOf('te:');
          startingDate = startingDate.substring(y+3).trim();

          json.startingWeight = startingWeight;
          json.startingDate = startingDate;

        })
      }

      // To write to the system we will use the built in 'fs' library.
      // In this example we will pass 3 parameters to the writeFile function
      // Parameter 1 :  output.json - this is what the created filename will be called
      // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
      // Parameter 3 :  callback function - a callback function to let us know the status of our function

      fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err) {

        console.log('File successfully written! - Check your project directory for the output.json file');

      })

      // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
      res.send(json);

    });
  }
    getWeightInfo();
  })
app.listen(5000, () => {
  console.log('Server is running on port 5000')
})
