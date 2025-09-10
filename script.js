1. index.html

<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>Creative Portfolio</title>

  <link rel="stylesheet" href="styles.css" />

</head>

<body>

  <div class="container">

    <!-- Profile Section -->

    <section class="profile">

      <img src="your-photo.jpg" alt="Your Profile Picture" />

      <h1>Your Name</h1>

      <p>Web Developer | Designer | Coder</p>

    </section>

    <!-- About Me Section -->

    <section class="section about-me">

      <h2>About Me</h2>

      <p>

        Hello! I’m a passionate developer with experience in HTML, CSS, JavaScript, and other modern web technologies. I love crafting clean, responsive, and user-friendly websites that solve real-world problems.

      </p>

    </section>

    <!-- Download Certificate Section -->

    <section class="section download-section">

      <h2>Download Certificate</h2>

      <a href="your-certificate.pdf" download>

        <button class="download-certificate" type="button">Download Certificate</button>

      </a>

    </section>

    <!-- Contact Me Section -->

    <section class="section contact-section">

      <h2>Contact Me</h2>

      <form class="contact-form" action="#" method="POST">

        <input type="text" name="name" placeholder="Your Name" required />

        <input type="email" name="email" placeholder="Your Email" required />

        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>

      </form>

    </section>

  </div>

  <!-- Footer -->

  <footer>

    &copy; 2025 Your Name | All rights reserved.

  </footer>

  <!-- Back to Top Button -->

  <button id="backToTop" aria-label="Back to Top">↑</button>

  <script src="scripts.js"></script>

</body>

</html>

---

2. styles.css

/* Reset & base */

* {

  box-sizing: border-box;

  margin: 0;

  padding: 0;

}

body {

  font-family: 'Poppins', sans-serif;

  background: linear-gradient(135deg, #667eea, #764ba2);

  color: #333;

  line-height: 1.6;

  min-height: 100vh;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

}

a {

  text-decoration: none;

  color: inherit;

}

/* Container */

.container {

  max-width: 900px;

  background: #fff;

  margin: 40px auto;

  padding: 30px 40px;

  border-radius: 15px;

  box-shadow: 0 15px 40px rgba(0,0,0,0.15);

}

/* Profile Section */

.profile {

  text-align: center;

  padding-bottom: 30px;

  border-bottom: 2px solid #f0f0f0;

}

.profile img {

  width: 160px;

  height: 160px;

  object-fit: cover;

  border-radius: 50%;

  border: 6px solid #764ba2;

  box-shadow: 0 8px 15px rgba(118,75,162,0.3);

  transition: transform 0.3s ease;

}

.profile img:hover {

  transform: scale(1.05);

}

.profile h1 {

  font-weight: 700;

  font-size: 2.8rem;

  margin: 15px 0 5px;

  color: #764ba2;

}

.profile p {

  font-size: 1.1rem;

  color: #555;

  font-style: italic;

}

/* About Me */

.section {

  margin-top: 40px;

}

.section h2 {

  color: #764ba2;

  margin-bottom: 15px;

  font-weight: 700;

  font-size: 2rem;

  border-left: 5px solid #667eea;

  padding-left: 12px;

}

.section p {

  font-size: 1.1rem;

  color: #444;

  line-height: 1.5;

}

/* Download Certificate Button */

.download-certificate {

  margin-top: 25px;

  display: inline-block;

  background: #667eea;

  color: white;

  padding: 12px 25px;

  font-weight: 600;

  border-radius: 40px;

  box-shadow: 0 5px 15px rgba(102,126,234,0.4);

  cursor: pointer;

  transition: background 0.3s ease, box-shadow 0.3s ease;

  border: none;

}

.download-certificate:hover {

  background: #5a6ad1;

  box-shadow: 0 8px 25px rgba(90,106,209,0.6);

}

/* Contact Form */

form.contact-form {

  margin-top: 35px;

  display: flex;

  flex-direction: column;

  gap: 15px;

}

form.contact-form input,

form.contact-form textarea {

  padding: 12px 15px;

  border: 2px solid #ccc;

  border-radius: 8px;

  font-size: 1rem;

  transition: border-color 0.3s ease;

  resize: vertical;

}

form.contact-form input:focus,

form.contact-form textarea:focus {

  border-color: #764ba2;

  outline: none;

  box-shadow: 0 0 6px #764ba2aa;

}

form.contact-form button {

  align-self: flex-start;

  background: #764ba2;

  color: white;

  font-weight: 700;

  padding: 12px 25px;

  border: none;

  border-radius: 40px;

  cursor: pointer;

  transition: background 0.3s ease;

}

form.contact-form button:hover {

  background: #5e3a92;

}

/* Footer */

footer {

  background-color: #2c2c54;

  color: #ddd;

  text-align: center;

  padding: 20px 15px;

  position: relative;

  font-size: 0.9rem;

  user-select: none;

}

/* Back to top button */

#backToTop {

  position: fixed;

  bottom: 40px;

  right: 40px;

  background: #764ba2;

  color: white;

  border: none;

  padding: 15px 20px;

  font-size: 1.3rem;

  border-radius: 50px;

  cursor: pointer;

  box-shadow: 0 5px 15px rgba(118,75,162,0.7);

  transition: background 0.3s ease, transform 0.2s ease;

  display: none; /* Hidden initially */

  z-index: 1000;

}

#backToTop:hover {

  background: #5e3a92;

  transform: scale(1.1);

}

/* Responsive */

@media (max-width: 600px) {

  .container {

    padding: 20px 25px;

  }

  .profile h1 {

    font-size: 2rem;

  }

  .section h2 {

    font-size: 1.6rem;

  }

  #backToTop {

    bottom: 20px;

    right: 20px;

    padding: 12px 16px;

    font-size: 1.1rem;

  }

}

---

3. scripts.js

// Show button when scroll down 300px

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {

  if (window.scrollY > 300) {

    backToTopBtn.style.display = 'block';

  } else {

    backToTopBtn.style.display = 'none';

  }

});

backToTopBtn.addEventListener('click', () => {

  window.scrollTo({ top: 0, behavior: 'smooth' });

});

---

How to Use:

Save these as index.html, styles.css, and scripts.js in the same folder.

Update your image URL (your-photo.jpg) and certificate file (your-certificate.pdf) in the HTML.

Open index.html in a browser to see the portfolio live.

If you want me to help you with backend form handling or add any animation or improvements, just ask!