
const Contact = ()=>{
return(
<div className="contact-page">
    <div id="contact">
    <img src="https://c0.wallpaperflare.com/preview/611/507/730/beef-bread-bun-burger.jpg" alt=""/>
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
    <textarea placeholder="Message" cols="30" rows="10"></textarea>
    <button>Send Message</button>
    </div>
    </div>
</div>
)
};

export default Contact;