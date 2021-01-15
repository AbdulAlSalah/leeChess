// recriece boardState as a 2d array [x][y] and value as a piece (ex. "b" = bishop)

let buffer = ["a","b","c","d","e","f","g","h"];

let updateBoard = (boardState, onClick) => {
    let form = document.getElementById("f");
    let table = document.createElement("table");

 

    for (let i = 0; i < 8; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 8; j++) {
            let td = document.createElement("td");



            let img = document.createElement("img");

            img.src = "images/New_White/pawn.png";
            //TODO process input array
            img.className = "tile";
            let x = i+1;
            img.id = buffer[j] + x;

            img.addEventListener("click", onClick);


            td.appendChild(img);
            tr.appendChild(td);

            table.appendChild(tr);
            
        }
        
    }

    
    form.appendChild(table);
}