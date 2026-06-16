# Portfolio Frontend

🔗 Live: [beyefendisinemaci.xyz/url-shortener](https://beyefendisinemaci.xyz/url-shortener)  
🔗 Backend: [github.com/aliekinayhan/portfolio-backend](https://github.com/aliekinayhan/portfolio-backend)

React frontend for the portfolio backend. Currently includes a URL Shortener service.

## Tech Stack

- React, Vite
- JavaScript, HTML, CSS
- Deployed on AWS S3 + CloudFront

## CI/CD

Push to `main` triggers GitHub Actions:

1. npm build
2. Sync build output to AWS S3
3. Invalidate CloudFront cache
