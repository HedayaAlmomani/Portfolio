import "./style.css";
const Contact = () => {
  return (
    <div className="link_cotact">
      <a href='https://api.whatsapp.com/send/?phone=962788066405&text&type=phone_number&app_absent=0'>
        <i class="bi bi-whatsapp"></i>
      </a>

      <a href="https://www.linkedin.com/in/hedayaalmomani/">
        {" "}
        <i class="bi bi-linkedin"></i>
      </a>

      <a href="https://web.facebook.com/hedaya.almomani.18">
        <i class="bi bi-facebook"></i>
      </a>
      <a href="https://github.com/HedayaAlmomani">
        <i class="bi bi-github"></i>
      </a>
    </div>
  );
};

export default Contact;
