import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID pqLWOh1PHoi-wvHG1FUDpfh0aYFerNUT1mNIAyyL_t0"
  }
})

// Access key
// pqLWOh1PHoi-wvHG1FUDpfh0aYFerNUT1mNIAyyL_t0

// Secret key
// T0xolYV-3pN9ILY2ZY6Qb98ooT2CL29JzKytOCJSrZU