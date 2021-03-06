import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'https://fe-interview-api.unnotech.com'

// create axios instance to manage API
export const apiHelper = axios.create({
  baseURL
})

// setting sweetalert for creating alert message
export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})