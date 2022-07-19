export function mainContent(){
    const div = document.createElement('div')
    $("#content").append(div)
    $('#content > div').addClass("box")
    $('.box').append(`<div class="box">
    <div class="center-box">
        <h1 class="mid-title">Welcome To Forno Di Pietra</h1>
        <p class="description">We make authentic Italian Pizza Experience here @ Forno Di Pietra. Our expert chefs espeacially brought from Italy gives you premium Italian Pizza Experience handcrafted. We use pure vegetable gathered from certified farms that do not use organic vegetables. You can book a reservation or Call us at +1XX-XXXX-XX</p>
        <div class="inner-box">
            <div class="item">
                <img src="/src/notebook.gif" alt="">
                <p class="item-description">&#8220;Our pizza menu caters wide ranges of pizzas from Neapolitan Pizza to Sicilian Pizza. Our wide range of menu can help get the exact pizza that you like at the best price&#8221;</p>
            </div>
            <div class="item">
                <img src="/src/pizza.gif" alt="">
                <p class="item-description">&#8220;Our Chefs at Forno Di Pietra prepares authentic Italian Pizza Cousine and serves them with their best presentation. Customer satisfaction is our top-most priority&#8221;</p>
            </div>
            <div class="item">
                <img src="/src/transport.gif" alt="">
                <p class="item-description">&#8220;You can order online or call and order from us. We deliver partners make sure that you get your food as fast as possible while maintaining temperature&#8221;</p>
            </div>
        </div>`)
}