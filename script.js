function dynamic_card_generator(
  title,
  genre,
  directed_by,
  produced_by,
  starring,
  animecover
) {
  let html = `<div class="card-container">
            <div class="card-img">
                <img src="${animecover}" alt="Card Image">
            </div>
            <div class="card-content">
                <h2>${title}</h2>
                <div class="text-container">
                    <p><span>Genre:</span> ${genre}</p>
                    <p><span>Directed By:</span> ${directed_by}</p>                      
                    <p><span>Produced By:</span> ${produced_by}</p>
                    <p><span>Starring:</span> ${starring}</p>
                </div>
            </div> 
        </div>`;

  
  document.querySelector(".container").innerHTML += html;
}


dynamic_card_generator(
  "Attack on Titan",
  "Action, Dark Fantasy",
  "Tetsurō Araki",
  "Wit Studio, MAPPA",
  "Yūki Kaji, Yui Ishikawa",
  "https://www.penguin.com.au/jpg-large/9781632363848.jpg"
);
