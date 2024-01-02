
const Contact = ()=>{
return(
<div className="pages-container">
    {/* <h1>Contact Us</h1> */}
    <div id="contact">
    {/* <img src="https://fooodiezz.netlify.app/aboutImage.264eca6d.avif?1704186218000" alt=""/> */}
    <img src="https://wallpapercrafter.com/th800/134640-food-cheese-tomatoes-pizza-Pepper-top-view.jpg" alt=""/>
    <div id="overlay"></div>
    <div id="contact-left">
    <h1>Get In Touch</h1>
    <p>Need assistance or have a question? Contact our friendly team for quick and helpful support</p>
    </div>
    <div id="contact-right">
    <label>Name</label>
    <input type="text" placeholder="Eg:Aditya Verma"/>
    <label>Email</label>
    <input type="email" placeholder="xyz@gmail.com"/>
    <label>Tell Us More</label>
    <textarea placeholder="Write Here..." cols="30" rows="10"></textarea>
    <button>Send Message</button>
    </div>
    </div>
</div>
)
};

export default Contact;