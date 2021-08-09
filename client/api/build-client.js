import axios from 'axios';

// When there is an incoming request with headers
// Logic to build an instance of axios that works on the current environment
export default ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseUrl: '/',
    });
  }
};