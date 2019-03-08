let seed_data_friends = require(`../seed_data`);

module.exports = app => {
  app.get("/api/friends", res => res.json(seed_data_friends));

  app.post("/api/friends", (req, res) => {
    let Match = {
      name: "",
      photo: "", // Photos are pendinggg -- love freddy
      fDif: 1000
    };

    let userData = req.body;
    const { name, photo, scores } = userData;

    let Difference = 0;

    for (let i = 0; i < seed_data_friends.length; i++) {
      Difference = 0;

      for (let g = 0; g < seed_data_friends[i].scores[g]; g++) {
        Difference += Math.abs(
          parseInt(scores[j]) - parseInt(seed_data_friends[i].scores[g])
        );

        if (Difference <= Match.fDif) {
          Match.name = seed_data_friends[i].name;
          Match.photo = seed_data_friends[i].photo;
          Match.fDif = Difference;
        }
      }
    }

    seed_data_friends.push(userData);

    res.json(Match);
  });
};
