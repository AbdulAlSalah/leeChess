// recriece boardState as a 2d array [x][y] and value as a piece (ex. "b" = bishop)

let updateBoard = (boardState) => {
    let form = document.getElementById("f");
    let table = document.createElement("table");

 

    for (let i = 0; i < 8; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 8; j++) {
            let td = document.createElement("td");

            let img = document.createElement("img");

            img.src = "images/New_White/pawn.png";
            //TODO process input array

            td.appendChild(img);
            tr.appendChild(td);

            table.appendChild(tr);
            
        }
        
    }

    
    form.appendChild(table);
}