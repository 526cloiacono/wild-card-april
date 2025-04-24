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
  