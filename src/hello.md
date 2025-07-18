---
layout: layouts/base.njk
title: Contact
bannerTitle: Contact
bannerDescription: TO CREATE A POWERFUL PROJECT ONCE, A BIT OF LUCK IS ENOUGH
---


<section class="hello">
      <div class="container">
        <div class="row">
          <div class="col-12 wow fadeIn">
            <h6>SMOOTH INTERFACE INTERACTION</h6>
            <h2 data-text="Contact">Come visit us and say hello !!</h2>
          </div>
          <!-- end col-12 -->
          <div class="col-md-4 wow fadeIn">
            <address>
              <b>Address</b>
              <p>
                Nivki Kristiatik Street No : 81<br />
                Kiev – Ukraine
              </p>
            </address>
          </div>
          <!-- end col-4 -->
          <div class="col-md-4 wow fadeIn" data-wow-delay="0.05s">
            <address>
              <b>Phone</b>
              <p>
                +380 98 294 80 86<br />
                +380 98 294 80 80
              </p>
            </address>
          </div>
          <!-- end col-4 -->
          <div class="col-md-4 wow fadeIn" data-wow-delay="0.10s">
            <address>
              <b>Email</b>
              <a href="mailto:info@bengaladventuresclub.com">info@bengaladventuresclub.com</a>
            </address>
          </div>
          <!-- end col-4 -->
        </div>
        <!-- end row -->
        <div class="row align-items-center">
          <div class="col-lg-6 wow fadeIn">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5494.9237105508755!2d30.7404548782959!3d46.47916644771724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6319eaca4b7c3%3A0x9ca0fc29348e76f0!2z0YPQuy4g0JbRg9C60L7QstGB0LrQvtCz0L4sIDE1LCDQntC00LXRgdGB0LAsINCe0LTQtdGB0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDY1MDAw!5e0!3m2!1sru!2sua!4v1550768857290"
              width="100%"
              height="640"
              frameborder="0"
              style="border: 0"
              allowfullscreen
            ></iframe>
            <!-- end map -->
          </div>
          <!-- end col-6 -->
          <div class="col-lg-6 wow fadeIn" data-wow-delay="0.05s">
            <form class="row inner" id="contact" name="contact" netlify>
              <div class="form-group col-sm-6 col-12">
                <label><span>Your name</span></label>
                <input type="text" name="name" id="name" required />
              </div>
              <!-- end form-group -->
              <div class="form-group col-sm-6 col-12">
                <label><span>Your surname</span></label>
                <input type="text" name="surname" id="surname" required />
              </div>
              <!-- end form-group -->
              <div class="form-group col-sm-6 col-12">
                <label><span>Your e-mail</span></label>
                <input type="text" name="email" id="email" required />
              </div>
              <!-- end form-group -->
              <div class="form-group col-sm-6 col-12">
                <label><span>Subject</span></label>
                <input type="text" name="subject" id="subject" required />
              </div>
              <!-- end form-group -->
              <div class="form-group col-12">
                <label><span>Your message</span></label>
                <textarea name="message" id="message" required></textarea>
              </div>
              <!-- end form-group -->
              <div class="form-group col-12">
                <button id="submit" type="submit">SUBMIT</button>
              </div>
              <!-- end form-group -->
            </form>
            <!-- end form -->
            <div id="success" class="alert alert-success" role="alert">
              Your message was sent successfully! We will be in touch as soon as
              we can.
            </div>
            <!-- end success -->
            <div id="error" class="alert alert-danger" role="alert">
              Something went wrong, try refreshing and submitting the form
              again.
            </div>
            <!-- end error -->
          </div>
          <!-- end col-6 -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>