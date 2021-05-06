const URLAPI ={
  URL: 'https://api-central-de-erros-java.herokuapp.com/',
  GETTOKEN: (email, password) =>
    `oauth/token?grant_type=password&username=${email}&password=${password}`,
  USER: '/user',
  EVENTS: '/events',
  EVENTS_ID: (id) => `/events/${id}`,
  EVENTS_LEVEL_COUNT_QUANTITY: (level) => `/events/level/count/${level}`,
  EVENTS_DATE: (date) => `/events/date/${date}`,
  EVENTS_LEVEL: (level) => `/events/level/${level}`,
  EVENTS_LOG: (log) => `/events/log/${log}`,
  EVENTS_ORIGIN: (origin) => `/events/origin/${origin}	`,
  USER_ID: (id) => `/user/${id}`,

}

export default URLAPI;