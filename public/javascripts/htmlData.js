// recriece boardState as a 2d array [x][y] and value as a piece (ex. "b" = bishop)

let buffer = ["a","b","c","d","e","f","g","h"];

let initBoard = (playerType) => {
    let form = document.getElementById("f");
    let table = document.createElement("table");

    table.style = "background: url(images/6349381.jpg)";

    //first row
        let tr = document.createElement("tr");


        let rook1 = document.createElement("td");
        let knight1 = document.createElement("td");
        let bishop1 = document.createElement("td");
        let royal1 = document.createElement("td");
        let royal2 = document.createElement("td");
        let bishop2 = document.createElement("td");
        let knight2 = document.createElement("td");
        let rook2 = document.createElement("td");

        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        let img5 = document.createElement("img");
        let img6 = document.createElement("img");
        let img7 = document.createElement("img");
        let img8 = document.createElement("img");

        img1.className = "tile";
        img2.className = "tile";
        img3.className = "tile";
        img4.className = "tile";
        img5.className = "tile";
        img6.className = "tile";
        img7.className = "tile";
        img8.className = "tile";

        if (playerType === "WHITE") {
            let x = 8;
            img1.src = "images/New_Black/rook.png";
            img2.src = "images/New_Black/knight.png";
            img3.src = "images/New_Black/bishop.png";
            img4.src = "images/New_Black/queen.png";
            img5.src = "images/New_Black/king.png";
            img6.src = "images/New_Black/bishop.png";
            img7.src = "images/New_Black/knight.png";
            img8.src = "images/New_Black/rook.png";

            img1.id = buffer[0] + x;            
            img2.id = buffer[1] + x;    
            img3.id = buffer[2] + x;    
            img4.id = buffer[3] + x;    
            img5.id = buffer[4] + x;    
            img6.id = buffer[5] + x;    
            img7.id = buffer[6] + x;    
            img8.id = buffer[7] + x;    
        } else {
            let x = 1;
            img1.src = "images/New_White/rook.png";
            img2.src = "images/New_White/knight.png";
            img3.src = "images/New_White/bishop.png";
            img4.src = "images/New_White/king.png";
            img5.src = "images/New_White/queen.png";
            img6.src = "images/New_White/bishop.png";
            img7.src = "images/New_White/knight.png";
            img8.src = "images/New_White/rook.png";

            img1.id = buffer[7] + x;            
            img2.id = buffer[6] + x;    
            img3.id = buffer[5] + x;    
            img4.id = buffer[4] + x;    
            img5.id = buffer[3] + x;    
            img6.id = buffer[2] + x;    
            img7.id = buffer[1] + x;    
            img8.id = buffer[0] + x;    
        }

        rook1.appendChild(img1);
        knight1.appendChild(img2);
        bishop1.appendChild(img3);
        royal1.appendChild(img4);
        royal2.appendChild(img5);
        bishop2.appendChild(img6);
        knight2.appendChild(img7);
        rook2.appendChild(img8);


        tr.appendChild(rook1);
        tr.appendChild(knight1);
        tr.appendChild(bishop1);
        tr.appendChild(royal1);
        tr.appendChild(royal2);
        tr.appendChild(bishop2);
        tr.appendChild(knight2);
        tr.appendChild(rook2);

        table.appendChild(tr);

    //add pawns
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


    //add the last row to the table

     tr = document.createElement("tr");


         rook1 = document.createElement("td");
         knight1 = document.createElement("td");
         bishop1 = document.createElement("td");
         royal1 = document.createElement("td");
         royal2 = document.createElement("td");
         bishop2 = document.createElement("td");
         knight2 = document.createElement("td");
         rook2 = document.createElement("td");

         img1 = document.createElement("img");
         img2 = document.createElement("img");
         img3 = document.createElement("img");
         img4 = document.createElement("img");
         img5 = document.createElement("img");
         img6 = document.createElement("img");
         img7 = document.createElement("img");
         img8 = document.createElement("img");

        img1.className = "tile";
        img2.className = "tile";
        img3.className = "tile";
        img4.className = "tile";
        img5.className = "tile";
        img6.className = "tile";
        img7.className = "tile";
        img8.className = "tile";

        if (playerType === "BLACK") {
            let x = 8;
            img1.src = "images/New_Black/rook.png";
            img2.src = "images/New_Black/knight.png";
            img3.src = "images/New_Black/bishop.png";
            img4.src = "images/New_Black/king.png";
            img5.src = "images/New_Black/queen.png";
            img6.src = "images/New_Black/bishop.png";
            img7.src = "images/New_Black/knight.png";
            img8.src = "images/New_Black/rook.png";

            img1.id = buffer[7] + x;            
            img2.id = buffer[6] + x;    
            img3.id = buffer[5] + x;    
            img4.id = buffer[4] + x;    
            img5.id = buffer[3] + x;    
            img6.id = buffer[2] + x;    
            img7.id = buffer[1] + x;    
            img8.id = buffer[0] + x;    
        } else {
            let x = 1;
            img1.src = "images/New_White/rook.png";
            img2.src = "images/New_White/knight.png";
            img3.src = "images/New_White/bishop.png";
            img4.src = "images/New_White/queen.png";
            img5.src = "images/New_White/king.png";
            img6.src = "images/New_White/bishop.png";
            img7.src = "images/New_White/knight.png";
            img8.src = "images/New_White/rook.png";

            img1.id = buffer[0] + x;            
            img2.id = buffer[1] + x;    
            img3.id = buffer[2] + x;    
            img4.id = buffer[3] + x;    
            img5.id = buffer[4] + x;    
            img6.id = buffer[5] + x;    
            img7.id = buffer[6] + x;    
            img8.id = buffer[7] + x;    
        }

        rook1.appendChild(img1);
        knight1.appendChild(img2);
        bishop1.appendChild(img3);
        royal1.appendChild(img4);
        royal2.appendChild(img5);
        bishop2.appendChild(img6);
        knight2.appendChild(img7);
        rook2.appendChild(img8);


        tr.appendChild(rook1);
        tr.appendChild(knight1);
        tr.appendChild(bishop1);
        tr.appendChild(royal1);
        tr.appendChild(royal2);
        tr.appendChild(bishop2);
        tr.appendChild(knight2);
        tr.appendChild(rook2);

        table.appendChild(tr);
    
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