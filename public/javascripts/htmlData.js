// recriece boardState as a 2d array [x][y] and value as a piece (ex. "b" = bishop)

let buffer = ["a","b","c","d","e","f","g","h"];

let initBoard = (playerType) => {
    let form = document.getElementById("f");
    let table = document.createElement("table");

    let tr_pawn = document.createElement("tr");
    for (let i = 0; i < 8; i++) {
        
        let td = document.createElement("td");



        let img = document.createElement("img");

        
        //TODO process input array
        img.className = "tile";
        


        
        if (playerType === "WHITE") {
            let x = 7;
            img.id = buffer[i] + x;

            img.src = "images/New_Black/pawn.png";
        } else {
            let x = 2;
            img.id = buffer[7-i] + x;
            img.src = "images/New_White/pawn.png";
        }
        

        //img.addEventListener("click",onClick);


        td.appendChild(img);
        tr_pawn.appendChild(td);
    }
    table.appendChild(tr_pawn);

    for (let i = 2; i < 6; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 8; j++) {
            let td = document.createElement("td");



            let img = document.createElement("img");

            
            //TODO process input array
            img.className = "tile";
            img.src = "images/blank.png"


            
            if (playerType === "WHITE") {
                let x = 8-i;
                img.id = buffer[j] + x;
            } else {
                let x = i+1;
                img.id = buffer[7-j] + x;
            }
            

            //img.addEventListener("click",onClick);


            td.appendChild(img);
            tr.appendChild(td);
        }

        table.appendChild(tr);
            
       
        
    }

    tr_pawn = document.createElement("tr");
    for (let i = 0; i < 8; i++) {
        
        let td = document.createElement("td");



        let img = document.createElement("img");

        
        //TODO process input array
        img.className = "tile";
        


        
        if (playerType === "WHITE") {
            let x = 2;
            img.id = buffer[i] + x;

            img.src = "images/New_White/pawn.png";
        } else {
            let x = 7;
            img.id = buffer[7-i] + x;
            img.src = "images/New_Black/pawn.png";
        }
        

        //img.addEventListener("click",onClick);


        td.appendChild(img);
        tr_pawn.appendChild(td);
    }
    table.appendChild(tr_pawn);
    
    form.appendChild(table);
}


let updateBoard = (start,end) => {
    let img1 = document.getElementById(start);
    let temp = img1.parentElement;

    let img2 = document.getElementById(end);

    let temp_id = img1.id;

    img1.id = img2.id;
    img2.id = temp_id;

    img2.parentNode.insertBefore(img1, img2);

    img2.src = "images/blank.png"
    temp.appendChild(img2);
}