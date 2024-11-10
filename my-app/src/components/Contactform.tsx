
export default function ContactForm() {
    return (
      <div className="contact-form">
  <h2>Contact Us</h2>
  <form action="#" method="POST">
    <div className="form-group">
      <label id="name">Name</label>
      <input type="text" id="name" name="name" required />
    </div>

    <div className="form-group">
      <label id="email">Email</label>
      <input type="email" id="email" name="email" required />
    </div>

    <div className="form-group">
      <label id="message">Message</label>
      <textarea id="message" name="message" required></textarea>
    </div>

    <button type="submit">Send Message</button>
  </form>
</div>
    )}