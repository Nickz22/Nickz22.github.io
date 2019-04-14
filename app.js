
    let setBackground2 = () => {
        document.getElementById("background").classList.remove("background-1");
        document.getElementById("background").classList.add("background-2");
        
        let showHeaderBox2 = setInterval(() => {
            document.getElementById("header-box2").classList.remove("hidden");
            clearInterval(showHeaderBox2);
        }, 1000); 
    }

    let setBackground3 = () => {
        document.getElementById("background").classList.remove("background-2");
        document.getElementById("background").classList.add("background-3");
        
        let showHeaderBox3 = setInterval(() => {
            document.getElementById("header-box3").classList.remove("hidden");
            clearInterval(showHeaderBox3);
        }, 1000); 
    }

    let setSfDate = () => {
        console.log('here');
        let inputDate = document.getElementById("input_date").value;
        let yearMonthDay = inputDate.split("-");
        let formattedDate = yearMonthDay[1]+'/'+yearMonthDay[2]+'/'+yearMonthDay[0];
        document.getElementById("00N2E00000AHsDH").value = formattedDate; // set a separate field with inputted date since SF wont take Dates from a "Date" Input
    }