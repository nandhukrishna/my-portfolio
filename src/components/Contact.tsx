import React, { useState } from 'react';
import '../assets/styles/Contact.scss';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isNameEmpty = name.trim() === '';
    const isMessageEmpty = message.trim() === '';

    setNameError(isNameEmpty);
    setMessageError(isMessageEmpty);

    // Don't continue if fields are empty
    if (isNameEmpty || isMessageEmpty) {
      return;
    }

    // Your WhatsApp number
    // Country code + number, without + or spaces
    const phoneNumber = '919390358514';

    // Message you will receive on WhatsApp
    const whatsappMessage = `Hello Nandhu Krishna,

You received a new message from your portfolio website.

Name: ${name}

Message:
${message}`;

    // Encode the complete message
    const whatsappUrl =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Clear form
    setName('');
    setMessage('');
    setNameError(false);
    setMessageError(false);
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">

          <h1>Contact Me</h1>

          <p>
            Got a project waiting to be realized? Let's collaborate and make it happen!
          </p>

          <Box
            component="form"
            onSubmit={sendWhatsApp}
            noValidate
            autoComplete="off"
            className="contact-form"
          >

            {/* NAME */}
            <TextField
              required
              fullWidth
              id="name"
              label="Your Name"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
              helperText={
                nameError ? 'Please enter your name' : ''
              }
            />

            {/* MESSAGE */}
            <TextField
              className="body-form"
              required
              fullWidth
              id="message"
              label="Message"
              placeholder="Tell me about your project..."
              multiline
              minRows={4}
              maxRows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={
                messageError ? 'Please enter your message' : ''
              }
            />

            {/* WHATSAPP BUTTON */}
            <Button
              type="submit"
              variant="contained"
              startIcon={<WhatsAppIcon />}
            >
              Send on WhatsApp
            </Button>

          </Box>

        </div>
      </div>
    </div>
  );
}

export default Contact;