*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f6f9;
    color:#222;
    transition:0.4s;
}

header{
    text-align:center;
    padding:40px;
    background:linear-gradient(135deg,#4f46e5,#06b6d4);
    color:white;
}

nav{
    display:flex;
    justify-content:center;
    gap:20px;
    padding:15px;
    background:#111827;
}

nav a{
    color:white;
    text-decoration:none;
    font-weight:bold;
}

.hero{
    text-align:center;
    padding:50px;
}

.card{
    max-width:1000px;
    margin:20px auto;
    padding:25px;
    border-radius:15px;
    background:white;
    box-shadow:0 4px 10px rgba(0,0,0,0.1);
}

.stats{
    display:flex;
    justify-content:center;
    gap:40px;
    margin-top:20px;
}

.stats div{
    text-align:center;
}

button{
    background:#4f46e5;
    color:white;
    border:none;
    padding:12px 20px;
    margin-top:10px;
    border-radius:10px;
    cursor:pointer;
    transition:0.3s;
}

button:hover{
    transform:scale(1.05);
}

input{
    padding:12px;
    width:100%;
    margin-bottom:10px;
    border:1px solid #ccc;
    border-radius:8px;
}

footer{
    text-align:center;
    padding:20px;
    background:#111827;
    color:white;
    margin-top:30px;
}

.dark{
    background:#121212;
    color:white;
}

.dark .card{
    background:#1f2937;
}

.dark input{
    background:#374151;
    color:white;
}

@media(max-width:768px){

    nav{
        flex-direction:column;
        align-items:center;
    }

    .stats{
        flex-direction:column;
    }

}
