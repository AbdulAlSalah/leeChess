// recriece boardState as a 2d array [x][y] and value as a piece (ex. "b" = bishop)

let buffer = ["a","b","c","d","e","f","g","h"];

let initBoard = (playerType) => {
    let form = document.getElementById("f");
    let table = document.createElement("div");
    table.className="container";

    

    //first row
        


        let rook1 = document.createElement("div");
        let knight1 = document.createElement("div");
        let bishop1 = document.createElement("div");
        let royal1 = document.createElement("div");
        let royal2 = document.createElement("div");
        let bishop2 = document.createElement("div");
        let knight2 = document.createElement("div");
        let rook2 = document.createElement("div");

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


        table.appendChild(rook1);
        table.appendChild(knight1);
        table.appendChild(bishop1);
        table.appendChild(royal1);
        table.appendChild(royal2);
        table.appendChild(bishop2);
        table.appendChild(knight2);
        table.appendChild(rook2);

  

    //add pawns
    
    for (let i = 0; i < 8; i++) {
        
        let div = document.createElement("div");



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


        div.appendChild(img);
        table.appendChild(div);
    }
    

    for (let i = 2; i < 6; i++) {
        
        for (let j = 0; j < 8; j++) {
            let div = document.createElement("div");



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


            div.appendChild(img);
            table.appendChild(div);
        }

       
            
       
        
    }

    
    for (let i = 0; i < 8; i++) {
        
        let div = document.createElement("div");



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


        div.appendChild(img);
        table.appendChild(div);
    }
   


    //add the last row to the table

    


         rook1 = document.createElement("div");
         knight1 = document.createElement("div");
         bishop1 = document.createElement("div");
         royal1 = document.createElement("div");
         royal2 = document.createElement("div");
         bishop2 = document.createElement("div");
         knight2 = document.createElement("div");
         rook2 = document.createElement("div");

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


        table.appendChild(rook1);
        table.appendChild(knight1);
        table.appendChild(bishop1);
        table.appendChild(royal1);
        table.appendChild(royal2);
        table.appendChild(bishop2);
        table.appendChild(knight2);
        table.appendChild(rook2);

        
    
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

let createEndScreen = (message) => {
    
    

    let form = document.getElementById("f");
    
    form.removeChild(form.firstChild);
    form.removeChild(form.firstChild);
    

    let div = document.createElement("div");

    div.innerHTML = message;

    form.appendChild(div);

}