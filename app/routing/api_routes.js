// get data from the friends api

var friendsList = require('../data/friends.js');
var path = require('path');

// Routing


module.exports = function(app) {

  var friendData = [];

  app.get('/api/friends', function(req, res){
    res.json(friendsList);
  });

  app.post('/api/friends', function(req, res){
    
    var matchFriend = [];
      for(var i = 0; i < friendsList.length; i++){

        var difference = [];

        for(var x = 0; x < friendsList[i].scores.length; x++){
          var diff;
           if(friendsList[i].scores[x] > req.body.scores[x]){
             diff = friendsList[i].scores[x] - req.body.scores[x];
             difference.push(diff);
            }
          else if(friendsList[i].scores[x] < req.body.scores[x]){
             diff = req.body.scores[x] - friendsList[i].scores[x];
             difference.push(diff);
            }
          else if(friendsList[i].scores[x] == req.body.scores[x]){
            diff = 0;
            difference.push(diff);
          }
        }

        function add(a, b){
          return a + b;
        };


        var difference = difference.reduce(add, 0);


      matchFriend.push({
          name: friendsList[i].name,
          picture: friendsList[i].picture,
          scores: difference
      });
        
      }

  var magicValue = Math.min(matchFriend[0].scores, matchFriend[1].scores, matchFriend[2].scores);

  if(magicValue == matchFriend[0].scores){
    res.json(matchFriend[0]);
  }
  else if(magicValue == matchFriend[1].scores){
    res.json(matchFriend[1]);
  }
  else if(magicValue == matchFriend[2].scores){
    res.json(matchFriend[2]);
  }

  })

};