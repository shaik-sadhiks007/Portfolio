import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { toast } from "react-toastify";
import githubIcon from "../assets/github.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_b57tccl",
                "template_m37ausd",
                form.current,
                "b6GVGIIlN9APNc0hl"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("Message sent successfully!");
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    toast.success("Failed to send the message, please try again.");
                }
            );
    };

    return (
        <section className="contact-section py-5" id="contact">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="hero-image-wrapper">
                            <img
                                src="https://shaikahmadnawaz.vercel.app/contact-me.svg"
                                alt="Contact illustration"
                                className="hero-image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-content">
                            <h2 className="display-2 text-white mb-3">Contact Me</h2>
                            <p className="text-secondary mb-5">
                                If you'd like to get in touch with me, feel free to reach out using the contact information below or by
                                filling out the contact form.
                            </p>

                            <div className="contact-info mb-5">
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="contact-info-item">
                                            <h3 className="h5 text-white ">Email</h3>
                                            <a href="mailto:shaik.sadhiks007@gmail.com" className="text-danger text-decoration-none">
                                                shaik.sadhiks007@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-info-item">
                                            <h3 className="h5 text-white">Phone</h3>
                                            <a href="tel:+918501059067" className="text-danger text-decoration-none">
                                                +91 8501059067
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form ref={form} onSubmit={sendEmail} className="contact-form">
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name" className="form-label text-white">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label text-white">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="Your Email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="message" className="form-label text-white">
                                                Message
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                name="message"
                                                rows="5"
                                                placeholder="Your Message"
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-danger btn-lg">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="social-icons w-100 d-flex justify-content-between mt-4">
                                <a href="https://github.com/shaik-sadhiks007?tab=repositories" target="_blank" rel="noopener noreferrer">
                                    <img src={githubIcon} alt="GitHub" className="icon github" width='32px' />
                                </a>
                                <div style={{ cursor: 'pointer' }}>
                                    <img src={facebookIcon} alt="Facebook" className="icon facebook" width='32px' />
                                </div>
                                <div style={{ cursor: 'pointer' }}>
                                    <img src={instagramIcon} alt="Instagram" className="icon instagram" width='32px' />
                                </div>
                                <a href="https://www.linkedin.com/in/sadhik-shaik-9474a8250/" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedinIcon} alt="LinkedIn" className="icon linkedin" width='32px' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;