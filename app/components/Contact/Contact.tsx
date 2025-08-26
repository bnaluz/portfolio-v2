'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.scss';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submissionMessage, setSubmissionMessage] = useState('');

  type FormErrors = {
    name?: string;
    phoneNumber?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  const validateForm = (formData: {
    name: string;
    phoneNumber: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const errors: FormErrors = {};

    // Basic required field validation
    if (!formData.name.trim()) errors.name = 'Name is required.';
    if (!formData.subject.trim()) errors.subject = 'Subject is required.';
    if (!formData.message.trim()) errors.message = 'Message is required.';

    // Email validation using a regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    // Phone number validation using a basic regex
    const phoneRegex =
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid phone number.';
    }

    return errors;
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage('');

    const formData = {
      name: e.target.name.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false);
      setSubmissionMessage('Please correct the errors in the form.');
      return;
    }

    try {
      if (!form.current) {
        setSubmissionMessage('Form reference is not available.');
        setIsSubmitting(false);
        return;
      }
      await emailjs.sendForm(
        'service_hvqkiby',
        'template_rtoznup',
        form.current,
        'Ma8e5J36TCwhSFiQ9'
      );
      setSubmissionMessage('Message sent successfully!');
      e.target.reset();
      setFormErrors({});
    } catch (error) {
      console.error(error);
      setSubmissionMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.heading}>Get In Touch.</h2>
      <div className={styles.container}>
        {/* Left Side: Contact Info & Socials */}
        <div className={styles.contactInfo}>
          <div className={styles.profile}>
            <h3 className={styles.name}>Bobby Naluz</h3>
            <p className={styles.title}>Web Developer</p>
            <p className={styles.availability}>
              I'm available for freelance or full-time positions. Let's connect
              and build something meaningful.
            </p>
          </div>

          {/* Socials */}
          <div className={styles.socials}>
            <p className={styles.socialsHeading}>Connect with me</p>
            <div className={styles.socialsList}>
              <a
                href="https://www.linkedin.com/in/bobby-naluz-664283197/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={styles.iconBtn}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8 8h3.8v2.05h.05C12.62 8.9 14.1 8 16.2 8c4.1 0 4.85 2.7 4.85 6.2V23h-4v-6.7c0-1.6-.03-3.7-2.25-3.7-2.25 0-2.6 1.75-2.6 3.6V23h-4V8z" />
                </svg>
              </a>
              <a
                href="https://github.com/bnaluz"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={styles.iconBtn}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.39-3.87-1.39-.52-1.31-1.27-1.66-1.27-1.66-1.04-.7.08-.68.08-.68 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.17.93-.26 1.93-.39 2.93-.39 1 0 2 .13 2.93.39 2.22-1.48 3.2-1.17 3.2-1.17.63 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.07 0 4.4-2.7 5.37-5.26 5.65.41.35.78 1.05.78 2.12v3.15c0 .31.2.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
                </svg>
              </a>
              <a
                href="mailto:bnaluz9@gmail.com"
                aria-label="Email"
                className={styles.iconBtn}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className={styles.formContainer}>
          <form ref={form} onSubmit={sendEmail}>
            <div className={styles.formGrid}>
              {/* Name */}
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                />
                {formErrors.name && (
                  <p className={styles.errorText}>{formErrors.name}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className={styles.formGroup}>
                <label htmlFor="phoneNumber" className={styles.label}>
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className={styles.input}
                />
                {formErrors.phoneNumber && (
                  <p className={styles.errorText}>{formErrors.phoneNumber}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
              />
              {formErrors.email && (
                <p className={styles.errorText}>{formErrors.email}</p>
              )}
            </div>

            {/* Subject */}
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={styles.input}
              />
              {formErrors.subject && (
                <p className={styles.errorText}>{formErrors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={10}
                className={styles.textarea}
              />
              {formErrors.message && (
                <p className={styles.errorText}>{formErrors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submissionMessage && (
              <p
                className={`${styles.submissionMessage} ${
                  submissionMessage.includes('successfully')
                    ? styles.success
                    : styles.error
                }`}
              >
                {submissionMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Back to Top */}
      <div className={styles.backToTop}>
        <Link href="#hero" aria-label="Back to Top">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z" />
            <path d="M12 17V7m-4 4 4-4 4 4" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
