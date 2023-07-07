import './style.css'
import qrimg from './images/image-qr-code.png'

document.querySelector('#app').innerHTML = `
  <img src="${qrimg}" alt="QR Image">
  <h3>Improve your front-end skills by building projects</h3>
  <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
`
