const playerNames = [
    "Pete Alonso", "Francisco Lindor", "Brandon Nimmo", "Jeff McNeil", "Kodai Senga",
    "David Wright", "Mike Piazza", "Tom Seaver", "Keith Hernandez", "Darryl Strawberry"
  ]
  
  const playerStats1 = [
    "HRs: 46", "RBIs: 98", "OBP: .367", "AVG: .289", "ERA: 2.98",
    "Hits: 1777", "HRs: 427", "Wins: 311", "Gold Gloves: 11", "HRs: 335"
  ]
  
  const playerStats2 = [
    "All-Star: 2x", "All-Star: 4x", "All-Star: 1x", "Batting Title: 1x", "Strikeouts: 202",
    "All-Star: 7x", "All-Star: 12x", "Cy Young: 3x", "All-Star: 5x", "All-Star: 8x"
  ]
  
  const playerImages = [
    "img/pete.webp", "img/lindor.jpg", "img/nimo.jpg", "img/jeff.jpg", "img/senga.webp",
    "img/wright.jpg", "img/mike.jpg", "img/seaver.jpg", "img/keith.jpg", "img/straw.jpg"
  ]
  
  const playerTeams = [
    "NY Mets", "NY Mets", "NY Mets", "NY Mets", "NY Mets",
    "NY Mets", "NY Mets", "NY Mets", "NY Mets", "NY Mets"
  ]
  
  let currentIndex = 0
  
  function showPlayer(index) {
    const container = document.getElementById("player-card-container")
    container.innerHTML = `
      <div class="card">
        <img src="${playerImages[index]}" alt="${playerNames[index]}">
        <h3>${playerNames[index]}</h3>
        <p>Team: ${playerTeams[index]}</p>
        <p>${playerStats1[index]}</p>
        <p>${playerStats2[index]}</p>
      </div>
    `
  }
  
  document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % playerNames.length
    showPlayer(currentIndex)
  })
  
  showPlayer(currentIndex)




  document.getElementById("create-btn").addEventListener("click", () => {
    const name = prompt("Enter the player's name:");
    const team = prompt("Enter the player's team:");
    const stat1 = prompt("Enter a stat (e.g. HRs: 25):");
    const stat2 = prompt("Enter another stat (e.g. All-Star: 3x):");
  
    if (name && team && stat1 && stat2) {
      const container = document.getElementById("player-card-container");
      container.innerHTML = `
        <div class="card">
          <img src="img/grimace.jpg" alt="${name}">
          <h3>${name}</h3>
          <p>Team: ${team}</p>
          <p>${stat1}</p>
          <p>${stat2}</p>
        </div>
      `;
    } else {
      alert("Please fill in all fields to create a player card!");
    }
  });







  var quotesArray = [
		'NAPS is by far the most significant cultural force of the decade. — New York Times',
'These days sleeping at your desk is not just acceptable, it’s encouraged. — The Atlantic',
'NAPS has changed the way people think about sleep, on a grand scale. — Washington Post',
'Happiness increased 200% since NAPS began promoting siestas. — National Science Review',
'NAPS has ushered in a new era of sleep. — USA Today',
'Not surprisingly, more siestas means more productivity. — Wall Street Journal',
'NAPS is doing the hard work of helping people get the rest they need. — U.S. News'
	]
	var randomNumber = Math.floor(Math.random() * quotesArray.length);
	document.getElementById('press-quote').textContent ='“'+ quotesArray [randomNumber].split(' — ')[0] + '”-' + quotesArray[randomNumber].split('—')[1];
	// console.log(quotesArray[randomNumber].split(' - ')[0] );
  