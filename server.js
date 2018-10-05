var express = require('express');
const path = require('path');
var request = require('request');
var cheerio = require('cheerio');

const PORT = process.env.PORT || 5000
var app = express();

app.use(express.static(__dirname+'/public'));
app.get('/scrape', function(req, res) {
    let username=req.query.username
    url = `https://www.myfitnesspal.com/food/diary/${username}`

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);
            var json = { calories : "", carbs : "", fat : "", protein:"", fiber:""};

         $('#diary-table').filter(function(){
            var data = $(this);

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
    res.send(json);
        }) ;
  })

app.get('/weightInfo', function(req, res) {
    let username=req.query.username;
    url = `https://www.myfitnesspal.com/profile/${username}`;

    request(url, function(error, response, html) {
      if (!error) {
        var $ = cheerio.load(html);
        var json = {
          startingWeight: "",
          startingDate: ""
        };

        $('#profile-block').filter(function() {
          var data = $(this);
          //get Starting Weight
          startingWeight = data.children('.col-1').children('p').first().text();
          var n = startingWeight.indexOf(':');
          var lb = startingWeight.indexOf('lb');
          startingWeight = parseFloat(startingWeight.substring(n+1,lb).trim());
          //get Starting Date
          startingDate = data.children('.col-1').children('p').first().text();
          var y = startingDate.indexOf('te:');
          startingDate = startingDate.substring(y+3).trim();

          json.startingWeight = startingWeight;
          json.startingDate = startingDate;

        })
      }
      res.send(json);
    });

  })

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
  });

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
