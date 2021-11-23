const header = document.querySelector("h1");
const body= document.body.style.backgroundImage;

setTimeout(()=>{
    header.innerHTML="10";
    setTimeout(()=>{
        header.innerHTML="9";
        setTimeout(()=>{
            header.innerHTML="8";
            setTimeout(()=>{
                header.innerHTML="7";
                setTimeout(()=>{
                    header.innerHTML="6";
                    setTimeout(()=>{
                        header.innerHTML="5";
                        setTimeout(()=>{
                            header.innerHTML="4";
                            setTimeout(()=>{
                                header.innerHTML="3";
                                setTimeout(()=>{
                                    header.innerHTML="2";
                                    setTimeout(()=>{
                                        header.innerHTML="1";
                                        setTimeout(()=>{
                                            header.innerHTML="";
                                            document.body.style.backgroundImage = "url('https://images.news18.com/ibnlive/uploads/2021/08/independence-day-wishes-16289867423x2.jpg?impolicy=website&width=510&height=356')";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000);